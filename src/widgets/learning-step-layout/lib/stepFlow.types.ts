import type { ComponentType } from "react";

export type StepFlowStep = {
  step: number;
  slug: string;
  title: string;
};

export type StepFlowPanelByStep = Record<number, ComponentType>;

export type StepFlowNavigation = {
  showPrevLink: boolean;
  showNextLink: boolean;
  prevHref: string;
  nextHref: string;
  isLastStep: boolean;
  hasPreviousStep: boolean;
};
