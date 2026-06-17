import { style } from "@vanilla-extract/css";

import {
  colors,
  flexStart,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const fieldRow = style([
  flexStart,
  {
    gap: themeTokens.gap.md,
    width: "100%",
  },
]);

export const schoolDisplay = style({
  display: "flex",
  flex: 1,
  alignItems: "center",
  minWidth: 0,
  minHeight: "2.75rem",
  paddingInline: themeTokens.gap.md,
  border: `1px solid ${colors.border}`,
  borderRadius: themeTokens.radius.md,
  backgroundColor: colors.surface,
  fontSize: typographyContract.bodyLg,
  overflowWrap: "anywhere",
});

export const schoolValue = style({
  color: colors.textPrimary,
});

export const schoolPlaceholder = style({
  color: colors.grayscale.gray600,
});

export const searchButtonWrap = style({
  minWidth: "7rem",
});
