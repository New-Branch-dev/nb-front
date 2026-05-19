"use client";

import { useMemo, useState } from "react";

export type MyProfileForm = {
  nickname: string;
  ageGroup: string;
  school: string;
};

const INITIAL_PROFILE_FORM: MyProfileForm = {
  nickname: "",
  ageGroup: "",
  school: "",
};

export const useMyProfileForm = () => {
  const [profileForm, setProfileForm] = useState<MyProfileForm>(
    INITIAL_PROFILE_FORM,
  );

  const isProfileStepCompleted = useMemo(
    () => Object.values(profileForm).every((value) => value.trim().length > 0),
    [profileForm],
  );

  const setProfileField = (field: keyof MyProfileForm, value: string) => {
    setProfileForm((prev) => ({ ...prev, [field]: value }));
  };

  return {
    profileForm,
    isProfileStepCompleted,
    setProfileField,
  };
};
