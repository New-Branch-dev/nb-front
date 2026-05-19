import { style } from "@vanilla-extract/css";

import { colors, flexColumn, themeTokens } from "@shared/styles";

export const contentRoot = style([
  flexColumn,
  {
    gap: themeTokens.gap["2xl"],
    width: "100%",
  },
]);

export const panelCard = style({
  backgroundColor: colors.white,
  width: "100%",
  padding: themeTokens.gap["2xl"],
  border: `1px solid ${colors.border}`,
  borderRadius: themeTokens.radius.lg,
});
