"use client";

import { useShallow } from "zustand/react/shallow";

import {
  convertDateKeyToDate,
  convertDateToDateKey,
} from "@shared/lib/date";

import { useLearningGoalsStore } from "@features/learning-goals/model/use-learning-goals-store";
import { RETRIEVAL_PERIOD_CONFIG } from "@features/learning-goals/period-settings/model/period-settings.config";
import { PeriodSettings } from "@features/learning-goals/period-settings/ui/period-settings";

export const Retrieval = () => {
  const { retrieval, setRetrieval } = useLearningGoalsStore(
    useShallow((state) => ({
      retrieval: state.retrieval,
      setRetrieval: state.setRetrieval,
    })),
  );

  const handleStartDateChange = (date: Date) => {
    setRetrieval({ startDate: convertDateToDateKey(date) });
  };

  const handleEndDateChange = (date: Date) => {
    setRetrieval({ endDate: convertDateToDateKey(date) });
  };

  const handleReviewCountChange = (value: string) => {
    setRetrieval({ reviewCount: value });
  };

  const handleRetrievalMethodsChange = (items: string[]) => {
    setRetrieval({ retrievalMethods: items });
  };

  return (
    <PeriodSettings
      config={RETRIEVAL_PERIOD_CONFIG}
      startDate={convertDateKeyToDate(retrieval.startDate)}
      endDate={convertDateKeyToDate(retrieval.endDate)}
      reviewCount={retrieval.reviewCount}
      methodSelections={retrieval.retrievalMethods}
      onStartDateChange={handleStartDateChange}
      onEndDateChange={handleEndDateChange}
      onReviewCountChange={handleReviewCountChange}
      onMethodSelectionsChange={handleRetrievalMethodsChange}
    />
  );
};
