import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const sectionRoot = style([
  flexColumn,
  {
    gap: themeTokens.gap["2xl"],
  },
]);

export const title = style({
  fontSize: typographyContract.headingSm,
  color: colors.grayscale.gray700,
  fontWeight: themeTokens.fontWeight.bold,
});
