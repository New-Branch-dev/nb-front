"use client";

import { useReportStepValidity } from "@shared/hook/useReportStepValidity";
import { SectionCardStack } from "@shared/ui";

import { SelectableChipSection } from "@features/selectable-chip-section";

import {
  CLASS_STYLE_ITEMS,
  LEARNING_METHOD_ITEMS,
  MATERIAL_FORMAT_ITEMS,
} from "../model/learningPreferences.consts";
import { useLearningPreferencesForm } from "../model/useLearningPreferencesForm";

type LearningPreferencesProps = {
  onValidityChange: (isValid: boolean) => void;
  isActive: boolean;
};

export const LearningPreferences = ({
  onValidityChange,
  isActive,
}: LearningPreferencesProps) => {
  const {
    materialFormats,
    classStyles,
    learningMethods,
    isPreferencesStepCompleted,
  } = useLearningPreferencesForm();

  useReportStepValidity(
    isActive,
    isPreferencesStepCompleted,
    onValidityChange,
  );

  return (
    <SectionCardStack>
      <SelectableChipSection
        title="자료형식"
        description="(복수 선택 가능)"
        items={MATERIAL_FORMAT_ITEMS}
        selectedItems={materialFormats.selectedItems}
        onSelectedItems={materialFormats.setSelectedItems}
        isDirectInputActive={materialFormats.isDirectInputActive}
        onDirectInputActiveChange={materialFormats.setIsDirectInputActive}
        directInputValue={materialFormats.directInputValue}
        onDirectInputChange={materialFormats.setDirectInputValue}
        directInputName="my-learning-material-format-direct"
        directInputPlaceholder="자료 형식을 입력해 주세요"
      />
      <SelectableChipSection
        title="수업방식"
        description="(복수 선택 가능)"
        items={CLASS_STYLE_ITEMS}
        selectedItems={classStyles.selectedItems}
        onSelectedItems={classStyles.setSelectedItems}
        isDirectInputActive={classStyles.isDirectInputActive}
        onDirectInputActiveChange={classStyles.setIsDirectInputActive}
        directInputValue={classStyles.directInputValue}
        onDirectInputChange={classStyles.setDirectInputValue}
        directInputName="my-learning-class-style-direct"
        directInputPlaceholder="수업 방식을 입력해 주세요"
      />
      <SelectableChipSection
        title="학습방법"
        description="(복수 선택 가능)"
        items={LEARNING_METHOD_ITEMS}
        selectedItems={learningMethods.selectedItems}
        onSelectedItems={learningMethods.setSelectedItems}
        isDirectInputActive={learningMethods.isDirectInputActive}
        onDirectInputActiveChange={learningMethods.setIsDirectInputActive}
        directInputValue={learningMethods.directInputValue}
        onDirectInputChange={learningMethods.setDirectInputValue}
        directInputName="my-learning-learning-method-direct"
        directInputPlaceholder="학습 방법을 입력해 주세요"
      />
    </SectionCardStack>
  );
};
