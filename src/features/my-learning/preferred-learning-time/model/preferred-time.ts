type ParsedTime = {
  hours: number;
  minutes: number;
};

export const convertTimeInput = (value: string, previousValue: string) => {
  const sanitizedValue = value.replace(/[^\d:]/g, "");
  let nextValue: string;

  if (!sanitizedValue.includes(":")) {
    const digits = sanitizedValue.slice(0, 4);

    nextValue = digits.length > 2
      ? `${digits.slice(0, 2)}:${digits.slice(2)}`
      : digits;
  } else {
    const [hours = "", minutes = ""] = sanitizedValue.split(":");
    nextValue = `${hours.slice(0, 2)}:${minutes.slice(0, 2)}`;
  }

  const [hours, minutes] = nextValue.split(":");
  const isHoursValid = hours === "" || Number(hours) <= 23;
  const isMinutesValid =
    minutes === undefined || minutes === "" || Number(minutes) <= 60;

  return isHoursValid && isMinutesValid ? nextValue : previousValue;
};

export const convertTimeToParsedTime = (value: string): ParsedTime | null => {
  const match = value.match(/^(\d{1,2}):(\d{1,2})$/);

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 60) {
    return null;
  }

  return { hours, minutes };
};

export const convertTimeToMinutes = (value: string) => {
  const time = convertTimeToParsedTime(value);

  return time ? time.hours * 60 + time.minutes : null;
};

export const convertNormalizedTimeInput = (value: string) => {
  const time = convertTimeToParsedTime(value);

  if (!time) {
    return value;
  }

  return `${String(time.hours).padStart(2, "0")}:${String(time.minutes).padStart(2, "0")}`;
};

export const convertTotalTimeLabel = (startTime: string, endTime: string) => {
  const start = convertTimeToParsedTime(startTime);
  const end = convertTimeToParsedTime(endTime);

  if (!start || !end) {
    return null;
  }

  const startMinutes = start.hours * 60 + start.minutes;
  const endMinutes = end.hours * 60 + end.minutes;
  const durationMinutes =
    endMinutes >= startMinutes
      ? endMinutes - startMinutes
      : endMinutes + 24 * 60 - startMinutes;

  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  return `${hours}시간 ${minutes}분`;
};

export const convertDateToDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const convertDateKeyToDate = (dateKey: string) => {
  const [year, month, day] = dateKey.split("-").map(Number);

  return new Date(year, month - 1, day);
};

export const convertDateKeyToRestDateLabel = (dateKey: string) => {
  const [year, month, day] = dateKey.split("-").map(Number);

  return `${String(year).slice(2)}년 ${month}월 ${day}일`;
};

export const convertDateKeyToShortRestDateLabel = (dateKey: string) => {
  const [, month, day] = dateKey.split("-").map(Number);

  return `${month}월 ${day}일`;
};
