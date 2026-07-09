import { Activity } from "react";

import { Chip, DatePicker } from "@shared/ui";

import {
  excludedDateChip,
  excludedDateChipList,
  excludedDatePicker,
  excludedDateRemoveButton,
  excludedDateRoot,
} from "@features/learning-goals/goal-setting/ui/goal-setting.css";

type ExcludedDateSelectorViewProps = {
  selectedDateList: Date[];
  selectedDateLabelList: string[];
  isPickerOpen: boolean;
  minDate?: Date | null;
  maxDate?: Date | null;
  onTogglePicker: () => void;
  onSelectedDateListChange: (dateList: Date[]) => void;
  onDeleteDate: (dateLabel: string) => void;
};

export const ExcludedDateSelectorView = ({
  selectedDateList,
  selectedDateLabelList,
  isPickerOpen,
  minDate,
  maxDate,
  onTogglePicker,
  onSelectedDateListChange,
  onDeleteDate,
}: ExcludedDateSelectorViewProps) => {
  return (
    <div className={excludedDateRoot}>
      <Chip
        type="button"
        labelTone="muted"
        responsiveSize="laptopMdPcLg"
        aria-expanded={isPickerOpen}
        onClick={onTogglePicker}
      >
        날짜 추가
      </Chip>

      <Activity mode={isPickerOpen ? "visible" : "hidden"}>
        <DatePicker
          className={excludedDatePicker}
          values={selectedDateList}
          minDate={minDate}
          maxDate={maxDate}
          onValuesChange={onSelectedDateListChange}
        />
      </Activity>

      <div className={excludedDateChipList} aria-label="선택한 학습 제외일">
        {selectedDateLabelList.map((dateLabel) => (
          <span key={dateLabel} className={excludedDateChip}>
            {dateLabel}
            <button
              type="button"
              className={excludedDateRemoveButton}
              aria-label={`${dateLabel} 삭제`}
              onClick={() => onDeleteDate(dateLabel)}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};
