import { style } from "@vanilla-extract/css";

import {
  colors,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";

const RESULT_MAX_WIDTH = "75rem";

export const pageRoot = style([
  {
    width: "100%",
    minHeight: "100dvh",
    padding: "0 1.5rem 5rem",
  },
  mediaQuery({
    mobile: {
      padding: "0 1rem 3rem",
    },
  }),
]);

export const header = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: themeTokens.gap.md,
  marginBottom: "4rem",
});

export const title = style({
  margin: 0,
  color: colors.primary,
  fontSize: typographyContract.displaySection,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.2,
});

export const sectionTitle = style({
  margin: 0,
  color: colors.grayscale.gray700,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.medium,
});

export const contentGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: themeTokens.gap.lg,
    width: "100%",
    maxWidth: RESULT_MAX_WIDTH,
    marginInline: "auto",
  },
  mediaQuery({
    mobile: {
      gridTemplateColumns: "1fr",
    },
  }),
]);

export const profileCard = style([
  {
    gridColumn: "span 2",
  },
  mediaQuery({
    mobile: {
      gridColumn: "auto",
    },
  }),
]);

export const partnerCard = style({});

export const profileBody = style({
  display: "flex",
  alignItems: "center",
  gap: themeTokens.gap.lg,
  paddingTop: "2rem",
});

export const profileInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: themeTokens.gap.sm,
  minWidth: 0,
});

export const profileName = style({
  color: colors.black,
  fontSize: typographyContract.displayPage,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.2,
});

export const profileAge = style({
  color: "#4f4b60",
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.medium,
});

export const actions = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr 1.85fr",
    gap: themeTokens.gap.md,
    width: "100%",
    maxWidth: RESULT_MAX_WIDTH,
    margin: "3rem auto 0",
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
});
