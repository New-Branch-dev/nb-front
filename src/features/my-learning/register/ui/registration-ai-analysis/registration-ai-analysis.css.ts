import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const aiPanel = style({
  width: "100%",
  borderRadius: themeTokens.radius.lg,
  backgroundColor: colors.primary,
});

export const aiPanelInner = style([
  flexColumn,
  {
    gap: themeTokens.gap.xl,
    padding: themeTokens.gap["2xl"],
  },
]);

export const aiPanelTitle = style({
  margin: 0,
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.white,
});

export const aiDivider = style({
  width: "100%",
  height: "1px",
  backgroundColor: "rgba(255, 255, 255, 0.35)",
});
