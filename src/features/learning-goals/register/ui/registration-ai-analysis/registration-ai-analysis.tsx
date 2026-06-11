"use client";

import {
  LEARNING_STYLE_ITEMS,
  RECOMMENDED_METHOD_ITEMS,
} from "./registration-ai.consts";
import {
  RegistrationAiAnalysisView,
  type RegistrationAiChipInputViewProps,
} from "./registration-ai-analysis-view";

const noopItems: (items: string[]) => void = () => {};
const noopActive: (isActive: boolean) => void = () => {};
const noopValue: (value: string) => void = () => {};

const createRegistrationAiInput = (
  items: readonly string[],
  directInputName: string,
  directInputPlaceholder: string,
): RegistrationAiChipInputViewProps => {
  return {
    items,
    selectedItems: [],
    onSelectedItemsChange: noopItems,
    isDirectInputActive: false,
    onDirectInputActiveChange: noopActive,
    directInputValue: "",
    onDirectInputChange: noopValue,
    directInputTags: [],
    onDirectInputTagsChange: noopItems,
    directInputName,
    directInputPlaceholder,
  };
};

export type RegistrationAiAnalysisProps = {
  titleId?: string;
  learningStyleInputName?: string;
  recommendedMethodInputName?: string;
};

export const RegistrationAiAnalysis = ({
  titleId = "registration-ai-title",
  learningStyleInputName = "registration-learning-style-direct",
  recommendedMethodInputName = "registration-recommended-method-direct",
}: RegistrationAiAnalysisProps) => {
  const learningStyleInput = createRegistrationAiInput(
    LEARNING_STYLE_ITEMS,
    learningStyleInputName,
    "학습 스타일을 입력해 주세요",
  );
  const recommendedMethodInput = createRegistrationAiInput(
    RECOMMENDED_METHOD_ITEMS,
    recommendedMethodInputName,
    "추천 학습법을 입력해 주세요",
  );

  return (
    <RegistrationAiAnalysisView
      titleId={titleId}
      learningStyleInput={learningStyleInput}
      recommendedMethodInput={recommendedMethodInput}
    />
  );
};
