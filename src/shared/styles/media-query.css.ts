import type { ComplexStyleRule } from "@vanilla-extract/css";

export const mediaQueryDefault = 767;
export const maxWidthMediaQueryText = `screen and (max-width: ${mediaQueryDefault}px)`;
export const minWidthMediaQueryText = `screen and (min-width: ${mediaQueryDefault + 1}px)`;

export const mediaQuery = <T extends ComplexStyleRule>({
  mobile,
  pc,
}: {
  mobile?: T;
  pc?: T;
}) => ({
  "@media": {
    ...(mobile ? { [maxWidthMediaQueryText]: mobile } : {}),
    ...(pc ? { [minWidthMediaQueryText]: pc } : {}),
  },
});
