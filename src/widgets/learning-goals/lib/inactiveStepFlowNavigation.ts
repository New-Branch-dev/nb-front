import type { StepFlowNavigation } from "@widgets/learning-step-layout/lib/stepFlow.types";

/** 목록 등 마법사(스테퍼·이전/다음) 없이 헤더만 쓸 때 */
export const INACTIVE_STEP_FLOW_NAVIGATION: StepFlowNavigation = {
  showPrevLink: false,
  showNextLink: false,
  prevHref: "",
  nextHref: "",
  isLastStep: false,
  hasPreviousStep: false,
};
