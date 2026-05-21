"use client";

import {
  RegistrationAiAnalysisPanel,
  registrationStepRoot,
  stepSummaryPanelCard,
} from "@shared/ui";

import { useRegisterAiForm } from "../model/useRegisterAiForm";
import { RegisterProfile } from "./RegisterProfile";

export const Register = () => {
  const aiForm = useRegisterAiForm();

  return (
    <div className={registrationStepRoot}>
      <div className={stepSummaryPanelCard}>
        <RegisterProfile />
      </div>

      <RegistrationAiAnalysisPanel
        titleId="my-learning-register-ai-title"
        learningStyle={aiForm.learningStyle}
        recommendedMethod={aiForm.recommendedMethod}
        learningStyleInputName="my-learning-learning-style-direct"
        recommendedMethodInputName="my-learning-recommended-method-direct"
      />
    </div>
  );
};
