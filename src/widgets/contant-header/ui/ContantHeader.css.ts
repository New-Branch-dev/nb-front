import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumnCenter,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const header = style([
  flexColumnCenter,
  {
    gap: themeTokens.gap.md,
    marginBottom: themeTokens.gap["2xl"],
  },
]);

export const title = style({
  margin: 0,
  color: colors.primary,
  fontSize: typographyContract.displaySection,
  fontWeight: themeTokens.fontWeight.bold,
  marginBottom: themeTokens.gap.sm,
});

export const description = style({
  margin: 0,
  color: colors.grayscale.gray700,
  fontSize: typographyContract.bodyLg,
});
