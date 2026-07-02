import type {
  LearningGoalItem,
  LearningGoalStatus,
} from "@entities/learning-goals/list/model/learningGoal.types";

type ConvertLearningGoalStatusParams = Pick<
  LearningGoalItem,
  "dDay" | "progress"
>;

export const convertLearningGoalStatus = ({
  dDay,
  progress,
}: ConvertLearningGoalStatusParams): LearningGoalStatus => {
  if (dDay <= 0) {
    return "completed";
  }

  if (progress <= 0) {
    return "notStarted";
  }

  if (dDay <= 7) {
    return "imminent";
  }

  return "inProgress";
};
