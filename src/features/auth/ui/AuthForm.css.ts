import { style } from "@vanilla-extract/css";

import {
  colors,
  flexBetweenCenter,
  flexColumnCenter,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";
import { buttonRecipe } from "@shared/ui/button/Button.css";

export const authFormRoot = style({
  width: "100%",
  marginInline: "auto",
  display: "flex",
  flexDirection: "column",
  gap: themeTokens.gap.lg,
});

export const authTitle = style({
  color: colors.black,
  fontSize: typographyContract.displayPage,
  fontWeight: themeTokens.fontWeight.bold,
  textAlign: "center",
  marginBottom: themeTokens.gap.md,
});

export const authDescription = style({
  color: colors.grayscale.gray900,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.regular,
  textAlign: "center",
  marginBottom: themeTokens.gap.md,
});

export const authFieldGroup = style([
  flexColumnCenter,
  {
    marginBlock: themeTokens.gap["3xl"],
    gap: themeTokens.gap.md,
  },
  mediaQuery({
    laptop: {
      marginBlock: themeTokens.gap.md,
    },
  }),
]);

export const authSubmitButton = style([
  buttonRecipe({ variant: "primary", size: "md", fullWidth: true }),
]);

export const authMetaActions = style([
  flexBetweenCenter,
  {
    gap: themeTokens.gap.md,
  },
]);

export const authMetaButton = style({
  display: "inline-flex",
  alignItems: "center",
  padding: 0,
  border: 0,
  background: "transparent",
  color: colors.grayscale.gray600,
  fontSize: typographyContract.bodyMd,
  cursor: "pointer",
  selectors: {
    "& + &::before": {
      content: "|",
      marginInline: themeTokens.gap.sm,
      color: colors.grayscale.gray800,
      opacity: 0.5,
    },
    "&:hover": {
      color: colors.textPrimary,
      textDecoration: "underline",
    },
  },
});

export const authSimpleFieldGroup = style([
  flexColumnCenter,
  {
    gap: themeTokens.gap.md,
    marginBlock: themeTokens.gap["9xl"],
  },
  mediaQuery({
    laptop: {
      marginBlock: themeTokens.gap["3xl"],
    },
  }),
]);

export const authSimpleTitle = style({
  color: colors.black,
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
  textAlign: "center",
  marginBottom: themeTokens.gap.md,
});

export const authGoogleButton = style([
  buttonRecipe({ variant: "ghost", size: "md", fullWidth: true }),
  {
    border: `1px solid ${colors.borderDark}`,
    background: colors.white,
    width: "100%",
  },
]);
