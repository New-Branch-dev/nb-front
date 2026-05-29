"use client";

import Link from "next/link";

import {
  sidebarLayer,
  sidebarMenuLink,
  sidebarMenuList,
  sidebarOverlay,
  sidebarPanel,
  sidebarTitle,
  sidebarWrapper,
} from "./sidebar.css";

type SidebarMenuItem = {
  label: string;
  href: string;
};

type SidebarProps = {
  title?: string;
  items: SidebarMenuItem[];
  open: boolean;
  onClose: () => void;
  onItemClick?: () => void;
};

export const Sidebar = ({
  title = "메뉴",
  items,
  open,
  onClose,
  onItemClick,
}: SidebarProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className={sidebarLayer}>
      <button
        type="button"
        className={sidebarOverlay}
        aria-label="Close sidebar"
        onClick={onClose}
      />
      <aside className={sidebarPanel} aria-label="Sidebar menu">
        <div className={sidebarWrapper}>
          <h2 className={sidebarTitle}>{title}</h2>
          <ul className={sidebarMenuList}>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={sidebarMenuLink}
                  onClick={() => {
                    onItemClick?.();
                    onClose();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};
