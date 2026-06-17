import { Input, SectionCard, SectionCardStack } from "@shared/ui";

import {
  fieldRow,
  schoolDisplay,
  schoolPlaceholder,
  schoolValue,
  searchButtonWrap,
} from "@features/my-learning/profile/ui/profile/profile.css";
import { SchoolSearch } from "@features/my-learning/profile/ui/school-search/school-search";

type MyProfileViewProps = {
  nickname: string;
  school: string;
  onNicknameChange: (value: string) => void;
};

export const MyProfileView = ({
  nickname,
  school,
  onNicknameChange,
}: MyProfileViewProps) => {
  return (
    <SectionCardStack>
      <SectionCard title="닉네임">
        <Input
          name="nickname"
          placeholder="닉네임을 입력해 주세요."
          value={nickname}
          onChange={(event) => onNicknameChange(event.target.value)}
          aria-label="닉네임"
        />
      </SectionCard>

      <SectionCard title="소속">
        <div className={fieldRow}>
          <div
            className={schoolDisplay}
            aria-label="선택한 학교"
            aria-live="polite"
          >
            <span className={school ? schoolValue : schoolPlaceholder}>
              {school || "검색을 통해 학교를 선택해 주세요."}
            </span>
          </div>
          <div className={searchButtonWrap}>
            <SchoolSearch />
          </div>
        </div>
      </SectionCard>
    </SectionCardStack>
  );
};
