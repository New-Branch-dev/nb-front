import { LEARNING_GOALS_STEPS } from "./consts";

export type LearningGoalsStepSlug = (typeof LEARNING_GOALS_STEPS)[number]["slug"];

export const isLearningGoalsStepSlug = (
  value: string,
): value is LearningGoalsStepSlug =>
  LEARNING_GOALS_STEPS.some((item) => item.slug === value);

export const getStepBySlug = (slug: LearningGoalsStepSlug) => {
  const step = LEARNING_GOALS_STEPS.find((item) => item.slug === slug);

  if (!step) {
    throw new Error(`Unknown learning-goals step slug: ${String(slug)}`);
  }

  return step;
};
