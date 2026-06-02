"use client";

import { OTHER_LEARNING_PERIOD_CONFIG } from "../../period-settings/model/periodSettings.config";
import { PeriodSettingsPanel } from "../../period-settings/ui/PeriodSettingsPanel";

export const OtherLearningSettingsPanel = () => (
  <PeriodSettingsPanel config={OTHER_LEARNING_PERIOD_CONFIG} />
);
