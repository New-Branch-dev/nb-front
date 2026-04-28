"use client";

import { useState } from "react";

import { ContantHeader } from "@widgets/contant-header";
import { MyLearningStepContent } from "@widgets/my-learning";
import { StepProgress } from "@widgets/step-progress";

import { contentContainer } from "./Page.css";

const STEP_ITEMS = [
  { title: "프로필" },
  { title: "학습 특성" },
  { title: "선호 학습 시간" },
  { title: "복습" },
  { title: "실전" },
  { title: "점검" },
  { title: "보완" },
  { title: "완료" },
];

export const MyLearningPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, STEP_ITEMS.length));
  };

  return (
    <>
      <ContantHeader
        titleText="나만의 학습"
        descriptionText="경쟁을 강화하여 나만의 학습 시스템을 구축해보세요."
      />

      <section className={contentContainer} aria-label="학습 단계 콘텐츠">
        <StepProgress items={STEP_ITEMS} currentStep={currentStep} />
        <MyLearningStepContent
          key={`step-content-${currentStep}`}
          currentStep={currentStep}
          totalStepCount={STEP_ITEMS.length}
          onPrevStep={handlePrevStep}
          onNextStep={handleNextStep}
        />
      </section>
    </>
  );
};
