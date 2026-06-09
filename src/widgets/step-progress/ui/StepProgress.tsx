import { Icon } from "@shared/ui/icon";

import {
  clampStep,
  getStepStatus,
  getTrackFillPercent,
  getTrackInsetPercent,
} from "../lib/stepProgress.utils";
import {
  checkIcon,
  labelColumn,
  labelsList,
  nodeColumn,
  nodesList,
  progressRow,
  root,
  stepCircle,
  stepCirclePrimary,
  stepCountLabel,
  stepCountLabelReached,
  stepNumber,
  stepNumberCurrent,
  stepTitle,
  stepTitleReached,
  trackBackground,
  trackFill,
  trackWrap,
} from "./StepProgress.css";

type StepProgressItem = {
  title: string;
};

type StepProgressProps = {
  items: readonly StepProgressItem[];
  currentStep: number;
};

export const StepProgress = ({ items, currentStep }: StepProgressProps) => {
  const totalSteps = items.length;
  const safeStep = clampStep(currentStep, totalSteps);
  const trackInsetPercent = getTrackInsetPercent(totalSteps);
  const trackFillPercent = getTrackFillPercent(safeStep, totalSteps);

  return (
    <section className={root} aria-label="학습 진행도">
      <div className={progressRow}>
        <div
          className={trackWrap}
          style={{
            left: `${trackInsetPercent}%`,
            right: `${trackInsetPercent}%`,
          }}
          aria-hidden
        >
          <div className={trackBackground} />
          <div
            className={trackFill}
            style={{
              width: `${trackFillPercent}%`,
            }}
          />
        </div>

        <ol className={nodesList}>
          {items.map((item, index) => {
            const step = index + 1;
            const status = getStepStatus(step, safeStep);
            const isReached = step <= safeStep;

            return (
              <li key={`${item.title}-${step}-node`} className={nodeColumn}>
                <span
                  className={
                    isReached ? stepCirclePrimary : stepCircle({ status: "upcoming" })
                  }
                  aria-current={status === "current" ? "step" : undefined}
                >
                  {status === "completed" ? (
                    <Icon
                      className={checkIcon}
                      src="/check-white.svg"
                      size="sm"
                      aria-hidden
                    />
                  ) : null}
                  {status === "current" ? (
                    <span className={stepNumberCurrent}>{step}</span>
                  ) : null}
                  {status === "upcoming" ? (
                    <span className={stepNumber({ status: "upcoming" })}>
                      {step}
                    </span>
                  ) : null}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <ol className={labelsList}>
        {items.map((item, index) => {
          const step = index + 1;
          const isReached = step <= safeStep;

          return (
            <li key={`${item.title}-${step}-label`} className={labelColumn}>
              {isReached ? (
                <>
                  <span className={stepCountLabelReached}>{step}단계</span>
                  <strong className={stepTitleReached}>{item.title}</strong>
                </>
              ) : (
                <>
                  <span className={stepCountLabel({ status: "upcoming" })}>
                    {step}단계
                  </span>
                  <strong className={stepTitle({ status: "upcoming" })}>
                    {item.title}
                  </strong>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
};
