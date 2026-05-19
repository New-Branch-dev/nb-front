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

export type StepPanelProps = {
  onValidityChange: (isValid: boolean) => void;
};

export const STEP_PANEL_BY_STEP: Record<
  number,
  (props: StepPanelProps) => JSX.Element
> = {
  1: ({ onValidityChange }) => (
    <MyProfile onValidityChange={onValidityChange} />
  ),
  2: ({ onValidityChange }) => (
    <LearningPattern onValidityChange={onValidityChange} />
  ),
  3: ({ onValidityChange }) => (
    <PreferredLearningTime onValidityChange={onValidityChange} />
  ),
  4: ({ onValidityChange }) => (
    <LearningPreferences onValidityChange={onValidityChange} />
  ),
  5: ({ onValidityChange }) => (
    <PreferredLearningPartner onValidityChange={onValidityChange} />
  ),
  6: () => <Register />,
};
