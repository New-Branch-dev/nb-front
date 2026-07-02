import { style } from "@vanilla-extract/css";

import { colors, themeTokens, typographyContract } from "@shared/styles";

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: themeTokens.gap.xl,
  paddingBottom: "2.5rem",
  borderBottom: `1px solid ${colors.border}`,
  backgroundColor: colors.white,
  selectors: {
    "&:last-child": {
      paddingBottom: 0,
      borderBottom: "none",
    },
  },
});

export const cardHeader = style({
  display: "grid",
  gridTemplateColumns: "1.875rem 1fr auto",
  alignItems: "center",
  gap: themeTokens.gap.md,
});

export const cardIcon = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.875rem",
  height: "1.875rem",
  borderRadius: themeTokens.radius.sm,
  backgroundColor: colors.secondary,
  color: colors.grayscale.gray700,
});

export const cardTitle = style({
  margin: 0,
  color: colors.black,
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.bold,
});

export const editButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.875rem",
  height: "1.875rem",
  borderRadius: themeTokens.radius.sm,
  backgroundColor: colors.secondary,
  cursor: "pointer",
});
