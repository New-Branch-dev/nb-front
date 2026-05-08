import { style } from "@vanilla-extract/css";

import {
  colors,
  flexCenter,
  flexStart,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const timeControls = style([
  flexStart,
  {
    alignItems: "stretch",
    gap: themeTokens.gap.md,
    width: "100%",
    minWidth: 0,
  },
]);

export const timeInputsCluster = style([
  flexStart,
  {
    flex: "1 1 60%",
    gap: themeTokens.gap.md,
  },
]);

export const timeInputWrap = style([
  flexCenter,
  {
    flex: "1 1 0",
    boxSizing: "border-box",
    minWidth: "5.5rem",
    height: themeTokens.gap["5xl"],
    border: `1px solid ${colors.border}`,
    borderRadius: themeTokens.radius.md,
    backgroundColor: colors.white,
    paddingInline: themeTokens.gap.sm,
  },
]);

export const timeInput = style({
  width: "100%",
  border: "none",
  outline: "none",
  textAlign: "center",
  fontSize: typographyContract.bodyLg,
  color: colors.grayscale.gray700,
  backgroundColor: "transparent",
  selectors: {
    "&::placeholder": {
      color: colors.grayscale.gray800,
    },
  },
});

export const arrow = style({
  flexShrink: 0,
  color: colors.grayscale.gray800,
  fontSize: typographyContract.headingMd,
});

export const totalTimeWrap = style([
  flexCenter,
  {
    flex: "5 6 0",
    boxSizing: "border-box",
    minWidth: "6.25rem",
    minHeight: themeTokens.gap["5xl"],
    border: `1px solid ${colors.border}`,
    borderRadius: themeTokens.radius.md,
    paddingInline: themeTokens.gap.md,
    backgroundColor: colors.white,
  },
]);

export const totalTimeValue = style({
  color: colors.grayscale.gray700,
  fontSize: typographyContract.bodyLg,
  textAlign: "center",
  fontWeight: themeTokens.fontWeight.semibold,
});

export const totalTimePlaceholder = style({
  color: colors.grayscale.gray800,
  fontSize: typographyContract.bodyLg,
  textAlign: "center",
  fontWeight: themeTokens.fontWeight.regular,
});
