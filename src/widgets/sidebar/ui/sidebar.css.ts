import { style } from "@vanilla-extract/css";

import {
  flexColumn,
  flexInlineCenter,
} from "@shared/styles/flex.css";
import { themeTokens } from "@shared/styles/theme.css";

export const sidebarLayer = style({
  position: "fixed",
  inset: 0,
  zIndex: 30,
});

export const sidebarOverlay = style({
  position: "absolute",
  inset: 0,
  appearance: "none",
  border: 0,
  margin: 0,
  padding: 0,
  background: "rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(4px)",
});

export const sidebarPanel = style({
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%",
  width: "min(22rem, 100vw)",
  padding: "1.25rem 1rem",
  background: "#ffffff",
  boxShadow: "-8px 0 24px rgba(0, 0, 0, 0.16)",
});

export const sidebarWrapper = style([
  flexColumn,
  {
    gap: themeTokens.gap.lg,
  },
]);

export const sidebarTitle = style({
  margin: 0,
  fontSize: "1.1rem",
  fontWeight: 700,
  color: "#171717",
});

export const sidebarMenuList = style([
  flexColumn,
  {
    gap: themeTokens.gap.sm,
  },
  {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
]);

export const sidebarMenuLink = style([
  flexInlineCenter,
  {
    minHeight: "2.5rem",
    paddingInline: "0.25rem",
    borderRadius: "0.5rem",
    color: "#171717",
    fontSize: "0.95rem",
    transition: "background-color 0.2s ease",
    selectors: {
      "&:hover": {
        background: "rgba(23, 23, 23, 0.06)",
      },
    },
  },
]);
