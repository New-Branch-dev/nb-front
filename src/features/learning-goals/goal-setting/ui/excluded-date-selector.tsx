"use client";

import { useEffect, useMemo, useState } from "react";

import {
  convertDateKeyToDate,
  convertDateToDateKey,
} from "@shared/lib/date";

import { MAX_EXCLUDED_DATE_COUNT } from "@features/learning-goals/goal-setting/model/consts";
import { ExcludedDateSelectorView } from "@features/learning-goals/goal-setting/ui/excluded-date-selector-view";

type ExcludedDateSelectorProps = {
  dateKeyList: string[];
  minDate?: Date | null;
  maxDate?: Date | null;
  onDateKeyListChange: (dateKeyList: string[]) => void;
};

const convertDateKeyToLabel = (dateKey: string) => dateKey.replaceAll("-", ".");

const convertDateKeyListToDateList = (dateKeyList: string[]) =>
  dateKeyList.flatMap((dateKey) => {
    const date = convertDateKeyToDate(dateKey);

    return date ? [date] : [];
  });

const convertDateListToDateKeyList = (dateList: Date[]) =>
  Array.from(new Set(dateList.map(convertDateToDateKey)))
    .sort()
    .slice(0, MAX_EXCLUDED_DATE_COUNT);

const isDateInRange = ({
  date,
  minDate,
  maxDate,
}: {
  date: Date;
  minDate?: Date | null;
  maxDate?: Date | null;
}) => {
  const dateTime = date.getTime();

  if (minDate && dateTime < minDate.getTime()) {
    return false;
  }

  if (maxDate && dateTime > maxDate.getTime()) {
    return false;
  }

  return true;
};

const convertDateKeyListInRange = ({
  dateKeyList,
  minDate,
  maxDate,
}: {
  dateKeyList: string[];
  minDate?: Date | null;
  maxDate?: Date | null;
}) =>
  dateKeyList.filter((dateKey) => {
    const date = convertDateKeyToDate(dateKey);

    return date ? isDateInRange({ date, minDate, maxDate }) : false;
  });

export const ExcludedDateSelector = ({
  dateKeyList,
  minDate,
  maxDate,
  onDateKeyListChange,
}: ExcludedDateSelectorProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const dateKeyListInRange = useMemo(
    () =>
      convertDateKeyListInRange({
        dateKeyList,
        minDate,
        maxDate,
      }),
    [dateKeyList, minDate, maxDate],
  );
  const selectedDateList = convertDateKeyListToDateList(dateKeyListInRange);
  const selectedDateLabelList = dateKeyListInRange.map(convertDateKeyToLabel);

  useEffect(() => {
    if (dateKeyListInRange.length === dateKeyList.length) {
      return;
    }

    onDateKeyListChange(dateKeyListInRange);
  }, [dateKeyList, dateKeyListInRange, onDateKeyListChange]);

  const handleTogglePicker = () => {
    setIsPickerOpen((prev) => !prev);
  };

  const handleSelectedDateListChange = (dateList: Date[]) => {
    onDateKeyListChange(
      convertDateListToDateKeyList(
        dateList.filter((date) => isDateInRange({ date, minDate, maxDate })),
      ),
    );
  };

  const handleDeleteDate = (dateLabel: string) => {
    const dateKey = dateLabel.replaceAll(".", "-");

    onDateKeyListChange(dateKeyList.filter((entry) => entry !== dateKey));
  };

  return (
    <ExcludedDateSelectorView
      selectedDateList={selectedDateList}
      selectedDateLabelList={selectedDateLabelList}
      isPickerOpen={isPickerOpen}
      minDate={minDate}
      maxDate={maxDate}
      onTogglePicker={handleTogglePicker}
      onSelectedDateListChange={handleSelectedDateListChange}
      onDeleteDate={handleDeleteDate}
    />
  );
};
