import { globalStyle, style } from "@vanilla-extract/css";

import {
  colors,
  flexInlineCenter,
  themeTokens,
  typographyContract,
} from "@shared/styles";

export const pickerRoot = style({
  width: "100%",
});

export const dayBase = style([
  flexInlineCenter,
  {
    width: "2.25rem",
    height: "2.25rem",
    borderRadius: themeTokens.radius.md,
    color: colors.grayscale.gray700,
    fontSize: typographyContract.bodyLg,
  },
]);

export const outsideDay = style({
  color: colors.grayscale.gray800,
});

export const daySelected = style({
  backgroundColor: colors.primary,
  color: colors.white,
});

export const weekDay = style({
  color: `${colors.grayscale.gray700} !important`,
  fontSize: typographyContract.bodyLg,
  fontWeight: themeTokens.fontWeight.semibold,
});

globalStyle(`${pickerRoot} .react-datepicker`, {
  width: "100%",
  border: `1px solid ${colors.border}`,
  borderRadius: themeTokens.radius.md,
  backgroundColor: colors.white,
  fontFamily: "inherit",
  overflow: "hidden",
});

globalStyle(`${pickerRoot} .react-datepicker__month-container`, {
  width: "100%",
});

globalStyle(`${pickerRoot} .react-datepicker__header`, {
  borderBottom: "none !important",
  backgroundColor: colors.white,
  paddingBlock: themeTokens.gap.lg,
});

globalStyle(`${pickerRoot} .react-datepicker__header--custom`, {
  width: "100%",
});

globalStyle(`${pickerRoot} .react-datepicker__current-month`, {
  margin: 0,
  color: colors.grayscale.gray700,
  fontSize: typographyContract.headingMd,
  fontWeight: themeTokens.fontWeight.bold,
});

globalStyle(`${pickerRoot} .react-datepicker__day-names`, {
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  gap: themeTokens.gap.lg,
  marginTop: 0,
  marginBottom: themeTokens.gap.md,
  paddingInline: themeTokens.gap.lg,
});

globalStyle(`${pickerRoot} .react-datepicker__week`, {
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  gap: themeTokens.gap.lg,
  paddingInline: themeTokens.gap.lg,
  marginBottom: themeTokens.gap.sm,
});

globalStyle(`${pickerRoot} .react-datepicker__month`, {
  margin: 0,
  marginTop: 0,
  paddingBottom: themeTokens.gap["2xl"],
});

globalStyle(`${pickerRoot} .react-datepicker__day-name`, {
  margin: 0,
  width: "100%",
  height: "2.25rem",
  lineHeight: "2.25rem",
  color: `${colors.grayscale.gray700} !important`,
  fontSize: `${typographyContract.bodyLg} !important`,
});

globalStyle(`${pickerRoot} .react-datepicker__day`, {
  margin: 0,
  width: "2.25rem",
  height: "2.25rem",
  lineHeight: "2.25rem",
  justifySelf: "center",
  borderRadius: `${themeTokens.radius.md} !important`,
});

globalStyle(`${pickerRoot} .react-datepicker__day--keyboard-selected`, {
  backgroundColor: "transparent !important",
  color: colors.grayscale.gray700,
});

globalStyle(
  `${pickerRoot} .react-datepicker__day--today:not(.react-datepicker__day--selected):not(.react-datepicker__day--keyboard-selected)`,
  {
    color: `${colors.grayscale.gray700} !important`,
  },
);

globalStyle(`${pickerRoot} .react-datepicker__day--outside-month`, {
  color: `${colors.grayscale.gray800} !important`,
});

globalStyle(
  `${pickerRoot} .react-datepicker__day-names .react-datepicker__day-name:nth-child(1)`,
  {
    color: "#FF4D4F !important",
  },
);

globalStyle(
  `${pickerRoot} .react-datepicker__day-names .react-datepicker__day-name:nth-child(7)`,
  {
    color: "#2F6BFF !important",
  },
);

globalStyle(
  `${pickerRoot} .react-datepicker__week .react-datepicker__day:nth-child(1)`,
  {
    color: "#FF4D4F !important",
  },
);

globalStyle(
  `${pickerRoot} .react-datepicker__week .react-datepicker__day:nth-child(7)`,
  {
    color: "#2F6BFF !important",
  },
);

globalStyle(
  `${pickerRoot} .react-datepicker__day.react-datepicker__day--outside-month`,
  {
    color: `${colors.grayscale.gray800} !important`,
  },
);

globalStyle(
  `${pickerRoot} .react-datepicker__week .react-datepicker__day--outside-month`,
  {
    color: `${colors.grayscale.gray800} !important`,
  },
);

globalStyle(
  `${pickerRoot} .react-datepicker__week .react-datepicker__day:nth-child(1).react-datepicker__day--outside-month, ${pickerRoot} .react-datepicker__week .react-datepicker__day:nth-child(7).react-datepicker__day--outside-month`,
  {
    color: `${colors.grayscale.gray800} !important`,
  },
);

globalStyle(`${pickerRoot} .react-datepicker__day--selected`, {
  backgroundColor: `${colors.primary} !important`,
  color: `${colors.white} !important`,
  borderRadius: themeTokens.radius.md,
});

globalStyle(
  `${pickerRoot} .react-datepicker__week .react-datepicker__day:nth-child(1).react-datepicker__day--selected, ${pickerRoot} .react-datepicker__week .react-datepicker__day:nth-child(7).react-datepicker__day--selected`,
  {
    color: `${colors.white} !important`,
  },
);

globalStyle(
  `${pickerRoot} .react-datepicker__day:not(.react-datepicker__day--selected):not(.react-datepicker__day--disabled):hover`,
  {
    borderRadius: `${themeTokens.radius.md} !important`,
    backgroundColor: `${colors.secondary} !important`,
    color: `${colors.grayscale.gray700} !important`,
  },
);

globalStyle(
  `${pickerRoot} .react-datepicker__day--today:not(.react-datepicker__day--selected):hover`,
  {
    color: `${colors.grayscale.gray700} !important`,
  },
);

globalStyle(`${pickerRoot} .react-datepicker__day--disabled:hover`, {
  backgroundColor: "transparent !important",
  color: `${colors.grayscale.gray800} !important`,
});

globalStyle(`${pickerRoot} .react-datepicker__triangle`, {
  display: "none",
});
