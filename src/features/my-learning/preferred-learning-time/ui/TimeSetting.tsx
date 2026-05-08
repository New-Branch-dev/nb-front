import { useEffect } from "react";

import { SectionCard } from "@shared/ui/section-card/SectionCard";

import { useTimeSettingForm } from "../model/useTimeSettingForm";
import {
  arrow,
  timeControls,
  timeInput,
  timeInputsCluster,
  timeInputWrap,
  totalTimePlaceholder,
  totalTimeValue,
  totalTimeWrap,
} from "./TimeSetting.css";

type TimeSettingProps = {
  onValidityChange: (isValid: boolean) => void;
};

export const TimeSetting = ({ onValidityChange }: TimeSettingProps) => {
  const {
    startTime,
    endTime,
    isValid,
    totalTime,
    setStartTimeFromInput,
    setEndTimeFromInput,
  } = useTimeSettingForm();

  useEffect(() => {
    onValidityChange(isValid);
  }, [isValid, onValidityChange]);

  return (
    <SectionCard title="학습 시간">
      <div className={timeControls}>
        <div className={timeInputsCluster}>
          <label className={timeInputWrap} aria-label="시작 시간">
            <input
              className={timeInput}
              type="text"
              value={startTime}
              onChange={(event) => setStartTimeFromInput(event.target.value)}
              placeholder="00:00"
              inputMode="numeric"
              maxLength={5}
            />
          </label>

          <span className={arrow} aria-hidden>
            →
          </span>

          <label className={timeInputWrap} aria-label="종료 시간">
            <input
              className={timeInput}
              type="text"
              value={endTime}
              onChange={(event) => setEndTimeFromInput(event.target.value)}
              placeholder="00:00"
              inputMode="numeric"
              maxLength={5}
            />
          </label>
        </div>

        <div className={totalTimeWrap} aria-label="총 시간">
          {isValid ? (
            <strong className={totalTimeValue}>{totalTime}</strong>
          ) : (
            <span className={totalTimePlaceholder}>총 시간</span>
          )}
        </div>
      </div>
    </SectionCard>
  );
};
