"use client";

import { Activity } from "react";

import type {
  StepFlowPanelByStep,
  StepFlowStep,
} from "@widgets/learning-step-layout/model/stepFlow.types";

import { contentRoot, panelCard } from "./StepFlowPanelsSection.css";

type StepFlowPanelsSectionProps = {
  steps: readonly StepFlowStep[];
  currentStep: number;
  handlersByStep: Record<number, (isValid: boolean) => void>;
  panelByStep: StepFlowPanelByStep;
  ariaLabel?: string;
  activityNamePrefix?: string;
  /** 해당 step은 공통 `panelCard` 래퍼 없이 패널이 직접 레이아웃을 구성 (예: 등록 단계) */
  withoutPanelCardSteps?: readonly number[];
};

export const StepFlowPanelsSection = ({
  steps,
  currentStep,
  handlersByStep,
  panelByStep,
  ariaLabel = "단계 설정 콘텐츠",
  activityNamePrefix = "step-flow",
  withoutPanelCardSteps = [],
}: StepFlowPanelsSectionProps) => (
  <section className={contentRoot} aria-label={ariaLabel}>
    {steps.map(({ step }) => {
      const Panel = panelByStep[step];
      const wrapInPanelCard = !withoutPanelCardSteps.includes(step);

      return (
        <Activity
          key={step}
          mode={step === currentStep ? "visible" : "hidden"}
          name={`${activityNamePrefix}-panel-${step}`}
        >
          {wrapInPanelCard ? (
            <div className={panelCard}>
              <Panel
                isActive={step === currentStep}
                onValidityChange={handlersByStep[step]}
              />
            </div>
          ) : (
            <Panel
              isActive={step === currentStep}
              onValidityChange={handlersByStep[step]}
            />
          )}
        </Activity>
      );
    })}
  </section>
);
