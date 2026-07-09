"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "@features/my-learning/model/use-my-learning-store";
import { PreferredLearningPartnerView } from "@features/my-learning/preferred-learning-partner/ui/preferred-learning-partner-view";

export const PreferredLearningPartner = () => {
  const { teacherStyles, teamMemberStyles, setPreferredPartner } =
    useMyLearningStore(
      useShallow((state) => ({
        teacherStyles: state.preferredPartner.teacherStyles,
        teamMemberStyles: state.preferredPartner.teamMemberStyles,
        setPreferredPartner: state.setPreferredPartner,
      })),
    );

  const handleTeacherStylesChange = (items: string[]) => {
    setPreferredPartner({ teacherStyles: items });
  };

  const handleTeamMemberStylesChange = (items: string[]) => {
    setPreferredPartner({ teamMemberStyles: items });
  };

  const viewProps = {
    teacherStyles,
    teamMemberStyles,
    onTeacherStylesChange: handleTeacherStylesChange,
    onTeamMemberStylesChange: handleTeamMemberStylesChange,
  };

  return <PreferredLearningPartnerView {...viewProps} />;
};
