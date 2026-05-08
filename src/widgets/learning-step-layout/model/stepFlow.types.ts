import { JSX } from "react";

export type StepFlowStep = {
  step: number;
  slug: string;
};

export type StepFlowPanelProps = {
  onValidityChange: (isValid: boolean) => void;
};

export type StepFlowPanelByStep = Record<
  number,
  (props: StepFlowPanelProps) => JSX.Element
>;

export type StepFlowNavigation = {
  showPrevLink: boolean;
  showNextLink: boolean;
  showFinalAction: boolean;
  prevHref: string;
  nextHref: string;
  isLastStep: boolean;
  hasPreviousStep: boolean;
};
