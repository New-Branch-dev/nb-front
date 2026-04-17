import { style } from "@vanilla-extract/css";

import { colors, themeTokens, typographyContract } from "@shared/styles";

export const inputFieldWrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: themeTokens.space.xs,
  width: "100%",
});

export const inputLabelStyle = style({
  color: colors.textPrimary,
  fontSize: typographyContract.D2,
  fontWeight: 500,
});

export const inputBaseStyle = style({
  width: "100%",
  height: "2.75rem",
  paddingInline: themeTokens.space.md,
  borderRadius: themeTokens.radius.md,
  border: `1px solid ${colors.outline}`,
  background: colors.surface,
  color: colors.textPrimary,
  fontSize: typographyContract.D1,
  outline: "none",
  selectors: {
    "&::placeholder": {
      color: colors.grayscale.gray500,
    },
    "&:focus": {
      borderColor: colors.primary,
      boxShadow: `0 0 0 3px ${colors.grayscale.gray100}`,
    },
  },
});
