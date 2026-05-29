"use client";

import { useState } from "react";

import { useSelectableChipWithDirectInput } from "@shared/hook/useSelectableChipWithDirectInput";

export const usePeriodSettingsForm = () => {
  const methods = useSelectableChipWithDirectInput();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [reviewCount, setReviewCount] = useState("");

  const hasPeriod =
    startDate !== null &&
    endDate !== null &&
    startDate.getTime() <= endDate.getTime();

  const hasReviewCount = reviewCount !== "";

  const isValid = hasPeriod && hasReviewCount && methods.hasSelection;

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    reviewCount,
    setReviewCount,
    methodSelections: methods.selectedItems,
    setMethodSelections: methods.setSelectedItems,
    isMethodDirectInput: methods.isDirectInputActive,
    setIsMethodDirectInput: methods.setIsDirectInputActive,
    methodDirectText: methods.directInputValue,
    setMethodDirectText: methods.setDirectInputValue,
    methodDirectTags: methods.directInputTags,
    setMethodDirectTags: methods.setDirectInputTags,
    isValid,
  };
};
