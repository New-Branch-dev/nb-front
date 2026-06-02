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
  totalTimeWrap,
} from "./TimeSetting.css";

export const TimeSetting = () => {
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
                />
              </label>
            </div>
          </div>
        </div>

        <div className={totalTimeWrap} aria-label="총 시간">
          <span className={totalTimePlaceholder}>총 시간</span>
        </div>
      </div>
    </SectionCard>
  );
};
