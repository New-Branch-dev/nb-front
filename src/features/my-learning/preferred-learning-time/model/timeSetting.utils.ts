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

export const formatDuration = (startTime: string, endTime: string) => {
  const startMinutes = toMinutes(startTime);
  const endMinutes = toMinutes(endTime);

  if (startMinutes === null || endMinutes === null) {
    return "--:--";
  }

  let duration = endMinutes - startMinutes;

  if (duration < 0) {
    duration += 24 * 60;
  }

  const hours = String(Math.floor(duration / 60)).padStart(2, "0");
  const minutes = String(duration % 60).padStart(2, "0");

  return `${hours}:${minutes}`;
};

export const formatTimeInput = (value: string) => {
  const onlyDigits = value.replace(/[^\d]/g, "").slice(0, 4);

  if (onlyDigits.length <= 2) {
    return onlyDigits;
  }

  return `${onlyDigits.slice(0, 2)}:${onlyDigits.slice(2)}`;
};
