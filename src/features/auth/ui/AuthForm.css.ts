import { style } from "@vanilla-extract/css";

import { buttonRecipe } from "@shared/ui/button/Button.css";
import { colors } from "@shared/ui/styles/colors.css";
import { themeTokens } from "@shared/ui/styles/theme.css";
import { typographyContract } from "@shared/ui/styles/typography.css";

export const authFormRootStyle = style({
  width: "100%",
  marginInline: "auto",
  display: "flex",
  flexDirection: "column",
  gap: themeTokens.space.lg,
});

export const authTitleStyle = style({
  color: colors.textPrimary,
  fontSize: typographyContract.H2,
  fontWeight: 700,
  textAlign: "center",
});

export const authFieldGroupStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: themeTokens.space.sm,
});

export const authButtonGroupStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: themeTokens.space.sm,
});

export const authGoogleButtonStyle = style([
  buttonRecipe({ variant: "ghost", size: "md", fullWidth: true }),
  {
    border: `1px solid ${colors.outline}`,
    background: colors.white,
  },
]);

export const authSubmitButtonStyle = style([
  buttonRecipe({ variant: "primary", size: "md", fullWidth: true }),
]);

export const authMetaActionsStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: themeTokens.space.md,
});

export const authMetaButtonStyle = style({
  padding: 0,
  border: 0,
  background: "transparent",
  color: colors.grayscale.gray500,
  fontSize: typographyContract.D2,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      color: colors.textPrimary,
      textDecoration: "underline",
    },
  },
});
