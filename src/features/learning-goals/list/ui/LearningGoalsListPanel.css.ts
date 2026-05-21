import { style } from "@vanilla-extract/css";

import { colors, flexColumn, flexColumnCenter, themeTokens, typographyContract } from "@shared/styles";

export const listRoot = style([
  flexColumn,
  {
    width: "100%",
    gap: themeTokens.gap.lg,
    padding: themeTokens.gap["2xl"],
    borderRadius: themeTokens.radius.lg,
    backgroundColor: colors.white,
  },
]);

export const emptyState = style([
  flexColumnCenter,
  {
    width: "100%",
    gap: themeTokens.gap.lg,
    paddingBlock: themeTokens.gap["8xl"],
  },
]);

export const emptyListMessage = style({
  margin: 0,
  textAlign: "center",
  fontSize: typographyContract.bodyLg,
  color: colors.grayscale.gray600,
});
