"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { LEARNING_GOALS_LIST_HREF } from "@features/learning-goals";

import { NavigationView } from "@widgets/navigation/ui/NavigationView";

const NAVIGATION_MENU_ITEM_LIST = [
  {
    label: "학습 프로필 설정",
    href: "/my-learning",
  },
  {
    label: "학습 목표 달성",
    href: LEARNING_GOALS_LIST_HREF,
  },
  {
    label: "단권화",
    href: "/condensed-notes",
  },
  {
    label: "진정한 학습",
    href: "/deep-learning",
  },
  {
    label: "창의적 체험활동",
    href: "/creative-activities",
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
      const token = localStorage.getItem("accessToken");
      const savedNickname = localStorage.getItem("nickname");
      if (token) {
        setIsLoggedIn(true);
        if (savedNickname) {
          setNickname(decodeURIComponent(savedNickname));
        }
      }
    };

    checkLoginStatus();

    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("nickname");
      setIsLoggedIn(false);
      setNickname("");

      router.replace("/");
      router.refresh();
    }
  };

  const menuItems = NAVIGATION_MENU_ITEM_LIST.map((item) => ({
    ...item,
    isActive: checkIsActivePath(pathname, item.href),
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
