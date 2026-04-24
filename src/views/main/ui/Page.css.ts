import { style } from "@vanilla-extract/css";

export const sectionBase = style({
  width: "100%",
  paddingBlock: "5rem",
  paddingInline: "1rem",
});

export const sceneSection = style([
  sectionBase,
  {
    paddingBlock: 0,
  },
]);
