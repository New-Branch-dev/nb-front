/** 폼 훅 구조가 바뀌면 올려 스텝 패널을 새로 마운트합니다 (HMR 시 Rules of Hooks 방지). */
export const MY_LEARNING_STEP_CONTENT_INSTANCE_KEY = 2;

export const MY_LEARNING_STEPS = [
  { step: 1, slug: "profile", title: "프로필" },
  { step: 2, slug: "learning-pattern", title: "학습 특성" },
  { step: 3, slug: "preferred-learning-time", title: "선호 학습 시간" },
  { step: 4, slug: "learning-preferences", title: "선호 학습 유형" },
  { step: 5, slug: "preferred-learning-partner", title: "선호 학습 파트너" },
  { step: 6, slug: "register", title: "등록" },
] as const;

export const STEP_ITEMS = MY_LEARNING_STEPS.map(({ title }) => ({ title }));
