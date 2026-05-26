import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  flexColumnCenter,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const listRoot = style([
  flexColumn,
  {
    width: "100%",
    gap: themeTokens.gap.lg,
  },
]);

export const grid = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: themeTokens.gap.lg,
    width: "100%",
  },
  mediaQuery({
    laptop: {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: themeTokens.gap.lg,
    },
    pc: {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: themeTokens.gap.xl,
    },
  }),
]);

export const emptyState = style([
  flexColumnCenter,
  {
    width: "100%",
    gap: themeTokens.gap.lg,
    paddingBlock: themeTokens.gap["8xl"],
    backgroundColor: colors.white,
    borderRadius: themeTokens.radius.lg,
  },
]);

export const emptyListMessage = style({
  margin: 0,
  textAlign: "center",
  fontSize: typographyContract.bodyLg,
  color: colors.grayscale.gray600,
});
