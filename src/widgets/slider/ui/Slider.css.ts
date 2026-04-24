import { style } from "@vanilla-extract/css";

import { flexCenter } from "@shared/styles/flex.css";
import { mediaQuery } from "@shared/styles/media-query.css";

export const sliderWrapper = style({ width: "100%" });

export const sliderViewport = style({ width: "100%" });

export const sliderSlide = style({
  height: "auto",
});

export const sliderItem = style([
  flexCenter,
  {
    width: "100%",
    minHeight: "clamp(12rem, 42vh, 24rem)",
    maxHeight: "calc(100svh - 10rem)",
    padding: "0.75rem 1rem",
    border: "1px solid rgba(23, 23, 23, 0.18)",
    borderRadius: "0.75rem",
    background: "#ffffff",
    color: "#171717",
    fontSize: "0.9rem",
    ...mediaQuery({
      mobile: {
        minHeight: "clamp(10rem, 34vh, 14rem)",
      },
    }),
  },
]);
