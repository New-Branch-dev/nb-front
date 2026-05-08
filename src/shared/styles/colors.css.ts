import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const colorsContract = createThemeContract({
  gray900: null,
  gray800: null,
  gray700: null,
  gray600: null,
  black: null,
  white: null,
  disabled: null,
  negativeRed: null,
  overlay: null,
  purple900: null,
  purple800: null,
  border: null,
  borderDark: null,
  background: null,
  foreground: null,
});

export const colorsDefault: Record<keyof typeof colorsContract, string> = {
  purple900: "#6641DF",
  purple800: "#F3EFFF",
  gray900: "#797587",
  gray800: "#C1BECC",
  gray700: "#73707E",
  gray600: "#94929C",
  black: "#000000",
  white: "#ffffff",
  disabled: "#D2D3D7",
  negativeRed: "#FF0000",
  overlay: "rgba(0, 0, 0, 0.35)",
  border: "#D9D9D9",
  borderDark: "E0DDE9",
  background: "#FDFDFF",
  foreground: "#FAF9FF",
};

export const colors = {
  primary: colorsContract.purple900,
  secondary: colorsContract.purple800,
  pupleScale: {
    purple900: colorsContract.purple900,
    purple800: colorsContract.purple800,
  },
  grayscale: {
    gray900: colorsContract.gray900,
    gray800: colorsContract.gray800,
    gray700: colorsContract.gray700,
    gray600: colorsContract.gray600,
  },
  disabled: colorsContract.disabled,
  negativeRed: colorsContract.negativeRed,
  black: colorsContract.black,
  white: colorsContract.white,
  overlay: colorsContract.overlay,
  // Backward-compatible semantic aliases
  accentPrimary: colorsContract.purple900,
  textPrimary: colorsContract.gray900,
  textInverse: colorsContract.white,
  surface: colorsContract.white,
  border: colorsContract.border,
  borderDark: colorsContract.borderDark,
  background: colorsContract.background,
  foreground: colorsContract.foreground,
};

createGlobalTheme(":root", colorsContract, colorsDefault);
