"use client";

import { useShallow } from "zustand/react/shallow";

import {
  convertDateKeyToDate,
  convertDateToDateKey,
} from "@shared/lib/date";

import { useLearningGoalsStore } from "@features/learning-goals/model/use-learning-goals-store";
import { MEMORIZATION_PERIOD_CONFIG } from "@features/learning-goals/period-settings/model/period-settings.config";
import { PeriodSettings } from "@features/learning-goals/period-settings/ui/period-settings";

export const Memorization = () => {
  const { memorization, setMemorization } = useLearningGoalsStore(
    useShallow((state) => ({
      memorization: state.memorization,
      setMemorization: state.setMemorization,
    })),
  );

  const handleStartDateChange = (date: Date) => {
    setMemorization({ startDate: convertDateToDateKey(date) });
  };

  const handleEndDateChange = (date: Date) => {
    setMemorization({ endDate: convertDateToDateKey(date) });
  };

  const handleReviewCountChange = (value: string) => {
    setMemorization({ reviewCount: value });
  };

  const handleMemorizationMethodsChange = (items: string[]) => {
    setMemorization({ memorizationMethods: items });
  };

  return (
    <PeriodSettings
      config={MEMORIZATION_PERIOD_CONFIG}
      startDate={convertDateKeyToDate(memorization.startDate)}
      endDate={convertDateKeyToDate(memorization.endDate)}
      reviewCount={memorization.reviewCount}
      methodSelections={memorization.memorizationMethods}
      onStartDateChange={handleStartDateChange}
      onEndDateChange={handleEndDateChange}
      onReviewCountChange={handleReviewCountChange}
      onMethodSelectionsChange={handleMemorizationMethodsChange}
    />
  );
};
