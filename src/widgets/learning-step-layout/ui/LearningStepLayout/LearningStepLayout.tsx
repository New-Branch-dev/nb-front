import { ReactNode } from "react";

import { ContantHeader } from "@widgets/contant-header";
import type { StepFlowNavigation } from "@widgets/learning-step-layout/lib/stepFlow.types";
import { StepProgress } from "@widgets/step-progress";

import { StepFlowActionsRow } from "../StepFlowActionsRow/StepFlowActionsRow";
import {
  headerBlock,
  mainColumn,
  pageRoot,
  stepActions,
  stepContent,
  stepProgress,
  tabScopeContentRow,
  tabScopeRow,
} from "./LearningStepLayout.css";

type LearningStepLayoutItem = {
  title: string;
};

type LearningStepLayoutProps = {
  titleText: string;
  descriptionText: string;
  progressItems: readonly LearningStepLayoutItem[];
  currentStep: number;
  navigation: StepFlowNavigation;
  children: ReactNode;
  belowHeader?: ReactNode;
  ariaLabel?: string;
  actionActivityNamePrefix?: string;
  previousLabel?: string;
  nextLabel?: string;
  finalEnabledLabel?: string;
  finalDisabledLabel?: string;
  canProceed?: boolean;
  wizardChrome?: boolean;
};

export const LearningStepLayout = ({
  titleText,
  descriptionText,
  progressItems,
  currentStep,
  navigation,
  children,
  belowHeader,
  ariaLabel = "학습 단계 콘텐츠",
  actionActivityNamePrefix = "learning-step",
  previousLabel = "이전",
  nextLabel = "다음",
  finalEnabledLabel = "완료",
  finalDisabledLabel = "등록",
  canProceed,
  wizardChrome = true,
}: LearningStepLayoutProps) => {
  return (
    <section className={pageRoot} aria-label={ariaLabel}>
      <div className={headerBlock}>
        <ContantHeader
          titleText={titleText}
          descriptionText={descriptionText}
        />
      </div>

      {belowHeader ? <div className={tabScopeRow}>{belowHeader}</div> : null}

      {wizardChrome ? (
        <div className={mainColumn}>
          <div className={stepProgress}>
            <StepProgress items={progressItems} currentStep={currentStep} />
          </div>

          <div className={stepContent}>{children}</div>

          <div className={stepActions}>
            <StepFlowActionsRow
              navigation={navigation}
              activityNamePrefix={actionActivityNamePrefix}
              previousLabel={previousLabel}
              nextLabel={nextLabel}
              finalEnabledLabel={finalEnabledLabel}
              finalDisabledLabel={finalDisabledLabel}
              canProceed={canProceed}
            />
          </div>
        </div>
      ) : (
        <div className={tabScopeContentRow}>{children}</div>
      )}
    </section>
  );
};
