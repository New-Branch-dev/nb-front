"use client";

import { useSelectableChipWithDirectInput } from "@shared/hook/useSelectableChipWithDirectInput";

export const useRegisterAiForm = () => {
  const learningStyle = useSelectableChipWithDirectInput();
  const recommendedMethod = useSelectableChipWithDirectInput();

  return {
    learningStyle,
    recommendedMethod,
  };
};
