"use client";

import { useShallow } from "zustand/react/shallow";

import {
  convertDateKeyToDate,
  convertDateToDateKey,
} from "@shared/lib/date";

import {
  convertScoreInput,
  convertWeeklyStudyHourInput,
} from "@features/learning-goals/goal-setting/lib/goal-setting-input";
import { GoalSettingView } from "@features/learning-goals/goal-setting/ui/goal-setting-view";
import type { WeeklyStudyHourField } from "@features/learning-goals/model/store.types";
import { useLearningGoalsStore } from "@features/learning-goals/model/use-learning-goals-store";

export const GoalSetting = () => {
  const { goalSetting, setGoalSetting, setWeeklyStudyHour } =
    useLearningGoalsStore(
      useShallow((state) => ({
        goalSetting: state.goalSetting,
        setGoalSetting: state.setGoalSetting,
        setWeeklyStudyHour: state.setWeeklyStudyHour,
      })),
    );

  const handleTitleChange = (value: string) => {
    setGoalSetting({ title: value });
  };

  const handleLearningPurposesChange = (items: string[]) => {
    setGoalSetting({ learningPurposes: items });
  };

  const handleTargetScoreChange = (value: string) => {
    setGoalSetting({ targetScore: convertScoreInput(value) });
  };

  const handleMaxScoreChange = (value: string) => {
    setGoalSetting({ maxScore: convertScoreInput(value) });
  };

  const handleStartDateChange = (date: Date) => {
    setGoalSetting({ startDate: convertDateToDateKey(date) });
  };

  const handleEndDateChange = (date: Date) => {
    setGoalSetting({ endDate: convertDateToDateKey(date) });
  };

  const handleExcludedDateListChange = (dateKeyList: string[]) => {
    setGoalSetting({ excludedDateList: dateKeyList });
  };

  const handleWeeklyStudyHourChange = (
    field: WeeklyStudyHourField,
    value: string,
  ) => {
    setWeeklyStudyHour(field, convertWeeklyStudyHourInput(value));
  };

  const handleLearningMethodsChange = (items: string[]) => {
    setGoalSetting({ learningMethods: items });
  };

  return (
    <GoalSettingView
      title={goalSetting.title}
      learningPurposes={goalSetting.learningPurposes}
      targetScore={goalSetting.targetScore}
      maxScore={goalSetting.maxScore}
      startDate={convertDateKeyToDate(goalSetting.startDate)}
      endDate={convertDateKeyToDate(goalSetting.endDate)}
      excludedDateList={goalSetting.excludedDateList}
      weeklyStudyHours={goalSetting.weeklyStudyHours}
      learningMethods={goalSetting.learningMethods}
      onTitleChange={handleTitleChange}
      onLearningPurposesChange={handleLearningPurposesChange}
      onTargetScoreChange={handleTargetScoreChange}
      onMaxScoreChange={handleMaxScoreChange}
      onStartDateChange={handleStartDateChange}
      onEndDateChange={handleEndDateChange}
      onExcludedDateListChange={handleExcludedDateListChange}
      onWeeklyStudyHourChange={handleWeeklyStudyHourChange}
      onLearningMethodsChange={handleLearningMethodsChange}
    />
  );
};
