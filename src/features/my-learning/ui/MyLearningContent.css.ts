import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  flexStart,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const formSection = style({
  width: "100%",
});

export const stepTitle = style({
  margin: `0 0 ${themeTokens.gap.lg} 0`,
  fontSize: typographyContract.headingLg,
  color: colors.primary,
});

export const fieldGroup = style([
  flexColumn,
  {
    gap: themeTokens.gap.lg,
  },
]);

export const fieldRow = style([
  flexStart,
  {
    alignItems: "stretch",
    gap: themeTokens.gap.md,
  },
]);

export const searchButtonWrap = style({
  minWidth: "7rem",
});
