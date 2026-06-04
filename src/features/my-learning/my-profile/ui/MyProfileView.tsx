import { Button, Input, SectionCard, SectionCardStack } from "@shared/ui";

import { fieldRow, searchButtonWrap } from "./MyProfile.css";

type MyProfileViewProps = {
  nickname: string;
  age: string;
  school: string;
  onNicknameChange: (value: string) => void;
  onAgeChange: (value: string) => void;
  onSchoolChange: (value: string) => void;
  onSchoolSearchClick: () => void;
};

export const MyProfileView = ({
  nickname,
  age,
  school,
  onNicknameChange,
  onAgeChange,
  onSchoolChange,
  onSchoolSearchClick,
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

      <SectionCard title="나이">
        <Input
          name="age"
          placeholder="나이를 입력해 주세요."
          value={age}
          inputMode="numeric"
          maxLength={2}
          onChange={(event) => onAgeChange(event.target.value)}
          aria-label="나이"
        />
      </SectionCard>

      <SectionCard title="소속">
        <div className={fieldRow}>
          <Input
            name="school"
            placeholder="소속을 선택해 주세요."
            value={school}
            onChange={(event) => onSchoolChange(event.target.value)}
            aria-label="학교명"
          />
          <div className={searchButtonWrap}>
            <Button
              type="button"
              size="md"
              fullWidth
              onClick={onSchoolSearchClick}
            >
              검색
            </Button>
          </div>
        </div>
      </SectionCard>
    </SectionCardStack>
  );
};
