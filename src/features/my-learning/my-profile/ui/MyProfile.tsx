"use client";

import { useEffect } from "react";

import { Button, Input, SectionCard } from "@shared/ui";

import { useMyProfileForm } from "../model/useMyProfileForm";
import { fieldGroup, fieldRow, searchButtonWrap } from "./MyProfile.css";

type MyProfileProps = {
  onValidityChange: (isValid: boolean) => void;
};

export const MyProfile = ({ onValidityChange }: MyProfileProps) => {
  const { profileForm, isProfileStepCompleted, setProfileField } =
    useMyProfileForm();

  useEffect(() => {
    onValidityChange(isProfileStepCompleted);
  }, [isProfileStepCompleted, onValidityChange]);

  return (
    <article className={fieldGroup} aria-label="1단계 프로필 입력">
      <SectionCard title="닉네임">
        <Input
          name="nickname"
          placeholder="닉네임을 입력해 주세요."
          value={profileForm.nickname}
          onChange={(event) => setProfileField("nickname", event.target.value)}
          aria-label="닉네임"
        />
      </SectionCard>

      <SectionCard title="나이">
        <Input
          name="ageGroup"
          placeholder="나이를 입력해 주세요."
          value={profileForm.ageGroup}
          onChange={(event) => setProfileField("ageGroup", event.target.value)}
          aria-label="나이"
        />
      </SectionCard>

      <SectionCard title="소속">
        <div className={fieldRow}>
          <Input
            name="school"
            placeholder="소속을 선택해 주세요."
            value={profileForm.school}
            onChange={(event) => setProfileField("school", event.target.value)}
            aria-label="학교명"
          />
          <div className={searchButtonWrap}>
            <Button type="button" size="md" fullWidth>
              검색
            </Button>
          </div>
        </div>
      </SectionCard>
    </article>
  );
};
