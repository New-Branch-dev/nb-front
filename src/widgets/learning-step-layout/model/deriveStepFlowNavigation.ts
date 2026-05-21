import type { StepFlowNavigation, StepFlowStep } from "./stepFlow.types";

export const deriveStepFlowNavigation = ({
  steps,
  currentStep,
  validityByStep,
  getStepHref,
}: {
  steps: readonly StepFlowStep[];
  currentStep: number;
  validityByStep: Partial<Record<number, boolean>>;
  getStepHref: (slug: string) => string;
}): StepFlowNavigation => {
  const total = steps.length;
  const isStepValid = validityByStep[currentStep] ?? false;
  const isLastStep = currentStep >= total;
  const canGoPrev = currentStep > 1;
  const canGoNext = isStepValid && !isLastStep;
  const showFinalAction = isStepValid && isLastStep;

  const prevSlug =
    currentStep > 1 ? steps[currentStep - 2]?.slug : undefined;
  const nextSlug =
    currentStep < total ? steps[currentStep]?.slug : undefined;

  const prevHref = prevSlug ? getStepHref(prevSlug) : "";
  const nextHref = nextSlug ? getStepHref(nextSlug) : "";

  const showPrevLink = canGoPrev && Boolean(prevHref);
  const showNextLink = canGoNext && Boolean(nextHref);

  return {
    showPrevLink,
    showNextLink,
    showFinalAction,
    prevHref,
    nextHref,
    isLastStep,
    hasPreviousStep: showPrevLink,
  };
};
