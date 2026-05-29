"use client";

import { PeriodSettingsPanel } from "../../period-settings/ui/PeriodSettingsPanel";
import { OTHER_LEARNING_PERIOD_CONFIG } from "../../period-settings/model/periodSettings.config";

type OtherLearningSettingsPanelProps = {
  onValidityChange: (isValid: boolean) => void;
  isActive: boolean;
};

export const OtherLearningSettingsPanel = (props: OtherLearningSettingsPanelProps) => (
  <PeriodSettingsPanel {...props} config={OTHER_LEARNING_PERIOD_CONFIG} />
);
