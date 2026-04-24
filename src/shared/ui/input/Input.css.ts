import { style } from "@vanilla-extract/css";

import { colors, themeTokens, typographyContract } from "@shared/styles";

export const inputFieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const inputBase = style({
  width: "100%",
  height: "2.75rem",
  paddingInline: themeTokens.gap.md,
  borderRadius: themeTokens.radius.md,
  border: `1px solid ${colors.border}`,
  background: colors.surface,
  color: colors.textPrimary,
  fontSize: typographyContract.bodyLg,
  outline: "none",
  cursor: "pointer",
  selectors: {
    "&::placeholder": {
      color: colors.grayscale.gray900,
    },
    "&:focus": {
      borderColor: colors.primary,
      boxShadow: `0 0 0 3px ${colors.secondary}`,
    },
  },
});
