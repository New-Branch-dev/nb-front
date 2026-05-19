import { style } from "@vanilla-extract/css";

import { colors, themeTokens, typographyContract } from "@shared/styles";

export const textAreaBase = style({
  width: "100%",
  minHeight: "7rem",
  resize: "vertical",
  padding: themeTokens.gap.lg,
  borderRadius: themeTokens.radius.md,
  border: `1px solid ${colors.grayscale.gray800}`,
  backgroundColor: colors.white,
  color: colors.textPrimary,
  fontSize: typographyContract.bodyLg,
  outline: "none",
  selectors: {
    "&::placeholder": {
      color: colors.grayscale.gray800,
    },
    "&:focus": {
      borderColor: colors.primary,
      boxShadow: `0 0 0 3px ${colors.secondary}`,
    },
  },
});
