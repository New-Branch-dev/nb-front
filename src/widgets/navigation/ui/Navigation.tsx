"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { LEARNING_GOALS_LIST_HREF } from "@features/learning-goals";

import {
  brand,
  centerSlot,
  link,
  menu,
  navActionGroup,
  navInner,
  navShell,
} from "@widgets/navigation/ui/Navigation.css";

export const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState("");
  const router = useRouter();

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

  const menuItems = [
    {
      label: "나만의 학습",
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

  return (
    <>
      <header className={navShell}>
        <nav className={navInner}>
          <Link href="/" className={brand}>
            NEWBRANCH
          </Link>

          <div className={centerSlot}>
            <ul className={menu}>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={navActionGroup}>
            {!isLoggedIn ? (
              <>
                <Link href="/sign-in" className={link}>
                  로그인
                </Link>
                <Link href="/sign-up" className={link}>
                  회원가입
                </Link>
              </>
            ) : (
              <>
                <span className={link} style={{ fontWeight: "bold" }}>
                  {nickname}님
                </span>
                {/* TODO: 로그아웃 버튼 퍼블 */}
                <button onClick={handleLogout} className={link}>
                  {" "}
                  로그아웃
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
