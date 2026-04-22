import { style } from "@vanilla-extract/css";

import { colors, themeTokens, typographyContract } from "@shared/styles";
import { buttonRecipe } from "@shared/ui/button/Button.css";

export const authFormRoot = style({
  width: "100%",
  marginInline: "auto",
  display: "flex",
  flexDirection: "column",
  gap: themeTokens.gap.lg,
});

export const authTitle = style({
  color: colors.textPrimary,
  fontSize: typographyContract.headingXl,
  fontWeight: 700,
  textAlign: "center",
});

export const authFieldGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: themeTokens.gap.sm,
});

export const authButtonGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: themeTokens.gap.sm,
});

export const authGoogleButton = style([
  buttonRecipe({ variant: "ghost", size: "md", fullWidth: true }),
  {
    border: `1px solid ${colors.outline}`,
    background: colors.white,
  },
]);

export const authSubmitButton = style([
  buttonRecipe({ variant: "primary", size: "md", fullWidth: true }),
]);

export const authMetaActions = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: themeTokens.gap.md,
});

export const authMetaButton = style({
  padding: 0,
  border: 0,
  background: "transparent",
  color: colors.grayscale.gray800,
  fontSize: typographyContract.bodyMd,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      color: colors.textPrimary,
      textDecoration: "underline",
    },
  },
});
