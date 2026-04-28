import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const learningPatternRoot = style([
  flexColumn,
  {
    gap: themeTokens.gap["2xl"],
  },
]);

export const sectionCard = style([
  flexColumn,
  {
    gap: themeTokens.gap.lg,
    padding: themeTokens.gap.lg,
    border: `1px solid ${colors.border}`,
    borderRadius: themeTokens.radius.md,
    backgroundColor: colors.background,
  },
]);

export const sectionTitle = style({
  fontSize: typographyContract.headingSm,
  color: colors.grayscale.gray700,
  fontWeight: themeTokens.fontWeight.bold,
});

export const sectionDescription = style({
  marginLeft: themeTokens.gap.sm,
  fontSize: typographyContract.bodyMd,
  color: colors.grayscale.gray700,
  fontWeight: themeTokens.fontWeight.regular,
});

export const chipList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.sm,
});
