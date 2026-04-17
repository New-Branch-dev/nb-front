import { createGlobalTheme } from "@vanilla-extract/css";

export const themeTokens = createGlobalTheme(":root", {
  space: {
    none: "0",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
  radius: {
    sm: "0.5rem",
    md: "0.625rem",
    lg: "0.75rem",
    full: "999px",
  },
});
