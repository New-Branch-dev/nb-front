import type { SelectorOption } from "@shared/ui";

export const REVIEW_COUNT_OPTIONS: readonly SelectorOption[] = Array.from(
  { length: 10 },
  (_, index) => {
    const count = index + 1;

    return {
      value: String(count),
      label: String(count),
    };
  },
);
