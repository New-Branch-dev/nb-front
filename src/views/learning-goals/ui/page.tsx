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
  createLearningGoal,
  isLearningGoalsStepComplete,
  LearningGoalsTabRail,
  syncLearningGoalDirectTextAttachment,
  syncLearningGoalFileAttachmentList,
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

export const LearningGoalsPage = ({ children }: LearningGoalsPageProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentHref, currentStep, navigation, progressItems } =
    useLearningGoalsStepFlow();
  const {
    goalSetting,
    noteCreation,
    isUploadingAttachments,
    resetLearningGoals,
    setDirectTextAttachment,
    setIsUploadingAttachments,
    setUploadedFileList,
  } = useLearningGoalsStore(
    useShallow((state) => ({
      noteCreation: state.noteCreation,
      goalSetting: state.goalSetting,
      isUploadingAttachments: state.isUploadingAttachments,
      resetLearningGoals: state.resetLearningGoals,
      setDirectTextAttachment: state.setDirectTextAttachment,
      setIsUploadingAttachments: state.setIsUploadingAttachments,
      setUploadedFileList: state.setUploadedFileList,
    })),
  );
  const form = useMemo(
    () => ({
      noteCreation,
      goalSetting,
    }),
    [goalSetting, noteCreation],
  );
  const canProceed =
    isLearningGoalsStepComplete(form, currentStep) &&
    !isSubmitting &&
    !isUploadingAttachments;

  const syncNoteCreationAttachments = async () => {
    setIsUploadingAttachments(true);

    const uploadedFileList = await syncLearningGoalFileAttachmentList(
      noteCreation.uploadedFileList,
    );
    setUploadedFileList(uploadedFileList);

    const syncedAttachment =
      await syncLearningGoalDirectTextAttachment(noteCreation);

    setDirectTextAttachment(
      syncedAttachment.attachmentId,
      syncedAttachment.savedDirectText,
    );

    return {
      ...noteCreation,
      uploadedFileList,
      directTextAttachmentId: syncedAttachment.attachmentId,
      savedDirectText: syncedAttachment.savedDirectText,
    };
  };

  const handleNoteCreationNext = async () => {
    try {
      setIsSubmitting(true);
      await syncNoteCreationAttachments();
      router.push(navigation.nextHref);
    } catch (error) {
      alert(getApiErrorMessage(error, "직접 입력 자료 저장에 실패했습니다."));
    } finally {
      setIsUploadingAttachments(false);
      setIsSubmitting(false);
    }
  };

  const handleCreateLearningGoal = async () => {
    if (!fetchAccessToken() && !fetchRefreshToken()) {
      alert("로그인이 필요합니다.");
      router.push("/sign-in");
      return;
    }

    try {
      setIsSubmitting(true);
      const syncedNoteCreation = await syncNoteCreationAttachments();

      await createLearningGoal({
        ...form,
        noteCreation: syncedNoteCreation,
      });
      resetLearningGoals();
      router.push("/learning-goals/list");
    } catch (error) {
      alert(getApiErrorMessage(error, "학습 목표 생성에 실패했습니다."));
    } finally {
      setIsUploadingAttachments(false);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentHref]);

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
      onNextAction={currentStep === 1 ? handleNoteCreationNext : undefined}
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
