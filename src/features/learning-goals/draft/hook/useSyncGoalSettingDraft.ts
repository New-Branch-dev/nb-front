"use client";

import { useEffect } from "react";

import {
  collectMethodLabels,
  collectPurposeLabels,
} from "../lib/formatLearningGoalsSummary";
import type { LearningGoalsGoalSettingDraft } from "../model/learningGoalsDraft.types";
import { useLearningGoalsDraft } from "../model/LearningGoalsDraftProvider";

type GoalSettingFormSlice = {
  purposeSelections: string[];
  purposeDirectText: string;
  targetScore: string;
  maxScore: string;
  startDate: Date | null;
  endDate: Date | null;
  weeklyHours: LearningGoalsGoalSettingDraft["weeklyHours"];
  methodSelections: string[];
  methodDirectText: string;
};

export const useSyncGoalSettingDraft = (form: GoalSettingFormSlice) => {
  const { dispatch } = useLearningGoalsDraft();

  useEffect(() => {
    dispatch({
      type: "SET_GOAL_SETTING",
      goalSetting: {
        purposeLabels: collectPurposeLabels(
          form.purposeSelections,
          form.purposeDirectText,
        ),
        targetScore: form.targetScore,
        maxScore: form.maxScore,
        startDate: form.startDate,
        endDate: form.endDate,
        weeklyHours: form.weeklyHours,
        methodLabels: collectMethodLabels(
          form.methodSelections,
          form.methodDirectText,
        ),
      },
    });
  }, [
    dispatch,
    form.endDate,
    form.maxScore,
    form.methodDirectText,
    form.methodSelections,
    form.purposeDirectText,
    form.purposeSelections,
    form.startDate,
    form.targetScore,
    form.weeklyHours,
  ]);
};
