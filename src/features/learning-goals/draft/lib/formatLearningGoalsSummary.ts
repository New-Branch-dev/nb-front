import { WEEKDAY_LABELS, type WeekdayLabel } from "../../goal-setting/model/consts";
import type {
  LearningGoalsGoalSettingDraft,
  LearningGoalsPeriodSettingsDraft,
} from "../model/learningGoalsDraft.types";

const formatDatePart = (date: Date): string => {
  const year = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());

  return `${year}.${month}.${day}`;
};

export const formatDateRangeLabel = (
  startDate: Date | null,
  endDate: Date | null,
): string | null => {
  if (!startDate || !endDate) {
    return null;
  }

  return `${formatDatePart(startDate)} - ${formatDatePart(endDate)}.`;
};

export const formatScoreLabel = (targetScore: string, maxScore: string): string | null => {
  if (!targetScore || !maxScore) {
    return null;
  }

  return `${targetScore}/${maxScore}점`;
};

export const formatReviewCountLabel = (reviewCount: string): string | null => {
  if (!reviewCount) {
    return null;
  }

  return `${reviewCount}회독`;
};

export const formatWeeklyHoursLabel = (
  weeklyHours: Record<WeekdayLabel, string>,
): string | null => {
  const parts = WEEKDAY_LABELS.filter((day) => weeklyHours[day] !== "").map(
    (day) => `${day} ${weeklyHours[day]}시간`,
  );

  if (parts.length === 0) {
    return null;
  }

  return parts.join(" · ");
};

export const formatMethodLabelsChip = (methodLabels: string[]): string | null => {
  if (methodLabels.length === 0) {
    return null;
  }

  return methodLabels.join(" · ");
};

export const buildGoalSettingChipRows = (
  goalSetting: LearningGoalsGoalSettingDraft | null,
): string[][] => {
  if (!goalSetting) {
    return [];
  }

  const firstRow = [
    ...goalSetting.purposeLabels,
    formatScoreLabel(goalSetting.targetScore, goalSetting.maxScore),
    formatDateRangeLabel(goalSetting.startDate, goalSetting.endDate),
  ].filter((value): value is string => Boolean(value));

  const secondRow = [
    formatWeeklyHoursLabel(goalSetting.weeklyHours),
    formatMethodLabelsChip(goalSetting.methodLabels),
  ].filter((value): value is string => Boolean(value));

  return [firstRow, secondRow].filter((row) => row.length > 0);
};

export const buildPeriodSettingsChips = (
  settings: LearningGoalsPeriodSettingsDraft | null,
): string[] => {
  if (!settings) {
    return [];
  }

  return [
    formatDateRangeLabel(settings.startDate, settings.endDate),
    formatReviewCountLabel(settings.reviewCount),
    formatMethodLabelsChip(settings.methodLabels),
  ].filter((value): value is string => Boolean(value));
};

export const collectMethodLabels = (
  selectedMethods: string[],
  methodDirectText: string,
): string[] => {
  const labels = [...selectedMethods];

  if (methodDirectText.trim()) {
    labels.push(methodDirectText.trim());
  }

  return labels;
};

export const collectPurposeLabels = (
  purposeSelections: string[],
  purposeDirectText: string,
): string[] => {
  const labels = [...purposeSelections];

  if (purposeDirectText.trim()) {
    labels.push(purposeDirectText.trim());
  }

  return labels;
};
