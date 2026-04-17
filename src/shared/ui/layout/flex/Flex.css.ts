import { style, styleVariants } from "@vanilla-extract/css";

import { themeTokens } from "@shared/ui/styles/theme.css";

export const flexBaseStyle = style({
  display: "flex",
});

export const flexInlineStyle = style({
  display: "inline-flex",
});

export const flexDirectionStyle = styleVariants({
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
  "row-reverse": { flexDirection: "row-reverse" },
  "column-reverse": { flexDirection: "column-reverse" },
});

export const flexWrapStyle = styleVariants({
  nowrap: { flexWrap: "nowrap" },
  wrap: { flexWrap: "wrap" },
  "wrap-reverse": { flexWrap: "wrap-reverse" },
});

export const justifyContentStyle = styleVariants({
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  between: { justifyContent: "space-between" },
  around: { justifyContent: "space-around" },
  evenly: { justifyContent: "space-evenly" },
});

export const alignItemsStyle = styleVariants({
  stretch: { alignItems: "stretch" },
  start: { alignItems: "flex-start" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
  baseline: { alignItems: "baseline" },
});

export const flexGapStyle = styleVariants({
  none: { gap: themeTokens.space.none },
  xs: { gap: themeTokens.space.xs },
  sm: { gap: themeTokens.space.sm },
  md: { gap: themeTokens.space.md },
  lg: { gap: themeTokens.space.lg },
  xl: { gap: themeTokens.space["2xl"] },
});
