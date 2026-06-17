import { Chip } from "@shared/ui";

import { convertDateKeyToRestDateLabel } from "@features/my-learning/preferred-learning-time/model/preferred-time";
import {
  removeMark,
  selectedDatesList,
} from "@features/my-learning/preferred-learning-time/ui/selected-rest-dates.css";

type SelectedRestDatesProps = {
  dates: string[];
  onRemove: (dateKey: string) => void;
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
            aria-label={`${convertDateKeyToRestDateLabel(dateKey)} 삭제`}
            onClick={() => onRemove(dateKey)}
          >
            {convertDateKeyToRestDateLabel(dateKey)}
            <span className={removeMark} aria-hidden>
              ×
            </span>
          </Chip>
        </li>
      ))}
    </ul>
  );
};
