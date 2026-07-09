import type { WeeklyStudyHourField } from "@features/learning-goals/model/store.types";

export const LEARNING_PURPOSE_ITEMS = [
  "시험 준비",
  "자격증 취득",
  "학점 관리",
  "자기 개발",
  "의무 교육",
  "진로 준비",
  "프로젝트 수행",
  "업무 역량 향상",
  "취미·교양 학습",
  "연구·탐구 활동",
  "직접입력",
] as const;

export const LEARNING_METHOD_ITEMS = [
  "이해 중심 학습",
  "암기 중심 학습",
  "구조화 학습",
  "간격 반복 학습",
  "인출 중심 학습",
  "오류 개선 학습",
  "실전 대비 학습",
  "표현·수행 학습",
  "탐구·프로젝트 학습",
  "자기관리 학습",
  "직접입력",
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
