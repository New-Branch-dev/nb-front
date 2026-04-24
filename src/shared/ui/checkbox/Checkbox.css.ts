import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { colors, themeTokens, typographyContract } from "@shared/styles";

export const checkboxField = style({
  display: "inline-flex",
  alignItems: "center",
  gap: themeTokens.gap.xs,
  cursor: "pointer",
  userSelect: "none",
});

export const checkboxRecipe = recipe({
  base: {
    appearance: "none",
    margin: 0,
    border: `1px solid ${colors.border}`,
    borderRadius: themeTokens.radius.sm,
    backgroundColor: colors.surface,
    cursor: "pointer",
    transition: "all 0.2s ease",
    selectors: {
      "&:checked": {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
      },
      "&:focus-visible": {
        outline: `2px solid ${colors.secondary}`,
        outlineOffset: "1px",
      },
    },
  },
  variants: {
    size: {
      sm: {
        width: "0.875rem",
        height: "0.875rem",
      },
      md: {
        width: "1rem",
        height: "1rem",
      },
    },
    shape: {
      square: {
        borderRadius: themeTokens.radius.xs,
      },
      round: {
        borderRadius: "50%",
      },
    },
  },
  defaultVariants: {
    size: "md",
    shape: "square",
  },
});

export const checkboxLabelRecipe = recipe({
  base: {},
  variants: {
    color: {
      primary: { color: colors.primary },
      textPrimary: { color: colors.textPrimary },
      gray700: { color: colors.grayscale.gray700 },
      gray800: { color: colors.grayscale.gray800 },
      white: { color: colors.white },
    },
    size: {
      sm: { fontSize: typographyContract.bodySm },
      md: { fontSize: typographyContract.bodyMd },
      lg: { fontSize: typographyContract.bodyLg },
    },
    weight: {
      regular: { fontWeight: themeTokens.fontWeight.regular },
      medium: { fontWeight: themeTokens.fontWeight.medium },
      semibold: { fontWeight: themeTokens.fontWeight.semibold },
      bold: { fontWeight: themeTokens.fontWeight.bold },
    },
  },
  defaultVariants: {
    color: "gray700",
    size: "md",
    weight: "regular",
  },
});
