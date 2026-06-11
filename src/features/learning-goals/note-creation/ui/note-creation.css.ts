import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  flexColumnCenter,
  flexInlineCenter,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const cardHeaderStack = style([
  flexColumn,
  {
    gap: themeTokens.gap.sm,
  },
]);

export const cardHeading = style({
  margin: 0,
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.grayscale.gray900,
});

export const cardLead = style({
  margin: 0,
  fontSize: typographyContract.bodyMd,
  color: colors.grayscale.gray700,
});

export const deleteConfirmTitle = style({
  margin: 0,
  fontSize: typographyContract.headingSm,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.black,
});

export const deleteConfirmMessage = style({
  margin: `${themeTokens.gap.lg} 0 0`,
  fontSize: typographyContract.bodyLg,
  color: colors.grayscale.gray700,
});

export const deleteConfirmActions = style([
  flexInlineCenter,
  {
    justifyContent: "flex-end",
    gap: themeTokens.gap.md,
    width: "100%",
    marginTop: themeTokens.gap["2xl"],
  },
]);

export const fieldsStack = style([
  flexColumn,
  {
    gap: themeTokens.gap.lg,
  },
]);

export const dropzoneBody = style([
  flexColumnCenter,
  {
    width: "100%",
    minHeight: "12.5rem",
    paddingInline: themeTokens.gap["4xl"],
    paddingBlock: themeTokens.gap["4xl"],
    backgroundColor: colors.foreground,
    gap: themeTokens.gap.md,
    transition: "background-color 0.2s ease",
    selectors: {
      "&[data-dragging='true']": {
        backgroundColor: colors.secondary,
      },
    },
  },
]);

export const hiddenFileInput = style({
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  border: 0,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
});

export const uploadButton = style([
  flexInlineCenter,
  {
    gap: themeTokens.gap.sm,
    paddingInline: themeTokens.gap.xl,
    paddingBlock: themeTokens.gap.sm,
    borderRadius: themeTokens.gap.sm,
    border: `1px solid ${colors.primary}`,
    backgroundColor: colors.surface,
    color: colors.primary,
    fontSize: typographyContract.bodyLg,
    fontWeight: themeTokens.fontWeight.bold,
    cursor: "pointer",
    transition: "background-color 0.2s ease, color 0.2s ease",
    selectors: {
      "&:hover": {
        backgroundColor: colors.foreground,
      },
    },
  },
]);

export const dropzoneHint = style({
  margin: 0,
  textAlign: "center",
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.semibold,
  color: colors.grayscale.gray700,
});

export const dropzoneFormats = style({
  margin: 0,
  textAlign: "center",
  fontSize: typographyContract.bodySm,
  color: colors.grayscale.gray600,
});

export const tabPanel = style([
  flexColumn,
  {
    gap: themeTokens.gap["2xl"],
  },
]);
