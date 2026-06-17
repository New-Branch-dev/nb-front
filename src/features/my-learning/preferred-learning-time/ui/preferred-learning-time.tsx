"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "@features/my-learning/model/use-my-learning-store";
import {
  convertDateKeyToDate,
  convertDateToDateKey,
} from "@features/my-learning/preferred-learning-time/model/preferred-time";
import { PreferredLearningTimeView } from "@features/my-learning/preferred-learning-time/ui/preferred-learning-time-view";

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
