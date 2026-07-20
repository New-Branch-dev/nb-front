"use client";

import Link from "next/link";
import { Activity } from "react";

import { Button } from "@shared/ui";
import { buttonRecipe } from "@shared/ui/button/Button.css";

import type { StepFlowNavigation } from "@widgets/learning-step-layout/lib/stepFlow.types";
import { actionButton, actionRow } from "@widgets/learning-step-layout/ui/StepFlowActionsRow/StepFlowActionsRow.css";

type StepFlowActionsRowProps = {
  navigation: StepFlowNavigation;
  previousLabel?: string;
  nextLabel?: string;
  finalEnabledLabel?: string;
  finalDisabledLabel?: string;
  activityNamePrefix?: string;
  canProceed?: boolean;
  onFinalAction?: () => Promise<void> | void;
};

export const StepFlowActionsRow = ({
  navigation,
  previousLabel = "이전",
  nextLabel = "다음",
  finalEnabledLabel = "완료",
  finalDisabledLabel = "등록",
  activityNamePrefix = "step-flow",
  canProceed,
  onFinalAction,
}: StepFlowActionsRowProps) => {
  const {
    showPrevLink,
    showNextLink,
    prevHref,
    nextHref,
    isLastStep,
    hasPreviousStep,
  } = navigation;
  const isNextEnabled = showNextLink && (canProceed ?? true);
  const isFinalEnabled = isLastStep && canProceed === true;
  const isDisabled = !isNextEnabled && !isFinalEnabled;

  return (
    <div className={actionRow}>
      <Activity
        mode={showPrevLink ? "visible" : "hidden"}
        name={`${activityNamePrefix}-action-prev`}
      >
        <Link
          href={prevHref}
          className={[
            buttonRecipe({ size: "lg", variant: "secondary" }),
            actionButton,
          ]
            .join(" ")
            .trim()}
        >
          {previousLabel}
        </Link>
      </Activity>

      <Activity
        mode={isNextEnabled ? "visible" : "hidden"}
        name={`${activityNamePrefix}-action-next-link`}
      >
        <Link
          href={nextHref}
          className={[
            buttonRecipe({ size: "lg", fullWidth: !hasPreviousStep }),
            hasPreviousStep ? actionButton : "",
          ]
            .join(" ")
            .trim()}
        >
          {isLastStep ? finalEnabledLabel : nextLabel}
        </Link>
      </Activity>

      <Activity
        mode={isFinalEnabled ? "visible" : "hidden"}
        name={`${activityNamePrefix}-action-final-enabled`}
      >
        <Button
          type="button"
          size="lg"
          fullWidth={!hasPreviousStep}
          className={hasPreviousStep ? actionButton : undefined}
          onClick={onFinalAction}
        >
          {finalEnabledLabel}
        </Button>
      </Activity>

      <Activity
        mode={isDisabled ? "visible" : "hidden"}
        name={`${activityNamePrefix}-action-next-disabled`}
      >
        <Button
          type="button"
          size="lg"
          fullWidth={!hasPreviousStep}
          className={hasPreviousStep ? actionButton : undefined}
          disabled
        >
          {isLastStep ? finalDisabledLabel : nextLabel}
        </Button>
      </Activity>
    </div>
  );
};
