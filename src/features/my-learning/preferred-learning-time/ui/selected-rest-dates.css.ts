import { style } from "@vanilla-extract/css";

import { colors, flexInlineCenter, themeTokens } from "@shared/styles";

export const selectedDatesList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.sm,
  margin: 0,
  padding: `${themeTokens.gap.xl} 0 0`,
  borderTop: `1px solid ${colors.border}`,
  listStyle: "none",
});

export const removeMark = style([
  flexInlineCenter,
  {
    marginLeft: themeTokens.gap.sm,
    width: "1rem",
    height: "1rem",
    fontSize: "1rem",
    lineHeight: 1,
  },
]);
