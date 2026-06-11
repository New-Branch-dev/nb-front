"use client";

import { usePathname } from "next/navigation";

import type { StepFlowNavigation } from "@widgets/learning-step-layout";

import { LEARNING_GOALS_STEPS } from "./step";

export const useLearningGoalsStepFlow = () => {
  const pathname = usePathname();
  const matchedStepIndex = LEARNING_GOALS_STEPS.findIndex(
    (step) => step.href === pathname,
  );
  const currentStepIndex = matchedStepIndex >= 0 ? matchedStepIndex : 0;
  const previousStep = LEARNING_GOALS_STEPS[currentStepIndex - 1];
  const nextStep = LEARNING_GOALS_STEPS[currentStepIndex + 1];

  const navigation: StepFlowNavigation = {
    showPrevLink: Boolean(previousStep),
    showNextLink: Boolean(nextStep),
    prevHref: previousStep?.href ?? "",
    nextHref: nextStep?.href ?? "",
    isLastStep: currentStepIndex === LEARNING_GOALS_STEPS.length - 1,
    hasPreviousStep: Boolean(previousStep),
  };

  return {
    currentHref: LEARNING_GOALS_STEPS[currentStepIndex].href,
    currentStep: currentStepIndex + 1,
    navigation,
    progressItems: LEARNING_GOALS_STEPS,
  };
};
