import { deleteApi, getApiErrorMessage, logApiError } from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

export const deleteLearningGoal = async (goalId: string) => {
  try {
    await deleteApi(API_ENDPOINT.learningGoals.delete(goalId));
  } catch (error) {
    logApiError(error, "학습 목표 삭제 실패");

    throw new Error(
      getApiErrorMessage(error, "학습 목표 삭제에 실패했습니다."),
    );
  }
};
