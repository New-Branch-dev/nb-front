"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "@features/my-learning/model/use-my-learning-store";
import { RegistrationAiAnalysisPanel } from "@features/my-learning/register/ui/registration-ai-analysis";

export const RegisterAiAnalysis = () => {
  const { learningStyles, recommendedMethods, setAiAnalysis } =
    useMyLearningStore(
      useShallow((state) => ({
        learningStyles: state.aiAnalysis.learningStyles,
        recommendedMethods: state.aiAnalysis.recommendedMethods,
        setAiAnalysis: state.setAiAnalysis,
      })),
    );

  const handleLearningStylesChange = (items: string[]) => {
    setAiAnalysis({ learningStyles: items });
  };

  const handleRecommendedMethodsChange = (items: string[]) => {
    setAiAnalysis({ recommendedMethods: items });
  };

  return (
    <RegistrationAiAnalysisPanel
      titleId="my-learning-register-ai-title"
      learningStyle={{
        selectedItems: learningStyles,
        setSelectedItems: handleLearningStylesChange,
      }}
      recommendedMethod={{
        selectedItems: recommendedMethods,
        setSelectedItems: handleRecommendedMethodsChange,
      }}
      learningStyleInputName="my-learning-learning-style-direct"
      recommendedMethodInputName="my-learning-recommended-method-direct"
    />
  );
};
