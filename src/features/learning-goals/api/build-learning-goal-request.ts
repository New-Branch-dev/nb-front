import { convertCommonCodeLabelListToValueList } from "@shared/config";

import type {
  LearningGoalsFormState,
  WeeklyStudyHours,
} from "@features/learning-goals/model/store.types";

type ByDayStudyTimeEntry = {
  dayOfWeek: number;
  availableMinutes: number;
};

export type LearningGoalRequestBody = {
  attachmentIds: number[];
  title: string;
  purpose: string;
  targetScore: number;
  maxScore: number;
  startDate: string;
  endDate: string;
  methods: string[];
  byDayStudyTimes: ByDayStudyTimeEntry[];
  excludeDates: string[];
};

const WEEKDAY_FIELD_ENTRIES: {
  field: keyof WeeklyStudyHours;
  dayOfWeek: number;
}[] = [
  { field: "sunday", dayOfWeek: 0 },
  { field: "monday", dayOfWeek: 1 },
  { field: "tuesday", dayOfWeek: 2 },
  { field: "wednesday", dayOfWeek: 3 },
  { field: "thursday", dayOfWeek: 4 },
  { field: "friday", dayOfWeek: 5 },
  { field: "saturday", dayOfWeek: 6 },
];

const convertNumberInput = (value: string) => {
  if (!value) {
    return 0;
  }

  const numericValue = Number(value);

  return Number.isNaN(numericValue) ? 0 : numericValue;
};

const convertSelectedCodeListToRequestValue = (
  codeGroupId: Parameters<typeof convertCommonCodeLabelListToValueList>[0],
  selectedValueList: string[],
) =>
  convertCommonCodeLabelListToValueList(codeGroupId, selectedValueList).join(
    ",",
  );

const convertSelectedCodeListToRequestValueList = (
  codeGroupId: Parameters<typeof convertCommonCodeLabelListToValueList>[0],
  selectedValueList: string[],
) => convertCommonCodeLabelListToValueList(codeGroupId, selectedValueList);

const convertByDayStudyTimeList = (
  weeklyStudyHours: WeeklyStudyHours,
): LearningGoalRequestBody["byDayStudyTimes"] =>
  WEEKDAY_FIELD_ENTRIES.flatMap(({ field, dayOfWeek }) => {
    const hour = convertNumberInput(weeklyStudyHours[field]);

    if (hour <= 0) {
      return [];
    }

    return [
      {
        dayOfWeek,
        availableMinutes: hour * 60,
      },
    ];
  });

export const buildLearningGoalRequestBody = (
  {
    goalSetting,
  }: LearningGoalsFormState,
  attachmentIds: number[],
): LearningGoalRequestBody => ({
  attachmentIds,
  title: goalSetting.title,
  purpose: convertSelectedCodeListToRequestValue(
    "LEARNING_PURPOSE_CD",
    goalSetting.learningPurposes,
  ),
  targetScore: convertNumberInput(goalSetting.targetScore),
  maxScore: convertNumberInput(goalSetting.maxScore),
  startDate: goalSetting.startDate,
  endDate: goalSetting.endDate,
  methods: convertSelectedCodeListToRequestValueList(
    "LEARNING_METHOD_CD",
    goalSetting.learningMethods,
  ),
  byDayStudyTimes: convertByDayStudyTimeList(goalSetting.weeklyStudyHours),
  excludeDates: goalSetting.excludedDateList,
});
