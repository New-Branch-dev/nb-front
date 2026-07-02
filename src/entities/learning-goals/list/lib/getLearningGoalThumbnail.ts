import type { LearningGoalColorTheme } from "@entities/learning-goals/list/model/learningGoal.types";

const THUMBNAIL_BY_THEME: Record<LearningGoalColorTheme, string> = {
  primary: "/learning-goals/title-icon-pupple.svg",
  blue: "/learning-goals/title-icon-skyblue.svg",
  orange: "/learning-goals/title-icon-orange.svg",
  green: "/learning-goals/title-icon-green.svg",
};

export const getLearningGoalThumbnail = (
  colorTheme: LearningGoalColorTheme,
): string => THUMBNAIL_BY_THEME[colorTheme];
