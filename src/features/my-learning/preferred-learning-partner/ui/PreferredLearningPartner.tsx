"use client";

import { useEffect } from "react";

import { SectionCardStack } from "@shared/ui";
import { SelectableChipSection } from "@features/selectable-chip-section";

import {
  FRIEND_TYPE_ITEMS,
  TEACHER_TYPE_ITEMS,
  USER_TYPE_ITEMS,
} from "../model/preferredLearningPartner.consts";
import { usePreferredLearningPartnerForm } from "../model/usePreferredLearningPartnerForm";

type PreferredLearningPartnerProps = {
  onValidityChange: (isValid: boolean) => void;
};

export const PreferredLearningPartner = ({
  onValidityChange,
}: PreferredLearningPartnerProps) => {
  const {
    selectedTeacherTypes,
    selectedFriendTypes,
    selectedUserTypes,
    isPartnerStepCompleted,
    setSelectedTeacherTypes,
    setSelectedFriendTypes,
    setSelectedUserTypes,
  } = usePreferredLearningPartnerForm();

  useEffect(() => {
    onValidityChange(isPartnerStepCompleted);
  }, [isPartnerStepCompleted, onValidityChange]);

  return (
    <SectionCardStack>
      <SelectableChipSection
        title="교사 유형"
        description="(복수 선택 가능)"
        items={TEACHER_TYPE_ITEMS}
        selectedItems={selectedTeacherTypes}
        onSelectedItems={setSelectedTeacherTypes}
      />
      <SelectableChipSection
        title="친구 유형"
        description="(복수 선택 가능)"
        items={FRIEND_TYPE_ITEMS}
        selectedItems={selectedFriendTypes}
        onSelectedItems={setSelectedFriendTypes}
      />
      <SelectableChipSection
        title="사용자 유형"
        description="(복수 선택 가능)"
        items={USER_TYPE_ITEMS}
        selectedItems={selectedUserTypes}
        onSelectedItems={setSelectedUserTypes}
      />
    </SectionCardStack>
  );
};
