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

export const WEEKDAY_LABELS = ["월", "화", "수", "목", "금", "토", "일"] as const;

export type WeekdayLabel = (typeof WEEKDAY_LABELS)[number];
