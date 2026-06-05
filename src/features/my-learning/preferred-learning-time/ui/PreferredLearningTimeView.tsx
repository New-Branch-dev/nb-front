import { DatePicker, SectionCardStack } from "@shared/ui";

import { sectionRoot, title } from "./PreferredLearningTime.css";
import { SelectedRestDates } from "./SelectedRestDates";
import { TimeSetting } from "./TimeSetting";

type PreferredLearningTimeViewProps = {
  startTime: string;
  endTime: string;
  totalTimeLabel: string | null;
  restDates: string[];
  selectedRestDates: Date[];
  onStartTimeChange: (value: string) => void;
  onEndTimeChange: (value: string) => void;
  onStartTimeBlur: () => void;
  onEndTimeBlur: () => void;
  onRestDatesChange: (dates: Date[]) => void;
  onRestDateRemove: (dateKey: string) => void;
};

export const PreferredLearningTimeView = ({
  startTime,
  endTime,
  totalTimeLabel,
  restDates,
  selectedRestDates,
  onStartTimeChange,
  onEndTimeChange,
  onStartTimeBlur,
  onEndTimeBlur,
  onRestDatesChange,
  onRestDateRemove,
}: PreferredLearningTimeViewProps) => {
  return (
    <SectionCardStack>
      <TimeSetting
        startTime={startTime}
        endTime={endTime}
        totalTimeLabel={totalTimeLabel}
        onStartTimeChange={onStartTimeChange}
        onEndTimeChange={onEndTimeChange}
        onStartTimeBlur={onStartTimeBlur}
        onEndTimeBlur={onEndTimeBlur}
      />

      <section className={sectionRoot} aria-label="쉬는 날 설정">
        <h2 className={title}>쉬는 날 설정</h2>
        <DatePicker
          values={selectedRestDates}
          onValuesChange={onRestDatesChange}
        />
        <SelectedRestDates
          dates={restDates}
          onRemove={onRestDateRemove}
        />
      </section>
    </SectionCardStack>
  );
};
