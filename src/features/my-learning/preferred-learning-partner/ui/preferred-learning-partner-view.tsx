import { SectionCardStack } from "@shared/ui";

import {
  TEACHER_STYLE_ITEMS,
  TEAM_MEMBER_STYLE_ITEMS,
} from "@features/my-learning/preferred-learning-partner/model/preferred-learning-partner.consts";
import { SelectableChipSection } from "@features/selectable-chip-section";

type PreferredLearningPartnerViewProps = {
  teacherStyles: string[];
  teamMemberStyles: string[];
  onTeacherStylesChange: (items: string[]) => void;
  onTeamMemberStylesChange: (items: string[]) => void;
};

export const PreferredLearningPartnerView = ({
  teacherStyles,
  teamMemberStyles,
  onTeacherStylesChange,
  onTeamMemberStylesChange,
}: PreferredLearningPartnerViewProps) => {
  return (
    <SectionCardStack>
      <SelectableChipSection
        title="교사스타일"
        description="배울 때 선호하는 교사 스타일을 선택해주세요. (복수선택가능)"
        items={TEACHER_STYLE_ITEMS}
        selectedItems={teacherStyles}
        onSelectedItems={onTeacherStylesChange}
        directInputName="my-learning-teacher-style-direct"
        directInputPlaceholder="교사 스타일을 입력해 주세요"
      />

      <SelectableChipSection
        title="팀원스타일"
        description="과제 수행 시 선호하는 팀원 스타일을 선택해주세요. (복수선택가능)"
        items={TEAM_MEMBER_STYLE_ITEMS}
        selectedItems={teamMemberStyles}
        onSelectedItems={onTeamMemberStylesChange}
        directInputName="my-learning-team-member-style-direct"
        directInputPlaceholder="팀원 스타일을 입력해 주세요"
      />
    </SectionCardStack>
  );
};
