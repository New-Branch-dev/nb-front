import { registrationStepRoot, stepSummaryPanelCard } from "@shared/ui";

import { RegisterSummary } from "./register-summary";
import { RegistrationAiAnalysis } from "./registration-ai-analysis";

export const RegisterView = () => {
  return (
    <div className={registrationStepRoot} aria-label="학습 목표 등록">
      <div className={stepSummaryPanelCard}>
        <RegisterSummary />
      </div>

      <RegistrationAiAnalysis titleId="learning-goals-register-ai-title" />
    </div>
  );
};
