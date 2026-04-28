"use client";

import { useState } from "react";

import { Button } from "@shared/ui";

import {
  MyLearningContent,
  StepGoalContent,
  StepPlaceholderContent,
} from "@features/my-learning";

import { actionButton, actionRow } from "./MyLearningStepContent.css";

type MyLearningStepContentProps = {
  currentStep: number;
  totalStepCount: number;
  onPrevStep: () => void;
  onNextStep: () => void;
};

export const MyLearningStepContent = ({
  currentStep,
  totalStepCount,
  onPrevStep,
  onNextStep,
}: MyLearningStepContentProps) => {
  const [isStepValid, setIsStepValid] = useState(false);

  const handleValidityChange = (isValid: boolean) => {
    setIsStepValid(isValid);
  };

  const isLastStep = currentStep >= totalStepCount;
  const canGoPrev = currentStep > 1;
  const canGoNext = isStepValid && !isLastStep;

  return (
    <>
      {currentStep === 1 && (
        <MyLearningContent onValidityChange={handleValidityChange} />
      )}
      {currentStep === 2 && (
        <StepGoalContent onValidityChange={handleValidityChange} />
      )}
      {currentStep > 2 && (
        <StepPlaceholderContent
          step={currentStep}
          onValidityChange={handleValidityChange}
        />
      )}

      <div className={actionRow}>
        {canGoPrev && (
          <Button
            type="button"
            size="lg"
            variant="ghost"
            className={actionButton}
            onClick={onPrevStep}
          >
            이전
          </Button>
        )}
        <Button
          type="button"
          size="lg"
          fullWidth={!canGoPrev}
          className={canGoPrev ? actionButton : undefined}
          disabled={!canGoNext}
          onClick={onNextStep}
        >
          {isLastStep ? "완료" : "다음"}
        </Button>
      </div>
    </>
  );
};
