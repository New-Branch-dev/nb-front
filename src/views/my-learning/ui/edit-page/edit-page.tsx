"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { useShallow } from "zustand/react/shallow";

import {
  isMyLearningStepComplete,
  useMyLearningStore,
} from "@features/my-learning";

import {
  MY_LEARNING_EDIT_STEPS,
  type MyLearningEditStepKey,
} from "@views/my-learning/lib/edit-step";
import { MyLearningEditPageView } from "@views/my-learning/ui/edit-page/edit-page-view";

type MyLearningEditPageProps = {
  children: ReactNode;
  stepKey: MyLearningEditStepKey;
};

export const MyLearningEditPage = ({
  children,
  stepKey,
}: MyLearningEditPageProps) => {
  const router = useRouter();
  const editStep = MY_LEARNING_EDIT_STEPS[stepKey];
  const form = useMyLearningStore(
    useShallow((state) => ({
      profile: state.profile,
      learningPattern: state.learningPattern,
      preferredTime: state.preferredTime,
      learningPreferences: state.learningPreferences,
      preferredPartner: state.preferredPartner,
      aiAnalysis: state.aiAnalysis,
    })),
  );
  const canSubmit = isMyLearningStepComplete(form, editStep.step);

  const handleSubmit = () => {
    router.push("/my-learning/result");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [stepKey]);

  return (
    <MyLearningEditPageView
      title={editStep.title}
      canSubmit={canSubmit}
      onSubmit={handleSubmit}
    >
      {children}
    </MyLearningEditPageView>
  );
};
