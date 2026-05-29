"use client";

import { useState } from "react";

import {
  formatDurationLabel,
  formatTimeInput,
  getTimeInputError,
  normalizeTimeInput,
  parseTime,
} from "./timeSetting.utils";

export const useTimeSettingForm = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startError, setStartError] = useState<string | null>(null);
  const [endError, setEndError] = useState<string | null>(null);

  const isValid =
    parseTime(startTime) !== null &&
    parseTime(endTime) !== null &&
    startError === null &&
    endError === null;

  const totalTimeLabel = formatDurationLabel(startTime, endTime);

  const setStartTimeFromInput = (value: string) => {
    setStartTime(formatTimeInput(value));

    if (startError !== null) {
      setStartError(null);
    }
  };

  const setEndTimeFromInput = (value: string) => {
    setEndTime(formatTimeInput(value));

    if (endError !== null) {
      setEndError(null);
    }
  };

  const handleStartBlur = () => {
    const normalized = normalizeTimeInput(startTime);
    setStartTime(normalized);
    setStartError(getTimeInputError(normalized));
  };

  const handleEndBlur = () => {
    const normalized = normalizeTimeInput(endTime);
    setEndTime(normalized);
    setEndError(getTimeInputError(normalized));
  };

  return {
    startTime,
    endTime,
    startError,
    endError,
    isValid,
    totalTimeLabel,
    setStartTimeFromInput,
    setEndTimeFromInput,
    handleStartBlur,
    handleEndBlur,
  };
};
