import { style } from "@vanilla-extract/css";

export const container = style({
  width: "400px",
  margin: "0 auto",
  padding: "60px 0 100px 0",
  display: "flex",
  flexDirection: "column",
});

export const title = style({
  fontSize: "40px",
  fontWeight: "700",
  color: "#4818BD",
  textAlign: "center",
  marginBottom: "40px",
});

export const sectionTitle = style({
  fontSize: "16px",
  fontWeight: "700",
  color: "#1C1B1F",
  marginBottom: "16px",
});

export const fieldGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "32px",
});

export const rowGroup = style({
  display: "flex",
  gap: "8px",
  alignItems: "stretch",
});

export const flexInput = style({
  flex: 1,
});

export const actionGroup = style({
  display: "flex",
  gap: "12px",
  marginTop: "8px",
});

// Step1
export const termsWrapper = style({
  border: "1px solid #D6D4DF",
  borderRadius: "8px",
  padding: "20px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginBottom: "32px",
});

export const termsItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const linkText = style({
  fontSize: "13px",
  color: "#73707E",
  textDecoration: "none",
  cursor: "pointer",
});

// Step 4
export const successBox = style({
  border: "1px solid #D6D4DF",
  borderRadius: "12px",
  padding: "48px 24px",
  textAlign: "center",
  backgroundColor: "#FFFFFF",
  marginBottom: "32px",
});

export const successTitle = style({
  fontSize: "20px",
  fontWeight: "700",
  color: "#1C1B1F",
  marginBottom: "8px",
});

export const successSub = style({
  fontSize: "16px",
  color: "#53425E",
});
