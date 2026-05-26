export type LearningGoalColorTheme = "primary" | "blue" | "orange" | "green";

export type LearningGoalStatus =
  | "notStarted"
  | "inProgress"
  | "imminent"
  | "completed";

export type LearningGoalItem = {
  id: string;
  category: string;
  title: string;
  targetScore: number;
  maxScore: number;
  periodStart: string;
  periodEnd: string;
  /** 0 ~ 100 */
  progress: number;
  dDay: number;
  status: LearningGoalStatus;
};
