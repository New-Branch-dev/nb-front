import type { WeekdayLabel } from "../../goal-setting/model/consts";

export type LearningGoalsNoteItem = {
  id: string;
  title: string;
  subtitle?: string;
};

export type LearningGoalsGoalSettingDraft = {
  purposeLabels: string[];
  targetScore: string;
  maxScore: string;
  startDate: Date | null;
  endDate: Date | null;
  weeklyHours: Record<WeekdayLabel, string>;
  methodLabels: string[];
};

export type LearningGoalsPeriodSettingsDraft = {
  startDate: Date | null;
  endDate: Date | null;
  reviewCount: string;
  methodLabels: string[];
};

export type LearningGoalsDraft = {
  notes: LearningGoalsNoteItem[];
  goalSetting: LearningGoalsGoalSettingDraft | null;
  memorization: LearningGoalsPeriodSettingsDraft | null;
  retrieval: LearningGoalsPeriodSettingsDraft | null;
  otherLearning: LearningGoalsPeriodSettingsDraft | null;
};

export const createEmptyLearningGoalsDraft = (): LearningGoalsDraft => ({
  notes: [],
  goalSetting: null,
  memorization: null,
  retrieval: null,
  otherLearning: null,
});
