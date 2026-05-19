import { recipe } from "@vanilla-extract/recipes";

import { colors, themeTokens, typographyContract } from "@shared/styles";

export const chipRecipe = recipe({
  base: {
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
    color: colors.black,
    fontWeight: themeTokens.fontWeight.medium,
    cursor: "pointer",
    transition: "background-color 0.2s ease, border-color 0.2s ease",
  },
  variants: {
    size: {
      sm: {
        height: "1.25rem",
        minWidth: "3.6rem",
        paddingInline: themeTokens.gap.md,
        borderRadius: themeTokens.radius.sm,
        fontSize: typographyContract.bodyMd,
      },
      md: {
        height: "1.5rem",
        minWidth: "4rem",
        paddingInline: themeTokens.gap.lg,
        borderRadius: themeTokens.radius.sm,
        fontSize: typographyContract.bodyLg,
      },
      lg: {
        height: "1.75rem",
        minWidth: "4.5rem",
        paddingInline: themeTokens.gap.xl,
        borderRadius: themeTokens.radius.md,
        fontSize: typographyContract.headingSm,
      },
    },
    selected: {
      true: {
        backgroundColor: colors.primary,
        color: colors.white,
        borderColor: colors.primary,
      },
      false: {},
    },
  },
  defaultVariants: {
    size: "md",
    selected: false,
  },
});
