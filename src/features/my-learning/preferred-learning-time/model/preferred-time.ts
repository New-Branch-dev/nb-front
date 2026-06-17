export {
  convertDateKeyToDate,
  convertDateToDateKey,
} from "@shared/lib/date";

export const convertDateKeyToRestDateLabel = (dateKey: string) => {
  const [year, month, day] = dateKey.split("-").map(Number);

  return `${String(year).slice(2)}년 ${month}월 ${day}일`;
};

export const convertDateKeyToShortRestDateLabel = (dateKey: string) => {
  const [, month, day] = dateKey.split("-").map(Number);

  return `${month}월 ${day}일`;
};
