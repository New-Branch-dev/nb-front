import { getApiErrorMessage, logApiError, updateApi } from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

import {
  buildLearningGoalRequestBody,
  type LearningGoalRequestBody,
} from "@features/learning-goals/api/build-learning-goal-request";
import type { LearningGoalsFormState } from "@features/learning-goals/model/store.types";

type UpdateLearningGoalResponse = {
  id?: string | number;
  lgId?: string | number;
  goalId?: string | number;
  learningGoalId?: string | number;
};

export const updateLearningGoal = async (
  goalId: string,
  form: LearningGoalsFormState,
): Promise<UpdateLearningGoalResponse> => {
  try {
    return await updateApi<UpdateLearningGoalResponse, LearningGoalRequestBody>(
      API_ENDPOINT.learningGoals.update(goalId),
      buildLearningGoalRequestBody(form, []),
    );
  } catch (error) {
    logApiError(error, "학습 목표 수정 실패");

    throw new Error(
      getApiErrorMessage(error, "학습 목표 수정에 실패했습니다."),
    );
  }
};
