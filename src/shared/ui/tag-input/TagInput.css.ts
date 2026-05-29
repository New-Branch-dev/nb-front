import { style } from "@vanilla-extract/css";

import { colors, flexColumn, flexInlineCenter, themeTokens } from "@shared/styles";

export const root = style([
  flexColumn,
  {
    gap: themeTokens.gap.sm,
    width: "100%",
  },
]);

export const chipRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.sm,
  margin: 0,
  padding: 0,
  listStyle: "none",
});

export const removeMark = style([
  flexInlineCenter,
  {
    marginLeft: "0.375rem",
    width: "0.875rem",
    height: "0.875rem",
    borderRadius: "999px",
    fontSize: "0.625rem",
    lineHeight: 1,
    color: "currentColor",
    opacity: 0.7,
  },
]);

/** 보라색 AI 패널 위에서 TagInput을 사용할 때 입력 글자 색 */
export const inputOnPrimary = style({
  color: colors.black,
  selectors: {
    "&::placeholder": {
      color: colors.grayscale.gray600,
    },
  },
});
