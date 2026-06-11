"use client";

import type { PeriodSettingsConfig } from "@features/learning-goals/period-settings/model/period-settings.types";
import { PeriodSettingsView } from "@features/learning-goals/period-settings/ui/period-settings-view";

type PeriodSettingsProps = {
  config: PeriodSettingsConfig;
  startDate?: Date | null;
  endDate?: Date | null;
  reviewCount?: string;
  methodSelections?: string[];
  onStartDateChange?: (date: Date) => void;
  onEndDateChange?: (date: Date) => void;
  onReviewCountChange?: (value: string) => void;
  onMethodSelectionsChange?: (items: string[]) => void;
};

const noopDate = () => {};
const noopValue = () => {};
const noopItems = () => {};

export const PeriodSettings = ({
  config,
  startDate = null,
  endDate = null,
  reviewCount = "",
  methodSelections = [],
  onStartDateChange = noopDate,
  onEndDateChange = noopDate,
  onReviewCountChange = noopValue,
  onMethodSelectionsChange = noopItems,
}: PeriodSettingsProps) => {
  return (
    <PeriodSettingsView
      config={config}
      startDate={startDate}
      endDate={endDate}
      reviewCount={reviewCount}
      methodSelections={methodSelections}
      onStartDateChange={onStartDateChange}
      onEndDateChange={onEndDateChange}
      onReviewCountChange={onReviewCountChange}
      onMethodSelectionsChange={onMethodSelectionsChange}
    />
  );
};
