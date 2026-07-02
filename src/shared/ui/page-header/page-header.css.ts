import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumnCenter,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const pageHeader = style([
  flexColumnCenter,
  {
    width: "100%",
    maxWidth: "42rem",
    marginInline: "auto",
    marginBottom: themeTokens.gap["4xl"],
    gap: themeTokens.gap.md,
  },
]);

export const pageHeaderTitle = style({
  margin: 0,
  marginBottom: themeTokens.gap.sm,
  color: colors.primary,
  fontSize: typographyContract.displaySection,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.2,
});

export const pageHeaderDescription = style({
  margin: 0,
  color: colors.grayscale.gray700,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.medium,
});
