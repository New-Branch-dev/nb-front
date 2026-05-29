import { style } from "@vanilla-extract/css";

import {
  colors,
  flexCenter,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const fieldWrap = style({
  position: "relative",
  width: "100%",
  minWidth: 0,
});

export const triggerButton = style([
  flexCenter,
  {
    width: "100%",
    height: "2.75rem",
    paddingInline: themeTokens.gap.md,
    borderRadius: themeTokens.radius.md,
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
    cursor: "pointer",
    justifyContent: "space-between",
    gap: themeTokens.gap.sm,
    selectors: {
      "&:focus-visible": {
        outline: "none",
        borderColor: colors.primary,
        boxShadow: `0 0 0 3px ${colors.secondary}`,
      },
    },
  },
]);

export const triggerLabel = style({
  flex: 1,
  textAlign: "left",
  fontSize: typographyContract.bodyLg,
  color: colors.grayscale.gray600,
  fontWeight: themeTokens.fontWeight.regular,
  selectors: {
    "&[data-filled='true']": {
      color: colors.grayscale.gray700,
    },
  },
});

export const calendarIcon = style({
  flexShrink: 0,
  width: "1.5rem",
  height: "1.5rem",
});

export const calendarPopover = style({
  position: "absolute",
  top: "calc(100% + 0.25rem)",
  left: 0,
  zIndex: 20,
  width: "100%",
  minWidth: "17.5rem",
  selectors: {
    '&[data-open="false"]': {
      visibility: "hidden",
      pointerEvents: "none",
    },
    '&[data-open="true"]': {
      visibility: "visible",
      pointerEvents: "auto",
    },
  },
});
