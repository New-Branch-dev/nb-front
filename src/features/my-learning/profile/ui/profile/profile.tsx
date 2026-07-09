"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "@features/my-learning/model/use-my-learning-store";
import { MyProfileView } from "@features/my-learning/profile/ui/profile/profile-view";

export const MyProfile = () => {
  const { nickname, school, setProfileField } = useMyLearningStore(
    useShallow((state) => ({
      nickname: state.profile.nickname,
      school: state.profile.school,
      setProfileField: state.setProfileField,
    })),
  );

  const handleNicknameChange = (value: string) => {
    setProfileField("nickname", value);
  };

  const viewProps = {
    nickname: nickname,
    school: school,
    onNicknameChange: handleNicknameChange,
  };

  return <MyProfileView {...viewProps} />;
};
