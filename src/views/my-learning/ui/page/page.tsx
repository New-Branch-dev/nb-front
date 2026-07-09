"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { useShallow } from "zustand/react/shallow";

import {
  isMyLearningStepComplete,
  useMyLearningStore,
} from "@features/my-learning";

import { useMyLearningStepFlow } from "@views/my-learning/lib/use-my-learning-step-flow";
import { MyLearningPageView } from "@views/my-learning/ui/page/page-view";

export const MyLearningPage = ({ children }: { children: ReactNode }) => {
  const { currentStep, navigation, progressItems } = useMyLearningStepFlow();
  const form = useMyLearningStore(
    useShallow((state) => ({
      profile: state.profile,
      learningPattern: state.learningPattern,
      learningType: state.learningType,
      preferredPartner: state.preferredPartner,
      aiAnalysis: state.aiAnalysis,
    })),
  );
  const canProceed = isMyLearningStepComplete(form, currentStep);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentStep]);

  return (
    <MyLearningPageView
      progressItems={progressItems}
      currentStep={currentStep}
      navigation={navigation}
      canProceed={canProceed}
    >
      {children}
    </MyLearningPageView>
  );
};
