import { recipe } from "@vanilla-extract/recipes";

import { colors } from "@shared/ui/styles/colors.css";
import { themeTokens } from "@shared/ui/styles/theme.css";
import { typographyContract } from "@shared/ui/styles/typography.css";

export const buttonRecipe = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: themeTokens.space.sm,
    borderRadius: themeTokens.radius.md,
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
      ghost: {
        background: colors.surface,
        color: colors.textPrimary,
      },
      text: {
        background: "transparent",
        color: colors.grayscale.gray500,
      },
    },
    size: {
      sm: {
        padding: `${themeTokens.space.sm} ${themeTokens.space.md}`,
        fontSize: typographyContract.D2,
      },
      md: {
        padding: `${themeTokens.space.md} ${themeTokens.space.lg}`,
        fontSize: typographyContract.D1,
      },
      lg: {
        padding: `${themeTokens.space.lg} ${themeTokens.space.xl}`,
        fontSize: typographyContract.B2,
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
