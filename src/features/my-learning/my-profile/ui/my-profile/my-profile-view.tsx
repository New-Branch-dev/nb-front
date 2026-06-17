import { Input, SectionCard, SectionCardStack } from "@shared/ui";

import { SchoolSearch } from "../school-search/school-search";
import {
  fieldRow,
  schoolDisplay,
  schoolPlaceholder,
  schoolValue,
  searchButtonWrap,
} from "./my-profile.css";

type MyProfileViewProps = {
  nickname: string;
  age: string;
  school: string;
  onNicknameChange: (value: string) => void;
  onAgeChange: (value: string) => void;
};

export const MyProfileView = ({
  nickname,
  age,
  school,
  onNicknameChange,
  onAgeChange,
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
