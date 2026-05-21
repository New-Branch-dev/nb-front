export const clampScore = (raw: string): string => {
  if (raw === "") {
    return "";
  }

  const parsed = Number.parseInt(raw, 10);

  if (Number.isNaN(parsed)) {
    return "";
  }

  return String(Math.min(100, Math.max(0, parsed)));
};

export const isScoreFilled = (value: string): boolean => value !== "";
