"use client";

import { useReportStepValidity } from "@shared/hook/useReportStepValidity";
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
  isActive: boolean;
};

export const PreferredLearningPartner = ({
  onValidityChange,
  isActive,
}: PreferredLearningPartnerProps) => {
  const { teacherTypes, friendTypes, userTypes, isPartnerStepCompleted } =
    usePreferredLearningPartnerForm();

  useReportStepValidity(isActive, isPartnerStepCompleted, onValidityChange);

  return (
    <SectionCardStack>
      <SelectableChipSection
        title="교사 유형"
        description="(복수 선택 가능)"
        items={TEACHER_TYPE_ITEMS}
        selectedItems={teacherTypes.selectedItems}
        onSelectedItems={teacherTypes.setSelectedItems}
        isDirectInputActive={teacherTypes.isDirectInputActive}
        onDirectInputActiveChange={teacherTypes.setIsDirectInputActive}
        directInputValue={teacherTypes.directInputValue}
        onDirectInputChange={teacherTypes.setDirectInputValue}
        directInputTags={teacherTypes.directInputTags}
        onDirectInputTagsChange={teacherTypes.setDirectInputTags}
        directInputName="my-learning-teacher-type-direct"
        directInputPlaceholder="교사 유형을 입력해 주세요"
      />
      <SelectableChipSection
        title="친구 유형"
        description="(복수 선택 가능)"
        items={FRIEND_TYPE_ITEMS}
        selectedItems={friendTypes.selectedItems}
        onSelectedItems={friendTypes.setSelectedItems}
        isDirectInputActive={friendTypes.isDirectInputActive}
        onDirectInputActiveChange={friendTypes.setIsDirectInputActive}
        directInputValue={friendTypes.directInputValue}
        onDirectInputChange={friendTypes.setDirectInputValue}
        directInputTags={friendTypes.directInputTags}
        onDirectInputTagsChange={friendTypes.setDirectInputTags}
        directInputName="my-learning-friend-type-direct"
        directInputPlaceholder="친구 유형을 입력해 주세요"
      />
      <SelectableChipSection
        title="사용자 유형"
        description="(복수 선택 가능)"
        items={USER_TYPE_ITEMS}
        selectedItems={userTypes.selectedItems}
        onSelectedItems={userTypes.setSelectedItems}
        isDirectInputActive={userTypes.isDirectInputActive}
        onDirectInputActiveChange={userTypes.setIsDirectInputActive}
        directInputValue={userTypes.directInputValue}
        onDirectInputChange={userTypes.setDirectInputValue}
        directInputTags={userTypes.directInputTags}
        onDirectInputTagsChange={userTypes.setDirectInputTags}
        directInputName="my-learning-user-type-direct"
        directInputPlaceholder="사용자 유형을 입력해 주세요"
      />
    </SectionCardStack>
  );
};
