import { style } from "@vanilla-extract/css";

export const sliderWrapperStyle = style({ width: "100%" });

export const sliderViewportStyle = style({ width: "100%" });

export const sliderSlideStyle = style({
  height: "auto",
});

export const sliderItemStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "clamp(12rem, 42vh, 24rem)",
  maxHeight: "calc(100svh - 10rem)",
  padding: "0.75rem 1rem",
  border: "1px solid rgba(23, 23, 23, 0.18)",
  borderRadius: "0.75rem",
  background: "#ffffff",
  color: "#171717",
  fontSize: "0.9rem",
  "@media": {
    "(max-width: 1024px)": {
      minHeight: "clamp(11rem, 38vh, 18rem)",
    },
    "(max-width: 640px)": {
      minHeight: "clamp(10rem, 34vh, 14rem)",
    },
  },
});
