"use client";

import { useEffect } from "react";

import { collectMethodLabels } from "../lib/formatLearningGoalsSummary";
import type { LearningGoalsPeriodSettingsDraft } from "../model/learningGoalsDraft.types";
import { useLearningGoalsDraft } from "../model/LearningGoalsDraftProvider";

type PeriodSettingsFormSlice = {
  startDate: Date | null;
  endDate: Date | null;
  reviewCount: string;
  selectedMethods: string[];
  methodDirectText: string;
};

type PeriodSettingsDraftKey = "memorization" | "retrieval" | "otherLearning";

export const useSyncPeriodSettingsDraft = (
  key: PeriodSettingsDraftKey,
  form: PeriodSettingsFormSlice,
) => {
  const { dispatch } = useLearningGoalsDraft();

  useEffect(() => {
    const nextValue: LearningGoalsPeriodSettingsDraft = {
      startDate: form.startDate,
      endDate: form.endDate,
      reviewCount: form.reviewCount,
      methodLabels: collectMethodLabels(
        form.selectedMethods,
        form.methodDirectText,
      ),
    };

    const hasAnyValue =
      nextValue.startDate !== null ||
      nextValue.endDate !== null ||
      nextValue.reviewCount !== "" ||
      nextValue.methodLabels.length > 0;

    const payload = hasAnyValue ? nextValue : null;

    if (key === "memorization") {
      dispatch({ type: "SET_MEMORIZATION", memorization: payload });
      return;
    }

    if (key === "retrieval") {
      dispatch({ type: "SET_RETRIEVAL", retrieval: payload });
      return;
    }

    dispatch({ type: "SET_OTHER_LEARNING", otherLearning: payload });
  }, [
    dispatch,
    form.endDate,
    form.methodDirectText,
    form.reviewCount,
    form.selectedMethods,
    form.startDate,
    key,
  ]);
};
