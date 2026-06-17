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
        color: colors.primary,
        backgroundColor: colors.secondary,
      },
      inProgress: {
        color: colors.status.success,
        backgroundColor: colors.status.successSoft,
      },
      imminent: {
        color: colors.status.warning,
        backgroundColor: colors.status.warningSoft,
      },
      completed: {
        color: colors.grayscale.gray700,
        backgroundColor: colors.status.neutralSoft,
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
      notStarted: { backgroundColor: colors.primary },
      inProgress: { backgroundColor: colors.status.success },
      imminent: { backgroundColor: colors.status.warning },
      completed: { backgroundColor: colors.grayscale.gray700 },
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
    status: {
      notStarted: { color: colors.primary },
      inProgress: { color: colors.status.success },
      imminent: { color: colors.status.warning },
      completed: { color: colors.grayscale.gray700 },
    },
  },
  defaultVariants: {
    status: "inProgress",
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
  fontWeight: themeTokens.fontWeight.semibold,
});

export const dDay = style({
  color: colors.black,
  whiteSpace: "nowrap",
});

export const dDayRemaining = style({
  fontWeight: themeTokens.fontWeight.bold,
});

export const dDayTotal = style({
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
    status: {
      notStarted: { backgroundColor: colors.primary },
      inProgress: { backgroundColor: colors.status.success },
      imminent: { backgroundColor: colors.status.warning },
      completed: { backgroundColor: colors.grayscale.gray700 },
    },
  },
  defaultVariants: {
    status: "inProgress",
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

export const detailButton = recipe({
  base: [
    actionButtonBase,
    {
      flex: "1.7 1 0",
      color: colors.white,
      fontWeight: themeTokens.fontWeight.semibold,
      border: "none",
    },
  ],
  variants: {
    status: {
      notStarted: {
        backgroundColor: colors.primary,
        selectors: {
          "&:hover": {
            backgroundColor: `color-mix(in srgb, ${colors.primary} 88%, ${colors.black})`,
          },
        },
      },
      inProgress: {
        backgroundColor: colors.primary,
        selectors: {
          "&:hover": {
            backgroundColor: `color-mix(in srgb, ${colors.primary} 88%, ${colors.black})`,
          },
        },
      },
      imminent: {
        backgroundColor: colors.primary,
        selectors: {
          "&:hover": {
            backgroundColor: `color-mix(in srgb, ${colors.primary} 88%, ${colors.black})`,
          },
        },
      },
      completed: {
        backgroundColor: colors.grayscale.gray700,
        selectors: {
          "&:hover": {
            backgroundColor: `color-mix(in srgb, ${colors.grayscale.gray700} 88%, ${colors.black})`,
          },
        },
      },
    },
  },
  defaultVariants: {
    status: "inProgress",
  },
});

export const deleteButton = style([
  actionButtonBase,
  {
    flex: "1 1 0",
    padding: `0 ${themeTokens.gap.md}`,
    background: colors.white,
    color: colors.negativeRed,
    border: `1px solid ${colors.negativeRed}`,
    fontWeight: themeTokens.fontWeight.medium,
    selectors: {
      "&:hover": {
        background: `color-mix(in srgb, ${colors.negativeRed} 6%, ${colors.white})`,
      },
    },
  },
]);

export const deleteModalContent = style([
  flexColumn,
  {
    gap: themeTokens.gap.xl,
  },
]);

export const deleteModalTitle = style({
  margin: 0,
  color: colors.black,
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
  lineHeight: 1.4,
});

export const deleteModalMessage = style({
  margin: 0,
  color: colors.grayscale.gray700,
  fontSize: typographyContract.bodyLg,
  lineHeight: 1.6,
});

export const deleteModalActions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: themeTokens.gap.sm,
});

const deleteModalActionButton = style([
  flexInlineCenter,
  {
    height: "2.5rem",
    paddingInline: themeTokens.gap.lg,
    borderRadius: "0.5rem",
    fontSize: typographyContract.bodyLg,
    fontWeight: themeTokens.fontWeight.semibold,
    cursor: "pointer",
  },
]);

export const deleteModalCancelButton = style([
  deleteModalActionButton,
  {
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

export const deleteModalConfirmButton = style([
  deleteModalActionButton,
  {
    backgroundColor: colors.negativeRed,
    color: colors.white,
    border: "none",
    selectors: {
      "&:hover": {
        backgroundColor: `color-mix(in srgb, ${colors.negativeRed} 88%, ${colors.black})`,
      },
    },
  },
]);
