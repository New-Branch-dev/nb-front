import type { ComplexStyleRule } from "@vanilla-extract/css";

export const mediaQueryDefault = 1024;
export const laptopMaxWidthDefault = 1440;

export const maxWidthMediaQueryText = `screen and (max-width: ${mediaQueryDefault}px)`;
export const minWidthMediaQueryText = `screen and (min-width: ${mediaQueryDefault + 1}px)`;

export const laptopMediaQueryText = `screen and (min-width: ${mediaQueryDefault + 1}px) and (max-width: ${laptopMaxWidthDefault}px)`;
export const pcWithLaptopMediaQueryText = `screen and (min-width: ${laptopMaxWidthDefault + 1}px)`;

export const mediaQuery = <T extends ComplexStyleRule>({
  mobile,
  laptop,
  pc,
}: {
  mobile?: T;
  laptop?: T;
  pc?: T;
}) => ({
  "@media": {
    ...(mobile ? { [maxWidthMediaQueryText]: mobile } : {}),
    ...(laptop ? { [laptopMediaQueryText]: laptop } : {}),
    ...(pc ? { [pcWithLaptopMediaQueryText]: pc } : {}),
  },
});
