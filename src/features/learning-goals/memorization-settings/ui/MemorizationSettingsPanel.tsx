"use client";

import { PeriodSettingsPanel } from "../../period-settings/ui/PeriodSettingsPanel";
import { MEMORIZATION_PERIOD_CONFIG } from "../../period-settings/model/periodSettings.config";

type MemorizationSettingsPanelProps = {
  onValidityChange: (isValid: boolean) => void;
  isActive: boolean;
};

export const MemorizationSettingsPanel = (props: MemorizationSettingsPanelProps) => (
  <PeriodSettingsPanel {...props} config={MEMORIZATION_PERIOD_CONFIG} />
);
