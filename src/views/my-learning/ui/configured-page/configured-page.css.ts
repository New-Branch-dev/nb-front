import { style } from "@vanilla-extract/css";

import {
  colors,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";

const RESULT_MAX_WIDTH = "50rem";

export const pageRoot = style([
  {
    width: "100%",
    minHeight: "100dvh",
    padding: "0 1.5rem 3rem",
  },
  mediaQuery({
    mobile: {
      padding: "0 1rem 2rem",
    },
  }),
]);

export const contentPanel = style([
  {
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
    width: "100%",
    maxWidth: RESULT_MAX_WIDTH,
    marginInline: "auto",
    padding: "2rem 1.5rem",
    border: `1px solid ${colors.border}`,
    borderRadius: themeTokens.radius.lg,
    backgroundColor: colors.white,
  },
  mediaQuery({
    mobile: {
      gap: themeTokens.gap["2xl"],
      padding: "1.5rem 1rem",
    },
  }),
]);

export const profileFieldGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: themeTokens.gap.md,
  },
  mediaQuery({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const profileFieldBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: themeTokens.gap.xs,
  minHeight: "4rem",
  padding: "0.75rem 1.25rem",
  border: `1px solid ${colors.border}`,
  borderRadius: themeTokens.radius.md,
  backgroundColor: colors.foreground,
});

export const profileFieldLabel = style({
  color: "#a4a0b1",
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1,
});

export const profileFieldValue = style({
  color: colors.black,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.3,
});

export const actions = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr 1.85fr",
    gap: themeTokens.gap.md,
    width: "100%",
    maxWidth: RESULT_MAX_WIDTH,
    margin: "3.5rem auto 0",
  },
  mediaQuery({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const actionLink = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "3.5rem",
  borderRadius: themeTokens.radius.lg,
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.bold,
});

export const actionSecondary = style({
  backgroundColor: colors.secondary,
  color: colors.primary,
});

export const actionRow = style({
  backgroundColor: colors.primary,
  color: colors.white,
  boxShadow: `0 0.5rem 0.875rem ${colors.primary}33`,
});

export const statusMessage = style({
  width: "100%",
  maxWidth: RESULT_MAX_WIDTH,
  margin: "0 auto",
  padding: "4rem 1.5rem",
  color: colors.grayscale.gray600,
  fontSize: typographyContract.bodyMd,
  textAlign: "center",
});
