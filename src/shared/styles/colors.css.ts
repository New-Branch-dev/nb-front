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
  /** 카테고리 테마 (학습 목표 카드 등) */
  themeBlue: null,
  themeOrange: null,
  themeGreen: null,
  /** 상태 - 완료 임박 */
  warning: null,
  warningSoft: null,
  /** 상태 - 완료 */
  success: null,
  successSoft: null,
  /** 상태 - 시작 전 등 중립 chip 배경 */
  neutralSoft: null,
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
  themeBlue: "#2EB1EC",
  themeOrange: "#FA8535",
  themeGreen: "#30C291",
  warning: "#F5B423",
  warningSoft: "#FFF6D8",
  success: "#30C291",
  successSoft: "#E3F8EE",
  neutralSoft: "#F2F2F5",
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
  /** 카테고리 테마 (랜덤 배정용) */
  theme: {
    primary: colorsContract.purple900,
    blue: colorsContract.themeBlue,
    orange: colorsContract.themeOrange,
    green: colorsContract.themeGreen,
  },
  status: {
    warning: colorsContract.warning,
    warningSoft: colorsContract.warningSoft,
    success: colorsContract.success,
    successSoft: colorsContract.successSoft,
    neutralSoft: colorsContract.neutralSoft,
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
