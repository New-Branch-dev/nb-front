"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useShallow } from "zustand/react/shallow";

import { getApiErrorMessage } from "@shared/api";

import {
  isLearningGoalsStepComplete,
  updateLearningGoal,
  useLearningGoalsStore,
} from "@features/learning-goals";

import {
  LEARNING_GOALS_EDIT_STEPS,
  type LearningGoalsEditStepKey,
} from "@views/learning-goals/lib/edit-step";
import { LearningGoalsEditPageView } from "@views/learning-goals/ui/edit-page/edit-page-view";

type LearningGoalsEditPageProps = {
  children: ReactNode;
  goalId?: string;
  stepKey: LearningGoalsEditStepKey;
};

const DEFAULT_DETAIL_HREF = "/learning-goals/goal-1";

export const LearningGoalsEditPage = ({
  children,
  goalId,
  stepKey,
}: LearningGoalsEditPageProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const detailHref = goalId ? `/learning-goals/${goalId}` : DEFAULT_DETAIL_HREF;
  const editStep = LEARNING_GOALS_EDIT_STEPS[stepKey];
  const { goalSetting, noteCreation } = useLearningGoalsStore(
    useShallow((state) => ({
      noteCreation: state.noteCreation,
      goalSetting: state.goalSetting,
    })),
  );
  const form = useMemo(
    () => ({
      noteCreation,
      goalSetting,
    }),
    [goalSetting, noteCreation],
  );
  const canSubmit = isLearningGoalsStepComplete(form, editStep.step) && !isSubmitting;

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      if (goalId) {
        await updateLearningGoal(goalId, form);
      }

      router.push(detailHref);
    } catch (error) {
      alert(getApiErrorMessage(error, "학습 목표 수정에 실패했습니다."));
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [stepKey]);

  return (
    <LearningGoalsEditPageView
      title={editStep.title}
      cancelHref={detailHref}
      canSubmit={canSubmit}
      onSubmit={handleSubmit}
    >
      {children}
    </LearningGoalsEditPageView>
  );
};
