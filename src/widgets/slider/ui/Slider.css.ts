import { style } from "@vanilla-extract/css";

import { mediaQuery } from "@shared/styles/media-query.css";
import {
  alignItemsStyle,
  flexBaseStyle,
  justifyContentStyle,
} from "@shared/ui/layout/flex/Flex.css";

export const sliderWrapperStyle = style({ width: "100%" });

export const sliderViewportStyle = style({ width: "100%" });

export const sliderSlideStyle = style({
  height: "auto",
});

export const sliderItemStyle = style([
  flexBaseStyle,
  alignItemsStyle.center,
  justifyContentStyle.center,
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
