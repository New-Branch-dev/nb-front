export const LEARNING_GOALS_EDIT_STEPS = {
  noteCreation: {
    title: "학습 자료",
    step: 1,
  },
  goalSetting: {
    title: "학습 목표",
    step: 2,
  },
} as const;

export type LearningGoalsEditStepKey = keyof typeof LEARNING_GOALS_EDIT_STEPS;
