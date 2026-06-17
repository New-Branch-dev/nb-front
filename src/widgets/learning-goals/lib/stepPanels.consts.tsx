"use client";

import {
  GoalSettingPanel,
  LearningGoalRegistrationPanel,
  MemorizationSettingsPanel,
  NoteCreationPanel,
  OtherLearningSettingsPanel,
  RetrievalSettingsPanel,
} from "@features/learning-goals";

import type { StepFlowPanelByStep } from "@widgets/learning-step-layout";

export const STEP_PANEL_BY_STEP: StepFlowPanelByStep = {
  1: NoteCreationPanel,
  2: GoalSettingPanel,
  3: MemorizationSettingsPanel,
  4: RetrievalSettingsPanel,
  5: OtherLearningSettingsPanel,
  6: LearningGoalRegistrationPanel,
};
