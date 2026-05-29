"use client";

import { useEffect } from "react";

/** 현재 표시 중인 스텝 패널만 부모 validity state를 갱신합니다. */
export const useReportStepValidity = (
  isActive: boolean,
  isValid: boolean,
  onValidityChange: (isValid: boolean) => void,
) => {
  useEffect(() => {
    if (!isActive) return;
    onValidityChange(isValid);
  }, [isActive, isValid, onValidityChange]);
};
