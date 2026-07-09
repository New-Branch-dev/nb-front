import {
  headerRoot,
  monthTitle,
  monthTitleWithNav,
  navButton,
} from "@shared/ui/date-picker/CalendarMonthHeader.css";
import { Icon } from "@shared/ui/icon";

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
          <Icon
            src="/slider-arrow-left.svg"
            size="md"
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
          <Icon
            src="/slider-arrow-right.svg"
            size="md"
            aria-hidden
          />
        </button>
      </div>
    </div>
  );
};
