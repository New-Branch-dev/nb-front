import { DatePicker, SectionCardStack } from "@shared/ui";

import { sectionRoot, title } from "./preferred-learning-time.css";
import { SelectedRestDates } from "./selected-rest-dates";

type PreferredLearningTimeViewProps = {
  restDates: string[];
  selectedRestDates: Date[];
  onRestDatesChange: (dates: Date[]) => void;
  onRestDateRemove: (dateKey: string) => void;
};

export const PreferredLearningTimeView = ({
  restDates,
  selectedRestDates,
  onRestDatesChange,
  onRestDateRemove,
}: PreferredLearningTimeViewProps) => {
  return (
    <SectionCardStack>
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
