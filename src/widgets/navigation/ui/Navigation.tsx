"use client";

import Link from "next/link";

import {
  brand,
  centerSlot,
  link,
  menu,
  navActionGroup,
  navInner,
  navShell,
} from "./Navigation.css";

export function Navigation() {
  const menuItems = [
    {
      label: "나만의 학습",
      href: "/my-learning",
    },
    {
      label: "학습 목표 달성",
      href: "/learning-goals",
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
            <Link href="/signin" className={link}>
              로그인
            </Link>
            <Link href="/signup" className={link}>
              회원가입
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
