import { style } from "@vanilla-extract/css";

import { mediaQuery, themeTokens } from "@shared/styles";

const sliderNavButtonWidthLaptop = "3rem";
const sliderNavButtonWidthPc = "5rem";

export const sliderWrapper = style({
  position: "relative",
  width: "100%",
  paddingInline: themeTokens.gap["9xl"],
  overflow: "visible",
});

export const sliderViewport = style({
  width: "100%",
  overflow: "hidden",
});

export const sliderNavButton = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 20,
  width: sliderNavButtonWidthLaptop,
  height: "auto",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  outline: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
  selectors: {
    "&:disabled": {
      opacity: 0.35,
      cursor: "default",
    },
  },
  ...mediaQuery({
    laptop: {
      width: sliderNavButtonWidthLaptop,
    },
    pc: {
      width: sliderNavButtonWidthPc,
    },
  }),
});

export const sliderPrevButton = style({
  left: "0",
});

export const sliderNextButton = style({
  right: "0",
});

export const sliderNavIcon = style({
  width: "100%",
  height: "auto",
  display: "block",
});

export const sliderSlide = style({
  height: "auto",
});

export const sliderItem = style([
  {
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    width: "100%",
    minHeight: "clamp(12rem, 42vh, 24rem)",
    maxHeight: "calc(100svh - 10rem)",
    padding: "2rem",
    borderRadius: "0.75rem",
    border: "1px solid rgba(23, 23, 23, 0.18)",
    background: "#ffffff",
    color: "#171717",
    fontSize: "0.9rem",
    overflow: "hidden",
  },
]);
