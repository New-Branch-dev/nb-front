"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "../../model/use-my-learning-store";
import { LearningPatternView } from "./learning-pattern-view";

export const LearningPattern = () => {
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

  return <LearningPatternView {...viewProps} />;
};
