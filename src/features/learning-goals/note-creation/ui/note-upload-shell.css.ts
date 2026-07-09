import { style } from "@vanilla-extract/css";

import {
  colors,
  flexColumn,
  flexInlineCenter,
  themeTokens,
  typographyContract,
} from "@shared/styles";

const FILE_LIST_GRID_COLUMNS = "minmax(0, 15rem) 5rem 1fr 6rem 2rem";

export const fileManagerCard = style([
  flexColumn,
  {
    width: "100%",
    border: `1px solid ${colors.border}`,
    borderRadius: themeTokens.radius.lg,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
]);

export const fileManagerHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  minHeight: "2.75rem",
  boxSizing: "border-box",
  padding: `${themeTokens.gap.md} ${themeTokens.gap.lg}`,
  backgroundColor: colors.primary,
});

export const deleteAllButton = style({
  padding: `${themeTokens.gap.xs} ${themeTokens.gap.lg}`,
  border: `1px solid ${colors.white}`,
  borderRadius: themeTokens.radius.sm,
  backgroundColor: "transparent",
  color: colors.white,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.semibold,
  cursor: "pointer",
  lineHeight: 1.3,
  whiteSpace: "nowrap",
  transition: "background-color 0.2s ease, opacity 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      opacity: 1,
    },
  },
});

export const fileListScroll = style({
  width: "100%",
  maxHeight: "17.5rem",
  overflowY: "auto",
  overflowX: "hidden",
});

export const fileListTable = style({
  width: "100%",
  minWidth: 0,
});

export const fileListHeadRow = style({
  display: "grid",
  gridTemplateColumns: FILE_LIST_GRID_COLUMNS,
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: themeTokens.gap.md,
  padding: `${themeTokens.gap.md} ${themeTokens.gap.lg}`,
  borderBottom: `1px solid ${colors.border}`,
});

export const fileListHeadCell = style({
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.regular,
  color: colors.grayscale.gray600,
  lineHeight: 1.3,
});

export const fileListHeadCellActions = style([
  fileListHeadCell,
  {
    gridColumn: 4,
    textAlign: "right",
    visibility: "hidden",
  },
]);

export const fileSizeCell = style({
  justifySelf: "center",
  textAlign: "center",
});

export const fileRow = style({
  display: "grid",
  gridTemplateColumns: FILE_LIST_GRID_COLUMNS,
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: themeTokens.gap.md,
  padding: `${themeTokens.gap.md} ${themeTokens.gap.lg}`,
  borderBottom: `1px solid ${colors.border}`,
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

export const fileNameCell = style({
  minWidth: 0,
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.regular,
  color: colors.black,
  lineHeight: 1.4,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const fileMetaCell = style({
  fontSize: typographyContract.bodyMd,
  fontWeight: themeTokens.fontWeight.regular,
  color: colors.black,
  lineHeight: 1.4,
  whiteSpace: "nowrap",
});

export const fileRowActions = style({
  gridColumn: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: themeTokens.gap.sm,
});

export const fileRowDeleteActions = style([
  fileRowActions,
  {
    gridColumn: 5,
  },
]);

export const openFileButton = style({
  flexShrink: 0,
  padding: `${themeTokens.gap.xs} ${themeTokens.gap.md}`,
  border: `1px solid ${colors.primary}`,
  borderRadius: themeTokens.radius.sm,
  backgroundColor: colors.white,
  color: colors.primary,
  fontSize: typographyContract.bodySm,
  fontWeight: themeTokens.fontWeight.semibold,
  cursor: "pointer",
  lineHeight: 1.3,
  whiteSpace: "nowrap",
  transition: "background-color 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: colors.foreground,
    },
  },
});

export const removeFileButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.5rem",
  height: "1.5rem",
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  color: colors.grayscale.gray600,
  fontSize: typographyContract.headingSm,
  lineHeight: 1,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: colors.foreground,
      color: colors.grayscale.gray900,
    },
  },
});

export const fileManagerFooter = style([
  flexInlineCenter,
  {
    width: "100%",
    justifyContent: "center",
    padding: themeTokens.gap.lg,
    borderTop: `1px solid ${colors.border}`,
  },
]);

export const addMoreButton = style([
  flexInlineCenter,
  {
    gap: themeTokens.gap.sm,
    minWidth: "8.5rem",
    paddingInline: themeTokens.gap.xl,
    paddingBlock: themeTokens.gap.md,
    border: `1px solid ${colors.primary}`,
    borderRadius: themeTokens.radius.sm,
    backgroundColor: colors.white,
    color: colors.primary,
    fontSize: typographyContract.bodyLg,
    fontWeight: themeTokens.fontWeight.bold,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    selectors: {
      "&:hover": {
        backgroundColor: colors.foreground,
      },
    },
  },
]);
