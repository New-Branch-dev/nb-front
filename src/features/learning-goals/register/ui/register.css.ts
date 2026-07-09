import { style } from "@vanilla-extract/css";

import {
  colors,
  flexCenter,
  flexColumn,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const summaryCard = style([
  flexColumn,
  {
    width: "100%",
    padding: 0,
    border: "none",
    borderRadius: 0,
    backgroundColor: "transparent",
  },
]);

export const summaryHeader = style({
  display: "flex",
  alignItems: "center",
  gap: themeTokens.gap.md,
  paddingBottom: themeTokens.gap["2xl"],
  borderBottom: `1px solid ${colors.border}`,
});

export const checkIconBox = style([
  flexCenter,
  {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: themeTokens.radius.md,
    backgroundColor: colors.secondary,
    flexShrink: 0,
  },
]);

export const headerText = style([
  flexColumn,
  {
    gap: themeTokens.gap.xs,
  },
]);

export const headerTitle = style({
  margin: 0,
  color: colors.black,
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.bold,
});

export const headerDescription = style({
  margin: 0,
  color: colors.grayscale.gray700,
  fontSize: typographyContract.bodyMd,
});

export const row = style({
  display: "grid",
  gridTemplateColumns: "6rem minmax(0, 1fr)",
  alignItems: "center",
  gap: themeTokens.gap.lg,
  minHeight: "4.5rem",
  paddingBlock: themeTokens.gap.lg,
  borderBottom: `1px solid ${colors.border}`,
  selectors: {
    "&:last-child": {
      borderBottom: "none",
      paddingBottom: 0,
    },
  },
});

export const rowTitle = style({
  gridColumn: "1 / -1",
  margin: 0,
  color: colors.grayscale.gray600,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.semibold,
});

export const titleText = style({
  gridColumn: "1 / -1",
  margin: 0,
  color: colors.black,
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.bold,
});

export const rowLabel = style({
  color: colors.grayscale.gray600,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.semibold,
  whiteSpace: "nowrap",
});

export const rowCount = style({
  color: colors.primary,
  fontWeight: themeTokens.fontWeight.bold,
});

export const rowContent = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: themeTokens.gap.sm,
  minWidth: 0,
});

export const summaryChip = style({
  minWidth: "auto",
  borderColor: "transparent",
  backgroundColor: colors.secondary,
  color: colors.primary,
  fontWeight: themeTokens.fontWeight.bold,
  cursor: "default",
  pointerEvents: "none",
});

export const scoreText = style({
  color: colors.primary,
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.bold,
});

export const scoreMaxText = style({
  color: colors.grayscale.gray600,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
});

export const periodText = style({
  color: colors.black,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
});

export const periodArrowIcon = style({
  width: "0.8125rem",
  height: "0.8125rem",
});

export const periodMeta = style({
  color: colors.grayscale.gray600,
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.semibold,
});

export const weeklyGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(3.75rem, 1fr))",
  gap: themeTokens.gap.sm,
  width: "100%",
});

export const weeklyCard = style([
  flexColumn,
  {
    alignItems: "center",
    overflow: "hidden",
    minWidth: 0,
    border: `1px solid ${colors.grayscale.gray800}`,
    borderRadius: themeTokens.radius.xs,
    backgroundColor: colors.white,
  },
]);

export const weeklyCardActive = style({
  borderColor: colors.primary,
});

export const weeklyCardDimmed = style({
  opacity: 0.48,
});

export const weeklyHeader = style([
  flexCenter,
  {
    width: "100%",
    minHeight: "1.875rem",
    backgroundColor: colors.grayscale.gray600,
    color: colors.white,
    fontSize: typographyContract.bodySm,
    fontWeight: themeTokens.fontWeight.bold,
    selectors: {
      [`${weeklyCardActive} &`]: {
        backgroundColor: colors.primary,
      },
    },
  },
]);

export const weeklyHour = style([
  flexCenter,
  {
    width: "100%",
    minHeight: "2.25rem",
    color: colors.grayscale.gray600,
    fontSize: typographyContract.bodySm,
    fontWeight: themeTokens.fontWeight.bold,
    selectors: {
      [`${weeklyCardActive} &`]: {
        color: colors.primary,
      },
    },
  },
]);

export const noteList = style([
  flexColumn,
  {
    gap: themeTokens.gap.sm,
    width: "100%",
  },
]);

export const noteItem = style({
  display: "grid",
  gridTemplateColumns: "2rem minmax(0, 1fr) auto",
  alignItems: "center",
  gap: themeTokens.gap.md,
  minHeight: "3.25rem",
  paddingInline: themeTokens.gap.md,
  border: `1px solid ${colors.border}`,
  borderRadius: themeTokens.radius.md,
  backgroundColor: colors.foreground,
});

export const noteIconBox = style([
  flexCenter,
  {
    width: "1.75rem",
    height: "1.75rem",
    borderRadius: themeTokens.radius.xs,
    backgroundColor: colors.secondary,
  },
]);

export const noteName = style({
  overflow: "hidden",
  color: colors.black,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const noteSize = style({
  color: colors.grayscale.gray600,
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.regular,
  whiteSpace: "nowrap",
});
