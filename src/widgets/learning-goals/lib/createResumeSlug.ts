import { LEARNING_GOALS_STEPS } from "../model/consts";
import {
  isLearningGoalsStepSlug,
  type LearningGoalsStepSlug,
} from "../model/slug";

const STORAGE_KEY = "learning-goals-last-create-slug";

const DEFAULT_SLUG = LEARNING_GOALS_STEPS[0].slug;

export const saveLastCreateSlug = (slug: LearningGoalsStepSlug): void => {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(STORAGE_KEY, slug);
};

export const readLastCreateSlug = (): LearningGoalsStepSlug => {
  if (typeof window === "undefined") {
    return DEFAULT_SLUG;
  }

  const stored = sessionStorage.getItem(STORAGE_KEY);

  if (stored === "note-preview") {
    return "goal-setting";
  }

  if (stored && isLearningGoalsStepSlug(stored)) {
    return stored;
  }

  return DEFAULT_SLUG;
};

export const buildLearningGoalsCreateHref = (
  slug?: LearningGoalsStepSlug,
): string => {
  const resolvedSlug = slug ?? readLastCreateSlug();

  return `/learning-goals/${resolvedSlug}`;
};
