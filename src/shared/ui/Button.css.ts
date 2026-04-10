import { style, styleVariants } from "@vanilla-extract/css";

export const buttonBaseStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  border: "none",
  borderRadius: "0.625rem",
  fontWeight: 500,
  transition: "background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease",
  cursor: "pointer",
  selectors: {
    "&:hover": { opacity: 0.92 },
    "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
  },
});

export const variantStyle = styleVariants({
  primary: { background: "#800080", color: "#ffffff" },
  ghost: { background: "transparent", color: "#171717" },
});

export const sizeStyle = styleVariants({
  sm: { padding: "0.4rem 0.75rem", fontSize: "0.875rem" },
  md: { padding: "0.625rem 1rem", fontSize: "0.9375rem" },
  lg: { padding: "0.85rem 1.25rem", fontSize: "1rem" },
});

export const fullWidthStyle = style({ width: "100%" });
export const autoWidthStyle = style({ width: "auto" });
