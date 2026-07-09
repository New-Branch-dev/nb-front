import type { LearningGoalItem } from "@entities/learning-goals/list/model/learningGoal.types";

export type LearningGoalDetailFile = {
  id: string;
  iconSrc: string;
  name: string;
};

export type LearningGoalDetailChipGroup = {
  label: string;
  valueList: string[];
};

export type LearningGoalDetail = LearningGoalItem & {
  headerIconSrc: string;
  weeklyTargetHour: number;
  noteFileList: LearningGoalDetailFile[];
  condensedNoteList: LearningGoalDetailFile[];
  goalChipList: string[];
  periodInfoList: LearningGoalDetailChipGroup[];
};
