"use client";

import { useEffect, useRef, useState } from "react";
import { ko } from "date-fns/locale";
import ReactDatePicker from "react-datepicker";

import {
  calendarIcon,
  calendarPopover,
  fieldWrap,
  triggerButton,
  triggerLabel,
} from "@shared/ui/date-field/DateField.css";
import { CalendarMonthHeader } from "@shared/ui/date-picker/CalendarMonthHeader";
import { dayBase, pickerRoot, weekDay } from "@shared/ui/date-picker/DatePicker.css";
import { Icon } from "@shared/ui/icon";

import "react-datepicker/dist/react-datepicker.css";

type DateFieldProps = {
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder: string;
  id?: string;
  minDate?: Date;
  maxDate?: Date;
  "aria-label"?: string;
};

const toMidnight = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const formatDisplayDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

export const DateField = ({
  value,
  onChange,
  placeholder,
  id,
  minDate,
  maxDate,
  "aria-label": ariaLabel,
}: DateFieldProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hasMountedCalendar, setHasMountedCalendar] = useState(false);

  const displayValue = value ? formatDisplayDate(value) : undefined;
  const triggerId = id ?? `date-field-${placeholder}`;

  const handleToggleOpen = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setHasMountedCalendar(true);
      }
      return next;
    });
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (rootRef.current?.contains(target)) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className={fieldWrap}>
      <button
        id={triggerId}
        type="button"
        className={triggerButton}
        aria-label={ariaLabel ?? placeholder}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={handleToggleOpen}
      >
        <span className={triggerLabel} data-filled={Boolean(displayValue)}>
          {displayValue ?? placeholder}
        </span>
        <Icon
          className={calendarIcon}
          src="/calender.svg"
          size="md"
          aria-hidden
        />
      </button>

      {hasMountedCalendar ? (
        <div className={calendarPopover} data-open={isOpen}>
          <ReactDatePicker
            inline
            selected={value}
            onChange={(date: Date | null) => {
              if (date) {
                onChange(toMidnight(date));
                setIsOpen(false);
              }
            }}
            locale={ko}
            minDate={minDate}
            maxDate={maxDate}
            calendarClassName={pickerRoot}
            formatWeekDay={(day) => day.slice(0, 1)}
            weekDayClassName={() => weekDay}
            dayClassName={() => dayBase}
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <CalendarMonthHeader
                date={date}
                showNavigation
                onPreviousMonth={decreaseMonth}
                onNextMonth={increaseMonth}
                isPreviousDisabled={prevMonthButtonDisabled}
                isNextDisabled={nextMonthButtonDisabled}
              />
            )}
          />
        </div>
      ) : null}
    </div>
  );
};
