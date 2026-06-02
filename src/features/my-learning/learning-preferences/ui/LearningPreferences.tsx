"use client";

import { SectionCardStack } from "@shared/ui";

import { SelectableChipSection } from "@features/selectable-chip-section";

import {
  CLASS_STYLE_ITEMS,
  LEARNING_METHOD_ITEMS,
  MATERIAL_FORMAT_ITEMS,
} from "../model/learningPreferences.consts";

const EMPTY_SELECTION: string[] = [];
const ignoreSelectionChange = () => {};

export const LearningPreferences = () => {
  return (
    <SectionCardStack>
      <SelectableChipSection
        title="자료형식"
        description="(복수 선택 가능)"
        items={MATERIAL_FORMAT_ITEMS}
        selectedItems={EMPTY_SELECTION}
        onSelectedItems={ignoreSelectionChange}
        directInputName="my-learning-material-format-direct"
        directInputPlaceholder="자료 형식을 입력해 주세요"
      />
      <SelectableChipSection
        title="수업방식"
        description="(복수 선택 가능)"
        items={CLASS_STYLE_ITEMS}
        selectedItems={EMPTY_SELECTION}
        onSelectedItems={ignoreSelectionChange}
        directInputName="my-learning-class-style-direct"
        directInputPlaceholder="수업 방식을 입력해 주세요"
      />
      <SelectableChipSection
        title="학습방법"
        description="(복수 선택 가능)"
        items={LEARNING_METHOD_ITEMS}
        selectedItems={EMPTY_SELECTION}
        onSelectedItems={ignoreSelectionChange}
        directInputName="my-learning-learning-method-direct"
        directInputPlaceholder="학습 방법을 입력해 주세요"
      />
    </SectionCardStack>
  );
};
