"use client";

import { useShallow } from "zustand/react/shallow";

import { LearningStyleView } from "@features/my-learning/learning-style/ui/learning-style-view";
import { useMyLearningStore } from "@features/my-learning/model/use-my-learning-store";

export const LearningStyle = () => {
  const { interests, strengths, personality, setLearningPattern } =
    useMyLearningStore(
      useShallow((state) => ({
        interests: state.learningPattern.interests,
        strengths: state.learningPattern.strengths,
        personality: state.learningPattern.personality,
        setLearningPattern: state.setLearningPattern,
      })),
    );

  const handleInterestsChange = (items: string[]) => {
    setLearningPattern({ interests: items });
  };

  const handleStrengthsChange = (items: string[]) => {
    setLearningPattern({ strengths: items });
  };

  const handlePersonalityChange = (value: string) => {
    setLearningPattern({ personality: value });
  };

  const viewProps = {
    interests,
    strengths,
    personality,
    onInterestsChange: handleInterestsChange,
    onStrengthsChange: handleStrengthsChange,
    onPersonalityChange: handlePersonalityChange,
  };

  return <LearningStyleView {...viewProps} />;
};
