"use client";

import { useMemo, useState } from "react";

export const usePreferredLearningPartnerForm = () => {
  const [selectedTeacherTypes, setSelectedTeacherTypes] = useState<string[]>(
    [],
  );
  const [selectedFriendTypes, setSelectedFriendTypes] = useState<string[]>([]);
  const [selectedUserTypes, setSelectedUserTypes] = useState<string[]>([]);

  const isPartnerStepCompleted = useMemo(
    () =>
      selectedTeacherTypes.length > 0 &&
      selectedFriendTypes.length > 0 &&
      selectedUserTypes.length > 0,
    [selectedTeacherTypes, selectedFriendTypes, selectedUserTypes],
  );

  return {
    selectedTeacherTypes,
    selectedFriendTypes,
    selectedUserTypes,
    isPartnerStepCompleted,
    setSelectedTeacherTypes,
    setSelectedFriendTypes,
    setSelectedUserTypes,
  };
};
