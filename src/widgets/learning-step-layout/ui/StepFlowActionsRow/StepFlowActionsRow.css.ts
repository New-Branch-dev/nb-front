import { style } from "@vanilla-extract/css";

import { flexStart, themeTokens } from "@shared/styles";

export const actionRow = style([
  flexStart,
  {
    width: "100%",
    gap: themeTokens.gap.md,
  },
]);

export const actionButton = style({
  flex: 1,
  width: "100%",
});
