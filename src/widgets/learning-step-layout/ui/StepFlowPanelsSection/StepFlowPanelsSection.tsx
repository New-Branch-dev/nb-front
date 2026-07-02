"use client";

import { Activity } from "react";

import type {
  StepFlowPanelByStep,
  StepFlowStep,
} from "@widgets/learning-step-layout/lib/stepFlow.types";
import { contentRoot, panelCard } from "@widgets/learning-step-layout/ui/StepFlowPanelsSection/StepFlowPanelsSection.css";

type StepFlowPanelsSectionProps = {
  steps: readonly StepFlowStep[];
  currentStep: number;
  panelByStep: StepFlowPanelByStep;
  ariaLabel?: string;
  activityNamePrefix?: string;
  withoutPanelCardSteps?: readonly number[];
  handlersByStep?: Record<number, (isValid: boolean) => void>;
};

export const StepFlowPanelsSection = ({
  steps,
  currentStep,
  panelByStep,
  ariaLabel = "단계 설정 콘텐츠",
  activityNamePrefix = "step-flow",
  withoutPanelCardSteps = [],
}: StepFlowPanelsSectionProps) => {
  return (
    <section className={contentRoot} aria-label={ariaLabel}>
      {steps.map(({ step }) => {
        const Panel = panelByStep[step];
        const wrapInPanelCard = !withoutPanelCardSteps.includes(step);

        return (
          <Activity
            key={`${activityNamePrefix}-${step}`}
            mode={step === currentStep ? "visible" : "hidden"}
          >
            {wrapInPanelCard ? (
              <div className={panelCard}>
                <Panel />
              </div>
            ) : (
              <Panel />
            )}
          </Activity>
        );
      })}
    </section>
  );
};
