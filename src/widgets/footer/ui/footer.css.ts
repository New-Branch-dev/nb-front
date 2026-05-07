import { style } from "@vanilla-extract/css";

import { colors } from "@shared/styles/colors.css";
import { flexBetweenCenter } from "@shared/styles/flex.css";
import { mediaQuery } from "@shared/styles/media-query.css";
import { themeTokens } from "@shared/styles/theme.css";
import { typographyContract } from "@shared/styles/typography.css";

export const pageFooter = style([
  flexBetweenCenter,
  {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    paddingBlock: "1.875rem",
    paddingInline: "10rem",
    backgroundColor: colors.primary,
    color: colors.white,
    zIndex: 30,
  },
  mediaQuery({
    laptop: {
      paddingBlock: "1.25rem",
      paddingInline: "5rem",
    },
    mobile: {
      paddingBlock: "1rem",
      paddingInline: "1.5rem",
    },
  }),
]);

export const pageFooterTitle = style({
  fontSize: typographyContract.headingSm,
  color: colors.white,
});

export const pageFooterNavList = style({
  display: "flex",
  gap: themeTokens.gap.lg,
  listStyle: "none",
});

export const pageFooterLink = style({
  fontSize: typographyContract.bodyMd,
  color: colors.white,
  fontWeight: themeTokens.fontWeight.semibold,
});
