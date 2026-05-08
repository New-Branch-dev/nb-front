"use client";

import { useMemo, useState } from "react";

export const useLearningPreferencesForm = () => {
  const [selectedMaterialFormats, setSelectedMaterialFormats] = useState<
    string[]
  >([]);
  const [selectedClassStyles, setSelectedClassStyles] = useState<string[]>([]);
  const [selectedLearningMethods, setSelectedLearningMethods] = useState<
    string[]
  >([]);

  const isPreferencesStepCompleted = useMemo(
    () =>
      selectedMaterialFormats.length > 0 &&
      selectedClassStyles.length > 0 &&
      selectedLearningMethods.length > 0,
    [selectedMaterialFormats, selectedClassStyles, selectedLearningMethods],
  );

  return {
    selectedMaterialFormats,
    selectedClassStyles,
    selectedLearningMethods,
    isPreferencesStepCompleted,
    setSelectedMaterialFormats,
    setSelectedClassStyles,
    setSelectedLearningMethods,
  };
};
