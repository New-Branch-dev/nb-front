import Image from "next/image";

import {
  headerRoot,
  monthTitle,
  monthTitleWithNav,
  navButton,
} from "./CalendarMonthHeader.css";

type CalendarMonthHeaderBaseProps = {
  date: Date;
};

type CalendarMonthHeaderWithNavProps = CalendarMonthHeaderBaseProps & {
  showNavigation: true;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  isPreviousDisabled?: boolean;
  isNextDisabled?: boolean;
};

type CalendarMonthHeaderTitleOnlyProps = CalendarMonthHeaderBaseProps & {
  showNavigation?: false;
};

export type CalendarMonthHeaderProps =
  | CalendarMonthHeaderWithNavProps
  | CalendarMonthHeaderTitleOnlyProps;

const formatMonthLabel = (date: Date) =>
  `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

export const CalendarMonthHeader = (props: CalendarMonthHeaderProps) => {
  const { date } = props;
  const label = formatMonthLabel(date);

  if (!props.showNavigation) {
    return (
      <div className="react-datepicker__header react-datepicker__header--custom">
        <h3 className={monthTitle}>{label}</h3>
      </div>
    );
  }

  const {
    onPreviousMonth,
    onNextMonth,
    isPreviousDisabled = false,
    isNextDisabled = false,
  } = props;

  return (
    <div className="react-datepicker__header react-datepicker__header--custom">
      <div className={headerRoot}>
        <button
          type="button"
          className={navButton}
          aria-label="이전 달"
          disabled={isPreviousDisabled}
          onClick={onPreviousMonth}
        >
          <Image
            src="/slider-arrow-left.svg"
            alt=""
            width={24}
            height={24}
            aria-hidden
          />
        </button>

        <h3 className={[monthTitle, monthTitleWithNav].join(" ")}>{label}</h3>

        <button
          type="button"
          className={navButton}
          aria-label="다음 달"
          disabled={isNextDisabled}
          onClick={onNextMonth}
        >
          <Image
            src="/slider-arrow-right.svg"
            alt=""
            width={24}
            height={24}
            aria-hidden
          />
        </button>
      </div>
    </div>
  );
};
