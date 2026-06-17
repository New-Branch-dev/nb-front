import { style } from "@vanilla-extract/css";

import {
  colors,
  flexBetweenCenter,
  flexCenter,
  flexStart,
  themeTokens,
  typographyContract,
} from "@shared/styles";
import { sectionCardStack } from "@shared/ui/section-card/SectionCard.css";

export const panelRoot = style({
  width: "100%",
});

export const twoColumnRow = style([
  flexStart,
  {
    gap: themeTokens.gap.md,
    width: "100%",
    minWidth: 0,
  },
]);

export const columnCell = style({
  flex: "1 1 0",
  minWidth: 0,
  width: "100%",
});

export const inlineCountSection = style({
  paddingBottom: themeTokens.gap["4xl"],
  selectors: {
    [`${sectionCardStack} > &`]: {
      borderBottom: `1px solid ${colors.border}`,
    },
  },
});

export const inlineLabelRow = style([
  flexBetweenCenter,
  {
    width: "100%",
    minWidth: 0,
    alignItems: "center",
    gap: themeTokens.gap.lg,
  },
]);

export const sectionLabel = style({
  flexShrink: 0,
  margin: 0,
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray700,
});

export const countBox = style([
  flexCenter,
  {
    flexShrink: 0,
    height: "2.75rem",
    minWidth: "6.5rem",
    paddingInline: themeTokens.gap.md,
    gap: themeTokens.gap.xs,
    border: `1px solid ${colors.border}`,
    borderRadius: themeTokens.radius.md,
    backgroundColor: colors.white,
  },
]);

export const countSelector = style({
  flex: "1 1 auto",
  minWidth: "1.75rem",
  height: "100%",
  padding: 0,
  paddingRight: themeTokens.gap.lg,
  border: "none",
  backgroundColor: "transparent",
  textAlign: "center",
  fontSize: typographyContract.bodyLg,
  color: colors.grayscale.gray700,
  fontWeight: themeTokens.fontWeight.semibold,
});

export const countSuffix = style({
  flexShrink: 0,
  fontSize: typographyContract.bodyLg,
  color: colors.grayscale.gray600,
  whiteSpace: "nowrap",
});
