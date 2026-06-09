"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "../../model/use-my-learning-store";
import { convertDateKeyToShortRestDateLabel } from "../../preferred-learning-time/model/preferred-time";
import { RegisterProfileView } from "./register-profile-view";

export const RegisterProfile = () => {
  const form = useMyLearningStore(
    useShallow((state) => ({
      profile: state.profile,
      learningPattern: state.learningPattern,
      preferredTime: state.preferredTime,
      learningPreferences: state.learningPreferences,
      preferredPartner: state.preferredPartner,
    })),
  );

  const viewProps = {
    nickname: form.profile.nickname,
    age: form.profile.age === null ? "" : `${form.profile.age}세`,
    school: form.profile.school,
    interests: form.learningPattern.interests,
    strengths: form.learningPattern.strengths,
    personality: form.learningPattern.personality,
    learningTime:
      form.preferredTime.startTime && form.preferredTime.endTime
        ? `${form.preferredTime.startTime} - ${form.preferredTime.endTime}`
        : "",
    restDates: form.preferredTime.restDates.map(
      convertDateKeyToShortRestDateLabel,
    ),
    materialFormats: form.learningPreferences.materialFormats,
    classStyles: form.learningPreferences.classStyles,
    learningMethods: form.learningPreferences.learningMethods,
    teacherTypes: form.preferredPartner.teacherTypes,
    friendTypes: form.preferredPartner.friendTypes,
    userTypes: form.preferredPartner.userTypes,
  };

  return <RegisterProfileView {...viewProps} />;
};
