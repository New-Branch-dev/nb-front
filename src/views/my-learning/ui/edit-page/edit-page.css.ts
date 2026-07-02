import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";

const EDIT_PANEL_MAX_WIDTH = "40rem";

export const pageRoot = style([
  flexColumn,
  {
    width: "100%",
    minWidth: 0,
  },
]);

export const editColumn = style([
  flexColumn,
  {
    width: "100%",
    maxWidth: EDIT_PANEL_MAX_WIDTH,
    marginInline: "auto",
    gap: themeTokens.gap.xl,
  },
]);

export const editPanel = style({
  width: "100%",
  padding: themeTokens.gap["2xl"],
  border: `1px solid ${colors.border}`,
  borderRadius: themeTokens.radius.lg,
  backgroundColor: colors.white,
});

export const editTitle = style({
  margin: 0,
  color: colors.black,
  fontSize: typographyContract.headingLg,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.4,
});

export const actionRow = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: themeTokens.gap.md,
  },
  mediaQuery({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const actionButton = style({
  width: "100%",
});
