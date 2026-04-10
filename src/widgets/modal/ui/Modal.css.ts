import { style } from "@vanilla-extract/css";

export const modalDialogStyle = style({
  width: "min(32rem, calc(100% - 2rem))",
  margin: "auto",
  border: "none",
  borderRadius: "1rem",
  padding: 0,
  background: "#ffffff",
  color: "#171717",
  selectors: {
    "&::backdrop": {
      background: "rgba(0, 0, 0, 0.35)",
      backdropFilter: "blur(2px)",
    },
  },
});

export const modalContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  padding: "1.25rem",
});
