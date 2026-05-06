"use client";

import { useMemo, useState } from "react";

export const usePreferredLearningTime = () => {
  const [restDate, setRestDate] = useState<Date | null>(new Date());
  const [isTimeValid, setIsTimeValid] = useState(false);

  const isPreferredLearningTimeCompleted = useMemo(
    () => Boolean(restDate) && isTimeValid,
    [isTimeValid, restDate],
  );

  const handleMoveMonth = (offset: number) => {
    setRestDate((prev) => {
      const baseDate = prev ?? new Date();
      return new Date(
        baseDate.getFullYear(),
        baseDate.getMonth() + offset,
        baseDate.getDate(),
      );
    });
  };

  return {
    restDate,
    isPreferredLearningTimeCompleted,
    setRestDate,
    setIsTimeValid,
    handleMoveMonth,
  };
};
