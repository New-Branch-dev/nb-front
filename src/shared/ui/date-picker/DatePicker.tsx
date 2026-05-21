"use client";

import { useState } from "react";
import { ko } from "date-fns/locale";
import ReactDatePicker from "react-datepicker";

import { CalendarMonthHeader } from "./CalendarMonthHeader";
import { dayBase, pickerRoot, weekDay } from "./DatePicker.css";

import "react-datepicker/dist/react-datepicker.css";

type DatePickerProps = {
  value?: Date | null;
  onChange?: (date: Date) => void;
  className?: string;
};

const toMidnight = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const DatePicker = ({ value, onChange, className }: DatePickerProps) => {
  const isControlled = value !== undefined;
  const [internalDate, setInternalDate] = useState<Date | null>(value ?? null);

  const selectedDate = isControlled ? (value ?? null) : internalDate;
  const mergedClassName = [pickerRoot, className].filter(Boolean).join(" ");

  const handleSelectDate = (date: Date) => {
    const normalizedDate = toMidnight(date);

    if (!isControlled) {
      setInternalDate(normalizedDate);
    }

    onChange?.(normalizedDate);
  };

  return (
    <div className={mergedClassName}>
      <ReactDatePicker
        inline
        selected={selectedDate}
        onChange={(date: Date | null) => {
          if (date) {
            handleSelectDate(date);
          }
        }}
        locale={ko}
        formatWeekDay={(day) => day.slice(0, 1)}
        weekDayClassName={() => weekDay}
        dayClassName={() => dayBase}
        renderCustomHeader={({ date }) => (
          <CalendarMonthHeader date={date} />
        )}
      />
    </div>
  );
};
