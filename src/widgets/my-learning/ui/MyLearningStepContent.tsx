"use client";

import { StepFlowPanelsSection } from "@widgets/learning-step-layout";
import { STEP_PANEL_BY_STEP } from "@widgets/my-learning/lib/stepPanels.consts";
import { MY_LEARNING_STEPS } from "@widgets/my-learning/model/consts";

type MyLearningStepContentProps = {
  currentStep: number;
  handlersByStep: Record<number, (isValid: boolean) => void>;
};

export const MyLearningStepContent = ({
  currentStep,
  handlersByStep,
}: MyLearningStepContentProps) => (
  <StepFlowPanelsSection
    steps={MY_LEARNING_STEPS}
    currentStep={currentStep}
    handlersByStep={handlersByStep}
    panelByStep={STEP_PANEL_BY_STEP}
    withoutPanelCardSteps={[6]}
    ariaLabel="나만의 학습 단계 설정 콘텐츠"
    activityNamePrefix="my-learning"
  />
);
