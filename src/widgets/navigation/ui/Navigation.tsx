"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  clearAuthToken,
  fetchAccessToken,
  fetchStoredNickname,
} from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

import { LEARNING_GOALS_LIST_HREF } from "@features/learning-goals";

import { NavigationView } from "@widgets/navigation/ui/NavigationView";

const NAVIGATION_MENU_ITEM_LIST = [
  {
    label: "학습 프로필 설정",
    href: "/my-learning",
    activePath: "/my-learning",
  },
  {
    label: "학습 목표 달성",
    href: LEARNING_GOALS_LIST_HREF,
    activePath: "/learning-goals",
  },
  {
    label: "단권화",
    href: "/condensed-notes",
    activePath: "/condensed-notes",
  },
  {
    label: "진정한 학습",
    href: "/deep-learning",
    activePath: "/deep-learning",
    isDisabled: true,
  },
  {
    label: "창의적 체험활동",
    href: "/creative-activities",
    activePath: "/creative-activities",
    isDisabled: true,
  },
];

const checkIsActivePath = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = fetchAccessToken();
      const savedNickname = fetchStoredNickname();

      if (!token) {
        setIsLoggedIn(false);
        setNickname("");
        return;
      }

      setIsLoggedIn(true);
      if (savedNickname) {
        setNickname(savedNickname);
      }
    };

    checkLoginStatus();

    window.addEventListener("login-success", checkLoginStatus);
    return () => window.removeEventListener("login-success", checkLoginStatus);
  }, []);

  const handleLogout = async () => {
    try {
      const accessToken = fetchAccessToken();

      if (accessToken) {
        await fetch(API_ENDPOINT.auth.logout, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    } finally {
      clearAuthToken();
      setIsLoggedIn(false);
      setNickname("");

      router.replace("/");
      router.refresh();
    }
  };

  const menuItems = NAVIGATION_MENU_ITEM_LIST.map((item) => ({
    ...item,
    isActive: !item.isDisabled && checkIsActivePath(pathname, item.activePath),
    isDisabled: item.isDisabled ?? false,
  }));

  return (
    <NavigationView
      menuItems={menuItems}
      isLoggedIn={isLoggedIn}
      nickname={nickname}
      onLogout={handleLogout}
    />
  );
};
