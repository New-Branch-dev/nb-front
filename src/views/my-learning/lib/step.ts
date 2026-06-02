export const MY_LEARNING_STEPS = [
  { title: "프로필", href: "/my-learning/profile" },
  { title: "학습 특성", href: "/my-learning/learning-pattern" },
  { title: "선호 학습 시간", href: "/my-learning/preferred-learning-time" },
  { title: "선호 학습 유형", href: "/my-learning/learning-preferences" },
  {
    title: "선호 학습 파트너",
    href: "/my-learning/preferred-learning-partner",
  },
  { title: "등록", href: "/my-learning/register" },
] as const;

export type MyLearningStep = (typeof MY_LEARNING_STEPS)[number];
