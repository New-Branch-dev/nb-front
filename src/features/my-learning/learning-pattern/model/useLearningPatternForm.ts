"use client";

import { useMemo, useState } from "react";

export const useLearningPatternForm = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([]);
  const [personality, setPersonality] = useState("");

  const isLearningPatternStepCompleted = useMemo(
    () => selectedInterests.length > 0 && selectedStrengths.length > 0,
    [selectedInterests, selectedStrengths],
  );

  return {
    selectedInterests,
    selectedStrengths,
    personality,
    isLearningPatternStepCompleted,
    setSelectedInterests,
    setSelectedStrengths,
    setPersonality,
  };
};
