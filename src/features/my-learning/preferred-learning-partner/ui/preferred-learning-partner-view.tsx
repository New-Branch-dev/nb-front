import { SectionCardStack } from "@shared/ui";

import { SelectableChipSection } from "@features/selectable-chip-section";

import {
  FRIEND_TYPE_ITEMS,
  TEACHER_TYPE_ITEMS,
  USER_TYPE_ITEMS,
} from "../model/preferred-learning-partner.consts";

type PreferredLearningPartnerViewProps = {
  teacherTypes: string[];
  friendTypes: string[];
  userTypes: string[];
  onTeacherTypesChange: (items: string[]) => void;
  onFriendTypesChange: (items: string[]) => void;
  onUserTypesChange: (items: string[]) => void;
};

export const PreferredLearningPartnerView = ({
  teacherTypes,
  friendTypes,
  userTypes,
  onTeacherTypesChange,
  onFriendTypesChange,
  onUserTypesChange,
}: PreferredLearningPartnerViewProps) => {
  return (
    <SectionCardStack>
      <SelectableChipSection
        title="교사 유형"
        description="(복수 선택 가능)"
        items={TEACHER_TYPE_ITEMS}
        selectedItems={teacherTypes}
        onSelectedItems={onTeacherTypesChange}
        directInputName="my-learning-teacher-type-direct"
        directInputPlaceholder="교사 유형을 입력해 주세요"
      />

      <SelectableChipSection
        title="친구 유형"
        description="(복수 선택 가능)"
        items={FRIEND_TYPE_ITEMS}
        selectedItems={friendTypes}
        onSelectedItems={onFriendTypesChange}
        directInputName="my-learning-friend-type-direct"
        directInputPlaceholder="친구 유형을 입력해 주세요"
      />

      <SelectableChipSection
        title="사용자 유형"
        description="(복수 선택 가능)"
        items={USER_TYPE_ITEMS}
        selectedItems={userTypes}
        onSelectedItems={onUserTypesChange}
        directInputName="my-learning-user-type-direct"
        directInputPlaceholder="사용자 유형을 입력해 주세요"
      />
    </SectionCardStack>
  );
};
