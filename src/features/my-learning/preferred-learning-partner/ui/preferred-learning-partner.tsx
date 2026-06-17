"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "../../model/use-my-learning-store";
import { PreferredLearningPartnerView } from "./preferred-learning-partner-view";

export const PreferredLearningPartner = () => {
  const { teacherTypes, friendTypes, userTypes, setPreferredPartner } =
    useMyLearningStore(
      useShallow((state) => ({
        teacherTypes: state.preferredPartner.teacherTypes,
        friendTypes: state.preferredPartner.friendTypes,
        userTypes: state.preferredPartner.userTypes,
        setPreferredPartner: state.setPreferredPartner,
      })),
    );

  const handleTeacherTypesChange = (items: string[]) => {
    setPreferredPartner({ teacherTypes: items });
  };

  const handleFriendTypesChange = (items: string[]) => {
    setPreferredPartner({ friendTypes: items });
  };

  const handleUserTypesChange = (items: string[]) => {
    setPreferredPartner({ userTypes: items });
  };

  const viewProps = {
    teacherTypes,
    friendTypes,
    userTypes,
    onTeacherTypesChange: handleTeacherTypesChange,
    onFriendTypesChange: handleFriendTypesChange,
    onUserTypesChange: handleUserTypesChange,
  };

  return <PreferredLearningPartnerView {...viewProps} />;
};
