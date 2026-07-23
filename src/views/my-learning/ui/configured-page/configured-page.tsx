"use client";

import { useEffect, useState } from "react";

import { getApiErrorMessage } from "@shared/api";

import {
  fetchMyLearningProfile,
  type MyLearningProfile,
} from "@entities/my-learning";
import { fetchCurrentUser } from "@entities/user";

import { MyLearningConfiguredPageView } from "@views/my-learning/ui/configured-page/configured-page-view";

export const MyLearningConfiguredPage = () => {
  const [profile, setProfile] = useState<MyLearningProfile | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isActive = true;

    const fetchProfile = async () => {
      try {
        const currentUser = await fetchCurrentUser();
        const myLearningProfile = await fetchMyLearningProfile(currentUser.id);

        if (!isActive) {
          return;
        }

        setProfile({
          ...myLearningProfile,
          nickname: myLearningProfile.nickname || currentUser.nickname,
          schoolName:
            myLearningProfile.schoolName || currentUser.schoolName || "",
        });
      } catch (error) {
        if (isActive) {
          setErrorMessage(
            getApiErrorMessage(
              error,
              "학습 프로필 정보를 불러오지 못했습니다.",
            ),
          );
        }
      }
    };

    void fetchProfile();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <MyLearningConfiguredPageView
      profile={profile}
      errorMessage={errorMessage}
    />
  );
};
