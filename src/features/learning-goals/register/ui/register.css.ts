import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
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
  paddingBlock: themeTokens.gap["3xl"],
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
  marginBottom: themeTokens.gap["2xl"],
});

export const sectionTitle = style({
  margin: 0,
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray900,
});

export const countBadge = style({
  flexShrink: 0,
  minWidth: "auto",
  borderColor: "transparent",
  backgroundColor: colors.secondary,
  color: colors.primary,
  fontWeight: themeTokens.fontWeight.semibold,
  cursor: "default",
  pointerEvents: "none",
});

export const noteCardList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.sm,
});

export const noteCard = style([
  flexColumn,
  {
    alignItems: "center",
    justifyContent: "center",
    width: "7.5rem",
    minHeight: "4.5rem",
    padding: `${themeTokens.gap.sm} ${themeTokens.gap.md}`,
    borderRadius: themeTokens.radius.sm,
    backgroundColor: colors.primary,
    color: colors.white,
    gap: "0.125rem",
  },
]);

export const noteCardTitle = style({
  width: "100%",
  margin: 0,
  overflow: "hidden",
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.25,
  textAlign: "center",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const noteCardSubtitle = style({
  margin: 0,
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.regular,
  lineHeight: 1.25,
  opacity: 0.92,
  textAlign: "center",
  wordBreak: "break-word",
});

export const chipRows = style([
  flexColumn,
  {
    gap: themeTokens.gap.lg,
  },
]);

export const chipRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.sm,
});

export const summaryChip = style({
  borderColor: "transparent",
  backgroundColor: colors.secondary,
  color: colors.primary,
  fontWeight: themeTokens.fontWeight.bold,
  cursor: "default",
  pointerEvents: "none",
  wordBreak: "break-word",
});

export const emptyText = style({
  margin: 0,
  fontSize: typographyContract.bodyMd,
  color: colors.grayscale.gray600,
});
