"use client";

import { SectionCard, SectionCardStack, TextArea } from "@shared/ui";

import { SelectableChipSection } from "@features/selectable-chip-section";

import {
  INTEREST_ITEMS,
  STRENGTH_ITEMS,
} from "../model/learningPattern.consts";

const EMPTY_SELECTION: string[] = [];
const ignoreSelectionChange = () => {};

export const LearningPattern = () => {
  return (
    <SectionCardStack>
      <SelectableChipSection
        title="흥미"
        description="(복수 선택 가능)"
        items={INTEREST_ITEMS}
        selectedItems={EMPTY_SELECTION}
        onSelectedItems={ignoreSelectionChange}
        directInputName="my-learning-interest-direct"
        directInputPlaceholder="흥미를 입력해 주세요"
      />

      <SelectableChipSection
        title="적성"
        description="(복수 선택 가능)"
        items={STRENGTH_ITEMS}
        selectedItems={EMPTY_SELECTION}
        onSelectedItems={ignoreSelectionChange}
        directInputName="my-learning-strength-direct"
        directInputPlaceholder="적성을 입력해 주세요"
      />

      <SectionCard title="성격">
        <TextArea
          placeholder="나의 성격을 자유롭게 설명해주세요. (예: 꼼꼼하고 계획적인 편)"
          aria-label="성격 입력"
        />
      </SectionCard>
    </SectionCardStack>
  );
};
