"use client";

import { useEffect, useState } from "react";

import { Button, Input } from "@shared/ui";

import {
  fieldGroup,
  fieldRow,
  formSection,
  searchButtonWrap,
  stepTitle,
} from "./MyLearningContent.css";

type MyLearningContentProps = {
  onValidityChange: (isValid: boolean) => void;
};

export const MyLearningContent = ({
  onValidityChange,
}: MyLearningContentProps) => {
  const [profileForm, setProfileForm] = useState({
    nickname: "",
    ageGroup: "",
    school: "",
  });
  const isProfileStepCompleted = Object.values(profileForm).every(
    (value) => value.trim().length > 0,
  );

  useEffect(() => {
    onValidityChange(isProfileStepCompleted);
  }, [isProfileStepCompleted, onValidityChange]);

  return (
    <>
      <article className={formSection} aria-label="1단계 프로필 입력">
        <div className={fieldGroup}>
          <Input
            name="nickname"
            placeholder="닉네임"
            value={profileForm.nickname}
            onChange={(event) =>
              setProfileForm((prev) => ({
                ...prev,
                nickname: event.target.value,
              }))
            }
            aria-label="닉네임"
          />
          <Input
            name="ageGroup"
            placeholder="연령대"
            value={profileForm.ageGroup}
            onChange={(event) =>
              setProfileForm((prev) => ({
                ...prev,
                ageGroup: event.target.value,
              }))
            }
            aria-label="연령대"
          />
          <div className={fieldRow}>
            <Input
              name="school"
              placeholder="학교명"
              value={profileForm.school}
              onChange={(event) =>
                setProfileForm((prev) => ({
                  ...prev,
                  school: event.target.value,
                }))
              }
              aria-label="학교명"
            />
            <div className={searchButtonWrap}>
              <Button type="button" size="md" fullWidth>
                검색
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
