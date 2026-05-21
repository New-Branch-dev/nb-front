const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;

export const toMinutes = (timeText: string) => {
  const [hourText, minuteText] = timeText.split(":");
  const hours = Number(hourText);
  const minutes = Number(minuteText);

  if (
    Number.isNaN(hours) ||
    Number.isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return null;
  }

  return hours * 60 + minutes;
};

export const parseTime = (timeText: string): number | null => {
  if (!TIME_PATTERN.test(timeText)) {
    return null;
  }

  return toMinutes(timeText);
};

export const formatTimeInput = (value: string) => {
  const onlyDigits = value.replace(/[^\d]/g, "").slice(0, 4);

  if (onlyDigits.length <= 2) {
    return onlyDigits;
  }

  return `${onlyDigits.slice(0, 2)}:${onlyDigits.slice(2)}`;
};

export const normalizeTimeInput = (value: string) => {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 0) {
    return "";
  }

  if (digits.length <= 2) {
    const hours = digits.padStart(2, "0");
    return `${hours}:00`;
  }

  const padded = digits.padStart(4, "0").slice(-4);
  return `${padded.slice(0, 2)}:${padded.slice(2, 4)}`;
};

export const getTimeInputError = (value: string) => {
  if (value.trim() === "") {
    return "시간을 입력해 주세요.";
  }

  if (parseTime(value) === null) {
    return "올바른 시간 형식(HH:MM)으로 입력해 주세요.";
  }

  return null;
};

export const formatDurationLabel = (startTime: string, endTime: string) => {
  const startMinutes = parseTime(startTime);
  const endMinutes = parseTime(endTime);

  if (startMinutes === null || endMinutes === null) {
    return null;
  }

  let durationMinutes = endMinutes - startMinutes;

  if (durationMinutes < 0) {
    durationMinutes += 24 * 60;
  }

  if (durationMinutes === 0) {
    return "0분";
  }

  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  if (hours === 0) {
    return `${minutes}분`;
  }

  if (minutes === 0) {
    return `${hours}시간`;
  }

  return `${hours}시간 ${minutes}분`;
};
