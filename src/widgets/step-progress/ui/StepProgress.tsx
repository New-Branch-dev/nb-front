import {
  currentItemText,
  itemCountLabel,
  itemTitle,
  progressFill,
  progressItem,
  progressList,
  progressRail,
} from "./StepProgress.css";

type StepProgressItem = {
  title: string;
};

type StepProgressProps = {
  items: StepProgressItem[];
  currentStep: number;
};

export const StepProgress = ({ items, currentStep }: StepProgressProps) => {
  const safeStep = Math.min(Math.max(currentStep, 1), items.length);
  const progressRate = items.length <= 0 ? 0 : (safeStep / items.length) * 100;

  return (
    <section aria-label="학습 진행도">
      <div className={progressRail} aria-hidden>
        <div className={progressFill} style={{ width: `${progressRate}%` }} />
      </div>

      <ol className={progressList}>
        {items.map((item, index) => {
          const step = index + 1;
          const isCurrentStep = step === safeStep;
          const isVisibleStep = step <= safeStep;

          return (
            <li
              key={`${item.title}-${step}`}
              className={progressItem}
              style={{
                left: `${((index + 0.5) / items.length) * 100}%`,
                visibility: isVisibleStep ? "visible" : "hidden",
              }}
            >
              <span
                className={[
                  itemCountLabel,
                  isCurrentStep ? currentItemText : "",
                ]
                  .join(" ")
                  .trim()}
              >
                {step}단계
              </span>
              <strong
                className={[itemTitle, isCurrentStep ? currentItemText : ""]
                  .join(" ")
                  .trim()}
              >
                {item.title}
              </strong>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
