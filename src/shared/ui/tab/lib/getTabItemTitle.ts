import type { ReactNode } from "react";

export const getTabItemTitle = (label: ReactNode): string | undefined =>
  typeof label === "string" || typeof label === "number"
    ? String(label)
    : undefined;
