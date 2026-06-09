"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "../../../model/use-my-learning-store";
import { convertAgeInput } from "../../model/profile-input";
import { MyProfileView } from "./profile-view";

export const MyProfile = () => {
  const { nickname, age, school, setProfileField } = useMyLearningStore(
    useShallow((state) => ({
      nickname: state.profile.nickname,
      age: state.profile.age,
      school: state.profile.school,
      setProfileField: state.setProfileField,
    })),
  );

  const ageValue = age === null ? "" : String(age);

  const handleNicknameChange = (value: string) => {
    setProfileField("nickname", value);
  };

  const handleAgeChange = (value: string) => {
    const age = convertAgeInput(value);

    setProfileField("age", age === "" ? null : Number(age));
  };

  const viewProps = {
    nickname: nickname,
    age: ageValue,
    school: school,
    onNicknameChange: handleNicknameChange,
    onAgeChange: handleAgeChange,
  };

  return <MyProfileView {...viewProps} />;
};
