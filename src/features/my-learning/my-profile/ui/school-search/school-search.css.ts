import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const modalContent = style([
  flexColumn,
  {
    gap: themeTokens.gap.xl,
  },
]);

export const actions = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const title = style({
  margin: 0,
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray900,
});

export const message = style({
  margin: 0,
  paddingBlock: themeTokens.gap.lg,
  fontSize: typographyContract.bodyMd,
  color: colors.grayscale.gray600,
  textAlign: "center",
});

export const resultList = style([
  flexColumn,
  {
    maxHeight: "22rem",
    gap: themeTokens.gap.sm,
    margin: 0,
    padding: 0,
    overflowY: "auto",
    listStyle: "none",
  },
]);

export const schoolButton = style({
  width: "100%",
  padding: themeTokens.gap.lg,
  border: `1px solid ${colors.border}`,
  borderRadius: themeTokens.radius.md,
  backgroundColor: colors.white,
  textAlign: "left",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      borderColor: colors.primary,
    },
    "&:focus-visible": {
      outline: `2px solid ${colors.primary}`,
      outlineOffset: "2px",
    },
  },
});

export const schoolName = style({
  display: "block",
  marginBottom: themeTokens.gap.xs,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.semibold,
  color: colors.grayscale.gray900,
});

export const schoolMeta = style({
  display: "block",
  fontSize: typographyContract.bodySm,
  color: colors.grayscale.gray600,
});

export const searchInput = style(
  mediaQuery({
    mobile: {
      fontSize: typographyContract.bodySm,
    },
  }),
);
