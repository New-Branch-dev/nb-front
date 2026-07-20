"use client";

import { useRouter } from "next/navigation";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import { useShallow } from "zustand/react/shallow";

import {
  fetchAccessToken,
  fetchRefreshToken,
  getApiErrorMessage,
} from "@shared/api";

import {
  clearUploadedFilesFromLearningGoalsSession,
  createLearningGoal,
  isLearningGoalsStepComplete,
  LearningGoalsTabRail,
  useLearningGoalsStore,
} from "@features/learning-goals";

import { LearningStepLayout } from "@widgets/learning-step-layout";

import {
  LEARNING_GOALS_DESCRIPTION,
  LEARNING_GOALS_TITLE,
} from "@views/learning-goals/lib/content-title";
import { useLearningGoalsStepFlow } from "@views/learning-goals/lib/use-learning-goals-step-flow";

type LearningGoalsPageProps = {
  children: ReactNode;
};

export const LearningGoalsPage = ({
  children,
}: LearningGoalsPageProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentHref, currentStep, navigation, progressItems } =
    useLearningGoalsStepFlow();
  const { goalSetting, noteCreation, resetLearningGoals } = useLearningGoalsStore(
    useShallow((state) => ({
      noteCreation: state.noteCreation,
      goalSetting: state.goalSetting,
      resetLearningGoals: state.resetLearningGoals,
    })),
  );
  const form = useMemo(
    () => ({
      noteCreation,
      goalSetting,
    }),
    [goalSetting, noteCreation],
  );
  const canProceed = isLearningGoalsStepComplete(form, currentStep) && !isSubmitting;

  const handleCreateLearningGoal = async () => {
    if (!fetchAccessToken() && !fetchRefreshToken()) {
      alert("로그인이 필요합니다.");
      router.push("/sign-in");
      return;
    }

    try {
      setIsSubmitting(true);
      await createLearningGoal(form);
      resetLearningGoals();
      router.push("/learning-goals/list");
    } catch (error) {
      alert(getApiErrorMessage(error, "학습 목표 생성에 실패했습니다."));
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentHref]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      clearUploadedFilesFromLearningGoalsSession();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <LearningStepLayout
      titleText={LEARNING_GOALS_TITLE}
      descriptionText={LEARNING_GOALS_DESCRIPTION}
      currentStep={currentStep}
      navigation={navigation}
      progressItems={progressItems}
      actionActivityNamePrefix="learning-goals"
      finalEnabledLabel="목표 생성"
      finalDisabledLabel="목표 생성"
      canProceed={canProceed}
      onFinalAction={handleCreateLearningGoal}
      belowHeader={
        <LearningGoalsTabRail
          activeTab="create"
          createHref="/learning-goals/note-creation"
        />
      }
    >
      {children}
    </LearningStepLayout>
  );
};
