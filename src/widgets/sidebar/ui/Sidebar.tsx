"use client";

import Link from "next/link";

import {
  getSidebarLayerStyle,
  getSidebarOverlayStyle,
  getSidebarPanelStyle,
  sidebarMenuLinkStyle,
  sidebarMenuListStyle,
  sidebarTitleStyle,
  sidebarWrapperStyle,
} from "./sidebar.styles";

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
  const sidebarLayerStyle = getSidebarLayerStyle(open);
  const sidebarOverlayStyle = getSidebarOverlayStyle(open);
  const sidebarPanelStyle = getSidebarPanelStyle(open);

  return (
    <div className={sidebarLayerStyle} aria-hidden={!open}>
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
