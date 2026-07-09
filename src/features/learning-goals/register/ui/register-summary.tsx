"use client";

import { useShallow } from "zustand/react/shallow";

import type {
  WeeklyStudyHourField,
  WeeklyStudyHours,
} from "@features/learning-goals/model/store.types";
import { useLearningGoalsStore } from "@features/learning-goals/model/use-learning-goals-store";
import { convertNoteIconSrc } from "@features/learning-goals/register/lib/convert-note-icon-src";
import { RegisterSummaryView } from "@features/learning-goals/register/ui/register-summary-view";

const WEEKDAY_LABELS: Record<keyof WeeklyStudyHours, string> = {
  monday: "월",
  tuesday: "화",
  wednesday: "수",
  thursday: "목",
  friday: "금",
  saturday: "토",
  sunday: "일",
};

const WEEKDAY_FIELDS_BY_UTC_DAY: WeeklyStudyHourField[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const convertDateKeyToTime = (dateKey: string) => {
  const [year, month, day] = dateKey.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return Date.UTC(year, month - 1, day);
};

const convertDateKeyToDotLabel = (dateKey: string) => dateKey.replaceAll("-", ".");

const convertDateKeyToKoreanLabel = (dateKey: string) => {
  const [year, month, day] = dateKey.split("-");

  if (!year || !month || !day) {
    return "";
  }

  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
};

const convertPeriodDayCount = (startDate: string, endDate: string) => {
  const startTime = convertDateKeyToTime(startDate);
  const endTime = convertDateKeyToTime(endDate);

  if (startTime === null || endTime === null || startTime > endTime) {
    return 0;
  }

  return Math.floor((endTime - startTime) / 86_400_000) + 1;
};

const convertStudyDayCount = ({
  startDate,
  endDate,
  excludedDateList,
  weeklyStudyHours,
}: {
  startDate: string;
  endDate: string;
  excludedDateList: string[];
  weeklyStudyHours: WeeklyStudyHours;
}) => {
  const startTime = convertDateKeyToTime(startDate);
  const endTime = convertDateKeyToTime(endDate);

  if (startTime === null || endTime === null || startTime > endTime) {
    return 0;
  }

  const excludedTimeSet = new Set(
    excludedDateList.flatMap((dateKey) => {
      const time = convertDateKeyToTime(dateKey);

      return time === null ? [] : [time];
    }),
  );
  let studyDayCount = 0;

  for (
    let currentTime = startTime;
    currentTime <= endTime;
    currentTime += 86_400_000
  ) {
    const weekdayField =
      WEEKDAY_FIELDS_BY_UTC_DAY[new Date(currentTime).getUTCDay()];
    const hasStudyHour = weeklyStudyHours[weekdayField].length > 0;
    const isExcludedDate = excludedTimeSet.has(currentTime);

    if (hasStudyHour && !isExcludedDate) {
      studyDayCount += 1;
    }
  }

  return studyDayCount;
};

const convertWeeklyStudyHourList = (weeklyStudyHours: WeeklyStudyHours) =>
  Object.entries(weeklyStudyHours).map(([field, hour]) => ({
    field: field as WeeklyStudyHourField,
    label: WEEKDAY_LABELS[field as keyof WeeklyStudyHours],
    hour: hour || "0",
    hasHour: hour.length > 0,
  }));

const convertExcludedWeekdayFieldSet = (excludedDateList: string[]) =>
  new Set(
    excludedDateList.flatMap((dateKey) => {
      const time = convertDateKeyToTime(dateKey);

      if (time === null) {
        return [];
      }

      return [WEEKDAY_FIELDS_BY_UTC_DAY[new Date(time).getUTCDay()]];
    }),
  );

export const RegisterSummary = () => {
  const { goalSetting, noteCreation } = useLearningGoalsStore(
    useShallow((state) => ({
      noteCreation: state.noteCreation,
      goalSetting: state.goalSetting,
    })),
  );
  const totalPeriodDayCount = convertPeriodDayCount(
    goalSetting.startDate,
    goalSetting.endDate,
  );
  const studyDayCount = convertStudyDayCount({
    startDate: goalSetting.startDate,
    endDate: goalSetting.endDate,
    excludedDateList: goalSetting.excludedDateList,
    weeklyStudyHours: goalSetting.weeklyStudyHours,
  });
  const excludedWeekdayFieldSet = convertExcludedWeekdayFieldSet(
    goalSetting.excludedDateList,
  );
  const directText = noteCreation.directText.trim();
  const noteList = [
    ...noteCreation.uploadedFileList.map((file) => ({
      id: file.id,
      name: file.name,
      iconSrc: convertNoteIconSrc(file.name),
      sizeLabel: file.sizeLabel,
    })),
    ...(directText
      ? [
          {
            id: "direct-text",
            name: directText,
            iconSrc: convertNoteIconSrc("direct.text"),
            sizeLabel: "텍스트",
          },
        ]
      : []),
  ];

  return (
    <RegisterSummaryView
      noteList={noteList}
      summary={{
        title: goalSetting.title,
        learningPurposes: goalSetting.learningPurposes,
        targetScore: goalSetting.targetScore,
        maxScore: goalSetting.maxScore,
        startDateLabel: convertDateKeyToDotLabel(goalSetting.startDate),
        endDateLabel: convertDateKeyToDotLabel(goalSetting.endDate),
        excludedDateLabelList: goalSetting.excludedDateList.map(
          convertDateKeyToKoreanLabel,
        ),
        weeklyStudyHourList: convertWeeklyStudyHourList(
          goalSetting.weeklyStudyHours,
        ).map((weeklyStudyHour) => ({
          ...weeklyStudyHour,
          isExcludedWeekday:
            weeklyStudyHour.hasHour &&
            excludedWeekdayFieldSet.has(weeklyStudyHour.field),
        })),
        learningMethods: goalSetting.learningMethods,
        totalPeriodDayCount,
        studyDayCount,
        excludedDateCount: goalSetting.excludedDateList.length,
        learningMethodCount: goalSetting.learningMethods.length,
        noteCount: noteList.length,
      }}
    />
  );
};
