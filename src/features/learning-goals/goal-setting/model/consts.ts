import type { WeeklyStudyHourField } from "@features/learning-goals/model/store.types";

export const LEARNING_PURPOSE_ITEMS = [
  "시험",
  "자격증",
  "학점",
  "자기계발",
  "의무교육",
  "직접입력",
] as const;

export const LEARNING_METHOD_ITEMS = [
  "능동적 복습",
  "스페이싱",
  "실전연습",
  "직접입력",
] as const;

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
