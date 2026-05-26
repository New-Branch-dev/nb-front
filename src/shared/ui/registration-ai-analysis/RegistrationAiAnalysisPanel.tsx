"use client";

import { ChipInputGroup } from "@shared/ui/chip-input-group";
import type { useSelectableChipWithDirectInput } from "@shared/hook/useSelectableChipWithDirectInput";

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

type ChipFieldState = ReturnType<typeof useSelectableChipWithDirectInput>;

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

        <ChipInputGroup
          chipSurface="onPrimary"
          items={LEARNING_STYLE_ITEMS}
          selectedItems={learningStyle.selectedItems}
          onSelectedItemsChange={learningStyle.setSelectedItems}
          isDirectInputActive={learningStyle.isDirectInputActive}
          onDirectInputActiveChange={learningStyle.setIsDirectInputActive}
          directInputValue={learningStyle.directInputValue}
          onDirectInputChange={learningStyle.setDirectInputValue}
          directInputTags={learningStyle.directInputTags}
          onDirectInputTagsChange={learningStyle.setDirectInputTags}
          directInputName={learningStyleInputName}
          directInputPlaceholder="학습 스타일을 입력해 주세요"
        />

        <div className={aiDivider} aria-hidden />

        <ChipInputGroup
          chipSurface="onPrimary"
          items={RECOMMENDED_METHOD_ITEMS}
          selectedItems={recommendedMethod.selectedItems}
          onSelectedItemsChange={recommendedMethod.setSelectedItems}
          isDirectInputActive={recommendedMethod.isDirectInputActive}
          onDirectInputActiveChange={recommendedMethod.setIsDirectInputActive}
          directInputValue={recommendedMethod.directInputValue}
          onDirectInputChange={recommendedMethod.setDirectInputValue}
          directInputTags={recommendedMethod.directInputTags}
          onDirectInputTagsChange={recommendedMethod.setDirectInputTags}
          directInputName={recommendedMethodInputName}
          directInputPlaceholder="추천 학습법을 입력해 주세요"
        />
      </div>
    </section>
  );
};
