"use client";

import { useReportStepValidity } from "@shared/hook/useReportStepValidity";
import { SectionCard, SectionCardStack, TextArea } from "@shared/ui";

import { SelectableChipSection } from "@features/selectable-chip-section";

import {
  INTEREST_ITEMS,
  STRENGTH_ITEMS,
} from "../model/learningPattern.consts";
import { useLearningPatternForm } from "../model/useLearningPatternForm";

type LearningPatternProps = {
  onValidityChange: (isValid: boolean) => void;
  isActive: boolean;
};

export const LearningPattern = ({
  onValidityChange,
  isActive,
}: LearningPatternProps) => {
  const { interests, strengths, personality, isLearningPatternStepCompleted, setPersonality } =
    useLearningPatternForm();

  useReportStepValidity(
    isActive,
    isLearningPatternStepCompleted,
    onValidityChange,
  );

  return (
    <SectionCardStack>
      <SelectableChipSection
        title="흥미"
        description="(복수 선택 가능)"
        items={INTEREST_ITEMS}
        selectedItems={interests.selectedItems}
        onSelectedItems={interests.setSelectedItems}
        isDirectInputActive={interests.isDirectInputActive}
        onDirectInputActiveChange={interests.setIsDirectInputActive}
        directInputValue={interests.directInputValue}
        onDirectInputChange={interests.setDirectInputValue}
        directInputTags={interests.directInputTags}
        onDirectInputTagsChange={interests.setDirectInputTags}
        directInputName="my-learning-interest-direct"
        directInputPlaceholder="흥미를 입력해 주세요"
      />

      <SelectableChipSection
        title="적성"
        description="(복수 선택 가능)"
        items={STRENGTH_ITEMS}
        selectedItems={strengths.selectedItems}
        onSelectedItems={strengths.setSelectedItems}
        isDirectInputActive={strengths.isDirectInputActive}
        onDirectInputActiveChange={strengths.setIsDirectInputActive}
        directInputValue={strengths.directInputValue}
        onDirectInputChange={strengths.setDirectInputValue}
        directInputTags={strengths.directInputTags}
        onDirectInputTagsChange={strengths.setDirectInputTags}
        directInputName="my-learning-strength-direct"
        directInputPlaceholder="적성을 입력해 주세요"
      />

      <SectionCard title="성격">
        <TextArea
          value={personality}
          onChange={(event) => setPersonality(event.target.value)}
          placeholder="나의 성격을 자유롭게 설명해주세요. (예: 꼼꼼하고 계획적인 편)"
          aria-label="성격 입력"
        />
      </SectionCard>
    </SectionCardStack>
  );
};
