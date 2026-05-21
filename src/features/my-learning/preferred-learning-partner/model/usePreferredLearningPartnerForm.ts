"use client";

import { useSelectableChipWithDirectInput } from "@shared/hook/useSelectableChipWithDirectInput";

export const usePreferredLearningPartnerForm = () => {
  const teacherTypes = useSelectableChipWithDirectInput();
  const friendTypes = useSelectableChipWithDirectInput();
  const userTypes = useSelectableChipWithDirectInput();

  const isPartnerStepCompleted =
    teacherTypes.hasSelection &&
    friendTypes.hasSelection &&
    userTypes.hasSelection;

  return {
    teacherTypes,
    friendTypes,
    userTypes,
    isPartnerStepCompleted,
  };
};
