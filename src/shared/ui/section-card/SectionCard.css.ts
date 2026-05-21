import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  flexStart,
  themeTokens,
  typographyContract,
} from "@shared/styles";

/** 직계 `SectionCard`(article)에만 아래 구분선을 주고, 마지막 자식은 제외 */
export const sectionCardStack = style([
  flexColumn,
  {
    width: "100%",
    gap: themeTokens.gap["4xl"],
  },
]);

export const sectionCard = style([
  flexColumn,
  {
    gap: themeTokens.gap.lg,
    paddingBottom: themeTokens.gap["4xl"],
    selectors: {
      [`${sectionCardStack} > &:not(:last-child)`]: {
        borderBottom: `1px solid ${colors.border}`,
      },

      [`${sectionCardStack} > &:last-child`]: {
        paddingBottom: 0,
      },
    },
  },
]);

export const sectionHeader = style([
  flexStart,
  {
    flexWrap: "wrap",
    gap: themeTokens.gap.sm,
  },
]);

export const sectionTitle = style({
  margin: 0,
  fontSize: typographyContract.headingSm,
  color: colors.grayscale.gray700,
  fontWeight: themeTokens.fontWeight.bold,
});

export const sectionDescription = style({
  fontSize: typographyContract.bodyMd,
  color: colors.grayscale.gray700,
  fontWeight: themeTokens.fontWeight.regular,
});
