import { style } from "@vanilla-extract/css";

import { colors, themeTokens, typographyContract } from "@shared/styles";

export const fieldRow = style({
  display: "grid",
  gridTemplateColumns: "5.5rem 1fr",
  alignItems: "center",
  gap: themeTokens.gap.xl,
});

export const fieldLabel = style({
  color: "#a4a0b1",
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.medium,
});

export const fieldStack = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeTokens.gap.sm,
});

export const chip = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "3.5rem",
  minHeight: "2rem",
  paddingInline: themeTokens.gap.xl,
  borderRadius: themeTokens.radius.full,
  backgroundColor: colors.secondary,
  color: colors.primary,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1,
  whiteSpace: "nowrap",
});
