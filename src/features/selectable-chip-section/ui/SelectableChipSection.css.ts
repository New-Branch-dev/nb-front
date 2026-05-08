import { style } from "@vanilla-extract/css";

import { themeTokens } from "@shared/styles";

export const chipList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.md,
});
