import { style } from "@vanilla-extract/css";

import { flexColumn, mediaQuery, themeTokens } from "@shared/styles";

/** 기존 공통 레이아웃 기준(42rem)에서 progress는 조금 넓게, 패널은 조금 좁게 */
const LAYOUT_BASE_MAX_WIDTH = "42rem";
const STEP_PROGRESS_MAX_WIDTH = "46rem";
const STEP_PANEL_MAX_WIDTH = "40rem";

/** nav content 영역보다 살짝 좁게 — paddingInline으로 inset */
const TAB_SCOPE_INSET_PC = "7rem";
const TAB_SCOPE_INSET_LAPTOP = "5rem";
const TAB_SCOPE_INSET_MOBILE = themeTokens.gap.sm;

export const pageRoot = style([
  flexColumn,
  {
    width: "100%",
    minWidth: 0,
  },
]);

export const mainColumn = style([
  flexColumn,
  {
    width: "100%",
    maxWidth: STEP_PROGRESS_MAX_WIDTH,
    marginInline: "auto",
    gap: themeTokens.gap["2xl"],
  },
]);

export const headerBlock = style({
  width: "100%",
  maxWidth: LAYOUT_BASE_MAX_WIDTH,
  marginInline: "auto",
  marginBottom: themeTokens.gap["2xl"],
});

/** tab-scope · list 등 동일 가로 inset */
export const tabScopeInset = style([
  {
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    paddingInline: TAB_SCOPE_INSET_PC,
  },
  mediaQuery({
    laptop: {
      paddingInline: TAB_SCOPE_INSET_LAPTOP,
    },
    mobile: {
      paddingInline: TAB_SCOPE_INSET_MOBILE,
    },
  }),
]);

/** navigation content 영역보다 살짝 좁게 — 페이지 전체 너비 + paddingInline */
export const tabScopeRow = style([
  tabScopeInset,
  {
    marginBottom: themeTokens.gap["4xl"],
  },
]);

/** list 등 tab-scope와 같은 너비의 콘텐츠 영역 */
export const tabScopeContentRow = tabScopeInset;

export const stepProgress = style({
  width: "100%",
  alignSelf: "stretch",
});

export const stepPanel = style({
  width: "100%",
  maxWidth: STEP_PANEL_MAX_WIDTH,
  marginInline: "auto",
});

export const stepContent = style([
  stepPanel,
  {
    marginTop: themeTokens.gap.lg,
  },
]);

export const stepActions = stepPanel;
