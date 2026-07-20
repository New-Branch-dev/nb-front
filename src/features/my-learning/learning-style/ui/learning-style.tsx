"use client";

import { useShallow } from "zustand/react/shallow";

import { LearningStyleView } from "@features/my-learning/learning-style/ui/learning-style-view";
import { useMyLearningStore } from "@features/my-learning/model/use-my-learning-store";

export const LearningStyle = () => {
  const {
    interests,
    strengths,
    personality,
    learningTendencies,
    setLearningPattern,
  } =
    useMyLearningStore(
      useShallow((state) => ({
        interests: state.learningPattern.interests,
        strengths: state.learningPattern.strengths,
        personality: state.learningPattern.personality,
        learningTendencies: state.learningPattern.learningTendencies,
        setLearningPattern: state.setLearningPattern,
      })),
    );

  const handleInterestsChange = (items: string[]) => {
    setLearningPattern({ interests: items });
  };

  const handleStrengthsChange = (items: string[]) => {
    setLearningPattern({ strengths: items });
  };

  const handlePersonalityChange = (items: string[]) => {
    setLearningPattern({ personality: items });
  };

  const handleLearningTendenciesChange = (items: string[]) => {
    setLearningPattern({ learningTendencies: items });
  };

  const viewProps = {
    interests,
    strengths,
    personality,
    learningTendencies,
    onInterestsChange: handleInterestsChange,
    onStrengthsChange: handleStrengthsChange,
    onPersonalityChange: handlePersonalityChange,
    onLearningTendenciesChange: handleLearningTendenciesChange,
  };

  return <LearningStyleView {...viewProps} />;
};
