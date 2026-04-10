import { style } from "@vanilla-extract/css";

export const navShellStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  zIndex: 10,
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.96)",
  borderBottom: "1px solid rgba(23, 23, 23, 0.12)",
});

export const navInnerStyle = style({
  width: "100%",
  minHeight: "4rem",
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  alignItems: "center",
  gap: "0.75rem",
  paddingInline: "1rem",
  "@media": {
    "(min-width: 768px)": {
      paddingInline: "5rem",
    },
  },
});

export const centerSlotStyle = style({ justifySelf: "center" });

export const brandStyle = style({
  fontSize: "clamp(1rem, 2vw, 1.125rem)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#171717",
});

export const menuStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
  "@media": {
    "(min-width: 768px)": {
      gap: "1.5rem",
    },
  },
});

export const linkStyle = style({
  display: "inline-flex",
  alignItems: "center",
  minHeight: "2.25rem",
  color: "#171717",
  fontSize: "0.9rem",
  transition: "color 0.2s ease",
  selectors: {
    "&:hover": { color: "#171717" },
  },
});

export const triggerLinkStyle = style({
  appearance: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "2.25rem",
  paddingInline: "0.75rem",
  border: "1px solid rgba(23, 23, 23, 0.28)",
  borderRadius: "999px",
  background: "transparent",
  color: "rgba(23, 23, 23, 0.9)",
  fontFamily: "inherit",
  fontSize: "0.8rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "border-color 0.2s ease, color 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: "rgba(23, 23, 23, 0.7)",
      color: "#171717",
    },
  },
});

export const navActionGroupStyle = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const modalHeaderStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.75rem",
  marginBottom: "0.75rem",
});

export const modalCloseButtonStyle = style({
  border: "1px solid rgba(23, 23, 23, 0.25)",
  borderRadius: "999px",
  background: "transparent",
  color: "#171717",
  padding: "0.4rem 0.8rem",
  cursor: "pointer",
});

export const modalMenuListStyle = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});
