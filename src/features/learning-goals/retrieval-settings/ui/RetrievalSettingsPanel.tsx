"use client";

import { RETRIEVAL_PERIOD_CONFIG } from "../../period-settings/model/periodSettings.config";
import { PeriodSettingsPanel } from "../../period-settings/ui/PeriodSettingsPanel";

export const RetrievalSettingsPanel = () => (
  <PeriodSettingsPanel config={RETRIEVAL_PERIOD_CONFIG} />
);
