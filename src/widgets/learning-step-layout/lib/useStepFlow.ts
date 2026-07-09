"use client";

import type { StepFlowNavigation, StepFlowStep } from "@widgets/learning-step-layout/lib/stepFlow.types";

type UseStepFlowParams<Slug extends string> = {
  steps: readonly (StepFlowStep & { slug: Slug })[];
  currentSlug: Slug;
  getStepHref: (slug: Slug) => string;
};

export const useStepFlow = <Slug extends string>({
  steps,
  currentSlug,
  getStepHref,
}: UseStepFlowParams<Slug>) => {
  const currentStep =
    steps.find((step) => step.slug === currentSlug)?.step ?? 1;
  const previousStep = steps[currentStep - 2];
  const nextStep = steps[currentStep];
  const prevHref = previousStep ? getStepHref(previousStep.slug) : "";
  const nextHref = nextStep ? getStepHref(nextStep.slug) : "";
  const navigation: StepFlowNavigation = {
    showPrevLink: Boolean(prevHref),
    showNextLink: Boolean(nextHref),
    prevHref,
    nextHref,
    isLastStep: currentStep === steps.length,
    hasPreviousStep: Boolean(prevHref),
  };

  return {
    currentStep,
    handlersByStep: {},
    navigation,
  };
};
