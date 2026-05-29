import { style } from "@vanilla-extract/css";

import {
  colors,
  flexCenter,
  flexColumnCenter,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const addCard = style([
  flexColumnCenter,
  {
    gap: themeTokens.gap.md,
    width: "100%",
    height: "100%",
    minHeight: "14rem",
    padding: themeTokens.gap["2xl"],
    borderRadius: "1.25rem",
    border: `1.5px dashed ${colors.primary}`,
    backgroundColor: colors.secondary,
    color: colors.primary,
    textDecoration: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    selectors: {
      "&:hover": {
        backgroundColor: `color-mix(in srgb, ${colors.secondary} 80%, ${colors.primary})`,
      },
    },
  },
  mediaQuery({
    laptop: {
      minHeight: "18rem",
    },
    pc: {
      minHeight: "20rem",
    },
  }),
]);

export const addCardIcon = style([
  flexCenter,
  {
    width: "3rem",
    height: "3rem",
    borderRadius: "999px",
    backgroundColor: colors.white,
    color: colors.primary,
  },
  mediaQuery({
    pc: {
      width: "3.5rem",
      height: "3.5rem",
    },
  }),
]);

export const addCardLabel = style({
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.semibold,
  color: colors.primary,
});
