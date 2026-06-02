"use client";

import { LearningStepLayout } from "@widgets/learning-step-layout";

import { useMyLearningStepFlow } from "../lib/useMyLearningStepFlow";

export const MyLearningPage = ({ children }: { children: React.ReactNode }) => {
  const { currentStep, navigation, progressItems } = useMyLearningStepFlow();

  return (
    <LearningStepLayout
      ariaLabel="나만의 학습 페이지"
      titleText="나만의 학습"
      descriptionText="정보를 입력하여 나만의 학습 시스템을 구축해보세요."
      progressItems={progressItems}
      currentStep={currentStep}
      navigation={navigation}
      actionActivityNamePrefix="my-learning"
      finalDisabledLabel="등록"
    >
      {children}
    </LearningStepLayout>
  );
};
