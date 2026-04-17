import { style } from "@vanilla-extract/css";

import { mediaQuery } from "@shared/styles/media-query.css";
import { buttonRecipe } from "@shared/ui/button/Button.css";
import {
  alignItemsStyle,
  flexBaseStyle,
  flexDirectionStyle,
  flexGapStyle,
  flexInlineStyle,
  justifyContentStyle,
} from "@shared/ui/layout/flex/Flex.css";

export const navShellStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  zIndex: 10,
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.96)",
  borderBottom: "1px solid rgba(23, 23, 23, 0.12)",
});

export const navInnerStyle = style({
  width: "100%",
  minHeight: "4rem",
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  alignItems: "center",
  gap: "0.75rem",
  paddingInline: "5rem",
  ...mediaQuery({
    mobile: {
      paddingInline: "1rem",
    },
  }),
});

export const centerSlotStyle = style({ justifySelf: "center" });

export const brandStyle = style({
  fontSize: "clamp(1rem, 2vw, 1.125rem)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#171717",
});

export const menuStyle = style([
  flexBaseStyle,
  alignItemsStyle.center,
  flexGapStyle.xl,
  {
    listStyle: "none",
    margin: 0,
    padding: 0,
    ...mediaQuery({
      mobile: {
        gap: "0.75rem",
      },
    }),
  },
]);

export const linkStyle = style([
  flexInlineStyle,
  alignItemsStyle.center,
  {
    minHeight: "2.25rem",
    color: "#171717",
    fontSize: "0.9rem",
    transition: "color 0.2s ease",
    selectors: {
      "&:hover": { color: "#171717" },
    },
  },
]);

export const triggerLinkStyle = style([
  flexInlineStyle,
  alignItemsStyle.center,
  justifyContentStyle.center,
  {
    appearance: "none",
    minHeight: "2.25rem",
    paddingInline: "0.75rem",
    border: "1px solid rgba(23, 23, 23, 0.28)",
    borderRadius: "999px",
    background: "transparent",
    color: "rgba(23, 23, 23, 0.9)",
    fontFamily: "inherit",
    fontSize: "0.8rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "border-color 0.2s ease, color 0.2s ease",
    selectors: {
      "&:hover": {
        borderColor: "rgba(23, 23, 23, 0.7)",
        color: "#171717",
      },
    },
  },
]);

export const navActionGroupStyle = style([
  flexInlineStyle,
  alignItemsStyle.center,
  flexGapStyle.sm,
]);

export const modalHeaderStyle = style([
  flexBaseStyle,
  alignItemsStyle.center,
  justifyContentStyle.between,
  flexGapStyle.md,
  {
    marginBottom: "0.75rem",
  },
]);

export const modalCloseButtonStyle = style([
  buttonRecipe({ variant: "primary", size: "sm", fullWidth: false }),
  {
    border: "1px solid rgba(23, 23, 23, 0.25)",
    borderRadius: "999px",
    padding: "0.4rem 0.8rem",
  },
]);

export const modalMenuListStyle = style([
  flexBaseStyle,
  flexDirectionStyle.column,
  flexGapStyle.sm,
  {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
]);
