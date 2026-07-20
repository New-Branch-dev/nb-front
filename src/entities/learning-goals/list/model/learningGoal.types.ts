export type LearningGoalStatus =
  | "notStarted"
  | "inProgress"
  | "imminent"
  | "completed";

export type LearningGoalsListSortKey = "latest" | "oldest" | "deadline";

export type LearningGoalByDayStudyTime = {
  id: number;
  dayOfWeek: number;
  availableMinutes: number;
};

export type LearningGoalItem = {
  id: string;
  category: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  startAt: string;
  deadlineAt: string;
  targetScore: number;
  maxScore: number;
  methodList: string[];
  hasAiStudyPlan: boolean;
  byDayStudyTimeList: LearningGoalByDayStudyTime[];
  excludeDateList: string[];
  periodStart: string;
  periodEnd: string;
};
