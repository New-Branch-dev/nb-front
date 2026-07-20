import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  flexInlineCenter,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";

const CARD_RADIUS = "0.75rem";
const FIELD_RADIUS = "0.5rem";
const DETAIL_PURPLE = "#6B35EE";
const DETAIL_PURPLE_BORDER = "#7B47FF";

export const detailRoot = style([
  flexColumn,
  {
    gap: themeTokens.gap.xl,
    padding: "1.5rem 0 3rem",
  },
]);

export const backLink = style([
  flexInlineCenter,
  {
    alignSelf: "flex-start",
    gap: themeTokens.gap.sm,
    color: colors.grayscale.gray700,
    fontSize: typographyContract.bodyLg,
    fontWeight: themeTokens.fontWeight.bold,
  },
]);

export const detailHero = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  alignItems: "center",
  gap: themeTokens.gap.xl,
  minHeight: "9rem",
  padding: "1.5rem 1.75rem",
  borderRadius: "0.875rem",
  background: DETAIL_PURPLE,
  color: colors.white,
  boxShadow: "0 0.25rem 1rem rgba(102, 65, 223, 0.14)",
});

export const heroIconBox = style([
  flexInlineCenter,
  {
    width: "3.125rem",
    height: "3.125rem",
    color: DETAIL_PURPLE,
  },
]);

export const heroContent = style([
  flexColumn,
  {
    gap: themeTokens.gap.sm,
  },
]);

export const heroCategory = style({
  margin: 0,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
});

export const heroTitleRow = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: themeTokens.gap.md,
});

export const heroTitle = style({
  margin: 0,
  fontSize: "1.65rem",
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.25,
});

export const statusPill = style([
  flexInlineCenter,
  {
    gap: "0.35rem",
    height: "1.55rem",
    paddingInline: themeTokens.gap.md,
    borderRadius: themeTokens.radius.full,
    backgroundColor: "#A7F3C4",
    color: "#158447",
    fontSize: typographyContract.bodyMd,
    fontWeight: themeTokens.fontWeight.bold,
  },
]);

export const statusDot = style({
  width: "0.3rem",
  height: "0.3rem",
  borderRadius: themeTokens.radius.full,
  backgroundColor: "#158447",
});

export const heroMeta = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: themeTokens.gap.md,
  margin: 0,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.semibold,
});

export const heroActions = style({
  display: "flex",
  alignSelf: "flex-start",
  gap: themeTokens.gap.sm,
});

export const heroActionLink = style([
  flexInlineCenter,
  {
    gap: themeTokens.gap.xs,
    minHeight: "2.25rem",
    paddingInline: themeTokens.gap.md,
    borderRadius: "0.5rem",
    fontSize: typographyContract.bodyLg,
    fontWeight: themeTokens.fontWeight.bold,
    textDecoration: "none",
    border: `1px solid ${colors.white}`,
    selectors: {
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.14)",
      },
    },
  },
]);

export const heroPrimaryLink = style([
  heroActionLink,
  {
    backgroundColor: colors.white,
    color: DETAIL_PURPLE,
    selectors: {
      "&:hover": {
        backgroundColor: colors.secondary,
      },
    },
  },
]);

export const detailGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "minmax(18rem, 24.5rem)",
    gap: themeTokens.gap.xl,
    alignItems: "start",
  },
  mediaQuery({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const sideColumn = style([
  flexColumn,
  {
    gap: themeTokens.gap.lg,
  },
]);

export const infoCard = style([
  flexColumn,
  {
    gap: themeTokens.gap.lg,
    padding: themeTokens.gap.xl,
    borderRadius: CARD_RADIUS,
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
  },
]);

export const cardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: themeTokens.gap.md,
});

export const cardTitle = style({
  margin: 0,
  color: colors.black,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.bold,
});

export const cardTitleCount = style({
  color: DETAIL_PURPLE,
});

export const editButton = style([
  flexInlineCenter,
  {
    width: "1.625rem",
    height: "1.625rem",
    borderRadius: "0.375rem",
    backgroundColor: "#F0EEF6",
    textDecoration: "none",
  },
]);

export const fieldList = style([
  flexColumn,
  {
    gap: themeTokens.gap.sm,
  },
]);

export const fileField = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",
  gap: themeTokens.gap.sm,
  minHeight: "2.35rem",
  padding: `0 ${themeTokens.gap.md}`,
  borderRadius: FIELD_RADIUS,
  border: `1px solid ${DETAIL_PURPLE_BORDER}`,
  color: colors.black,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.bold,
  textDecoration: "none",
});

export const condensedField = style([
  fileField,
  {
    backgroundColor: colors.secondary,
    color: DETAIL_PURPLE,
  },
]);

export const sectionDividerTitle = style({
  margin: `${themeTokens.gap.md} 0 0`,
  color: colors.black,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.bold,
});

export const chipWrap = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: themeTokens.gap.sm,
});

export const summaryChip = style([
  flexInlineCenter,
  {
    minHeight: "2rem",
    paddingInline: themeTokens.gap.md,
    borderRadius: themeTokens.radius.full,
    backgroundColor: colors.secondary,
    color: DETAIL_PURPLE,
    fontSize: typographyContract.bodyMd,
    fontWeight: themeTokens.fontWeight.bold,
  },
]);

export const periodGroup = style([
  flexColumn,
  {
    gap: themeTokens.gap.sm,
    padding: themeTokens.gap.md,
    borderRadius: FIELD_RADIUS,
    border: `1px solid ${DETAIL_PURPLE_BORDER}`,
  },
]);

export const periodGroupTitle = style([
  flexInlineCenter,
  {
    gap: themeTokens.gap.sm,
    color: DETAIL_PURPLE,
    fontSize: typographyContract.bodyLg,
    fontWeight: themeTokens.fontWeight.bold,
  },
]);

export const periodTextList = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "0.35rem",
  color: colors.black,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.semibold,
});
