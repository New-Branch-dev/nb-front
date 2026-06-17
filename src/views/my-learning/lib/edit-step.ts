export const MY_LEARNING_EDIT_STEPS = {
  profile: {
    title: "프로필",
    step: 1,
  },
  learningStyle: {
    title: "학습 특성",
    step: 2,
  },
  preferredLearningTime: {
    title: "쉬는 날 설정",
    step: 3,
  },
  preferredLearningType: {
    title: "선호 학습 유형",
    step: 4,
  },
  preferredLearningPartner: {
    title: "선호 학습 파트너",
    step: 5,
  },
} as const;

export type MyLearningEditStepKey = keyof typeof MY_LEARNING_EDIT_STEPS;
