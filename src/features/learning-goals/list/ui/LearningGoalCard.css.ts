import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import {
  colors,
  flexBetweenCenter,
  flexColumn,
  flexInlineCenter,
  mediaQuery,
  themeTokens,
  typographyContract,
} from "@shared/styles";

const CARD_RADIUS = "1.25rem";
const PROGRESS_BOX_RADIUS = "0.75rem";
const STATUS_DOT_SIZE = "0.375rem";
const PILL_RADIUS = "999px";

export const card = style([
  flexColumn,
  {
    gap: themeTokens.gap.lg,
    padding: themeTokens.gap.lg,
    borderRadius: CARD_RADIUS,
    backgroundColor: colors.white,
    border: `1px solid ${colors.border}`,
    boxShadow: "0 2px 8px rgba(15, 16, 49, 0.04)",
  },
  mediaQuery({
    laptop: {
      padding: themeTokens.gap.xl,
    },
    pc: {
      padding: themeTokens.gap["2xl"],
      gap: themeTokens.gap.xl,
    },
  }),
]);

export const cardHeader = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: themeTokens.gap.md,
});

export const iconBox = style([
  flexInlineCenter,
  {
    width: "2.5rem",
    height: "2.5rem",
    flexShrink: 0,
  },
  mediaQuery({
    pc: {
      width: "2.875rem",
      height: "2.875rem",
    },
  }),
]);

export const iconImage = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const statusBadge = recipe({
  base: [
    flexInlineCenter,
    {
      gap: "0.375rem",
      paddingInline: themeTokens.gap.md,
      height: "1.75rem",
      borderRadius: themeTokens.radius.full,
      fontSize: typographyContract.bodyMd,
      fontWeight: themeTokens.fontWeight.semibold,
      whiteSpace: "nowrap",
    },
  ],
  variants: {
    status: {
      notStarted: {
        color: colors.grayscale.gray700,
        backgroundColor: colors.status.neutralSoft,
      },
      inProgress: {
        color: colors.primary,
        backgroundColor: colors.secondary,
      },
      imminent: {
        color: colors.status.warning,
        backgroundColor: colors.status.warningSoft,
      },
      completed: {
        color: colors.status.success,
        backgroundColor: colors.status.successSoft,
      },
    },
  },
  defaultVariants: {
    status: "inProgress",
  },
});

export const statusDot = recipe({
  base: {
    display: "inline-block",
    width: STATUS_DOT_SIZE,
    height: STATUS_DOT_SIZE,
    borderRadius: PILL_RADIUS,
    flexShrink: 0,
  },
  variants: {
    status: {
      notStarted: { backgroundColor: colors.grayscale.gray800 },
      inProgress: { backgroundColor: colors.primary },
      imminent: { backgroundColor: colors.status.warning },
      completed: { backgroundColor: colors.status.success },
    },
  },
});

export const category = recipe({
  base: {
    margin: 0,
    marginBottom: themeTokens.gap.xs,
    fontSize: typographyContract.bodyMd,
    fontWeight: themeTokens.fontWeight.bold,
    lineHeight: 1.4,
  },
  variants: {
    colorTheme: {
      primary: { color: colors.theme.primary },
      blue: { color: colors.theme.blue },
      orange: { color: colors.theme.orange },
      green: { color: colors.theme.green },
    },
  },
  defaultVariants: {
    colorTheme: "primary",
  },
});

export const title = style({
  margin: 0,
  fontSize: typographyContract.headingLg,
  fontWeight: themeTokens.fontWeight.bold,
  color: colors.black,
  lineHeight: 1.45,
});

export const metaList = style([
  flexColumn,
  {
    gap: themeTokens.gap.sm,
  },
]);

export const metaRow = style([
  flexBetweenCenter,
  {
    gap: themeTokens.gap.md,
    fontSize: typographyContract.bodyLg,
    lineHeight: 1.5,
  },
]);

export const metaLabel = style([
  flexInlineCenter,
  {
    gap: "0.375rem",
    color: colors.grayscale.gray700,
  },
]);

export const metaValue = style({
  color: colors.black,
  fontWeight: themeTokens.fontWeight.semibold,
});

export const metaValueMuted = style({
  color: colors.grayscale.gray700,
});

export const progressBox = style([
  flexColumn,
  {
    gap: themeTokens.gap.md,
    padding: themeTokens.gap.lg,
    backgroundColor: colors.secondary,
    borderRadius: PROGRESS_BOX_RADIUS,
  },
]);

export const progressHead = style([
  flexBetweenCenter,
  {
    gap: themeTokens.gap.md,
    fontSize: typographyContract.bodyLg,
    lineHeight: 1.5,
  },
]);

export const progressLabel = style({
  color: colors.grayscale.gray700,
});

export const progressPercent = style({
  marginLeft: "0.25rem",
  color: colors.black,
  fontWeight: themeTokens.fontWeight.bold,
});

export const dDay = style({
  color: colors.grayscale.gray700,
  fontWeight: themeTokens.fontWeight.semibold,
});

export const progressTrack = style({
  width: "100%",
  height: "0.5rem",
  borderRadius: PILL_RADIUS,
  backgroundColor: colors.white,
  overflow: "hidden",
});

export const progressFill = recipe({
  base: {
    height: "100%",
    borderRadius: PILL_RADIUS,
    transition: "width 0.3s ease",
  },
  variants: {
    colorTheme: {
      primary: { backgroundColor: colors.theme.primary },
      blue: { backgroundColor: colors.theme.blue },
      orange: { backgroundColor: colors.theme.orange },
      green: { backgroundColor: colors.theme.green },
    },
  },
  defaultVariants: {
    colorTheme: "primary",
  },
});

export const actionRow = style({
  display: "flex",
  alignItems: "center",
  gap: themeTokens.gap.sm,
});

const actionButtonBase = style([
  flexInlineCenter,
  {
    minWidth: 0,
    height: "2.25rem",
    paddingInline: themeTokens.gap.md,
    borderRadius: "0.5rem",
    fontSize: typographyContract.bodyLg,
    cursor: "pointer",
  },
]);

export const detailButton = style([
  actionButtonBase,
  {
    flex: "1.7 1 0",
    backgroundColor: colors.primary,
    color: colors.white,
    fontWeight: themeTokens.fontWeight.semibold,
    border: "none",
    selectors: {
      "&:hover": {
        backgroundColor: `color-mix(in srgb, ${colors.primary} 88%, ${colors.black})`,
      },
    },
  },
]);

export const editButton = style([
  actionButtonBase,
  {
    flex: "1 1 0",
    backgroundColor: colors.white,
    color: colors.grayscale.gray700,
    border: `1px solid ${colors.border}`,
    selectors: {
      "&:hover": {
        backgroundColor: colors.foreground,
      },
    },
  },
]);

export const deleteButton = style([
  actionButtonBase,
  {
    flex: "1 1 0",
    backgroundColor: colors.white,
    color: colors.negativeRed,
    border: `1px solid ${colors.negativeRed}`,
    selectors: {
      "&:hover": {
        backgroundColor: "color-mix(in srgb, currentColor 6%, white)",
      },
    },
  },
]);
