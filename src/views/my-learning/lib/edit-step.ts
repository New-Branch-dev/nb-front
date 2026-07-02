export const MY_LEARNING_EDIT_STEPS = {
  profile: {
    title: "프로필",
    step: 1,
  },
  learningStyle: {
    title: "학습 특성",
    step: 2,
  },
  preferredLearningType: {
    title: "학습 유형",
    step: 3,
  },
  preferredLearningPartner: {
    title: "선호 학습 파트너",
    step: 4,
  },
} as const;

export type MyLearningEditStepKey = keyof typeof MY_LEARNING_EDIT_STEPS;
