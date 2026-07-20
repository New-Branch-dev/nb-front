"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useShallow } from "zustand/react/shallow";

import {
  fetchAccessToken,
  getApiErrorMessage,
} from "@shared/api";

import {
  createMyLearningSteps,
  isMyLearningStepComplete,
  useMyLearningStore,
} from "@features/my-learning";

import { useMyLearningStepFlow } from "@views/my-learning/lib/use-my-learning-step-flow";
import { MyLearningPageView } from "@views/my-learning/ui/page/page-view";

export const MyLearningPage = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { currentStep, navigation, progressItems } = useMyLearningStepFlow();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useMyLearningStore(
    useShallow((state) => ({
      profile: state.profile,
      learningPattern: state.learningPattern,
      learningType: state.learningType,
      preferredPartner: state.preferredPartner,
      aiAnalysis: state.aiAnalysis,
    })),
  );
  const canProceed = isMyLearningStepComplete(form, currentStep) && !isSubmitting;

  const handleFinalAction = async () => {
    if (!fetchAccessToken()) {
      alert("로그인이 필요합니다.");
      router.push("/sign-in");
      return;
    }

    try {
      setIsSubmitting(true);

      await createMyLearningSteps(form);

      router.push("/my-learning/result");
    } catch (error) {
      alert(
        getApiErrorMessage(error, "학습 프로필 설정 생성에 실패했습니다."),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentStep]);

  return (
    <MyLearningPageView
      progressItems={progressItems}
      currentStep={currentStep}
      navigation={navigation}
      canProceed={canProceed}
      onFinalAction={handleFinalAction}
    >
      {children}
    </MyLearningPageView>
  );
};
