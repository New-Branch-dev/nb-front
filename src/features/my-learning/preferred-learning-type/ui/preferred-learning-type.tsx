"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "@features/my-learning/model/use-my-learning-store";
import { LearningTypeView } from "@features/my-learning/preferred-learning-type/ui/preferred-learning-type-view";

export const PreferredLearningType = () => {
  const { materialFormats, classStyles, learningMethods, setLearningType } =
    useMyLearningStore(
      useShallow((state) => ({
        materialFormats: state.learningType.materialFormats,
        classStyles: state.learningType.classStyles,
        learningMethods: state.learningType.learningMethods,
        setLearningType: state.setLearningType,
      })),
    );

  const handleMaterialFormatsChange = (items: string[]) => {
    setLearningType({ materialFormats: items });
  };

  const handleClassStylesChange = (items: string[]) => {
    setLearningType({ classStyles: items });
  };

  const handleLearningMethodsChange = (items: string[]) => {
    setLearningType({ learningMethods: items });
  };

  const viewProps = {
    materialFormats,
    classStyles,
    learningMethods,
    onMaterialFormatsChange: handleMaterialFormatsChange,
    onClassStylesChange: handleClassStylesChange,
    onLearningMethodsChange: handleLearningMethodsChange,
  };

  return <LearningTypeView {...viewProps} />;
};
