"use client";

import { useEffect } from "react";

import { SectionCard, SectionCardStack, TextArea } from "@shared/ui";
import { SelectableChipSection } from "@features/selectable-chip-section";

import {
  INTEREST_ITEMS,
  STRENGTH_ITEMS,
} from "../model/learningPattern.consts";
import { useLearningPatternForm } from "../model/useLearningPatternForm";

type LearningPatternProps = {
  onValidityChange: (isValid: boolean) => void;
};

export const LearningPattern = ({ onValidityChange }: LearningPatternProps) => {
  const {
    selectedInterests,
    selectedStrengths,
    personality,
    isLearningPatternStepCompleted,
    setSelectedInterests,
    setSelectedStrengths,
    setPersonality,
  } = useLearningPatternForm();

  useEffect(() => {
    onValidityChange(isLearningPatternStepCompleted);
  }, [isLearningPatternStepCompleted, onValidityChange]);

  return (
    <SectionCardStack>
      <SelectableChipSection
        title="흥미"
        description="(복수 선택 가능)"
        items={INTEREST_ITEMS}
        selectedItems={selectedInterests}
        onSelectedItems={setSelectedInterests}
      />

      <SelectableChipSection
        title="적성"
        description="(복수 선택 가능)"
        items={STRENGTH_ITEMS}
        selectedItems={selectedStrengths}
        onSelectedItems={setSelectedStrengths}
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
