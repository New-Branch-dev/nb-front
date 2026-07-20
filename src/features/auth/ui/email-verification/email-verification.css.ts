import { style } from "@vanilla-extract/css";

export const verificationBox = style({
  width: "400px",
  margin: "0 auto",
  padding: "60px 0 100px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const verificationPanel = style({
  padding: "48px 24px",
  border: "1px solid #D6D4DF",
  borderRadius: "12px",
  backgroundColor: "#FFFFFF",
  textAlign: "center",
});

export const verificationTitle = style({
  margin: "0 0 12px",
  fontSize: "24px",
  fontWeight: "700",
  color: "#1C1B1F",
});

export const verificationDescription = style({
  margin: 0,
  fontSize: "15px",
  lineHeight: "22px",
  color: "#73707E",
});

export const actionGroup = style({
  display: "flex",
  gap: "12px",
});
