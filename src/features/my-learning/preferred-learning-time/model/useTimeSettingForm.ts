"use client";

import { useMemo, useState } from "react";

import { formatDuration, formatTimeInput, toMinutes } from "./timeSetting.utils";

export const useTimeSettingForm = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const isValid = useMemo(
    () => toMinutes(startTime) !== null && toMinutes(endTime) !== null,
    [startTime, endTime],
  );
  const totalTime = useMemo(
    () => formatDuration(startTime, endTime),
    [startTime, endTime],
  );

  const setStartTimeFromInput = (value: string) => {
    setStartTime(formatTimeInput(value));
  };

  const setEndTimeFromInput = (value: string) => {
    setEndTime(formatTimeInput(value));
  };

  return {
    startTime,
    endTime,
    isValid,
    totalTime,
    setStartTimeFromInput,
    setEndTimeFromInput,
  };
};
