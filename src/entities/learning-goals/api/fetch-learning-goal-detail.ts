import { fetchApi } from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

import { convertLearningGoalDetail } from "@entities/learning-goals/api/convert-learning-goal-response";
import type { LearningGoalDto } from "@entities/learning-goals/api/learning-goal.dto";
import type { LearningGoalDetail } from "@entities/learning-goals/detail/model/learning-goal-detail.types";

export const fetchLearningGoalDetail = async (
  goalId: string,
): Promise<LearningGoalDetail> => {
  const response = await fetchApi<LearningGoalDto>(
    API_ENDPOINT.learningGoals.detail(goalId),
  );

  return convertLearningGoalDetail(response);
};
