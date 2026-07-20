import type { ReactNode } from "react";

import type { StepFlowNavigation } from "@widgets/learning-step-layout";
import { LearningStepLayout } from "@widgets/learning-step-layout";

import {
  MY_LEARNING_DESCRIPTION,
  MY_LEARNING_TITLE,
} from "@views/my-learning/lib/content-title";
type MyLearningPageViewProps = {
  children: ReactNode;
  progressItems: readonly { title: string }[];
  currentStep: number;
  navigation: StepFlowNavigation;
  canProceed: boolean;
  onFinalAction: () => Promise<void> | void;
};

export const MyLearningPageView = ({
  children,
  progressItems,
  currentStep,
  navigation,
  canProceed,
  onFinalAction,
}: MyLearningPageViewProps) => {
  return (
    <LearningStepLayout
      ariaLabel="나만의 학습 페이지"
      titleText={MY_LEARNING_TITLE}
      descriptionText={MY_LEARNING_DESCRIPTION}
      progressItems={progressItems}
      currentStep={currentStep}
      navigation={navigation}
      actionActivityNamePrefix="my-learning"
      finalDisabledLabel="등록"
      finalEnabledLabel="등록"
      canProceed={canProceed}
      onFinalAction={onFinalAction}
    >
      {children}
    </LearningStepLayout>
  );
};
