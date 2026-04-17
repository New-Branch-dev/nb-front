import { style } from "@vanilla-extract/css";

import {
  flexBaseStyle,
  flexDirectionStyle,
} from "@shared/ui/layout/flex/Flex.css";

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

export const modalContainerStyle = style([
  flexBaseStyle,
  flexDirectionStyle.column,
  {
    padding: "2rem",
  },
]);
