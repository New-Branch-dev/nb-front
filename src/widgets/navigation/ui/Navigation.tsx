"use client";

import Link from "next/link";
import { useState } from "react";

import { Modal } from "@widgets/modal";
import { Sidebar } from "@widgets/sidebar";

import {
  brandStyle,
  centerSlotStyle,
  linkStyle,
  menuStyle,
  modalCloseButtonStyle,
  modalHeaderStyle,
  navActionGroupStyle,
  navInnerStyle,
  navShellStyle,
  triggerLinkStyle,
} from "./Navigation.css";

export function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuItems = [
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
      <header className={navShellStyle}>
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

          <div className={navActionGroupStyle}>
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

            <button
              type="button"
              className={triggerLinkStyle}
              aria-label="Open sidebar"
              onClick={() => setIsSidebarOpen(true)}
            >
              Sidebar
            </button>
          </div>
        </nav>
      </header>

      <Sidebar
        title="네비게이션"
        items={menuItems}
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}
