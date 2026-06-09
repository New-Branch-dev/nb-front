import React from "react";

import { activeBar, bar, barContainer, container, stepIndicator, stepText } from "./Stepper.css";

interface StepperProps {
  currentStep: number;
  totalSteps?: number;
}

export const Stepper = ({ currentStep, totalSteps = 4 }: StepperProps) => {
  const leftPosition = `${((currentStep - 0.5) / totalSteps) * 100}%`;

  return (
    <div className={container}>
      <div className={barContainer}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`${bar} ${index < currentStep ? activeBar : ""}`}
          />
        ))}
      </div>
      <div className={stepIndicator} style={{ left: leftPosition }}>
        <span className={stepText}>STEP {currentStep}</span>
      </div>
    </div>
  );
};