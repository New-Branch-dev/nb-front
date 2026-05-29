export type StepStatus = "completed" | "current" | "upcoming";

export const getStepStatus = (
  step: number,
  currentStep: number,
): StepStatus => {
  if (step < currentStep) {
    return "completed";
  }

  if (step === currentStep) {
    return "current";
  }

  return "upcoming";
};

export const getTrackInsetPercent = (totalSteps: number) =>
  totalSteps > 0 ? 50 / totalSteps : 0;

export const getTrackFillPercent = (currentStep: number, totalSteps: number) =>
  totalSteps <= 1 ? 0 : ((currentStep - 1) / (totalSteps - 1)) * 100;

export const clampStep = (currentStep: number, totalSteps: number) =>
  Math.min(Math.max(currentStep, 1), totalSteps || 1);
