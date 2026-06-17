import {
  assignVars,
  createThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

import {
  laptopMediaQueryText,
  maxWidthMediaQueryText,
} from "@shared/styles/media-query.css";

export const typographyContract = createThemeContract({
  displayHero: null,
  displayHeadline: null,
  displaySection: null,
  displayPage: null,
  headingXl: null,
  headingLg: null,
  headingMd: null,
  headingSm: null,
  bodyLg: null,
  bodyMd: null,
  bodySm: null,
});

export const mobileTypography: Record<keyof typeof typographyContract, string> =
  {
    displayHero: "2.25rem",
    displayHeadline: "1.375rem",
    displaySection: "1.25rem",
    displayPage: "1.125rem",
    headingXl: "1rem",
    headingLg: "0.9375rem",
    headingMd: "0.8125rem",
    headingSm: "0.75rem",
    bodyLg: "0.8125rem",
    bodyMd: "0.75rem",
    bodySm: "0.75rem",
  };

export const laptopTypography: Record<keyof typeof typographyContract, string> =
  {
    displayHero: "2.875rem",
    displayHeadline: "2.5rem",
    displaySection: "2.25rem",
    displayPage: "1.375rem",
    headingXl: "1.25rem",
    headingLg: "1.125rem",
    headingMd: "1rem",
    headingSm: "0.9375rem",
    bodyLg: "0.8125rem",
    bodyMd: "0.75rem",
    bodySm: "0.75rem",
  };

export const pcTypography: Record<keyof typeof typographyContract, string> = {
  displayHero: "3.625rem",
  displayHeadline: "3.125rem",
  displaySection: "2.875rem",
  displayPage: "2.5rem",
  headingXl: "1.5rem",
  headingLg: "1.375rem",
  headingMd: "1.25rem",
  headingSm: "1.125rem",
  bodyLg: "1rem",
  bodyMd: "0.875rem",
  bodySm: "0.8125rem",
};

globalStyle(":root", {
  vars: assignVars(typographyContract, pcTypography),
});

globalStyle(":root", {
  "@media": {
    [laptopMediaQueryText]: {
      vars: assignVars(typographyContract, laptopTypography),
    },
    [maxWidthMediaQueryText]: {
      vars: assignVars(typographyContract, mobileTypography),
    },
  },
});
