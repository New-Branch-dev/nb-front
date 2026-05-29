"use client";

import { JSX } from "react";

import {
  LearningPattern,
  LearningPreferences,
  MyProfile,
  PreferredLearningPartner,
  PreferredLearningTime,
  Register,
} from "@features/my-learning";

import type { StepFlowPanelProps } from "@widgets/learning-step-layout/model/stepFlow.types";

const MyProfilePanel = ({ onValidityChange, isActive }: StepFlowPanelProps) => (
  <MyProfile onValidityChange={onValidityChange} isActive={isActive} />
);

const LearningPatternPanel = ({
  onValidityChange,
  isActive,
}: StepFlowPanelProps) => (
  <LearningPattern onValidityChange={onValidityChange} isActive={isActive} />
);

const PreferredLearningTimePanel = ({
  onValidityChange,
  isActive,
}: StepFlowPanelProps) => (
  <PreferredLearningTime
    onValidityChange={onValidityChange}
    isActive={isActive}
  />
);

const LearningPreferencesPanel = ({
  onValidityChange,
  isActive,
}: StepFlowPanelProps) => (
  <LearningPreferences
    onValidityChange={onValidityChange}
    isActive={isActive}
  />
);

const PreferredLearningPartnerPanel = ({
  onValidityChange,
  isActive,
}: StepFlowPanelProps) => (
  <PreferredLearningPartner
    onValidityChange={onValidityChange}
    isActive={isActive}
  />
);

const RegisterPanel = () => <Register />;

export const STEP_PANEL_BY_STEP: Record<
  number,
  (props: StepFlowPanelProps) => JSX.Element
> = {
  1: MyProfilePanel,
  2: LearningPatternPanel,
  3: PreferredLearningTimePanel,
  4: LearningPreferencesPanel,
  5: PreferredLearningPartnerPanel,
  6: RegisterPanel,
};
