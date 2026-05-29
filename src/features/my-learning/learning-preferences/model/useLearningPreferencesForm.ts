"use client";

import { useSelectableChipWithDirectInput } from "@shared/hook/useSelectableChipWithDirectInput";

export const useLearningPreferencesForm = () => {
  const materialFormats = useSelectableChipWithDirectInput();
  const classStyles = useSelectableChipWithDirectInput();
  const learningMethods = useSelectableChipWithDirectInput();

  const isPreferencesStepCompleted =
    materialFormats.hasSelection &&
    classStyles.hasSelection &&
    learningMethods.hasSelection;

  return {
    materialFormats,
    classStyles,
    learningMethods,
    isPreferencesStepCompleted,
  };
};
