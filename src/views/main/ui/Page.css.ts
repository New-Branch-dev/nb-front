import { style } from "@vanilla-extract/css";

import { mediaQuery, themeTokens } from "@shared/styles";
import { colors } from "@shared/styles/colors.css";
import { typographyContract } from "@shared/styles/typography.css";

export const main = style({
  paddingInline: themeTokens.gap["9xl"],
});

export const sectionBase = style({
  width: "100%",
  paddingBlock: "5rem",
  paddingInline: "1rem",
});

export const header = style({
  color: colors.primary,
  fontSize: typographyContract.displayHeadline,
});

export const sliderWrapper = style({
  paddingBlock: "5rem",
  ...mediaQuery({
    laptop: {
      paddingTop: "3rem",
    },
    pc: {
      paddingTop: "5rem",
    },
  }),
});

export const sceneSection = style([
  sectionBase,
  {
    paddingBlock: 0,
  },
]);
