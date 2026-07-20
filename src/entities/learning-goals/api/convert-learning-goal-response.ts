import {
  convertCommonCodeValueListToLabelList,
  convertCommonCodeValueToLabel,
} from "@shared/config";

import type {
  LearningGoalChipGroupDto,
  LearningGoalDto,
  LearningGoalFileDto,
} from "@entities/learning-goals/api/learning-goal.dto";
import type {
  LearningGoalDetail,
  LearningGoalDetailChipGroup,
  LearningGoalDetailFile,
} from "@entities/learning-goals/detail/model/learning-goal-detail.types";
import { getLearningGoalThumbnail } from "@entities/learning-goals/list/lib/getLearningGoalThumbnail";
import type { LearningGoalItem } from "@entities/learning-goals/list/model/learningGoal.types";

const DEFAULT_SCORE = 0;

const DAY_LABEL_BY_WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

const convertToString = (value: string | number | undefined) =>
  value === undefined ? "" : String(value);

const convertToNumber = (value: string | number | undefined) => {
  if (value === undefined || value === "") {
    return DEFAULT_SCORE;
  }

  const numericValue = Number(value);

  return Number.isNaN(numericValue) ? DEFAULT_SCORE : numericValue;
};

const convertDateLabel = (dateValue: string | undefined) => {
  if (!dateValue) {
    return "";
  }

  return dateValue.replaceAll("-", ".");
};

const convertLearningGoalId = (goal: LearningGoalDto) =>
  convertToString(goal.lgId ?? goal.id ?? goal.goalId ?? goal.learningGoalId);

const convertLearningGoalCategory = (goal: LearningGoalDto) => {
  const category =
    goal.purpose ?? goal.category ?? goal.learningPurpose ?? goal.learningPurposes?.[0] ?? "";

  return convertCommonCodeValueToLabel("LEARNING_PURPOSE_CD", category);
};

const convertLearningMethodList = (goal: LearningGoalDto) =>
  convertCommonCodeValueListToLabelList("LEARNING_METHOD_CD", goal.methods ?? []);

const convertStudyMinutesToHourLabel = (minutes: number) => {
  const hour = minutes / 60;

  if (Number.isInteger(hour)) {
    return `${hour}시간`;
  }

  return `${Number(hour.toFixed(1))}시간`;
};

const convertWeeklyTargetHour = (goal: LearningGoalDto) => {
  if (goal.weeklyTargetHour !== undefined) {
    return convertToNumber(goal.weeklyTargetHour);
  }

  const totalMinutes = (goal.byDayStudyTimes ?? []).reduce(
    (totalMinute, studyTime) => totalMinute + studyTime.availableMinutes,
    0,
  );

  return Number((totalMinutes / 60).toFixed(1));
};

const convertStudyTimeLabelList = (goal: LearningGoalDto) =>
  (goal.byDayStudyTimes ?? []).flatMap((studyTime) => {
    const dayLabel = DAY_LABEL_BY_WEEKDAY[studyTime.dayOfWeek];

    if (!dayLabel) {
      return [];
    }

    return `${dayLabel} ${convertStudyMinutesToHourLabel(studyTime.availableMinutes)}`;
  });

const convertPeriodInfoList = (
  goal: LearningGoalDto,
  item: LearningGoalItem,
  weeklyTargetHour: number,
): LearningGoalDetailChipGroup[] => {
  if (goal.periodInfoList) {
    return goal.periodInfoList.map(convertLearningGoalChipGroup);
  }

  const periodInfoList: LearningGoalDetailChipGroup[] = [
    {
      label: "학습기간",
      valueList: [`${item.periodStart} - ${item.periodEnd}`],
    },
  ];

  if (item.excludeDateList.length > 0) {
    periodInfoList.push({
      label: "학습제외일",
      valueList: [
        `총 ${item.excludeDateList.length}일 제외`,
        ...item.excludeDateList.map(convertDateLabel),
      ],
    });
  }

  const studyTimeLabelList = convertStudyTimeLabelList(goal);

  if (studyTimeLabelList.length > 0) {
    periodInfoList.push({
      label: "공부시간",
      valueList: [`주 ${weeklyTargetHour}시간 목표`, ...studyTimeLabelList],
    });
  }

  return periodInfoList;
};

const convertLearningGoalFile = (
  file: LearningGoalFileDto,
  index: number,
): LearningGoalDetailFile => ({
  id: convertToString(file.id) || `file-${index}`,
  iconSrc: file.iconSrc ?? "/learning-goals/text.svg",
  name: file.name ?? file.fileName ?? file.originalFileName ?? "",
});

const convertLearningGoalChipGroup = (
  group: LearningGoalChipGroupDto,
): LearningGoalDetailChipGroup => ({
  label: group.label ?? "",
  valueList: group.valueList ?? group.values ?? [],
});

export const convertLearningGoalItem = (
  goal: LearningGoalDto,
): LearningGoalItem => {
  const startAt = goal.startAt ?? goal.startDate ?? "";
  const deadlineAt = goal.deadlineAt ?? goal.endDate ?? "";

  return {
    id: convertLearningGoalId(goal),
    category: convertLearningGoalCategory(goal),
    title: goal.title ?? "",
    createdAt: goal.createdAt ?? "",
    updatedAt: goal.updatedAt ?? "",
    startAt,
    deadlineAt,
    targetScore: convertToNumber(goal.targetScore),
    maxScore: convertToNumber(goal.maxScore),
    methodList: convertLearningMethodList(goal),
    hasAiStudyPlan: goal.hasAiStudyPlan ?? false,
    byDayStudyTimeList: (goal.byDayStudyTimes ?? []).map((studyTime) => ({
      id: studyTime.bstId,
      dayOfWeek: studyTime.dayOfWeek,
      availableMinutes: studyTime.availableMinutes,
    })),
    excludeDateList: goal.excludeDates ?? [],
    periodStart: goal.periodStart ?? convertDateLabel(startAt),
    periodEnd: goal.periodEnd ?? convertDateLabel(deadlineAt),
  };
};

export const convertLearningGoalDetail = (
  goal: LearningGoalDto,
): LearningGoalDetail => {
  const item = convertLearningGoalItem(goal);
  const category = item.category;
  const noteFileList = goal.noteFileList ?? goal.files ?? [];
  const weeklyTargetHour = convertWeeklyTargetHour(goal);

  return {
    ...item,
    headerIconSrc: goal.headerIconSrc ?? getLearningGoalThumbnail(category),
    weeklyTargetHour,
    noteFileList: noteFileList.map(convertLearningGoalFile),
    condensedNoteList: (goal.condensedNoteList ?? []).map(convertLearningGoalFile),
    goalChipList: goal.goalChipList ?? [
      item.title,
      category,
      `${item.targetScore}점 목표`,
      ...item.methodList,
    ].filter(Boolean),
    periodInfoList: convertPeriodInfoList(goal, item, weeklyTargetHour),
  };
};
