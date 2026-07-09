import { LEARNING_GOAL_DETAIL_MOCK } from "@entities/learning-goals/detail/model/learning-goal-detail.mock";
import { getLearningGoalThumbnail } from "@entities/learning-goals/list/lib/getLearningGoalThumbnail";
import { LEARNING_GOALS_MOCK } from "@entities/learning-goals/list/model/learningGoals.mock";

export const findLearningGoalDetailById = (goalId: string) => {
  const learningGoal = LEARNING_GOALS_MOCK.find((item) => item.id === goalId);

  if (learningGoal) {
    return {
      ...LEARNING_GOAL_DETAIL_MOCK,
      ...learningGoal,
      headerIconSrc: getLearningGoalThumbnail(learningGoal.category),
    };
  }

  return null;
};
