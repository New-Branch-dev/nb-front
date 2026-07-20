import { fetchCommonCodeOptionList } from "@shared/config";
import { DIRECT_INPUT_CHIP_LABEL } from "@shared/ui";

import type { WeeklyStudyHourField } from "@features/learning-goals/model/store.types";

export const LEARNING_PURPOSE_ITEMS = [
  ...fetchCommonCodeOptionList("LEARNING_PURPOSE_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;

export const LEARNING_METHOD_ITEMS = [
  ...fetchCommonCodeOptionList("LEARNING_METHOD_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;

export const MAX_EXCLUDED_DATE_COUNT = 10;

export const WEEKDAY_FIELDS = [
  { label: "월", field: "monday" },
  { label: "화", field: "tuesday" },
  { label: "수", field: "wednesday" },
  { label: "목", field: "thursday" },
  { label: "금", field: "friday" },
  { label: "토", field: "saturday" },
  { label: "일", field: "sunday" },
] as const satisfies ReadonlyArray<{
  label: string;
  field: WeeklyStudyHourField;
}>;
