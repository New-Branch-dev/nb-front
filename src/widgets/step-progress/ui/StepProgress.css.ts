import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import {
  colors,
  flexCenter,
  flexColumnCenter,
  themeTokens,
  typographyContract,
} from "@shared/styles";

import "@shared/styles/suiteFont.css";

const CIRCLE_SIZE = "2.25rem";
const TRACK_HEIGHT = "0.5rem";

/** 원 안 단계 숫자 — SUITE 로드 후 적용 (shared/styles/suiteFont.css) */
const stepCircleNumberFontFamily = `"SUITE", Arial, Helvetica, sans-serif`;

export const root = style({
  width: "100%",
});

export const labelsList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  width: "100%",
});

export const labelColumn = style([
  flexColumnCenter,
  {
    flex: "1 1 0",
    minWidth: 0,
    gap: themeTokens.gap.xs,
    paddingTop: themeTokens.gap.md,
  },
]);

export const progressRow = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  minHeight: CIRCLE_SIZE,
});

export const trackWrap = style({
  position: "absolute",
  top: "50%",
  left: 0,
  right: 0,
  height: TRACK_HEIGHT,
  transform: "translateY(-50%)",
  zIndex: 0,
});

export const trackBackground = style({
  position: "absolute",
  inset: 0,
  borderRadius: themeTokens.radius.full,
  backgroundColor: colors.grayscale.gray800,
});

export const trackFill = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  borderRadius: themeTokens.radius.full,
  backgroundColor: colors.primary,
  transition: "width 0.25s ease",
});

export const nodesList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  width: "100%",
  position: "relative",
  zIndex: 1,
});

export const nodeColumn = style([
  flexCenter,
  {
    flex: "1 1 0",
    minWidth: 0,
  },
]);

/** 완료·현재 단계 공통: 진한 보라(primary) */
export const stepCirclePrimary = style([
  flexCenter,
  {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: themeTokens.radius.full,
    flexShrink: 0,
    boxSizing: "border-box",
    border: "none",
    backgroundColor: colors.primary,
  },
]);

export const stepNumberCurrent = style({
  fontFamily: stepCircleNumberFontFamily,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1,
  color: colors.white,
});

export const checkIcon = style({
  display: "block",
  width: "1.125rem",
  height: "auto",
});

export const stepCountLabelReached = style({
  fontSize: typographyContract.bodySm,
  lineHeight: 1.3,
  textAlign: "center",
  color: colors.primary,
});

export const stepTitleReached = style({
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.35,
  textAlign: "center",
  wordBreak: "keep-all",
  color: colors.primary,
});

/** 미도달: 연한 회색 원, 숫자는 원보다 더 연한 회색 */
export const stepCircle = recipe({
  base: [
    flexCenter,
    {
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      borderRadius: themeTokens.radius.full,
      flexShrink: 0,
      boxSizing: "border-box",
      border: "none",
      backgroundColor: colors.grayscale.gray800,
    },
  ],
  variants: {
    status: {
      upcoming: {
        backgroundColor: colors.grayscale.gray800,
      },
    },
  },
});

export const stepNumber = recipe({
  base: {
    fontFamily: stepCircleNumberFontFamily,
    fontSize: typographyContract.bodyMd,
    fontWeight: themeTokens.fontWeight.bold,
    lineHeight: 1,
  },
  variants: {
    status: {
      upcoming: {
        color: colors.disabled,
      },
    },
  },
});

export const stepCountLabel = recipe({
  base: {
    fontSize: typographyContract.bodySm,
    lineHeight: 1.3,
    textAlign: "center",
  },
  variants: {
    status: {
      upcoming: {
        color: colors.grayscale.gray600,
      },
    },
  },
});

export const stepTitle = recipe({
  base: {
    fontSize: typographyContract.bodyMd,
    fontWeight: themeTokens.fontWeight.bold,
    lineHeight: 1.35,
    textAlign: "center",
    wordBreak: "keep-all",
  },
  variants: {
    status: {
      upcoming: {
        color: colors.grayscale.gray600,
      },
    },
  },
});
