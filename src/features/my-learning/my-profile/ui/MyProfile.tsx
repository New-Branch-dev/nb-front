"use client";

import { Button, Input, SectionCard, SectionCardStack } from "@shared/ui";

import { fieldRow, searchButtonWrap } from "./MyProfile.css";

export const MyProfile = () => {
  return (
    <SectionCardStack>
      <SectionCard title="닉네임">
        <Input
          name="nickname"
          placeholder="닉네임을 입력해 주세요."
          aria-label="닉네임"
        />
      </SectionCard>

      <SectionCard title="나이">
        <Input
          name="ageGroup"
          placeholder="나이를 입력해 주세요."
          aria-label="나이"
        />
      </SectionCard>

      <SectionCard title="소속">
        <div className={fieldRow}>
          <Input
            name="school"
            placeholder="소속을 선택해 주세요."
            aria-label="학교명"
          />
          <div className={searchButtonWrap}>
            <Button type="button" size="md" fullWidth>
              검색
            </Button>
          </div>
        </div>
      </SectionCard>
    </SectionCardStack>
  );
};
