import { style } from "@vanilla-extract/css";

import { colors, themeTokens, typographyContract } from "@shared/styles";

const CARD_MIN_HEIGHT = "11.75rem";

export const card = style({
  minHeight: CARD_MIN_HEIGHT,
  padding: "1.375rem 1.625rem",
  border: `1px solid ${colors.border}`,
  borderRadius: themeTokens.radius.lg,
  backgroundColor: colors.white,
});

export const cardHeader = style({
  display: "grid",
  gridTemplateColumns: "1.5rem 1fr auto",
  alignItems: "center",
  gap: themeTokens.gap.sm,
});

export const cardIcon = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.375rem",
  height: "1.375rem",
  borderRadius: themeTokens.radius.sm,
  backgroundColor: colors.foreground,
  color: colors.grayscale.gray700,
});

export const cardTitle = style({
  margin: 0,
  color: "#4f4b60",
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.bold,
});

export const editButton = style({
  cursor: "pointer",
});
