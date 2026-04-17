import { style } from "@vanilla-extract/css";

import {
  alignItemsStyle,
  flexBaseStyle,
  flexDirectionStyle,
  flexGapStyle,
  flexInlineStyle,
} from "@shared/ui/layout/flex/Flex.css";

export const sidebarLayerStyle = style({
  position: "fixed",
  inset: 0,
  zIndex: 30,
});

export const sidebarOverlayStyle = style({
  position: "absolute",
  inset: 0,
  appearance: "none",
  border: 0,
  margin: 0,
  padding: 0,
  background: "rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(4px)",
});

export const sidebarPanelStyle = style({
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%",
  width: "min(22rem, 100vw)",
  padding: "1.25rem 1rem",
  background: "#ffffff",
  boxShadow: "-8px 0 24px rgba(0, 0, 0, 0.16)",
});

export const sidebarWrapperStyle = style([
  flexBaseStyle,
  flexDirectionStyle.column,
  flexGapStyle.lg,
]);

export const sidebarTitleStyle = style({
  margin: 0,
  fontSize: "1.1rem",
  fontWeight: 700,
  color: "#171717",
});

export const sidebarMenuListStyle = style([
  flexBaseStyle,
  flexDirectionStyle.column,
  flexGapStyle.sm,
  {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
]);

export const sidebarMenuLinkStyle = style([
  flexInlineStyle,
  alignItemsStyle.center,
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
