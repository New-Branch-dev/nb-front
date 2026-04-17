import { style } from "@vanilla-extract/css";

export const sectionBaseStyle = style({
  width: "100%",
  paddingBlock: "5rem",
  paddingInline: "1rem",
});

export const sceneSectionStyle = style([
  sectionBaseStyle,
  {
    paddingBlock: 0,
  },
]);
