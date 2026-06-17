import { Chip } from "@shared/ui";

import {
  removeMark,
  selectedDatesList,
} from "./selected-rest-dates.css";

type SelectedRestDatesProps = {
  dates: string[];
  onRemove: (dateKey: string) => void;
};

const formatDateLabel = (dateKey: string) => {
  const [year, month, day] = dateKey.split("-").map(Number);

  return `${String(year).slice(2)}년 ${month}월 ${day}일`;
};

export const SelectedRestDates = ({
  dates,
  onRemove,
}: SelectedRestDatesProps) => {
  if (dates.length === 0) {
    return null;
  }

  return (
    <ul className={selectedDatesList} aria-label="선택한 쉬는 날">
      {dates.map((dateKey) => (
        <li key={dateKey}>
          <Chip
            size="md"
            selected
            aria-label={`${formatDateLabel(dateKey)} 삭제`}
            onClick={() => onRemove(dateKey)}
          >
            {formatDateLabel(dateKey)}
            <span className={removeMark} aria-hidden>
              ×
            </span>
          </Chip>
        </li>
      ))}
    </ul>
  );
};
