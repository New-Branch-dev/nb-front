import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  themeTokens,
  typographyContract,
} from "@shared/styles";

const chipPillRadius = "1.875rem";

export const profileBody = style([
  flexColumn,
  {
    gap: 0,
  },
]);

export const cardTitle = style({
  margin: 0,
  marginBottom: themeTokens.gap.xl,
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray900,
});

export const profileRow = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  columnGap: themeTokens.gap.xl,
  rowGap: themeTokens.gap.md,
  paddingBlock: themeTokens.gap.lg,
  borderBottom: `1px solid ${colors.border}`,
  selectors: {
    "&:last-child": {
      borderBottom: "none",
      paddingBottom: 0,
    },
  },
});

export const rowLabel = style({
  flexShrink: 0,
  minWidth: "5.75rem",
  paddingTop: "0.125rem",
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray900,
});

export const rowContent = style({
  flex: "1 1 12rem",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: `${themeTokens.gap.sm} ${themeTokens.gap.lg}`,
  minWidth: 0,
});

export const fieldPair = style({
  display: "inline-flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: themeTokens.gap.xs,
});

export const mutedKey = style({
  fontSize: typographyContract.bodyMd,
  color: colors.grayscale.gray600,
  fontWeight: themeTokens.fontWeight.regular,
  whiteSpace: "nowrap",
});

export const profileValueChip = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "1.75rem",
  paddingInline: themeTokens.gap.lg,
  borderRadius: chipPillRadius,
  backgroundColor: colors.secondary,
  color: colors.primary,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.semibold,
  lineHeight: 1.3,
  overflowWrap: "anywhere",
});
