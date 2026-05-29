"use client";

import { PeriodSettingsPanel } from "../../period-settings/ui/PeriodSettingsPanel";
import { RETRIEVAL_PERIOD_CONFIG } from "../../period-settings/model/periodSettings.config";

type RetrievalSettingsPanelProps = {
  onValidityChange: (isValid: boolean) => void;
  isActive: boolean;
};

export const RetrievalSettingsPanel = (props: RetrievalSettingsPanelProps) => (
  <PeriodSettingsPanel {...props} config={RETRIEVAL_PERIOD_CONFIG} />
);
