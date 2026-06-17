"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "../../model/use-my-learning-store";
import {
  convertDateKeyToDate,
  convertDateToDateKey,
} from "../model/preferred-time";
import { PreferredLearningTimeView } from "./preferred-learning-time-view";

export const PreferredLearningTime = () => {
  const { restDates, setPreferredTime } = useMyLearningStore(
    useShallow((state) => ({
      restDates: state.preferredTime.restDates,
      setPreferredTime: state.setPreferredTime,
    })),
  );
  const selectedRestDates = restDates.flatMap((dateKey) => {
    const date = convertDateKeyToDate(dateKey);

    return date ? [date] : [];
  });

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
    restDates,
    selectedRestDates,
    onRestDatesChange: handleRestDatesChange,
    onRestDateRemove: handleRestDateRemove,
  };

  return <PreferredLearningTimeView {...viewProps} />;
};
