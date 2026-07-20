import { style } from "@vanilla-extract/css";

import { flexColumn } from "@shared/styles/flex.css";

export const modalDialog = style({
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

export const modalContainer = style([
  flexColumn,
  {
    padding: "2rem",
  },
]);
