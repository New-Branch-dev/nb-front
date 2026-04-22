import { createGlobalTheme } from "@vanilla-extract/css";

export const themeTokens = createGlobalTheme(":root", {
  gap: {
    none: "0",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.75rem",
    "4xl": "2rem",
    "5xl": "2.25rem",
    "6xl": "2.5rem",
    "7xl": "2.75rem",
    "8xl": "3rem",
    "9xl": "5rem",
  },
  radius: {
    sm: "0.5rem",
    md: "0.625rem",
    lg: "0.75rem",
    full: "999px",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "800",
  },
});
