import { style } from "@vanilla-extract/css";

import { colors, flexColumn, themeTokens } from "@shared/styles";

/** StepFlowPanelsSection `panelCard`와 동일 */
export const stepSummaryPanelCard = style({
  backgroundColor: colors.white,
  width: "100%",
  padding: themeTokens.gap["2xl"],
  border: `1px solid ${colors.border}`,
  borderRadius: themeTokens.radius.lg,
});

export const registrationStepRoot = style([
  flexColumn,
  {
    width: "100%",
    gap: themeTokens.gap["2xl"],
  },
]);
