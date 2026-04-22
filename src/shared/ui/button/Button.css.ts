import { recipe } from "@vanilla-extract/recipes";

import { colors, themeTokens, typographyContract } from "@shared/styles";

export const buttonRecipe = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: themeTokens.gap.sm,
    fontWeight: 500,
    border: "none",
    transition:
      "background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease",
    cursor: "pointer",
    selectors: {
      "&:hover": { opacity: 0.92 },
      "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
    },
  },
  variants: {
    variant: {
      primary: {
        background: colors.primary,
        color: colors.textInverse,
      },
      secondary: {
        background: colors.secondary,
        color: colors.primary,
      },
      ghost: {
        background: colors.surface,
        color: colors.grayscale.gray900,
      },
      text: {
        background: "transparent",
        color: colors.grayscale.gray900,
      },
    },
    size: {
      sm: {
        padding: `${themeTokens.gap.sm} ${themeTokens.gap.md}`,
        fontSize: typographyContract.bodyMd,
        borderRadius: themeTokens.radius.sm,
      },
      md: {
        padding: `${themeTokens.gap.md} ${themeTokens.gap.lg}`,
        fontSize: typographyContract.bodyLg,
        borderRadius: themeTokens.radius.md,
      },
      lg: {
        padding: `${themeTokens.gap.lg} ${themeTokens.gap.xl}`,
        fontSize: typographyContract.headingSm,
        borderRadius: themeTokens.radius.lg,
      },
    },
    fullWidth: {
      true: { width: "100%" },
      false: { width: "auto" },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
  },
});
