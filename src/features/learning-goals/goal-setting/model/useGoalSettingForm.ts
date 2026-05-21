"use client";

import { useState } from "react";

import { useSelectableChipWithDirectInput } from "@shared/hook/useSelectableChipWithDirectInput";

import { clampHour, isHourFilled } from "../lib/clampHour";
import { clampScore, isScoreFilled } from "../lib/clampScore";
import { WEEKDAY_LABELS, type WeekdayLabel } from "./consts";

const createEmptyWeeklyHours = (): Record<WeekdayLabel, string> =>
  Object.fromEntries(
    WEEKDAY_LABELS.map((day) => [day, ""]),
  ) as Record<WeekdayLabel, string>;

export const useGoalSettingForm = () => {
  const purpose = useSelectableChipWithDirectInput();
  const methods = useSelectableChipWithDirectInput();

  const [targetScore, setTargetScore] = useState("");
  const [maxScore, setMaxScore] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [weeklyHours, setWeeklyHours] =
    useState<Record<WeekdayLabel, string>>(createEmptyWeeklyHours);

  const hasScores = isScoreFilled(targetScore) && isScoreFilled(maxScore);

  const hasPeriod = startDate !== null && endDate !== null;

  const hasValidPeriod =
    hasPeriod &&
    startDate !== null &&
    endDate !== null &&
    startDate.getTime() <= endDate.getTime();

  const hasWeeklyHours = WEEKDAY_LABELS.some((day) =>
    isHourFilled(weeklyHours[day]),
  );

  const isValid =
    purpose.hasSelection &&
    hasScores &&
    hasValidPeriod &&
    hasWeeklyHours &&
    methods.hasSelection;

  const setTargetScoreClamped = (raw: string) => {
    setTargetScore(clampScore(raw.replace(/\D/g, "")));
  };

  const setMaxScoreClamped = (raw: string) => {
    setMaxScore(clampScore(raw.replace(/\D/g, "")));
  };

  const setWeeklyHour = (day: WeekdayLabel, raw: string) => {
    setWeeklyHours((prev) => ({
      ...prev,
      [day]: clampHour(raw.replace(/\D/g, "")),
    }));
  };

  return {
    purposeSelections: purpose.selectedItems,
    setPurposeSelections: purpose.setSelectedItems,
    isPurposeDirectInput: purpose.isDirectInputActive,
    setIsPurposeDirectInput: purpose.setIsDirectInputActive,
    purposeDirectText: purpose.directInputValue,
    setPurposeDirectText: purpose.setDirectInputValue,
    targetScore,
    setTargetScore: setTargetScoreClamped,
    maxScore,
    setMaxScore: setMaxScoreClamped,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    weeklyHours,
    setWeeklyHour,
    methodSelections: methods.selectedItems,
    setMethodSelections: methods.setSelectedItems,
    isMethodDirectInput: methods.isDirectInputActive,
    setIsMethodDirectInput: methods.setIsDirectInputActive,
    methodDirectText: methods.directInputValue,
    setMethodDirectText: methods.setDirectInputValue,
    isValid,
  };
};
