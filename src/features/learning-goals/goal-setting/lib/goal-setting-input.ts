const MAX_SCORE = 100;
const MAX_WEEKLY_STUDY_HOUR = 19;

export const convertScoreInput = (value: string): string => {
  const numericValue = value.replace(/\D/g, "").slice(0, 3);

  if (numericValue === "") {
    return "";
  }

  return String(Math.min(Number(numericValue), MAX_SCORE));
};

export const convertWeeklyStudyHourInput = (value: string): string => {
  const numericValue = value.replace(/\D/g, "").slice(0, 2);

  if (numericValue === "") {
    return "";
  }

  return String(Math.min(Number(numericValue), MAX_WEEKLY_STUDY_HOUR));
};
