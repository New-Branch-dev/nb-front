"use client";

import { useEffect } from "react";

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
};

export const LearningPreferences = ({
  onValidityChange,
}: LearningPreferencesProps) => {
  const {
    selectedMaterialFormats,
    selectedClassStyles,
    selectedLearningMethods,
    isPreferencesStepCompleted,
    setSelectedMaterialFormats,
    setSelectedClassStyles,
    setSelectedLearningMethods,
  } = useLearningPreferencesForm();

  useEffect(() => {
    onValidityChange(isPreferencesStepCompleted);
  }, [isPreferencesStepCompleted, onValidityChange]);

  return (
    <SectionCardStack>
      <SelectableChipSection
        title="자료형식"
        description="(복수 선택 가능)"
        items={MATERIAL_FORMAT_ITEMS}
        selectedItems={selectedMaterialFormats}
        onSelectedItems={setSelectedMaterialFormats}
      />
      <SelectableChipSection
        title="수업방식"
        description="(복수 선택 가능)"
        items={CLASS_STYLE_ITEMS}
        selectedItems={selectedClassStyles}
        onSelectedItems={setSelectedClassStyles}
      />
      <SelectableChipSection
        title="학습방법"
        description="(복수 선택 가능)"
        items={LEARNING_METHOD_ITEMS}
        selectedItems={selectedLearningMethods}
        onSelectedItems={setSelectedLearningMethods}
      />
    </SectionCardStack>
  );
};
