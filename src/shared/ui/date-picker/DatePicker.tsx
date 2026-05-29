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

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 101 }, (_, i) => currentYear - i); // [2026, 2025, ..., 1926]
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
        renderCustomHeader={({
                               date,
                               decreaseMonth,
                               increaseMonth,
                               changeYear,
                               changeMonth,
                             }: ReactDatePickerCustomHeaderProps) => (
          <div
            className={`react-datepicker__header react-datepicker__header--custom`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 10px",
              gap: "8px"
            }}
          >
            <button
              type="button"
              onClick={decreaseMonth}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}
            >
              &lt;
            </button>

            <div style={{ display: "flex", gap: "6px" }}>
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(Number(value))}
                style={{ padding: "4px 8px", borderRadius: "4px", border: "1px solid #D6D4DF", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}년
                  </option>
                ))}
              </select>

              <select
                value={date.getMonth()}
                onChange={({ target: { value } }) => changeMonth(Number(value))}
                style={{ padding: "4px 8px", borderRadius: "4px", border: "1px solid #D6D4DF", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}
              >
                {months.map((month, index) => (
                  <option key={month} value={index}>
                    {month}월
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={increaseMonth}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}
            >
              &gt;
            </button>
          </div>
        )}
      />
    </div>
  );
};
