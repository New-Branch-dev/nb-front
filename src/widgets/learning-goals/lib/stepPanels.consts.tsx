"use client";

import { JSX } from "react";

import {
  GoalSettingPanel,
  LearningGoalRegistrationPanel,
  MemorizationSettingsPanel,
  NoteCreationPanel,
  OtherLearningSettingsPanel,
  RetrievalSettingsPanel,
} from "@features/learning-goals";

import type { StepFlowPanelProps } from "@widgets/learning-step-layout/model/stepFlow.types";

export const STEP_PANEL_BY_STEP: Record<
  number,
  (props: StepFlowPanelProps) => JSX.Element
> = {
  1: ({ onValidityChange, isActive }) => (
    <NoteCreationPanel
      onValidityChange={onValidityChange}
      isActive={isActive}
    />
  ),
  2: ({ onValidityChange, isActive }) => (
    <GoalSettingPanel onValidityChange={onValidityChange} isActive={isActive} />
  ),
  3: ({ onValidityChange, isActive }) => (
    <MemorizationSettingsPanel
      onValidityChange={onValidityChange}
      isActive={isActive}
    />
  ),
  4: ({ onValidityChange, isActive }) => (
    <RetrievalSettingsPanel
      onValidityChange={onValidityChange}
      isActive={isActive}
    />
  ),
  5: ({ onValidityChange, isActive }) => (
    <OtherLearningSettingsPanel
      onValidityChange={onValidityChange}
      isActive={isActive}
    />
  ),
  6: ({ onValidityChange, isActive }) => (
    <LearningGoalRegistrationPanel
      onValidityChange={onValidityChange}
      isActive={isActive}
    />
  ),
};
