import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  marginBottom: "32px",
  position: "relative",
  paddingBottom: "28px",
});

export const barContainer = style({
  width: "100%",
  display: "flex",
  gap: "4px",
  height: "3px",
});

export const bar = style({
  flex: 1,
  backgroundColor: "#D6D4DF",
  borderRadius: "2px",
  transition: "background-color 0.3s ease",
});

export const activeBar = style({
  backgroundColor: "#6641DF",
});

export const stepIndicator = style({
  position: "absolute",
  top: "9px",
  transform: "translateX(-50%)",
  whiteSpace: "nowrap",
});

export const stepText = style({
  fontSize: "16px",
  fontWeight: "700",
  color: "#6641DF",
  letterSpacing: "0.5px",
});