"use client";

import { useState } from "react";

import {
  LEARNING_STYLE_ITEMS,
  RECOMMENDED_METHOD_ITEMS,
} from "./registration-ai.consts";
import {
  RegistrationAiAnalysisPanelView,
  type RegistrationAiChipInputViewProps,
} from "./registration-ai-analysis-panel-view";

type ChipFieldState = {
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
};

type RegistrationAiChipInputProps = {
  items: readonly string[];
  field: ChipFieldState;
  directInputName: string;
  directInputPlaceholder: string;
};

const useRegistrationAiChipInput = ({
  items,
  field,
  directInputName,
  directInputPlaceholder,
}: RegistrationAiChipInputProps): RegistrationAiChipInputViewProps => {
  const [isDirectInputActive, setIsDirectInputActive] = useState(false);
  const [directInputValue, setDirectInputValue] = useState("");
  const presetItems = items.filter((item) => item !== "직접입력");
  const presetSelections = field.selectedItems.filter((item) =>
    presetItems.includes(item),
  );
  const customSelections = field.selectedItems.filter(
    (item) => !presetItems.includes(item),
  );

  return {
    items,
    selectedItems: field.selectedItems,
    onSelectedItemsChange: field.setSelectedItems,
    isDirectInputActive,
    onDirectInputActiveChange: setIsDirectInputActive,
    directInputValue,
    onDirectInputChange: setDirectInputValue,
    directInputTags: customSelections,
    onDirectInputTagsChange: (tags) =>
      field.setSelectedItems([...presetSelections, ...tags]),
    directInputName,
    directInputPlaceholder,
  };
};

export type RegistrationAiAnalysisPanelProps = {
  titleId?: string;
  learningStyle: ChipFieldState;
  recommendedMethod: ChipFieldState;
  learningStyleInputName?: string;
  recommendedMethodInputName?: string;
};

export const RegistrationAiAnalysisPanel = ({
  titleId = "registration-ai-title",
  learningStyle,
  recommendedMethod,
  learningStyleInputName = "registration-learning-style-direct",
  recommendedMethodInputName = "registration-recommended-method-direct",
}: RegistrationAiAnalysisPanelProps) => {
  const learningStyleInput = useRegistrationAiChipInput({
    items: LEARNING_STYLE_ITEMS,
    field: learningStyle,
    directInputName: learningStyleInputName,
    directInputPlaceholder: "학습 스타일을 입력해 주세요",
  });
  const recommendedMethodInput = useRegistrationAiChipInput({
    items: RECOMMENDED_METHOD_ITEMS,
    field: recommendedMethod,
    directInputName: recommendedMethodInputName,
    directInputPlaceholder: "추천 학습법을 입력해 주세요",
  });

  return (
    <RegistrationAiAnalysisPanelView
      titleId={titleId}
      learningStyleInput={learningStyleInput}
      recommendedMethodInput={recommendedMethodInput}
    />
  );
};
