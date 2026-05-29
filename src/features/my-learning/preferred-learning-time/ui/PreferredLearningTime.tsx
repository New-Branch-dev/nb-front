import Image from "next/image";

import { useReportStepValidity } from "@shared/hook/useReportStepValidity";
import { DatePicker, SectionCardStack } from "@shared/ui";

import { usePreferredLearningTime } from "../model/usePreferredLearningTime";
import {
  headerRow,
  iconButton,
  iconGroup,
  sectionRoot,
  title,
} from "./PreferredLearningTime.css";
import { TimeSetting } from "./TimeSetting";

type PreferredLearningTimeProps = {
  onValidityChange: (isValid: boolean) => void;
  isActive: boolean;
};

export const PreferredLearningTime = ({
  onValidityChange,
  isActive,
}: PreferredLearningTimeProps) => {
  const {
    restDate,
    isPreferredLearningTimeCompleted,
    setRestDate,
    setIsTimeValid,
    handleMoveMonth,
  } = usePreferredLearningTime();

  useReportStepValidity(
    isActive,
    isPreferredLearningTimeCompleted,
    onValidityChange,
  );

  return (
    <SectionCardStack>
      <TimeSetting onValidityChange={setIsTimeValid} />

      <section className={sectionRoot} aria-label="쉬는 날 설정">
        <div className={headerRow}>
          <h2 className={title}>쉬는 날 설정</h2>
          <div className={iconGroup}>
            <button
              type="button"
              className={iconButton}
              aria-label="이전 달"
              onClick={() => handleMoveMonth(-1)}
            >
              <Image src="/arrow-top.svg" alt="이전 달" width={15} height={5} />
            </button>
            <button
              type="button"
              className={iconButton}
              aria-label="다음 달"
              onClick={() => handleMoveMonth(1)}
            >
              <Image
                src="/arrow-bottom.svg"
                alt="다음 달"
                width={15}
                height={5}
              />
            </button>
          </div>
        </div>

        <DatePicker value={restDate} onChange={setRestDate} />
      </section>
    </SectionCardStack>
  );
};
