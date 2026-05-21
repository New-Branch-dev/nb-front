import { style } from "@vanilla-extract/css";

import {
  colors,
  flexCenter,
  flexColumn,
  flexStart,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const timeControls = style([
  flexStart,
  {
    alignItems: "flex-start",
    gap: themeTokens.gap.md,
    width: "100%",
    minWidth: 0,
  },
]);

export const timeInputsColumn = style([
  flexColumn,
  {
    flex: "1 1 0",
    minWidth: 0,
    gap: themeTokens.gap.xs,
  },
]);

export const timeInputsRow = style([
  flexStart,
  {
    width: "100%",
    minWidth: 0,
    gap: themeTokens.gap.md,
  },
]);

export const timeErrorsRow = style([
  flexStart,
  {
    width: "100%",
    minWidth: 0,
    alignItems: "flex-start",
    gap: themeTokens.gap.md,
  },
]);

export const timeField = style({
  flex: "1 1 0",
  minWidth: 0,
});

export const timeErrorSlot = style({
  flex: "1 1 0",
  minWidth: 0,
});

export const timeInputWrap = style([
  flexCenter,
  {
    boxSizing: "border-box",
    width: "100%",
    height: themeTokens.gap["5xl"],
    border: `1px solid ${colors.border}`,
    borderRadius: themeTokens.radius.md,
    backgroundColor: colors.white,
    paddingInline: themeTokens.gap.sm,
  },
]);

export const timeInputWrapInvalid = style({
  borderColor: colors.negativeRed,
});

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

export const fieldError = style({
  display: "block",
  fontSize: typographyContract.bodyMd,
  color: colors.negativeRed,
  lineHeight: 1.35,
  wordBreak: "keep-all",
});

export const arrow = style({
  flexShrink: 0,
  alignSelf: "center",
  width: themeTokens.gap.lg,
  textAlign: "center",
  color: colors.grayscale.gray800,
  fontSize: typographyContract.headingMd,
});

export const totalTimeWrap = style([
  flexCenter,
  {
    flex: "0 0 auto",
    flexShrink: 0,
    boxSizing: "border-box",
    width: "6.25rem",
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
  wordBreak: "keep-all",
});

export const totalTimePlaceholder = style({
  color: colors.grayscale.gray800,
  fontSize: typographyContract.bodyLg,
  textAlign: "center",
  fontWeight: themeTokens.fontWeight.regular,
});
