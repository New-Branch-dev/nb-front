"use client";

import { useSelectableChipWithDirectInput } from "@shared/hook/useSelectableChipWithDirectInput";

export const useLearningGoalRegistrationAiForm = () => {
  const learningStyle = useSelectableChipWithDirectInput();
  const recommendedMethod = useSelectableChipWithDirectInput();

  return {
    learningStyle,
    recommendedMethod,
  };
};
