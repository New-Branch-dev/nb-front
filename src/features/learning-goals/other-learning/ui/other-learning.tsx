"use client";

import { useShallow } from "zustand/react/shallow";

import {
  convertDateKeyToDate,
  convertDateToDateKey,
} from "@shared/lib/date";

import { useLearningGoalsStore } from "@features/learning-goals/model/use-learning-goals-store";
import { OTHER_LEARNING_PERIOD_CONFIG } from "@features/learning-goals/period-settings/model/period-settings.config";
import { PeriodSettings } from "@features/learning-goals/period-settings/ui/period-settings";

export const OtherLearning = () => {
  const { otherLearning, setOtherLearning } = useLearningGoalsStore(
    useShallow((state) => ({
      otherLearning: state.otherLearning,
      setOtherLearning: state.setOtherLearning,
    })),
  );

  const handleStartDateChange = (date: Date) => {
    setOtherLearning({ startDate: convertDateToDateKey(date) });
  };

  const handleEndDateChange = (date: Date) => {
    setOtherLearning({ endDate: convertDateToDateKey(date) });
  };

  const handleReviewCountChange = (value: string) => {
    setOtherLearning({ reviewCount: value });
  };

  const handleOtherLearningMethodsChange = (items: string[]) => {
    setOtherLearning({ otherLearningMethods: items });
  };

  return (
    <PeriodSettings
      config={OTHER_LEARNING_PERIOD_CONFIG}
      startDate={convertDateKeyToDate(otherLearning.startDate)}
      endDate={convertDateKeyToDate(otherLearning.endDate)}
      reviewCount={otherLearning.reviewCount}
      methodSelections={otherLearning.otherLearningMethods}
      onStartDateChange={handleStartDateChange}
      onEndDateChange={handleEndDateChange}
      onReviewCountChange={handleReviewCountChange}
      onMethodSelectionsChange={handleOtherLearningMethodsChange}
    />
  );
};
