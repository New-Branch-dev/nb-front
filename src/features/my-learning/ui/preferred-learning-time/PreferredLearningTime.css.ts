import { style } from "@vanilla-extract/css";

import {
  colors,
  flexBetweenCenter,
  flexCenter,
  flexColumn,
  flexStart,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const sectionRoot = style([
  flexColumn,
  {
    gap: themeTokens.gap["2xl"],
    border: `1px solid ${colors.border}`,
    borderRadius: themeTokens.radius.lg,
    backgroundColor: colors.background,
    padding: themeTokens.gap["3xl"],
  },
]);

export const title = style({
  fontSize: typographyContract.headingSm,
  color: colors.grayscale.gray700,
  fontWeight: themeTokens.fontWeight.bold,
});

export const headerRow = style([flexBetweenCenter]);

export const iconGroup = style([
  flexStart,
  {
    gap: themeTokens.gap.md,
  },
]);

export const iconButton = style([
  flexCenter,
  {
    width: "1rem",
    height: "0.325rem",
    border: "none",
    background: "transparent",
    color: colors.grayscale.gray700,
    fontSize: typographyContract.bodyLg,
    lineHeight: 1,
    cursor: "pointer",
  },
]);
