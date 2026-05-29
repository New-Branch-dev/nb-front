export const MAX_WEEKLY_HOUR = 24;

export const clampHour = (raw: string): string => {
  if (raw === "") {
    return "";
  }

  const parsed = Number.parseInt(raw, 10);

  if (Number.isNaN(parsed)) {
    return "";
  }

  return String(Math.min(MAX_WEEKLY_HOUR, Math.max(1, parsed)));
};

export const isHourFilled = (value: string): boolean => value !== "";
