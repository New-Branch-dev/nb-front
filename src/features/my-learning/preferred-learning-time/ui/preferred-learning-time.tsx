"use client";

import { useShallow } from "zustand/react/shallow";

import { useMyLearningStore } from "../../model/use-my-learning-store";
import { PreferredLearningTimeView } from "./preferred-learning-time-view";

const sanitizeTimeInput = (value: string, previousValue: string) => {
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

const parseTimeInput = (value: string) => {
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

const normalizeTimeInput = (value: string) => {
  const time = parseTimeInput(value);

  if (!time) {
    return value;
  }

  return `${String(time.hours).padStart(2, "0")}:${String(time.minutes).padStart(2, "0")}`;
};

const getTotalTimeLabel = (startTime: string, endTime: string) => {
  const start = parseTimeInput(startTime);
  const end = parseTimeInput(endTime);

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

const toDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const fromDateKey = (dateKey: string) => {
  const [year, month, day] = dateKey.split("-").map(Number);

  return new Date(year, month - 1, day);
};

export const PreferredLearningTime = () => {
  const { startTime, endTime, restDates, setPreferredTime } = useMyLearningStore(
    useShallow((state) => ({
      startTime: state.preferredTime.startTime,
      endTime: state.preferredTime.endTime,
      restDates: state.preferredTime.restDates,
      setPreferredTime: state.setPreferredTime,
    })),
  );
  const totalTimeLabel = getTotalTimeLabel(startTime, endTime);
  const selectedRestDates = restDates.map(fromDateKey);

  const handleStartTimeChange = (value: string) => {
    setPreferredTime({ startTime: sanitizeTimeInput(value, startTime) });
  };

  const handleEndTimeChange = (value: string) => {
    setPreferredTime({ endTime: sanitizeTimeInput(value, endTime) });
  };

  const handleStartTimeBlur = () => {
    setPreferredTime({ startTime: normalizeTimeInput(startTime) });
  };

  const handleEndTimeBlur = () => {
    setPreferredTime({ endTime: normalizeTimeInput(endTime) });
  };

  const handleRestDatesChange = (dates: Date[]) => {
    setPreferredTime({
      restDates: dates.map(toDateKey).sort(),
    });
  };

  const handleRestDateRemove = (dateKey: string) => {
    setPreferredTime({
      restDates: restDates.filter((restDate) => restDate !== dateKey),
    });
  };

  const viewProps = {
    startTime,
    endTime,
    totalTimeLabel,
    restDates,
    selectedRestDates,
    onStartTimeChange: handleStartTimeChange,
    onEndTimeChange: handleEndTimeChange,
    onStartTimeBlur: handleStartTimeBlur,
    onEndTimeBlur: handleEndTimeBlur,
    onRestDatesChange: handleRestDatesChange,
    onRestDateRemove: handleRestDateRemove,
  };

  return <PreferredLearningTimeView {...viewProps} />;
};
