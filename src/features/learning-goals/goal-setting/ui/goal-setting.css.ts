import { style } from "@vanilla-extract/css";

import {
  colors,
  flexCenter,
  flexColumn,
  flexStart,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const panelRoot = style({
  width: "100%",
});

export const titleInput = style({
  height: "3rem",
  backgroundColor: colors.white,
  cursor: "text",
  selectors: {
    "&::placeholder": {
      color: colors.grayscale.gray600,
    },
  },
});

export const twoColumnRow = style([
  flexStart,
  {
    gap: themeTokens.gap.md,
    width: "100%",
    minWidth: 0,
  },
]);

export const columnCell = style({
  flex: "1 1 0",
  minWidth: 0,
  width: "100%",
});

export const scoreField = style([
  flexCenter,
  {
    flex: "1 1 0",
    minWidth: 0,
    height: "2.75rem",
    paddingInline: themeTokens.gap.md,
    borderRadius: themeTokens.radius.md,
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
    gap: themeTokens.gap.sm,
  },
]);

export const scoreLabel = style({
  flexShrink: 0,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.semibold,
  color: colors.grayscale.gray700,
});

export const scoreInput = style({
  flex: 1,
  minWidth: 0,
  border: "none",
  outline: "none",
  textAlign: "right",
  fontSize: typographyContract.bodyLg,
  color: colors.grayscale.gray700,
  backgroundColor: "transparent",
  selectors: {
    "&::placeholder": {
      color: colors.grayscale.gray600,
    },
  },
});

export const scoreSuffix = style({
  flexShrink: 0,
  fontSize: typographyContract.bodyLg,
  color: colors.grayscale.gray600,
});

export const weeklyGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(3.75rem, 1fr))",
  gap: themeTokens.gap.sm,
  width: "100%",
});

export const dayCard = style([
  flexCenter,
  {
    flexDirection: "column",
    minWidth: 0,
    borderRadius: themeTokens.radius.md,
    border: `1px solid ${colors.grayscale.gray600}`,
    backgroundColor: colors.white,
    overflow: "hidden",
    transition: "border-color 0.2s ease",
    selectors: {
      '&[data-active="true"]': {
        borderColor: colors.primary,
      },
    },
  },
]);

export const dayHeader = style([
  flexCenter,
  {
    width: "100%",
    paddingBlock: themeTokens.gap.xs,
    backgroundColor: colors.grayscale.gray600,
    color: colors.white,
    fontSize: typographyContract.bodySm,
    fontWeight: themeTokens.fontWeight.semibold,
    transition: "background-color 0.2s ease",
    selectors: {
      [`${dayCard}[data-active="true"] &`]: {
        backgroundColor: colors.primary,
      },
    },
  },
]);

export const dayBody = style({
  width: "100%",
  padding: themeTokens.gap.xs,
});

export const dayTimeField = style([
  flexCenter,
  {
    width: "100%",
    minHeight: "2.25rem",
    paddingInline: themeTokens.gap.xs,
    gap: themeTokens.gap.xs,
    boxSizing: "border-box",
  },
]);

export const dayTimeInput = style({
  flex: 1,
  minWidth: 0,
  width: "100%",
  border: "none",
  outline: "none",
  textAlign: "center",
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray700,
  backgroundColor: "transparent",
  selectors: {
    "&::placeholder": {
      color: colors.grayscale.gray600,
    },
  },
});

export const dayTimeSuffix = style({
  flexShrink: 0,
  fontSize: typographyContract.bodySm,
  color: colors.grayscale.gray600,
  lineHeight: 1,
  whiteSpace: "nowrap",
  transition: "color 0.2s ease",
  selectors: {
    [`${dayCard}[data-active="true"] &`]: {
      color: colors.primary,
    },
  },
});

export const excludedDateRoot = style([
  flexColumn,
  {
    alignItems: "flex-start",
    gap: themeTokens.gap.md,
    width: "100%",
  },
]);

export const excludedDatePicker = style({
  marginTop: themeTokens.gap.sm,
});

export const excludedDateChipList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.sm,
});

export const excludedDateChip = style([
  flexCenter,
  {
    gap: themeTokens.gap.xs,
    minWidth: "auto",
    minHeight: "2rem",
    paddingInline: themeTokens.gap.md,
    borderRadius: themeTokens.radius.full,
    borderColor: "transparent",
    backgroundColor: colors.secondary,
    color: colors.primary,
    fontSize: typographyContract.bodyMd,
    fontWeight: themeTokens.fontWeight.semibold,
  },
]);

export const excludedDateRemoveButton = style({
  border: "none",
  padding: 0,
  backgroundColor: "transparent",
  color: "inherit",
  fontSize: typographyContract.bodyMd,
  lineHeight: 1,
  cursor: "pointer",
});
