import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumnCenter,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const progressRail = style({
  width: "100%",
  height: "3px",
  borderRadius: themeTokens.radius.full,
  background: colors.grayscale.gray800,
  overflow: "hidden",
});

export const progressFill = style({
  height: "100%",
  borderRadius: themeTokens.radius.full,
  background: colors.primary,
  transition: "width 0.2s ease",
});

export const progressList = style({
  listStyle: "none",
  padding: 0,
  margin: `${themeTokens.gap.md} 0 0 0`,
  position: "relative",
  height: "3rem",
});

export const progressItem = style([
  flexColumnCenter,
  {
    position: "absolute",
    top: 0,
    transform: "translateX(-50%)",
    gap: themeTokens.gap.xs,
    color: colors.grayscale.gray600,
  },
]);

export const itemCountLabel = style({
  fontSize: typographyContract.bodySm,
  color: colors.grayscale.gray600,
});

export const itemTitle = style({
  fontSize: typographyContract.bodyMd,
  color: colors.grayscale.gray600,
  fontWeight: themeTokens.fontWeight.bold,
});

export const currentItemText = style({
  color: colors.primary,
});
