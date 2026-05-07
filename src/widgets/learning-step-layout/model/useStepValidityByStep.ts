"use client";

import { useState } from "react";

import type { StepFlowStep } from "./stepFlow.types";

export const useStepValidityByStep = (steps: readonly StepFlowStep[]) => {
  const [validityByStep, setValidityByStep] = useState<
    Partial<Record<number, boolean>>
  >({});

  const [handlersByStep] = useState(
    () =>
      Object.fromEntries(
        steps.map(({ step }) => [
          step,
          (isValid: boolean) => {
            setValidityByStep((prev) => {
              if (prev[step] === isValid) return prev;
              return { ...prev, [step]: isValid };
            });
          },
        ]),
      ) as Record<number, (isValid: boolean) => void>,
  );

  return { validityByStep, handlersByStep };
};
