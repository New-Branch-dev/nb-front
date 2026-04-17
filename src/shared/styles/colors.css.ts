import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const colorsContract = createThemeContract({
  blue900: null,
  blue800: null,
  blue700: null,
  blue600: null,
  blue500: null,
  gray900: null,
  gray800: null,
  gray700: null,
  gray500: null,
  gray300: null,
  gray100: null,
  black: null,
  white: null,
  green: null,
  disabled: null,
  negativeRed: null,
  overlay: null,
});

export const colorsDefault: Record<keyof typeof colorsContract, string> = {
  blue900: "#132D58",
  blue800: "#1454B9",
  blue700: "#1B63D7",
  blue600: "#80008A",
  blue500: "#5D84FF",
  gray900: "#171717",
  gray800: "#222222",
  gray700: "#444444",
  gray500: "#767676",
  gray300: "rgba(23, 23, 23, 0.18)",
  gray100: "rgba(23, 23, 23, 0.06)",
  black: "#000000",
  white: "#ffffff",
  green: "#00C454",
  disabled: "#D2D3D7",
  negativeRed: "#FF0000",
  overlay: "rgba(0, 0, 0, 0.35)",
};

export const colors = {
  primary: colorsContract.blue600,
  secondary: colorsContract.green,
  bluescale: {
    blue900: colorsContract.blue900,
    blue800: colorsContract.blue800,
    blue700: colorsContract.blue700,
    blue600: colorsContract.blue600,
    blue500: colorsContract.blue500,
  },
  grayscale: {
    gray900: colorsContract.gray900,
    gray800: colorsContract.gray800,
    gray700: colorsContract.gray700,
    gray500: colorsContract.gray500,
    gray300: colorsContract.gray300,
    gray100: colorsContract.gray100,
  },
  outline: colorsContract.gray300,
  disabled: colorsContract.disabled,
  negativeRed: colorsContract.negativeRed,
  black: colorsContract.black,
  white: colorsContract.white,
  green: colorsContract.green,
  overlay: colorsContract.overlay,
  // Backward-compatible semantic aliases
  accentPrimary: colorsContract.blue600,
  textPrimary: colorsContract.gray900,
  textInverse: colorsContract.white,
  surface: colorsContract.white,
  surfaceMuted: colorsContract.gray100,
  borderSubtle: colorsContract.gray300,
  borderStrong: colorsContract.gray500,
};

createGlobalTheme(":root", colorsContract, colorsDefault);
