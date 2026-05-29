"use client";

import { useReportStepValidity } from "@shared/hook/useReportStepValidity";
import {
  RegistrationAiAnalysisPanel,
  registrationStepRoot,
  stepSummaryPanelCard,
} from "@shared/ui";

import { useLearningGoalRegistrationAiForm } from "../model/useLearningGoalRegistrationAiForm";
import { LearningGoalRegistrationSummary } from "./LearningGoalRegistrationSummary";

type LearningGoalRegistrationPanelProps = {
  onValidityChange: (isValid: boolean) => void;
  isActive: boolean;
};

export const LearningGoalRegistrationPanel = ({
  onValidityChange,
  isActive,
}: LearningGoalRegistrationPanelProps) => {
  const aiForm = useLearningGoalRegistrationAiForm();

  useReportStepValidity(isActive, true, onValidityChange);

  return (
    <div className={registrationStepRoot} aria-label="학습 목표 등록">
      <div className={stepSummaryPanelCard}>
        <LearningGoalRegistrationSummary />
      </div>

      <RegistrationAiAnalysisPanel
        titleId="learning-goals-registration-ai-title"
        learningStyle={aiForm.learningStyle}
        recommendedMethod={aiForm.recommendedMethod}
        learningStyleInputName="learning-goals-learning-style-direct"
        recommendedMethodInputName="learning-goals-recommended-method-direct"
      />
    </div>
  );
};
