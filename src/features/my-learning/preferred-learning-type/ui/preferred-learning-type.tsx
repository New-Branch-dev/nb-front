"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "../../model/use-my-learning-store";
import { LearningPreferencesView } from "./preferred-learning-type-view";

export const PreferredLearningType = () => {
  const {
    materialFormats,
    classStyles,
    learningMethods,
    setLearningPreferences,
  } = useMyLearningStore(
    useShallow((state) => ({
      materialFormats: state.learningPreferences.materialFormats,
      classStyles: state.learningPreferences.classStyles,
      learningMethods: state.learningPreferences.learningMethods,
      setLearningPreferences: state.setLearningPreferences,
    })),
  );

  const handleMaterialFormatsChange = (items: string[]) => {
    setLearningPreferences({ materialFormats: items });
  };

  const handleClassStylesChange = (items: string[]) => {
    setLearningPreferences({ classStyles: items });
  };

  const handleLearningMethodsChange = (items: string[]) => {
    setLearningPreferences({ learningMethods: items });
  };

  const viewProps = {
    materialFormats,
    classStyles,
    learningMethods,
    onMaterialFormatsChange: handleMaterialFormatsChange,
    onClassStylesChange: handleClassStylesChange,
    onLearningMethodsChange: handleLearningMethodsChange,
  };

  return <LearningPreferencesView {...viewProps} />;
};
