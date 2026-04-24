import { style } from "@vanilla-extract/css";

import {
  colors,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";
import {
  flexCenter,
  flexColumn,
  flexStart,
} from "@shared/styles/flex.css";
import { buttonRecipe } from "@shared/ui/button/Button.css";

export const firstSection = style([
  flexColumn,
  {
    gap: themeTokens.gap["2xl"],
  },
]);

export const firstSectionContent = style([
  {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: themeTokens.gap.xl,
  },
]);

export const firstSectionInner = style([
  flexColumn,
  {
    flex: 1,
    gap: themeTokens.gap.lg,
  },
]);

export const firstSectionCaption = style({
  fontSize: typographyContract.headingLg,
  color: colors.primary,
  fontWeight: themeTokens.fontWeight.semibold,
});

export const firstSectionTitle = style({
  fontSize: typographyContract.displayHero,
  color: colors.primary,
  fontWeight: themeTokens.fontWeight.bold,
  whiteSpace: "pre-line",
  marginBottom: "1.5rem",
  ...mediaQuery({
    laptop: {
      marginBottom: "1rem",
    },
  }),
});

export const firstSectionDescriptionBlock = style([
  {
    width: "55%",
  },
]);

export const firstSectionDescription = style({
  fontSize: typographyContract.headingMd,
  color: colors.grayscale.gray900,
  whiteSpace: "pre-line",
  marginBottom: "4.25rem",
  ...mediaQuery({
    laptop: {
      marginBottom: "2.5rem",
    },
  }),
});

export const firstSectionActionGroup = style([
  flexStart,
  {
    width: "90%",
    gap: themeTokens.gap.sm,
  },
]);

export const firstSectionGuestLink = style([
  buttonRecipe({ variant: "secondary", size: "md", fullWidth: false }),
  {
    flex: 1,
  },
]);

export const firstSectionSigninLink = style([
  buttonRecipe({ variant: "primary", size: "md", fullWidth: false }),
  {
    flex: 1,
  },
]);

export const firstSectionShowcase = style([
  flexStart,
  {
    position: "relative",
    flex: 1,
    width: "100%",
    maxHeight: "22.188rem",
    backgroundColor: colors.secondary,
    gap: themeTokens.gap.xl,
    paddingBlock: "4rem",
    paddingInline: "4rem",
    borderRadius: themeTokens.radius.lg,
  },
  mediaQuery({
    laptop: {
      paddingBlock: "2rem",
      paddingInline: "2rem",
      maxHeight: "16.5rem",
    },
  }),
]);

export const firstSectionShowcaseCaption = style([
  flexColumn,
  {
    alignItems: "flex-start",
    gap: themeTokens.gap.sm,
  },
]);

export const firstSectionShowcaseBadge = style({
  fontSize: typographyContract.headingXl,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.primary,
});

export const firstSectionShowcaseText = style({
  fontSize: typographyContract.headingLg,
  color: colors.grayscale.gray900,
  whiteSpace: "pre-line",
});

export const firstSectionShowcaseLinkGroup = style([
  flexCenter,
  {
    gap: themeTokens.gap.sm,
    marginTop: "1.5rem",
  },
]);

export const firstSectionShowcaseLink = style({
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.semibold,
  color: colors.grayscale.gray800,
});

export const firstSectionShowcaseImage = style({
  height: "auto",
  position: "absolute",
  bottom: "5%",
  right: 0,
  width: "50%",
});
