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
};

export const StepFlowPanelsSection = ({
  steps,
  currentStep,
  handlersByStep,
  panelByStep,
  ariaLabel = "단계 설정 콘텐츠",
  activityNamePrefix = "step-flow",
}: StepFlowPanelsSectionProps) => (
  <section className={contentRoot} aria-label={ariaLabel}>
    {steps.map(({ step }) => {
      const Panel = panelByStep[step];

      return (
        <Activity
          key={step}
          mode={step === currentStep ? "visible" : "hidden"}
          name={`${activityNamePrefix}-panel-${step}`}
        >
          <div className={panelCard}>
            <Panel onValidityChange={handlersByStep[step]} />
          </div>
        </Activity>
      );
    })}
  </section>
);
