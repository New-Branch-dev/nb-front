"use client";

import { useState } from "react";
import { ko } from "date-fns/locale";
import type { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import ReactDatePicker from "react-datepicker";

import { CalendarMonthHeader } from "./CalendarMonthHeader";
import { dayBase, pickerRoot, weekDay } from "./DatePicker.css";

import "react-datepicker/dist/react-datepicker.css";

type DatePickerProps = {
  value?: Date | null;
  onChange?: (date: Date) => void;
  values?: Date[];
  onValuesChange?: (dates: Date[]) => void;
  className?: string;
};

const toMidnight = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const DatePicker = ({
  value,
  onChange,
  values,
  onValuesChange,
  className,
}: DatePickerProps) => {
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

  const calendarProps = {
    inline: true,
    locale: ko,
    formatWeekDay: (day: string) => day.slice(0, 1),
    weekDayClassName: () => weekDay,
    dayClassName: () => dayBase,
    renderCustomHeader: ({
      date,
      decreaseMonth,
      increaseMonth,
      prevMonthButtonDisabled,
      nextMonthButtonDisabled,
    }: {
      date: Date;
      decreaseMonth: () => void;
      increaseMonth: () => void;
      prevMonthButtonDisabled: boolean;
      nextMonthButtonDisabled: boolean;
    }) => (
      <CalendarMonthHeader
        date={date}
        showNavigation
        onPreviousMonth={decreaseMonth}
        onNextMonth={increaseMonth}
        isPreviousDisabled={prevMonthButtonDisabled}
        isNextDisabled={nextMonthButtonDisabled}
      />
    ),
  };

  if (values !== undefined) {
    return (
      <div className={mergedClassName}>
        <ReactDatePicker
          {...calendarProps}
          selectsMultiple
          selectedDates={values}
          onChange={(dates) =>
            onValuesChange?.((dates ?? []).map(toMidnight))
          }
        />
      </div>
    );
  }

  return (
    <div className={mergedClassName}>
      <ReactDatePicker
        {...calendarProps}
        selected={selectedDate}
        onChange={(date: Date | null) => {
          if (date) {
            handleSelectDate(date);
          }
        }}
      />
    </div>
  );
};
