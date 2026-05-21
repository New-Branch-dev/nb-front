import { recipe } from "@vanilla-extract/recipes";

import {
  colors,
  flexInlineCenter,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";

/** 50px pill radius */
const TAB_PILL_RADIUS = "3.125rem";

export const tabListRecipe = recipe({
  base: {
    display: "flex",
    boxSizing: "border-box",
    width: "100%",
    borderRadius: TAB_PILL_RADIUS,
    overflow: "hidden",
  },
  variants: {
    listTone: {
      filled: {
        backgroundColor: colors.secondary,
        border: `1px solid rgba(102, 65, 223, 0.14)`,
      },
      surface: {
        backgroundColor: colors.white,
        border: `1px solid ${colors.border}`,
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
      false: {
        width: "fit-content",
        maxWidth: "100%",
      },
    },
    size: {
      sm: {
        padding: "3px",
        gap: "3px",
      },
      toolbar: {
        padding: "2px",
        gap: "2px",
      },
      toolbarSort: {
        padding: "2px",
        gap: "2px",
      },
      md: {
        padding: themeTokens.gap.xs,
        gap: themeTokens.gap.xs,
      },
      lg: {
        padding: themeTokens.gap.sm,
        gap: themeTokens.gap.sm,
      },
      xlg: {
        padding: themeTokens.gap.md,
        gap: themeTokens.gap.md,
      },
    },
  },
  defaultVariants: {
    listTone: "filled",
    fullWidth: true,
    size: "md",
  },
});

export const tabTriggerRecipe = recipe({
  base: [
    flexInlineCenter,
    {
      flex: "1 1 0",
      justifyContent: "center",
      width: "100%",
      border: "none",
      borderRadius: TAB_PILL_RADIUS,
      cursor: "pointer",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textDecoration: "none",
      transition:
        "background-color 0.2s ease, color 0.2s ease, font-weight 0.15s ease",
      backgroundColor: "transparent",
    },
  ],
  variants: {
    selected: {
      true: {
        backgroundColor: colors.primary,
        color: colors.white,
        fontWeight: themeTokens.fontWeight.bold,
      },
      false: {
        backgroundColor: "transparent",
        color: colors.grayscale.gray600,
        fontWeight: themeTokens.fontWeight.semibold,
      },
    },
    listTone: {
      filled: {},
      surface: {},
    },
    size: {
      sm: {
        minHeight: "2.375rem",
        paddingInline: themeTokens.gap.md,
        fontSize: typographyContract.bodySm,
      },
      toolbar: [
        {
          minHeight: "2.5rem",
          height: "2.5rem",
          paddingInline: themeTokens.gap.md,
          fontSize: typographyContract.bodyMd,
        },
        mediaQuery({
          laptop: {
            minHeight: "2.625rem",
            height: "2.625rem",
            paddingInline: themeTokens.gap.lg,
          },
          pc: {
            minHeight: "3.125rem",
            height: "3.125rem",
            paddingInline: "1.25rem",
          },
        }),
      ],
      toolbarSort: [
        {
          minHeight: "2.5rem",
          height: "2.5rem",
          paddingInline: themeTokens.gap.lg,
          fontSize: typographyContract.bodyMd,
        },
        mediaQuery({
          laptop: {
            minHeight: "2.625rem",
            height: "2.625rem",
            paddingInline: themeTokens.gap.xl,
          },
          pc: {
            minHeight: "3.125rem",
            height: "3.125rem",
            paddingInline: "1.125rem",
          },
        }),
      ],
      md: {
        minHeight: "2.25rem",
        paddingInline: themeTokens.gap.lg,
        fontSize: typographyContract.bodyLg,
      },
      lg: {
        minHeight: "2.5rem",
        paddingInline: themeTokens.gap.xl,
        fontSize: typographyContract.headingSm,
      },
      xlg: {
        minHeight: "2.75rem",
        paddingInline: themeTokens.gap["2xl"],
        fontSize: typographyContract.headingMd,
      },
    },
  },
  compoundVariants: [
    {
      variants: { listTone: "filled", selected: false },
      style: {
        color: colors.primary,
      },
    },
  ],
  defaultVariants: {
    listTone: "filled",
    selected: false,
    size: "md",
  },
});
