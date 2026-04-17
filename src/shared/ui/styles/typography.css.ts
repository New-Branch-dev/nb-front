import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const typographyContract = createThemeContract({
  H1: null,
  H2: null,
  B1: null,
  B2: null,
  D1: null,
  D2: null,
});

export const mobileTypography: Record<keyof typeof typographyContract, string> =
  {
    H1: "1.75rem",
    H2: "1.5rem",
    B1: "1.25rem",
    B2: "1.125rem",
    D1: "1rem",
    D2: "0.875rem",
  };

export const pcTypography: Record<keyof typeof typographyContract, string> = {
  H1: "2rem",
  H2: "1.75rem",
  B1: "1.5rem",
  B2: "1.25rem",
  D1: "1rem",
  D2: "0.75rem",
};

createGlobalTheme(":root", typographyContract, pcTypography);
