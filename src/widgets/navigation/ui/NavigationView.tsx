import Link from "next/link";
import { Activity } from "react";

import {
  activeLink,
  brand,
  centerSlot,
  link,
  menu,
  navActionGroup,
  navButton,
  navInner,
  navShell,
  nicknameText,
} from "@widgets/navigation/ui/Navigation.css";

type NavigationMenuItem = {
  label: string;
  href: string;
  isActive: boolean;
};

type NavigationViewProps = {
  menuItems: NavigationMenuItem[];
  isLoggedIn: boolean;
  nickname: string;
  onLogout: () => void;
};

const createLinkClassName = (isActive: boolean) =>
  [link, isActive ? activeLink : ""].filter(Boolean).join(" ");

export const NavigationView = ({
  menuItems,
  isLoggedIn,
  nickname,
  onLogout,
}: NavigationViewProps) => (
  <header className={navShell}>
    <nav className={navInner}>
      <Link href="/" className={brand}>
        NEWBRANCH
      </Link>

      <div className={centerSlot}>
        <ul className={menu}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={createLinkClassName(item.isActive)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={navActionGroup}>
        <Activity mode={!isLoggedIn ? "visible" : "hidden"}>
          <Link href="/sign-in" className={link}>
            로그인
          </Link>
          <Link href="/sign-up" className={link}>
            회원가입
          </Link>
        </Activity>

        <Activity mode={isLoggedIn ? "visible" : "hidden"}>
          <span className={[link, nicknameText].join(" ")}>{nickname}님</span>
          <button onClick={onLogout} className={[link, navButton].join(" ")}>
            로그아웃
          </button>
        </Activity>
      </div>
    </nav>
  </header>
);
