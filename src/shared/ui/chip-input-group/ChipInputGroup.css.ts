import { style } from "@vanilla-extract/css";

import { colors, flexColumn, themeTokens } from "@shared/styles";

export const root = style([
  flexColumn,
  {
    gap: themeTokens.gap.md,
    width: "100%",
  },
]);

export const chipRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.md,
});

export const directInput = style({
  width: "100%",
});

/** 보라색 AI 패널 직접입력 — 입력 텍스트 검은색 */
export const directInputOnPrimary = style({
  color: colors.black,
  selectors: {
    "&::placeholder": {
      color: colors.grayscale.gray600,
    },
  },
});
