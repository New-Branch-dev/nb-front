"use client";

import { useState } from "react";

import { useSelectableChipWithDirectInput } from "@shared/hook/useSelectableChipWithDirectInput";

export const useLearningPatternForm = () => {
  const interests = useSelectableChipWithDirectInput();
  const strengths = useSelectableChipWithDirectInput();
  const [personality, setPersonality] = useState("");

  const isLearningPatternStepCompleted =
    interests.hasSelection && strengths.hasSelection;

  return {
    interests,
    strengths,
    personality,
    isLearningPatternStepCompleted,
    setPersonality,
  };
};
