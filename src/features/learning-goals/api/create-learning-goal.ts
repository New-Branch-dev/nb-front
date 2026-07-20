import { createApi, getApiErrorMessage, logApiError } from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

import {
  buildLearningGoalRequestBody,
  type LearningGoalRequestBody,
} from "@features/learning-goals/api/build-learning-goal-request";
import type { LearningGoalsFormState } from "@features/learning-goals/model/store.types";

type CreateLearningGoalResponse = {
  id?: string | number;
  goalId?: string | number;
  learningGoalId?: string | number;
};

type CreateNoteResponse = {
  id?: number;
};

const createLearningGoalStepError = (
  error: unknown,
  context: string,
  fallback: string,
) => {
  logApiError(error, context);

  return new Error(`${fallback}: ${getApiErrorMessage(error, "서버 요청에 실패했습니다.")}`);
};

const createDraftNote = async () => {
  try {
    const note = await createApi<CreateNoteResponse>(API_ENDPOINT.notes.create);

    if (!note.id) {
      throw new Error("노트 ID가 응답에 없습니다.");
    }

    return note.id;
  } catch (error) {
    throw createLearningGoalStepError(
      error,
      "학습 목표 생성 - 노트 생성 실패",
      "학습 자료 노트 생성에 실패했습니다",
    );
  }
};

const uploadNoteFileList = async (
  noteId: number,
  uploadedFileList: LearningGoalsFormState["noteCreation"]["uploadedFileList"],
) => {
  const fileList = uploadedFileList.flatMap((uploadedFile) =>
    uploadedFile.file ? [uploadedFile.file] : [],
  );

  if (fileList.length === 0) {
    return;
  }

  const formData = new FormData();

  fileList.forEach((file) => {
    formData.append("files", file);
  });

  try {
    await createApi(API_ENDPOINT.notes.uploadFiles(noteId), formData);
  } catch (error) {
    throw createLearningGoalStepError(
      error,
      "학습 목표 생성 - 파일 업로드 실패",
      "학습 자료 파일 업로드에 실패했습니다",
    );
  }
};

const saveNoteText = async (noteId: number, directText: string) => {
  const content = directText.trim();

  if (!content) {
    return;
  }

  try {
    await createApi(API_ENDPOINT.notes.saveText(noteId), {
      title: "직접 입력 자료",
      content,
    });
  } catch (error) {
    throw createLearningGoalStepError(
      error,
      "학습 목표 생성 - 텍스트 저장 실패",
      "직접 입력 자료 저장에 실패했습니다",
    );
  }
};

export const createLearningGoal = async (
  form: LearningGoalsFormState,
): Promise<CreateLearningGoalResponse> => {
  const noteId = await createDraftNote();

  await uploadNoteFileList(noteId, form.noteCreation.uploadedFileList);
  await saveNoteText(noteId, form.noteCreation.directText);

  try {
    return await createApi<CreateLearningGoalResponse, LearningGoalRequestBody>(
      API_ENDPOINT.learningGoals.create,
      buildLearningGoalRequestBody(form, [noteId]),
    );
  } catch (error) {
    throw createLearningGoalStepError(
      error,
      "학습 목표 생성 - 목표 생성 실패",
      "학습 목표 생성에 실패했습니다",
    );
  }
};
