import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  flexStart,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const summaryCard = style([
  flexColumn,
  {
    gap: 0,
    width: "100%",
  },
]);

export const section = style({
  paddingBlock: themeTokens.gap.xl,
  borderBottom: `1px solid ${colors.border}`,
  selectors: {
    "&:first-child": {
      paddingTop: 0,
    },
    "&:last-child": {
      borderBottom: "none",
      paddingBottom: 0,
    },
  },
});

export const sectionHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: themeTokens.gap.md,
  marginBottom: themeTokens.gap.lg,
});

export const sectionTitle = style({
  margin: 0,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray900,
});

export const countBadge = style({
  flexShrink: 0,
  padding: `${themeTokens.gap.xs} ${themeTokens.gap.md}`,
  borderRadius: themeTokens.radius.full,
  backgroundColor: colors.secondary,
  color: colors.primary,
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.semibold,
  lineHeight: 1.2,
});

export const noteCardList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.md,
});

export const noteCard = style([
  flexColumn,
  flexStart,
  {
    flex: "1 1 12rem",
    minWidth: "10rem",
    maxWidth: "100%",
    padding: themeTokens.gap.lg,
    borderRadius: themeTokens.radius.md,
    backgroundColor: colors.primary,
    color: colors.white,
    gap: themeTokens.gap.xs,
  },
]);

export const noteCardTitle = style({
  margin: 0,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.35,
  wordBreak: "break-word",
});

export const noteCardSubtitle = style({
  margin: 0,
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.regular,
  lineHeight: 1.4,
  opacity: 0.92,
  wordBreak: "break-word",
});

export const chipRows = style([
  flexColumn,
  {
    gap: themeTokens.gap.md,
  },
]);

export const chipRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.md,
});

export const summaryChip = style({
  display: "inline-flex",
  alignItems: "center",
  padding: `${themeTokens.gap.sm} ${themeTokens.gap.lg}`,
  borderRadius: themeTokens.gap.sm,
  backgroundColor: colors.secondary,
  color: colors.primary,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.medium,
  lineHeight: 1.35,
  wordBreak: "break-word",
});

export const emptyText = style({
  margin: 0,
  fontSize: typographyContract.bodyMd,
  color: colors.grayscale.gray600,
});
