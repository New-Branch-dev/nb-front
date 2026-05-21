import { style } from "@vanilla-extract/css";

import { flexStart, themeTokens } from "@shared/styles";

export const fieldRow = style([
  flexStart,
  {
    gap: themeTokens.gap.md,
  },
]);

export const searchButtonWrap = style({
  minWidth: "7rem",
});
