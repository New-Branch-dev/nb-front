export const LEARNING_GOALS_STEPS = [
  {
    step: 1,
    title: "자료수집",
    href: "/learning-goals/note-creation",
  },
  {
    step: 2,
    title: "목표설정",
    href: "/learning-goals/goal-setting",
  },
  {
    step: 3,
    title: "암기설정",
    href: "/learning-goals/memorization",
  },
  {
    step: 4,
    title: "인출설정",
    href: "/learning-goals/retrieval",
  },
  {
    step: 5,
    title: "기타학습설정",
    href: "/learning-goals/other-learning",
  },
  {
    step: 6,
    title: "등록",
    href: "/learning-goals/register",
  },
] as const;

export type LearningGoalsStep = (typeof LEARNING_GOALS_STEPS)[number];
