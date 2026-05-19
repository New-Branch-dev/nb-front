import { style } from "@vanilla-extract/css";

import { flexColumn, flexStart, themeTokens } from "@shared/styles";

export const fieldGroup = style([
  flexColumn,
  {
    gap: themeTokens.gap.lg,
  },
]);

export const fieldRow = style([
  flexStart,
  {
    gap: themeTokens.gap.md,
  },
]);

export const searchButtonWrap = style({
  minWidth: "7rem",
});
