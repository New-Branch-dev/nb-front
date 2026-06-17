"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "@features/my-learning/model/use-my-learning-store";
import { convertDateKeyToShortRestDateLabel } from "@features/my-learning/preferred-learning-time/model/preferred-time";
import { RegisterProfileView } from "@features/my-learning/register/ui/register-profile-view";

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
    school: form.profile.school,
    interests: form.learningPattern.interests,
    strengths: form.learningPattern.strengths,
    personality: form.learningPattern.personality,
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
