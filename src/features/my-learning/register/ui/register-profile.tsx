"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "@features/my-learning/model/use-my-learning-store";
import { RegisterProfileView } from "@features/my-learning/register/ui/register-profile-view";

export const RegisterProfile = () => {
  const form = useMyLearningStore(
    useShallow((state) => ({
      profile: state.profile,
      learningPattern: state.learningPattern,
      learningType: state.learningType,
      preferredPartner: state.preferredPartner,
    })),
  );

  const viewProps = {
    nickname: form.profile.nickname,
    school: form.profile.school,
    interests: form.learningPattern.interests,
    strengths: form.learningPattern.strengths,
    personality: form.learningPattern.personality,
    learningTendencies: form.learningPattern.learningTendencies,
    materialFormats: form.learningType.materialFormats,
    classStyles: form.learningType.classStyles,
    learningMethods: form.learningType.learningMethods,
    teacherStyles: form.preferredPartner.teacherStyles,
    teamMemberStyles: form.preferredPartner.teamMemberStyles,
  };

  return <RegisterProfileView {...viewProps} />;
};
