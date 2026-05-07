import { style } from "@vanilla-extract/css";

import {
  colors,
  flexCenter,
  flexColumn,
  flexStart,
  themeTokens,
  typographyContract,
} from "@shared/styles";
import { mediaQuery } from "@shared/styles/media-query.css";

export const contentColumn = style([
  flexColumn,
  {
    height: "100%",
    gap: themeTokens.gap.md,
  },
]);

export const infoColumn = style([
  flexColumn,
  {
    gap: themeTokens.gap.sm,
  },
]);

export const iconText = style({
  display: "inline-flex",
  width: "fit-content",
  lineHeight: 1,
});

export const titleText = style({
  fontSize: typographyContract.headingMd,
  color: colors.black,
  fontWeight: themeTokens.fontWeight.bold,
});

export const descriptionText = style({
  fontSize: typographyContract.bodyMd,
  color: colors.grayscale.gray700,
  lineHeight: 1.5,
});

export const iconImageWrap = style({
  position: "relative",
  width: "2rem",
  height: "2rem",
  aspectRatio: "1 / 1",
  ...mediaQuery({
    laptop: {
      width: "2rem",
      height: "2rem",
    },
    pc: {
      width: "3.3125rem",
      height: "3.3125rem",
    },
  }),
});

export const iconImage = style({
  objectFit: "contain",
});

export const actionRow = style([
  flexStart,
  {
    marginTop: "auto",
  },
]);

export const startLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: themeTokens.gap.xs,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.semibold,
  color: colors.black,
  textDecoration: "none",
});

export const visualWrap = style([
  flexCenter,
  {
    position: "absolute",
    width: "8.5rem",
    height: "8.5rem",
    ...mediaQuery({
      laptop: {
        width: "10.5rem",
        height: "10.5rem",
        right: -20,
        bottom: 5,
      },
      pc: {
        width: "15.625rem",
        height: "15.625rem",
        right: -25,
        bottom: 0,
      },
    }),
  },
]);

export const firstVisualWrap = style({
  right: 30,
  bottom: 0,
  ...mediaQuery({
    laptop: {
      right: 0,
      bottom: -10,
    },
    pc: {
      right: 0,
      bottom: -20,
    },
  }),
});

export const visualImage = style({
  objectFit: "contain",
});
