export type LearningGoalStatus =
  | "notStarted"
  | "inProgress"
  | "imminent"
  | "completed";

export type LearningGoalsListSortKey = "latest" | "oldest" | "deadline";

export type LearningGoalItem = {
  id: string;
  category: string;
  title: string;
  createdAt: string;
  startAt: string;
  deadlineAt: string;
  targetScore: number;
  maxScore: number;
  periodStart: string;
  periodEnd: string;
};
