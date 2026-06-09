"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "../../model/use-my-learning-store";
import {
  convertDateKeyToDate,
  convertDateToDateKey,
  convertNormalizedTimeInput,
  convertTimeInput,
  convertTotalTimeLabel,
} from "../model/preferred-time";
import { PreferredLearningTimeView } from "./preferred-learning-time-view";

export const PreferredLearningTime = () => {
  const { startTime, endTime, restDates, setPreferredTime } = useMyLearningStore(
    useShallow((state) => ({
      startTime: state.preferredTime.startTime,
      endTime: state.preferredTime.endTime,
      restDates: state.preferredTime.restDates,
      setPreferredTime: state.setPreferredTime,
    })),
  );
  const totalTimeLabel = convertTotalTimeLabel(startTime, endTime);
  const selectedRestDates = restDates.map(convertDateKeyToDate);

  const handleStartTimeChange = (value: string) => {
    setPreferredTime({ startTime: convertTimeInput(value, startTime) });
  };

  const handleEndTimeChange = (value: string) => {
    setPreferredTime({ endTime: convertTimeInput(value, endTime) });
  };

  const handleStartTimeBlur = () => {
    setPreferredTime({ startTime: convertNormalizedTimeInput(startTime) });
  };

  const handleEndTimeBlur = () => {
    setPreferredTime({ endTime: convertNormalizedTimeInput(endTime) });
  };

  const handleRestDatesChange = (dates: Date[]) => {
    setPreferredTime({
      restDates: dates.map(convertDateToDateKey).sort(),
    });
  };

  const handleRestDateRemove = (dateKey: string) => {
    setPreferredTime({
      restDates: restDates.filter((restDate) => restDate !== dateKey),
    });
  };

  const viewProps = {
    startTime,
    endTime,
    totalTimeLabel,
    restDates,
    selectedRestDates,
    onStartTimeChange: handleStartTimeChange,
    onEndTimeChange: handleEndTimeChange,
    onStartTimeBlur: handleStartTimeBlur,
    onEndTimeBlur: handleEndTimeBlur,
    onRestDatesChange: handleRestDatesChange,
    onRestDateRemove: handleRestDateRemove,
  };

  return <PreferredLearningTimeView {...viewProps} />;
};
