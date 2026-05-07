import { ReactNode } from "react";

import { ContantHeader } from "@widgets/contant-header";
import type { StepFlowNavigation } from "@widgets/learning-step-layout/model/stepFlow.types";
import { StepProgress } from "@widgets/step-progress";

import { container } from "./LearningStepLayout.css";
import { StepFlowActionsRow } from "./StepFlowActionsRow/StepFlowActionsRow";

type LearningStepLayoutItem = {
  title: string;
};

type LearningStepLayoutProps = {
  titleText: string;
  descriptionText: string;
  progressItems: LearningStepLayoutItem[];
  currentStep: number;
  navigation: StepFlowNavigation;
  children: ReactNode;
  ariaLabel?: string;
  actionActivityNamePrefix?: string;
  previousLabel?: string;
  nextLabel?: string;
  finalEnabledLabel?: string;
  finalDisabledLabel?: string;
};

export const LearningStepLayout = ({
  titleText,
  descriptionText,
  progressItems,
  currentStep,
  navigation,
  children,
  ariaLabel = "학습 단계 콘텐츠",
  actionActivityNamePrefix = "learning-step",
  previousLabel = "이전",
  nextLabel = "다음",
  finalEnabledLabel = "완료",
  finalDisabledLabel = "등록",
}: LearningStepLayoutProps) => {
  return (
    <section className={container} aria-label={ariaLabel}>
      <ContantHeader titleText={titleText} descriptionText={descriptionText} />

      <StepProgress items={progressItems} currentStep={currentStep} />

      {children}

      <StepFlowActionsRow
        navigation={navigation}
        activityNamePrefix={actionActivityNamePrefix}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        finalEnabledLabel={finalEnabledLabel}
        finalDisabledLabel={finalDisabledLabel}
      />
    </section>
  );
};
