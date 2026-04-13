import { style } from "@vanilla-extract/css";

export const containerRootStyle = style({
  width: "100%",
  height: "100%",
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

export const containerInnerStyle = style({
  width: "100%",
  paddingBlock: "9rem",
  paddingInline: "5rem",
  "@media": {
    "(max-width: 768px)": {
      paddingBlock: "7rem",
      paddingInline: 0,
    },
  },
});
