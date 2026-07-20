"use client";

import { useShallow } from "zustand/react/shallow";

import { convertCommonCodeValueListToLabelList } from "@shared/config";

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
    interests: convertCommonCodeValueListToLabelList(
      "JOY_CD",
      form.learningPattern.interests,
    ),
    strengths: convertCommonCodeValueListToLabelList(
      "APTITUDE_CD",
      form.learningPattern.strengths,
    ),
    personality: convertCommonCodeValueListToLabelList(
      "PERSONALITY_CD",
      form.learningPattern.personality,
    ),
    learningTendencies: convertCommonCodeValueListToLabelList(
      "LEARNING_TENDENCY_CD",
      form.learningPattern.learningTendencies,
    ),
    materialFormats: convertCommonCodeValueListToLabelList(
      "MATERIAL_TYPE_CD",
      form.learningType.materialFormats,
    ),
    classStyles: convertCommonCodeValueListToLabelList(
      "TEACHING_METHOD_CD",
      form.learningType.classStyles,
    ),
    learningMethods: convertCommonCodeValueListToLabelList(
      "LEARNING_STRATEGY_CD",
      form.learningType.learningMethods,
    ),
    teacherStyles: convertCommonCodeValueListToLabelList(
      "TEACHER_STYLE_CD",
      form.preferredPartner.teacherStyles,
    ),
    teamMemberStyles: convertCommonCodeValueListToLabelList(
      "TEAM_MEMBER_STYLE_CD",
      form.preferredPartner.teamMemberStyles,
    ),
  };

  return <RegisterProfileView {...viewProps} />;
};
