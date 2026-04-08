"use client";

import Link from "next/link";

import { Container } from "@shared/ui/layout";

import { Modal } from "@widgets/modal";

import {
  brandStyle,
  centerSlotStyle,
  linkStyle,
  menuStyle,
  modalCloseButtonStyle,
  modalHeaderStyle,
  navInnerStyle,
  navShellStyle,
  triggerLinkStyle,
} from "./Navigation.styles";

export function Navigation() {
  const menuItems = [
    {
      label: "학습 목표 달성",
      href: "/learning-goals",
    },
    {
      label: "단권화",
      href: "/danghwan",
    },
    {
      label: "진정한 학습",
      href: "/true-learning",
    },
    {
      label: "창의적 체험활동",
      href: "/creative-experience",
    },
  ];

  return (
    <header className={navShellStyle}>
      <Container>
        <nav className={navInnerStyle}>
          <Link href="/" className={brandStyle}>
            NEWBRANCH
          </Link>

          <div className={centerSlotStyle}>
            <ul className={menuStyle}>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkStyle}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Modal
            triggerText="Menu"
            triggerAriaLabel="Open menu modal"
            triggerClassName={triggerLinkStyle}
          >
            {({ close }) => (
              <div className={modalHeaderStyle}>
                <strong>Menu</strong>
                <button
                  type="button"
                  className={modalCloseButtonStyle}
                  onClick={close}
                >
                  Close
                </button>
              </div>
            )}
          </Modal>
        </nav>
      </Container>
    </header>
  );
}
