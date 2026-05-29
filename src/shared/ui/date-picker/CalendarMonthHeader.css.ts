import { style } from "@vanilla-extract/css";

import {
  colors,
  flexCenter,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const headerRoot = style([
  flexCenter,
  {
    width: "100%",
    paddingInline: themeTokens.gap.sm,
  },
]);

export const monthTitle = style({
  margin: 0,
  textAlign: "center",
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray700,
});

export const monthTitleWithNav = style({
  marginInline: "1rem",
});

export const navButton = style([
  flexCenter,
  {
    flexShrink: 0,
    width: "1.75rem",
    height: "1.75rem",
    padding: 0,
    border: "none",
    borderRadius: themeTokens.radius.sm,
    backgroundColor: "transparent",
    cursor: "pointer",
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: colors.foreground,
      },
      "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.35,
      },
    },
  },
]);
