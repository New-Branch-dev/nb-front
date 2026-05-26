import type { LearningGoalColorTheme } from "../model/learningGoal.types";

const COLOR_THEME_OPTIONS: readonly LearningGoalColorTheme[] = [
  "primary",
  "blue",
  "orange",
  "green",
];

/**
 * 카드 id에 기반해 4가지 테마를 결정합니다.
 * SSR/CSR이 동일한 결과를 내도록 deterministic hash를 사용합니다.
 */
export const getLearningGoalColorTheme = (id: string): LearningGoalColorTheme => {
  let hash = 0;
  for (let index = 0; index < id.length; index += 1) {
    hash = (hash * 31 + id.charCodeAt(index)) >>> 0;
  }

  return COLOR_THEME_OPTIONS[hash % COLOR_THEME_OPTIONS.length];
};
