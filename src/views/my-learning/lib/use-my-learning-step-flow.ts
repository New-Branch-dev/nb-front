"use client";

import { usePathname } from "next/navigation";

import type { StepFlowNavigation } from "@widgets/learning-step-layout";

import { MY_LEARNING_STEPS } from "@views/my-learning/lib/step";

export const useMyLearningStepFlow = () => {
  const pathname = usePathname();
  const matchedStepIndex = MY_LEARNING_STEPS.findIndex(
    (step) => step.href === pathname,
  );
  const currentStepIndex = matchedStepIndex >= 0 ? matchedStepIndex : 0;
  const previousStep = MY_LEARNING_STEPS[currentStepIndex - 1];
  const nextStep = MY_LEARNING_STEPS[currentStepIndex + 1];
  const isLastStep = currentStepIndex === MY_LEARNING_STEPS.length - 1;

  const navigation: StepFlowNavigation = {
    showPrevLink: Boolean(previousStep),
    showNextLink: Boolean(nextStep),
    prevHref: previousStep?.href ?? "",
    nextHref: nextStep?.href ?? "",
    isLastStep,
    hasPreviousStep: Boolean(previousStep),
  };

  return {
    currentStep: currentStepIndex + 1,
    navigation,
    progressItems: MY_LEARNING_STEPS,
  };
};
