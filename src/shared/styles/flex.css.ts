import { style } from "@vanilla-extract/css";

export const flexStart = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const flexCenter = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const flexBetweenCenter = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const flexColumn = style({
  display: "flex",
  flexDirection: "column",
});

export const flexColumnCenter = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const flexColumnBetweenCenter = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

export const flexInlineCenter = style({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
});
