"use client";

import { type ReactNode, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import {
  clearUploadedFilesFromLearningGoalsSession,
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
  const { currentHref, currentStep, navigation, progressItems } =
    useLearningGoalsStepFlow();
  const form = useLearningGoalsStore(
    useShallow((state) => ({
      noteCreation: state.noteCreation,
      goalSetting: state.goalSetting,
      memorization: state.memorization,
      retrieval: state.retrieval,
      otherLearning: state.otherLearning,
    })),
  );
  const canProceed = isLearningGoalsStepComplete(form, currentStep);

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
