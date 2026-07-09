import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  themeTokens,
  typographyContract,
} from "@shared/styles";

const chipPillRadius = "1.875rem";

export const confirmCard = style([
  flexColumn,
  {
    gap: themeTokens.gap["3xl"],
    padding: themeTokens.gap["3xl"],
    backgroundColor: colors.white,
  },
]);

export const confirmHeader = style({
  display: "grid",
  gridTemplateColumns: "3rem 1fr",
  alignItems: "center",
  gap: themeTokens.gap.md,
  paddingBottom: themeTokens.gap.xl,
  borderBottom: `1px solid ${colors.border}`,
});

export const confirmIcon = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3rem",
  height: "3rem",
  borderRadius: themeTokens.radius.sm,
  backgroundColor: colors.secondary,
});

export const confirmTitle = style({
  margin: 0,
  color: colors.black,
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
});

export const confirmDescription = style({
  margin: 0,
  marginTop: themeTokens.gap.xs,
  color: colors.grayscale.gray700,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.regular,
});

export const profileBody = style([
  flexColumn,
  {
    gap: 0,
  },
]);

export const profileRow = style([
  flexColumn,
  {
    gap: themeTokens.gap.xl,
    paddingBottom: themeTokens.gap["3xl"],
    borderBottom: `1px solid ${colors.border}`,
    selectors: {
      "& + &": {
        paddingTop: themeTokens.gap["3xl"],
      },

      "&:last-child": {
        borderBottom: "none",
        paddingBottom: 0,
      },
    },
  },
]);

export const rowHeading = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: themeTokens.gap.md,
});

export const stepBadge = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  borderRadius: themeTokens.radius.sm,
  backgroundColor: colors.primary,
  color: colors.white,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.bold,
});

export const rowTitle = style({
  margin: 0,
  color: colors.black,
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.bold,
});

export const profileGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: themeTokens.gap.md,
});

export const profileFieldBox = style([
  flexColumn,
  {
    justifyContent: "center",
    minHeight: "3.75rem",
    padding: `${themeTokens.gap.sm} ${themeTokens.gap.xl}`,
    borderRadius: themeTokens.radius.sm,
    backgroundColor: colors.foreground,
  },
]);

export const profileFieldLabel = style({
  color: colors.grayscale.gray600,
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.semibold,
});

export const profileFieldValue = style({
  marginTop: themeTokens.gap.xs,
  color: colors.black,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.bold,
});

export const fieldRow = style({
  display: "grid",
  gridTemplateColumns: "6.5rem 1fr",
  alignItems: "center",
  gap: themeTokens.gap.sm,
});

export const rowLabel = style({
  color: colors.grayscale.gray600,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.semibold,
});

export const rowContent = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: `${themeTokens.gap.xs} ${themeTokens.gap.sm}`,
  minWidth: 0,
});

export const profileValueChip = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "2rem",
  paddingInline: themeTokens.gap.lg,
  borderRadius: chipPillRadius,
  backgroundColor: colors.secondary,
  color: colors.primary,
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.3,
  overflowWrap: "anywhere",
});
