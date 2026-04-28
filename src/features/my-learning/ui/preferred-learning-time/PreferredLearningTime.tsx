import Image from "next/image";
import { useEffect, useState } from "react";

import { DatePicker } from "@shared/ui";

import {
  headerRow,
  iconButton,
  iconGroup,
  sectionRoot,
  title,
} from "./PreferredLearningTime.css";

type PreferredLearningTimeProps = {
  onValidityChange: (isValid: boolean) => void;
};

export const PreferredLearningTime = ({
  onValidityChange,
}: PreferredLearningTimeProps) => {
  const [restDate, setRestDate] = useState<Date | null>(new Date());

  const handleMoveMonth = (offset: number) => {
    setRestDate((prev) => {
      const baseDate = prev ?? new Date();
      return new Date(
        baseDate.getFullYear(),
        baseDate.getMonth() + offset,
        baseDate.getDate(),
      );
    });
  };

  useEffect(() => {
    onValidityChange(Boolean(restDate));
  }, [onValidityChange, restDate]);

  return (
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
  );
};
