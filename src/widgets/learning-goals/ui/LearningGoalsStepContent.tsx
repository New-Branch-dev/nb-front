"use client";

import { LearningGoalsDraftProvider } from "@features/learning-goals";

import { StepFlowPanelsSection } from "@widgets/learning-step-layout";

import { STEP_PANEL_BY_STEP } from "../lib/stepPanels.consts";
import { LEARNING_GOALS_STEPS } from "../model/consts";

type LearningGoalsStepContentProps = {
  currentStep: number;
  handlersByStep: Record<number, (isValid: boolean) => void>;
};

export const LearningGoalsStepContent = ({
  currentStep,
  handlersByStep,
}: LearningGoalsStepContentProps) => (
  <LearningGoalsDraftProvider>
    <StepFlowPanelsSection
      steps={LEARNING_GOALS_STEPS}
      currentStep={currentStep}
      handlersByStep={handlersByStep}
      panelByStep={STEP_PANEL_BY_STEP}
      withoutPanelCardSteps={[6]}
      aria-label="학습 목표 달성 단계 콘텐츠"
      activityNamePrefix="learning-goals"
    />
  </LearningGoalsDraftProvider>
);
