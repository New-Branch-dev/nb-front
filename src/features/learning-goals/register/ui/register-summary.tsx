"use client";

import { useShallow } from "zustand/react/shallow";

import { useLearningGoalsStore } from "@features/learning-goals/model/use-learning-goals-store";
import { RegisterSummaryView } from "@features/learning-goals/register/ui/register-summary-view";

export const RegisterSummary = () => {
  const {
    goalSetting,
    memorization,
    noteCreation,
    otherLearning,
    retrieval,
  } = useLearningGoalsStore(
    useShallow((state) => ({
      noteCreation: state.noteCreation,
      goalSetting: state.goalSetting,
      memorization: state.memorization,
      retrieval: state.retrieval,
      otherLearning: state.otherLearning,
    })),
  );

  return (
    <RegisterSummaryView
      noteList={noteCreation.uploadedFileList.map((file) => ({
        id: file.id,
        name: file.name,
        sizeLabel: file.sizeLabel,
      }))}
      goalSetting={{
        learningPurposes: goalSetting.learningPurposes,
        targetScore: goalSetting.targetScore,
        maxScore: goalSetting.maxScore,
        startDate: goalSetting.startDate,
        endDate: goalSetting.endDate,
        weeklyStudyHours: goalSetting.weeklyStudyHours,
        learningMethods: goalSetting.learningMethods,
      }}
      memorization={{
        startDate: memorization.startDate,
        endDate: memorization.endDate,
        reviewCount: memorization.reviewCount,
        methods: memorization.memorizationMethods,
      }}
      retrieval={{
        startDate: retrieval.startDate,
        endDate: retrieval.endDate,
        reviewCount: retrieval.reviewCount,
        methods: retrieval.retrievalMethods,
      }}
      otherLearning={{
        startDate: otherLearning.startDate,
        endDate: otherLearning.endDate,
        reviewCount: otherLearning.reviewCount,
        methods: otherLearning.otherLearningMethods,
      }}
    />
  );
};
