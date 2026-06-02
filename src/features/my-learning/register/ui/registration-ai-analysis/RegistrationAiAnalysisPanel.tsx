"use client";

import { useState } from "react";

import { ChipInputGroup } from "@shared/ui";

import {
  LEARNING_STYLE_ITEMS,
  RECOMMENDED_METHOD_ITEMS,
} from "./registrationAi.consts";
import {
  aiDivider,
  aiPanel,
  aiPanelInner,
  aiPanelTitle,
} from "./RegistrationAiAnalysis.css";

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

const RegistrationAiChipInput = ({
  items,
  field,
  directInputName,
  directInputPlaceholder,
}: RegistrationAiChipInputProps) => {
  const [isDirectInputActive, setIsDirectInputActive] = useState(false);
  const [directInputValue, setDirectInputValue] = useState("");
  const presetItems = items.filter((item) => item !== "직접입력");

  const presetSelections = field.selectedItems.filter((item) =>
    presetItems.includes(item),
  );

  const customSelections = field.selectedItems.filter(
    (item) => !presetItems.includes(item),
  );

  return (
    <ChipInputGroup
      chipSurface="onPrimary"
      items={items}
      selectedItems={field.selectedItems}
      onSelectedItemsChange={field.setSelectedItems}
      isDirectInputActive={isDirectInputActive}
      onDirectInputActiveChange={setIsDirectInputActive}
      directInputValue={directInputValue}
      onDirectInputChange={setDirectInputValue}
      directInputTags={customSelections}
      onDirectInputTagsChange={(tags) =>
        field.setSelectedItems([...presetSelections, ...tags])
      }
      directInputName={directInputName}
      directInputPlaceholder={directInputPlaceholder}
    />
  );
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
  return (
    <section className={aiPanel} aria-labelledby={titleId}>
      <div className={aiPanelInner}>
        <h2 id={titleId} className={aiPanelTitle}>
          AI 분석
        </h2>

        <RegistrationAiChipInput
          items={LEARNING_STYLE_ITEMS}
          field={learningStyle}
          directInputName={learningStyleInputName}
          directInputPlaceholder="학습 스타일을 입력해 주세요"
        />

        <div className={aiDivider} aria-hidden />

        <RegistrationAiChipInput
          items={RECOMMENDED_METHOD_ITEMS}
          field={recommendedMethod}
          directInputName={recommendedMethodInputName}
          directInputPlaceholder="추천 학습법을 입력해 주세요"
        />
      </div>
    </section>
  );
};
