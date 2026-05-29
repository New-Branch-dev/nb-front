import { useEffect } from "react";

import { SectionCard } from "@shared/ui/section-card/SectionCard";

import { useTimeSettingForm } from "../model/useTimeSettingForm";
import {
  arrow,
  fieldError,
  timeControls,
  timeErrorSlot,
  timeErrorsRow,
  timeField,
  timeInput,
  timeInputWrap,
  timeInputWrapInvalid,
  timeInputsColumn,
  timeInputsRow,
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
    startError,
    endError,
    isValid,
    totalTimeLabel,
    setStartTimeFromInput,
    setEndTimeFromInput,
    handleStartBlur,
    handleEndBlur,
  } = useTimeSettingForm();

  useEffect(() => {
    onValidityChange(isValid);
  }, [isValid, onValidityChange]);

  const hasErrors = startError !== null || endError !== null;

  return (
    <SectionCard title="학습 시간">
      <div className={timeControls}>
        <div className={timeInputsColumn}>
          <div className={timeInputsRow}>
            <div className={timeField}>
              <label
                className={[timeInputWrap, startError ? timeInputWrapInvalid : null]
                  .filter(Boolean)
                  .join(" ")}
                aria-label="시작 시간"
              >
                <input
                  className={timeInput}
                  type="text"
                  value={startTime}
                  onChange={(event) =>
                    setStartTimeFromInput(event.target.value)
                  }
                  onBlur={handleStartBlur}
                  placeholder="00:00"
                  inputMode="numeric"
                  maxLength={5}
                  aria-invalid={startError !== null}
                  aria-describedby={startError ? "start-time-error" : undefined}
                />
              </label>
            </div>

            <span className={arrow} aria-hidden>
              →
            </span>

            <div className={timeField}>
              <label
                className={[timeInputWrap, endError ? timeInputWrapInvalid : null]
                  .filter(Boolean)
                  .join(" ")}
                aria-label="종료 시간"
              >
                <input
                  className={timeInput}
                  type="text"
                  value={endTime}
                  onChange={(event) => setEndTimeFromInput(event.target.value)}
                  onBlur={handleEndBlur}
                  placeholder="00:00"
                  inputMode="numeric"
                  maxLength={5}
                  aria-invalid={endError !== null}
                  aria-describedby={endError ? "end-time-error" : undefined}
                />
              </label>
            </div>
          </div>

          {hasErrors ? (
            <div className={timeErrorsRow}>
              <div className={timeErrorSlot}>
                {startError ? (
                  <span id="start-time-error" className={fieldError} role="alert">
                    {startError}
                  </span>
                ) : null}
              </div>
              <span className={arrow} aria-hidden />
              <div className={timeErrorSlot}>
                {endError ? (
                  <span id="end-time-error" className={fieldError} role="alert">
                    {endError}
                  </span>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>

        <div className={totalTimeWrap} aria-label="총 시간">
          {isValid && totalTimeLabel ? (
            <strong className={totalTimeValue}>{totalTimeLabel}</strong>
          ) : (
            <span className={totalTimePlaceholder}>총 시간</span>
          )}
        </div>
      </div>
    </SectionCard>
  );
};
