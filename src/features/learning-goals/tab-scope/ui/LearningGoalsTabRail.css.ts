import { style } from "@vanilla-extract/css";

import { mediaQuery, themeTokens } from "@shared/styles";

export const toolbar = style({
  width: "100%",
  minWidth: 0,
  alignItems: "center",
});

/** 목록: 검색을 뷰포트 가운데에 고정 (1fr · auto · 1fr) */
export const toolbarList = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    columnGap: themeTokens.gap.lg,
  },
  mediaQuery({
    laptop: {
      columnGap: themeTokens.gap["2xl"],
    },
    pc: {
      columnGap: themeTokens.gap["4xl"],
    },
  }),
]);

export const toolbarCreate = style({
  display: "flex",
  justifyContent: "flex-start",
});

export const toolbarStart = style({
  justifySelf: "start",
  minWidth: 0,
});

export const toolbarCenter = style([
  {
    justifySelf: "center",
    width: "18rem",
    maxWidth: "100%",
    minWidth: 0,
  },
  mediaQuery({
    laptop: {
      width: "30rem",
    },
    pc: {
      width: "40rem",
    },
  }),
]);

export const toolbarEnd = style({
  justifySelf: "end",
  minWidth: 0,
});

export const tabWrap = style({
  flexShrink: 0,
  maxWidth: "100%",
});
