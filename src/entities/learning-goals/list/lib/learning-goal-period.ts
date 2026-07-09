import type {
  LearningGoalItem,
  LearningGoalStatus,
} from "@entities/learning-goals/list/model/learningGoal.types";

const DAY_TIME = 24 * 60 * 60 * 1000;
const IMMINENT_DAY_COUNT = 7;

type LearningGoalPeriod = Pick<LearningGoalItem, "deadlineAt" | "startAt">;

const convertDateKeyToLocalTime = (dateKey: string) => {
  const [year, month, day] = dateKey.split("-").map(Number);

  if (!year || !month || !day) {
    return Number.NaN;
  }

  return new Date(year, month - 1, day).getTime();
};

const convertDateToLocalDateTime = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

const convertDiffTimeToDayCount = (diffTime: number) =>
  Math.ceil(diffTime / DAY_TIME);

const convertToSafeDayCount = (dayCount: number) =>
  Number.isFinite(dayCount) ? Math.max(dayCount, 0) : 0;

export const convertLearningGoalRemainingDayCount = (
  deadlineAt: string,
  currentDate = new Date(),
) => {
  const currentTime = convertDateToLocalDateTime(currentDate);
  const deadlineTime = convertDateKeyToLocalTime(deadlineAt);

  return convertToSafeDayCount(convertDiffTimeToDayCount(deadlineTime - currentTime));
};

export const convertLearningGoalTotalDayCount = ({
  deadlineAt,
  startAt,
}: LearningGoalPeriod) => {
  const startTime = convertDateKeyToLocalTime(startAt);
  const deadlineTime = convertDateKeyToLocalTime(deadlineAt);

  return convertToSafeDayCount(convertDiffTimeToDayCount(deadlineTime - startTime));
};

export const convertLearningGoalStatus = (
  period: LearningGoalPeriod,
  currentDate = new Date(),
): LearningGoalStatus => {
  const currentTime = convertDateToLocalDateTime(currentDate);
  const startTime = convertDateKeyToLocalTime(period.startAt);

  if (currentTime < startTime) {
    return "notStarted";
  }

  const remainingDayCount = convertLearningGoalRemainingDayCount(
    period.deadlineAt,
    currentDate,
  );

  if (remainingDayCount <= 0) {
    return "completed";
  }

  if (remainingDayCount <= IMMINENT_DAY_COUNT) {
    return "imminent";
  }

  return "inProgress";
};
