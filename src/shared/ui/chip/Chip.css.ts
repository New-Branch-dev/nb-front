import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { colors, mediaQuery, themeTokens, typographyContract } from "@shared/styles";

/** 30px pill radius — all chip sizes */
const chipPillRadius = "1.875rem";

/** laptop: md, pc: lg */
export const chipResponsiveLaptopMdPcLg = style([
  {
    height: "1.5rem",
    minWidth: "4rem",
    paddingInline: themeTokens.gap.lg,
    fontSize: typographyContract.bodyLg,
  },
  mediaQuery({
    laptop: {
      height: "1.625rem",
      minWidth: "4.25rem",
    },
    pc: {
      height: "1.75rem",
      minWidth: "4.5rem",
      paddingInline: themeTokens.gap.xl,
      fontSize: typographyContract.headingSm,
    },
  }),
]);

export const chipRecipe = recipe({
  base: {
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
    color: colors.black,
    fontWeight: themeTokens.fontWeight.medium,
    cursor: "pointer",
    borderRadius: chipPillRadius,
    transition: "background-color 0.2s ease, border-color 0.2s ease",
  },
  variants: {
    size: {
      sm: [
        {
          height: "1.375rem",
          minWidth: "3.75rem",
          paddingInline: themeTokens.gap.md,
          fontSize: typographyContract.bodyMd,
        },
        mediaQuery({
          laptop: {
            height: "1.5rem",
            minWidth: "4rem",
          },
          pc: {
            height: "1.625rem",
            minWidth: "4.25rem",
            paddingInline: themeTokens.gap.lg,
          },
        }),
      ],
      md: [
        {
          height: "1.5rem",
          minWidth: "4rem",
          paddingInline: themeTokens.gap.lg,
          fontSize: typographyContract.bodyLg,
        },
        mediaQuery({
          laptop: {
            height: "1.625rem",
            minWidth: "4.25rem",
          },
          pc: {
            height: "1.75rem",
            minWidth: "4.5rem",
            paddingInline: themeTokens.gap.xl,
          },
        }),
      ],
      lg: [
        {
          height: "1.625rem",
          minWidth: "4.25rem",
          paddingInline: themeTokens.gap.xl,
          fontSize: typographyContract.headingSm,
        },
        mediaQuery({
          laptop: {
            height: "1.75rem",
            minWidth: "4.5rem",
          },
          pc: {
            height: "1.875rem",
            minWidth: "4.75rem",
          },
        }),
      ],
    },
    selected: {
      true: {
        backgroundColor: colors.primary,
        color: colors.white,
        borderColor: colors.primary,
      },
      false: {},
    },
    labelTone: {
      default: {},
      muted: {},
    },
    surface: {
      default: {},
      onPrimary: {},
    },
  },
  compoundVariants: [
    {
      variants: { labelTone: "muted", selected: false, surface: "default" },
      style: {
        backgroundColor: colors.secondary,
        color: colors.primary,
        borderStyle: "dashed",
        borderColor: colors.primary,
      },
    },
    {
      variants: { surface: "onPrimary", selected: false },
      style: {
        backgroundColor: colors.primary,
        color: colors.white,
        borderColor: colors.white,
      },
    },
    {
      variants: { surface: "onPrimary", selected: true },
      style: {
        backgroundColor: colors.white,
        color: colors.primary,
        borderColor: colors.white,
      },
    },
    {
      variants: { surface: "onPrimary", labelTone: "muted", selected: false },
      style: {
        color: "rgba(255, 255, 255, 0.75)",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    selected: false,
    labelTone: "default",
    surface: "default",
  },
});
