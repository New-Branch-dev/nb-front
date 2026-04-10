"use client";

import Link from "next/link";

import {
  sidebarLayerStyle,
  sidebarMenuLinkStyle,
  sidebarMenuListStyle,
  sidebarOverlayStyle,
  sidebarPanelStyle,
  sidebarTitleStyle,
  sidebarWrapperStyle,
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

export function Sidebar({
  title = "메뉴",
  items,
  open,
  onClose,
  onItemClick,
}: SidebarProps) {
  if (!open) {
    return null;
  }

  return (
    <div className={sidebarLayerStyle}>
      <button
        type="button"
        className={sidebarOverlayStyle}
        aria-label="Close sidebar"
        onClick={onClose}
      />
      <aside className={sidebarPanelStyle} aria-label="Sidebar menu">
        <div className={sidebarWrapperStyle}>
          <h2 className={sidebarTitleStyle}>{title}</h2>
          <ul className={sidebarMenuListStyle}>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={sidebarMenuLinkStyle}
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
}
