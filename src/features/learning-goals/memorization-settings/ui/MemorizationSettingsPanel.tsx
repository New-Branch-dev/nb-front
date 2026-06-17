"use client";

import { MEMORIZATION_PERIOD_CONFIG } from "../../period-settings/model/periodSettings.config";
import { PeriodSettingsPanel } from "../../period-settings/ui/PeriodSettingsPanel";

export const MemorizationSettingsPanel = () => (
  <PeriodSettingsPanel config={MEMORIZATION_PERIOD_CONFIG} />
);
