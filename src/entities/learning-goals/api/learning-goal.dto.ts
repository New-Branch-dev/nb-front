export type LearningGoalFileDto = {
  id?: string | number;
  iconSrc?: string;
  name?: string;
  fileName?: string;
  originalFileName?: string;
  type?: string;
};

export type LearningGoalChipGroupDto = {
  label?: string;
  valueList?: string[];
  values?: string[];
};

export type LearningGoalByDayStudyTimeDto = {
  bstId: number;
  dayOfWeek: number;
  availableMinutes: number;
};

export type LearningGoalDto = {
  lgId?: string | number;
  id?: string | number;
  goalId?: string | number;
  learningGoalId?: string | number;
  category?: string;
  purpose?: string;
  learningPurpose?: string;
  learningPurposes?: string[];
  title?: string;
  createdAt?: string;
  updatedAt?: string;
  startAt?: string;
  startDate?: string;
  deadlineAt?: string;
  endDate?: string;
  targetScore?: number | string;
  maxScore?: number | string;
  methods?: string[];
  hasAiStudyPlan?: boolean;
  byDayStudyTimes?: LearningGoalByDayStudyTimeDto[];
  excludeDates?: string[];
  periodStart?: string;
  periodEnd?: string;
  headerIconSrc?: string;
  weeklyTargetHour?: number | string;
  noteFileList?: LearningGoalFileDto[];
  files?: LearningGoalFileDto[];
  condensedNoteList?: LearningGoalFileDto[];
  goalChipList?: string[];
  periodInfoList?: LearningGoalChipGroupDto[];
};
