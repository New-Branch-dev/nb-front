import { fetchApi } from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

import { convertLearningGoalItem } from "@entities/learning-goals/api/convert-learning-goal-response";
import type { LearningGoalDto } from "@entities/learning-goals/api/learning-goal.dto";
import type { LearningGoalItem } from "@entities/learning-goals/list/model/learningGoal.types";

type LearningGoalsListResponse = LearningGoalDto[] | {
  goalList?: LearningGoalDto[];
  goals?: LearningGoalDto[];
  content?: LearningGoalDto[];
};

const convertLearningGoalsResponseToList = (
  response: LearningGoalsListResponse,
) => {
  if (Array.isArray(response)) {
    return response;
  }

  return response.goalList ?? response.goals ?? response.content ?? [];
};

export const fetchLearningGoals = async (): Promise<LearningGoalItem[]> => {
  const response = await fetchApi<LearningGoalsListResponse>(
    API_ENDPOINT.learningGoals.list,
  );

  return convertLearningGoalsResponseToList(response).map(convertLearningGoalItem);
};
