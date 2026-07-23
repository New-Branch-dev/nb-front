"use client";

import { type ChangeEvent, type DragEvent, useRef, useState } from "react";
import { useShallow } from "zustand/react/shallow";

import { getApiErrorMessage } from "@shared/api";

import {
  deleteLearningGoalAttachment,
  deleteLearningGoalAttachmentList,
} from "@features/learning-goals/api/create-learning-goal-attachment";
import { useLearningGoalsStore } from "@features/learning-goals/model/use-learning-goals-store";
import { filterAllowedNoteFileList } from "@features/learning-goals/note-creation/lib/note-file-upload";
import {
  convertFilesToUploadedNoteFileList,
  createUploadedNoteFileKey,
} from "@features/learning-goals/note-creation/lib/uploaded-note-file";
import { NoteCreationView } from "@features/learning-goals/note-creation/ui/note-creation-view";

export const NoteCreation = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    uploadedFileList,
    appendUploadedFiles,
    deleteUploadedFile,
    deleteUploadedFileList,
    directText,
    isUploadingAttachments,
    setNoteDirectText,
  } = useLearningGoalsStore(
    useShallow((state) => ({
      uploadedFileList: state.noteCreation.uploadedFileList,
      directText: state.noteCreation.directText,
      isUploadingAttachments: state.isUploadingAttachments,
      appendUploadedFiles: state.appendUploadedFiles,
      deleteUploadedFile: state.deleteUploadedFile,
      deleteUploadedFileList: state.deleteUploadedFileList,
      setNoteDirectText: state.setNoteDirectText,
    })),
  );
  const [isDragging, setIsDragging] = useState(false);

  const appendFiles = (fileList: FileList | File[]) => {
    const allowedFileList = filterAllowedNoteFileList(fileList);
    const uploadedFileKeySet = new Set(
      uploadedFileList.map(createUploadedNoteFileKey),
    );
    const nextFileList = allowedFileList.filter(
      (file) => !uploadedFileKeySet.has(createUploadedNoteFileKey(file)),
    );

    if (nextFileList.length === 0) {
      return;
    }

    appendUploadedFiles(convertFilesToUploadedNoteFileList(nextFileList));
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteAll = async () => {
    const { deletedAttachmentIdList, failedAttachmentIdList } =
      await deleteLearningGoalAttachmentList(
        uploadedFileList.flatMap(({ attachmentId }) =>
          attachmentId === null ? [] : [attachmentId],
        ),
      );
    const deletedAttachmentIdSet = new Set(deletedAttachmentIdList);
    const deletedFileIdList = uploadedFileList
      .filter(
        ({ attachmentId }) =>
          attachmentId === null || deletedAttachmentIdSet.has(attachmentId),
      )
      .map(({ id }) => id);

    deleteUploadedFileList(deletedFileIdList);

    if (failedAttachmentIdList.length > 0) {
      alert("일부 학습 자료를 삭제하지 못했습니다. 다시 시도해주세요.");
    }
  };

  const handleRemoveFile = async (fileId: string) => {
    const targetFile = uploadedFileList.find((file) => file.id === fileId);

    if (!targetFile) {
      return;
    }

    try {
      if (targetFile.attachmentId !== null) {
        await deleteLearningGoalAttachment(targetFile.attachmentId);
      }

      deleteUploadedFile(fileId);
    } catch (error) {
      alert(getApiErrorMessage(error, "학습 자료 삭제에 실패했습니다."));
    }
  };

  const handleDirectTextChange = (value: string) => {
    setNoteDirectText(value);
  };

  const handleOpenFile = (fileId: string) => {
    const targetFile = uploadedFileList.find((file) => file.id === fileId);

    if (!targetFile) {
      return;
    }

    if (targetFile.fileUrl) {
      window.open(targetFile.fileUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (targetFile.file) {
      const objectUrl = URL.createObjectURL(targetFile.file);
      window.open(objectUrl, "_blank", "noopener,noreferrer");
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1_000);
      return;
    }

    if (targetFile.content) {
      const objectUrl = URL.createObjectURL(
        new Blob([targetFile.content], { type: "text/plain;charset=utf-8" }),
      );
      window.open(objectUrl, "_blank", "noopener,noreferrer");
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1_000);
    }
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      appendFiles(event.target.files);
    }

    event.target.value = "";
  };

  const handleDropzoneDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDropzoneDragLeave = () => {
    setIsDragging(false);
  };

  const handleDropzoneDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    if (event.dataTransfer.files.length > 0) {
      appendFiles(event.dataTransfer.files);
    }
  };

  return (
    <NoteCreationView
      fileInputRef={fileInputRef}
      uploadedFileList={uploadedFileList}
      directText={directText}
      isDragging={isDragging}
      isUploading={isUploadingAttachments}
      onUploadClick={handleUploadClick}
      onDeleteAll={handleDeleteAll}
      onRemoveFile={handleRemoveFile}
      onOpenFile={handleOpenFile}
      onDirectTextChange={handleDirectTextChange}
      onFileInputChange={handleFileInputChange}
      onDropzoneDragOver={handleDropzoneDragOver}
      onDropzoneDragLeave={handleDropzoneDragLeave}
      onDropzoneDrop={handleDropzoneDrop}
    />
  );
};
