import { style } from "@vanilla-extract/css";

import { colors, themeTokens } from "@shared/styles";

export const contentRoot = style({
  width: "100%",
  marginTop: themeTokens.gap.lg,
});

export const panelCard = style({
  width: "100%",
  padding: themeTokens.gap["2xl"],
  border: `1px solid ${colors.border}`,
  borderRadius: themeTokens.radius.lg,
  backgroundColor: colors.white,
});
