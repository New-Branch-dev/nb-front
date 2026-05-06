import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const profileCard = style([
  flexColumn,
  {
    gap: themeTokens.gap.xl,
  },
]);

export const cardTitle = style({
  margin: 0,
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray900,
});

export const profileInner = style([
  flexColumn,
  {
    gap: 0,
    padding: `${themeTokens.gap.xl} ${themeTokens.gap["2xl"]}`,
    backgroundColor: colors.white,
    border: `1px solid ${colors.border}`,
    borderRadius: themeTokens.radius.md,
  },
]);

export const profileRow = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  columnGap: themeTokens.gap.xl,
  rowGap: themeTokens.gap.sm,
  paddingTop: themeTokens.gap.lg,
  paddingBottom: themeTokens.gap.lg,
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

export const rowLabel = style({
  flexShrink: 0,
  minWidth: "5.75rem",
  paddingTop: "0.125rem",
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray900,
});

export const rowContent = style({
  flex: 1,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  gap: `${themeTokens.gap.xs} ${themeTokens.gap.none}`,
  fontSize: typographyContract.bodyMd,
  lineHeight: 1.5,
});

export const mutedKey = style({
  marginRight: themeTokens.gap.xs,
  color: colors.grayscale.gray600,
  fontWeight: themeTokens.fontWeight.regular,
});

export const emphasisValue = style({
  marginRight: themeTokens.gap.md,
  color: colors.grayscale.gray900,
  fontWeight: themeTokens.fontWeight.bold,
});

export const inlineDot = style({
  margin: `0 ${themeTokens.gap.sm}`,
  color: colors.grayscale.gray800,
});

export const aiPanel = style([
  flexColumn,
  {
    gap: themeTokens.gap.xl,
    padding: themeTokens.gap["2xl"],
    borderRadius: themeTokens.radius.lg,
    backgroundColor: colors.primary,
    boxShadow: "0 4px 14px rgba(123, 63, 228, 0.28)",
  },
]);

export const aiPanelTitle = style({
  margin: 0,
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.white,
});

export const aiInner = style([
  flexColumn,
  {
    gap: 0,
    padding: themeTokens.gap.none,
    border: `1px solid rgba(255, 255, 255, 0.9)`,
    borderRadius: themeTokens.radius.md,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
  },
]);

export const aiRow = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: themeTokens.gap.lg,
  padding: `${themeTokens.gap.lg} ${themeTokens.gap.xl}`,
  selectors: {
    "&:first-child": {
      borderBottom: `1px solid rgba(255, 255, 255, 0.35)`,
    },
  },
});

export const aiRowLabel = style({
  margin: 0,
  flexShrink: 0,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.white,
});

export const aiRowActions = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: themeTokens.gap.sm,
});

export const aiBadge = style({
  padding: `${themeTokens.gap.sm} ${themeTokens.gap.lg}`,
  borderRadius: themeTokens.radius.full,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.semibold,
  color: colors.grayscale.gray900,
  backgroundColor: colors.white,
  lineHeight: 1.3,
});

export const aiChangeButton = style({
  padding: `${themeTokens.gap.sm} ${themeTokens.gap.md}`,
  minHeight: "2rem",
  border: `1px solid ${colors.white}`,
  borderRadius: themeTokens.radius.md,
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.semibold,
  color: colors.white,
  backgroundColor: "transparent",
  cursor: "pointer",
  lineHeight: 1.2,
});
