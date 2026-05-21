import { style } from "@vanilla-extract/css";

import { colors, mediaQuery, themeTokens, typographyContract } from "@shared/styles";

/** 50px pill radius — PC 탭·검색과 동일 */
export const SEARCH_BAR_PILL_RADIUS = "3.125rem";

export const root = style([
  {
    display: "flex",
    alignItems: "center",
    gap: themeTokens.gap.md,
    width: "100%",
    minWidth: 0,
    maxWidth: "100%",
    height: "2.5rem",
    borderRadius: SEARCH_BAR_PILL_RADIUS,
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
    boxSizing: "border-box",
    paddingInline: themeTokens.gap.md,
    cursor: "pointer",
  },
  mediaQuery({
    laptop: {
      height: "2.625rem",
      gap: themeTokens.gap.lg,
      paddingInline: themeTokens.gap.lg,
    },
    pc: {
      height: "3.125rem",
      paddingInline: themeTokens.gap.xl,
    },
  }),
]);

export const searchIcon = style([
  {
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "0.875rem",
    height: "0.875rem",
  },
  mediaQuery({
    pc: {
      width: "1rem",
      height: "1rem",
    },
  }),
]);

export const searchIconImg = style({
  width: "100%",
  height: "100%",
});

export const inputWrap = style({
  flex: "1 1 auto",
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  height: "100%",
});

export const input = style({
  width: "100%",
  minWidth: 0,
  padding: 0,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  color: colors.black,
  fontSize: typographyContract.bodyLg,
  lineHeight: 1.4,
  cursor: "pointer",
  WebkitAppearance: "none",
  selectors: {
    "&::placeholder": {
      color: colors.grayscale.gray600,
    },
    "&::-webkit-search-cancel-button": {
      display: "none",
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
    },
  },
});
