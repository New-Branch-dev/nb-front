import { style } from "@vanilla-extract/css";

import { flexColumn, themeTokens } from "@shared/styles";

export const container = style([
  flexColumn,
  {
    maxWidth: "42rem",
    marginInline: "auto",
    gap: themeTokens.gap["2xl"],
  },
]);
