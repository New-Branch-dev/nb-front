import {
  createApi,
  deleteApi,
  getApiErrorMessage,
  logApiError,
} from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

import type { UploadedNoteFile } from "@features/learning-goals/model/store.types";
import { checkIsTextNoteFile } from "@features/learning-goals/note-creation/lib/note-file-upload";
import {
  convertFileSizeToLabel,
  createUploadedNoteFileKey,
} from "@features/learning-goals/note-creation/lib/uploaded-note-file";

type AttachmentResponse = {
  attachmentId: number;
  fileName?: string;
  fileUrl?: string;
  title?: string;
  content?: string;
};

type DeleteAttachmentListResult = {
  deletedAttachmentIdList: number[];
  failedAttachmentIdList: number[];
};

const ATTACHMENT_UPLOAD_TIMEOUT = 120_000;

class LearningGoalAttachmentError extends Error {}

const createAttachmentError = (
  error: unknown,
  context: string,
  fallback: string,
) => {
  logApiError(error, context);

  return new LearningGoalAttachmentError(
    `${fallback}: ${getApiErrorMessage(error, "서버 요청에 실패했습니다.")}`,
  );
};

const createFileAttachmentList = async (
  fileList: File[],
): Promise<AttachmentResponse[]> => {
  if (fileList.length === 0) {
    return [];
  }

  const formData = new FormData();

  fileList.forEach((file) => {
    formData.append("files", file);
  });

  return createApi<AttachmentResponse[], FormData>(
    API_ENDPOINT.attachments.uploadFiles,
    formData,
    { timeout: ATTACHMENT_UPLOAD_TIMEOUT },
  );
};

export const createLearningGoalTextAttachment = async (
  title: string,
  rawContent: string,
): Promise<AttachmentResponse> => {
  const content = rawContent.trim();

  if (!content) {
    throw new Error(`${title}의 내용이 비어 있습니다.`);
  }

  try {
    return await createApi<
      AttachmentResponse,
      { title: string; content: string }
    >(API_ENDPOINT.attachments.saveText, { title, content });
  } catch (error) {
    throw createAttachmentError(
      error,
      "학습 목표 첨부 텍스트 저장 실패",
      "텍스트 자료 저장에 실패했습니다",
    );
  }
};

export const deleteLearningGoalAttachment = async (attachmentId: number) => {
  try {
    await deleteApi(API_ENDPOINT.attachments.delete(attachmentId));
  } catch (error) {
    throw createAttachmentError(
      error,
      "학습 목표 첨부 자료 삭제 실패",
      "학습 자료 삭제에 실패했습니다",
    );
  }
};

export const deleteLearningGoalAttachmentList = async (
  attachmentIdList: number[],
): Promise<DeleteAttachmentListResult> => {
  const deleteResultList = await Promise.allSettled(
    attachmentIdList.map((attachmentId) =>
      deleteLearningGoalAttachment(attachmentId),
    ),
  );

  return deleteResultList.reduce<DeleteAttachmentListResult>(
    (result, deleteResult, index) => {
      const attachmentId = attachmentIdList[index];
      const targetList =
        deleteResult.status === "fulfilled"
          ? result.deletedAttachmentIdList
          : result.failedAttachmentIdList;

      targetList.push(attachmentId);

      return result;
    },
    {
      deletedAttachmentIdList: [],
      failedAttachmentIdList: [],
    },
  );
};

const createLearningGoalFileAttachmentList = async (
  fileList: File[],
): Promise<UploadedNoteFile[]> => {
  const regularFileList = fileList.filter(
    (file) => !checkIsTextNoteFile(file.name),
  );
  const textFileList = fileList.filter((file) =>
    checkIsTextNoteFile(file.name),
  );
  const createdAttachmentIdList: number[] = [];

  try {
    const regularAttachmentList =
      await createFileAttachmentList(regularFileList);
    createdAttachmentIdList.push(
      ...regularAttachmentList.map(({ attachmentId }) => attachmentId),
    );

    const uploadedRegularFileList = regularFileList.map((file, index) => {
      const attachment = regularAttachmentList[index];

      if (!attachment) {
        throw new Error("업로드한 파일의 응답 정보가 부족합니다.");
      }

      return {
        id: String(attachment.attachmentId),
        attachmentId: attachment.attachmentId,
        name: attachment.fileName ?? file.name,
        size: file.size,
        lastModified: file.lastModified,
        sizeLabel: convertFileSizeToLabel(file.size),
        fileUrl: attachment.fileUrl,
      };
    });
    const uploadedTextFileList: UploadedNoteFile[] = [];

    for (const file of textFileList) {
      const content = await file.text();
      const attachment = await createLearningGoalTextAttachment(
        file.name,
        content,
      );
      createdAttachmentIdList.push(attachment.attachmentId);
      uploadedTextFileList.push({
        id: String(attachment.attachmentId),
        attachmentId: attachment.attachmentId,
        name: attachment.title ?? file.name,
        size: file.size,
        lastModified: file.lastModified,
        sizeLabel: convertFileSizeToLabel(file.size),
        content: attachment.content ?? content.trim(),
      });
    }

    return [...uploadedRegularFileList, ...uploadedTextFileList];
  } catch (error) {
    await deleteLearningGoalAttachmentList(createdAttachmentIdList);

    if (error instanceof LearningGoalAttachmentError) {
      throw error;
    }

    throw createAttachmentError(
      error,
      "학습 목표 첨부 파일 업로드 실패",
      "학습 자료 파일 업로드에 실패했습니다",
    );
  }
};

export const syncLearningGoalFileAttachmentList = async (
  uploadedFileList: UploadedNoteFile[],
): Promise<UploadedNoteFile[]> => {
  const pendingFileList = uploadedFileList.flatMap(({ attachmentId, file }) =>
    attachmentId === null && file ? [file] : [],
  );
  const hasMissingFile = uploadedFileList.some(
    ({ attachmentId, file }) => attachmentId === null && !file,
  );

  if (hasMissingFile) {
    throw new Error("업로드할 파일을 다시 선택해주세요.");
  }

  if (pendingFileList.length === 0) {
    return uploadedFileList;
  }

  const createdFileList =
    await createLearningGoalFileAttachmentList(pendingFileList);
  const createdFileMap = new Map(
    createdFileList.map((file) => [createUploadedNoteFileKey(file), file]),
  );

  return uploadedFileList.map((file) => {
    if (file.attachmentId !== null) {
      return file;
    }

    const createdFile = createdFileMap.get(createUploadedNoteFileKey(file));

    if (!createdFile) {
      throw new Error(`${file.name} 파일의 업로드 결과를 찾을 수 없습니다.`);
    }

    return createdFile;
  });
};
