"use client";

import { useSyncExternalStore } from "react";

import { buildLearningGoalsCreateHref } from "../lib/createResumeSlug";
import { LEARNING_GOALS_STEPS } from "../model/consts";
import type { LearningGoalsStepSlug } from "../model/slug";

const DEFAULT_CREATE_HREF = `/learning-goals/${LEARNING_GOALS_STEPS[0].slug}`;

const subscribe = () => () => {};

/**
 * sessionStorage 기반 resume slug는 클라이언트 스냅샷에서만 반영합니다.
 * 서버 스냅샷은 첫 스텝으로 고정해 hydration mismatch를 막습니다.
 */
export const useLearningGoalsCreateHref = (
  slug?: LearningGoalsStepSlug,
): string =>
  useSyncExternalStore(
    subscribe,
    () => buildLearningGoalsCreateHref(slug),
    () =>
      slug ? buildLearningGoalsCreateHref(slug) : DEFAULT_CREATE_HREF,
  );
