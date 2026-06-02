"use client";

import {
  registrationStepRoot,
  stepSummaryPanelCard,
} from "@shared/ui";

import { RegisterProfile } from "./RegisterProfile";
import { RegistrationAiAnalysisPanel } from "./registration-ai-analysis";

const EMPTY_SELECTION: string[] = [];
const ignoreSelectionChange = () => {};

export const Register = () => {
  return (
    <div className={registrationStepRoot}>
      <div className={stepSummaryPanelCard}>
        <RegisterProfile />
      </div>

      <RegistrationAiAnalysisPanel
        titleId="my-learning-register-ai-title"
        learningStyle={{
          selectedItems: EMPTY_SELECTION,
          setSelectedItems: ignoreSelectionChange,
        }}
        recommendedMethod={{
          selectedItems: EMPTY_SELECTION,
          setSelectedItems: ignoreSelectionChange,
        }}
        learningStyleInputName="my-learning-learning-style-direct"
        recommendedMethodInputName="my-learning-recommended-method-direct"
      />
    </div>
  );
};
