import { style } from "@vanilla-extract/css";

import { colors, themeTokens, typographyContract } from "@shared/styles";

export const selectorWrap = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  minWidth: 0,
});

export const selectorWrapCompact = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  flex: "1 1 auto",
  minWidth: "2.5rem",
});

export const selectorField = style({
  width: "100%",
  height: "2.75rem",
  paddingInline: themeTokens.gap.md,
  paddingRight: themeTokens.gap["3xl"],
  borderRadius: themeTokens.radius.md,
  border: `1px solid ${colors.border}`,
  backgroundColor: colors.white,
  color: colors.grayscale.gray700,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.regular,
  appearance: "none",
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:focus": {
      borderColor: colors.primary,
      boxShadow: `0 0 0 3px ${colors.secondary}`,
    },
    "&:invalid": {
      color: colors.grayscale.gray600,
    },
  },
});

export const selectorFieldCompact = style({
  width: "100%",
  minWidth: "2.5rem",
  height: "2rem",
  padding: 0,
  paddingRight: themeTokens.gap.lg,
  border: "none",
  borderRadius: 0,
  backgroundColor: "transparent",
  color: colors.grayscale.gray700,
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.semibold,
  textAlign: "center",
  appearance: "none",
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${colors.primary}`,
      outlineOffset: "1px",
    },
    "&:invalid": {
      color: colors.grayscale.gray600,
    },
  },
});

export const selectorChevron = style({
  position: "absolute",
  right: themeTokens.gap.md,
  pointerEvents: "none",
  color: colors.grayscale.gray600,
  fontSize: typographyContract.bodySm,
  lineHeight: 1,
});

export const selectorChevronCompact = style({
  position: "absolute",
  right: 0,
  pointerEvents: "none",
  color: colors.grayscale.gray600,
  fontSize: "0.5rem",
  lineHeight: 1,
});
