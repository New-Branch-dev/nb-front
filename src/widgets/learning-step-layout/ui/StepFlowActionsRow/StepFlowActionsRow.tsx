"use client";

import Link from "next/link";
import { Activity } from "react";

import { Button } from "@shared/ui";
import { buttonRecipe } from "@shared/ui/button/Button.css";

import type { StepFlowNavigation } from "@widgets/learning-step-layout/lib/stepFlow.types";

import { actionButton, actionRow } from "./StepFlowActionsRow.css";

type StepFlowActionsRowProps = {
  navigation: StepFlowNavigation;
  previousLabel?: string;
  nextLabel?: string;
  finalEnabledLabel?: string;
  finalDisabledLabel?: string;
  activityNamePrefix?: string;
};

export const StepFlowActionsRow = ({
  navigation,
  previousLabel = "이전",
  nextLabel = "다음",
  finalEnabledLabel = "완료",
  finalDisabledLabel = "등록",
  activityNamePrefix = "step-flow",
}: StepFlowActionsRowProps) => {
  const {
    showPrevLink,
    showNextLink,
    prevHref,
    nextHref,
    isLastStep,
    hasPreviousStep,
  } = navigation;

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
        mode={showNextLink ? "visible" : "hidden"}
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
        mode={showNextLink ? "hidden" : "visible"}
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
