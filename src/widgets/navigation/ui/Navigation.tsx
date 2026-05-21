"use client";

import Link from "next/link";

import { LEARNING_GOALS_LIST_HREF } from "@features/learning-goals";

import {
  brand,
  centerSlot,
  link,
  menu,
  navActionGroup,
  navInner,
  navShell,
} from "./Navigation.css";

export const Navigation = () => {
  const menuItems = [
    {
      label: "나만의 학습",
      href: "/my-learning/profile",
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
            <Link href="/sign-in" className={link}>
              로그인
            </Link>
            <Link href="/sign-up" className={link}>
              회원가입
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
