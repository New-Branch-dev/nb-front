import { MY_LEARNING_STEPS } from "./consts";

export type MyLearningStepSlug = (typeof MY_LEARNING_STEPS)[number]["slug"];

export const isMyLearningStepSlug = (
  value: string,
): value is MyLearningStepSlug =>
  MY_LEARNING_STEPS.some((step) => step.slug === value);

export const getStepBySlug = (slug: MyLearningStepSlug) => {
  const step = MY_LEARNING_STEPS.find((item) => item.slug === slug);

  if (!step) {
    throw new Error(`Unknown my-learning step slug: ${String(slug)}`);
  }

  return step;
};
