import { createApi, getApiErrorMessage, logApiError } from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

import {
  buildLearningGoalRequestBody,
  type LearningGoalRequestBody,
} from "@features/learning-goals/api/build-learning-goal-request";
import type { LearningGoalsFormState } from "@features/learning-goals/model/store.types";

type CreateLearningGoalResponse = {
  id?: string | number;
  lgId?: string | number;
  goalId?: string | number;
  learningGoalId?: string | number;
};

export const createLearningGoal = async (
  form: LearningGoalsFormState,
): Promise<CreateLearningGoalResponse> => {
  const attachmentIdList = [
    ...form.noteCreation.uploadedFileList.flatMap(({ attachmentId }) =>
      attachmentId === null ? [] : [attachmentId],
    ),
    ...(form.noteCreation.directTextAttachmentId
      ? [form.noteCreation.directTextAttachmentId]
      : []),
  ];

  try {
    return await createApi<CreateLearningGoalResponse, LearningGoalRequestBody>(
      API_ENDPOINT.learningGoals.create,
      buildLearningGoalRequestBody(form, attachmentIdList),
    );
  } catch (error) {
    logApiError(error, "학습 목표 생성 실패");

    throw new Error(
      `학습 목표 생성에 실패했습니다: ${getApiErrorMessage(
        error,
        "서버 요청에 실패했습니다.",
      )}`,
    );
  }
};
