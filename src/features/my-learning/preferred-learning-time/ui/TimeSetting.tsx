import { SectionCard } from "@shared/ui/section-card/SectionCard";

import {
  arrow,
  timeControls,
  timeField,
  timeInput,
  timeInputsColumn,
  timeInputsRow,
  timeInputWrap,
  totalTimePlaceholder,
  totalTimeValue,
  totalTimeWrap,
} from "./TimeSetting.css";

type TimeSettingProps = {
  startTime: string;
  endTime: string;
  totalTimeLabel: string | null;
  onStartTimeChange: (value: string) => void;
  onEndTimeChange: (value: string) => void;
  onStartTimeBlur: () => void;
  onEndTimeBlur: () => void;
};

export const TimeSetting = ({
  startTime,
  endTime,
  totalTimeLabel,
  onStartTimeChange,
  onEndTimeChange,
  onStartTimeBlur,
  onEndTimeBlur,
}: TimeSettingProps) => {
  return (
    <SectionCard title="학습 시간">
      <div className={timeControls}>
        <div className={timeInputsColumn}>
          <div className={timeInputsRow}>
            <div className={timeField}>
              <label className={timeInputWrap} aria-label="시작 시간">
                <input
                  className={timeInput}
                  type="text"
                  placeholder="00:00"
                  inputMode="numeric"
                  maxLength={5}
                  value={startTime}
                  onChange={(event) => onStartTimeChange(event.target.value)}
                  onBlur={onStartTimeBlur}
                />
              </label>
            </div>

            <span className={arrow} aria-hidden>
              →
            </span>

            <div className={timeField}>
              <label className={timeInputWrap} aria-label="종료 시간">
                <input
                  className={timeInput}
                  type="text"
                  placeholder="00:00"
                  inputMode="numeric"
                  maxLength={5}
                  value={endTime}
                  onChange={(event) => onEndTimeChange(event.target.value)}
                  onBlur={onEndTimeBlur}
                />
              </label>
            </div>
          </div>
        </div>

        <div className={totalTimeWrap} aria-label="총 시간">
          {totalTimeLabel ? (
            <strong className={totalTimeValue}>{totalTimeLabel}</strong>
          ) : (
            <span className={totalTimePlaceholder}>총 시간</span>
          )}
        </div>
      </div>
    </SectionCard>
  );
};
