import type { LearningGoalsFormState } from "@features/learning-goals/model/store.types";

const hasText = (value: string) => value.trim().length > 0;
const hasSelection = (values: string[]) => values.length > 0;
const hasPeriod = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) =>
  hasText(startDate) && hasText(endDate) && startDate <= endDate;

const isNoteCreationComplete = ({ noteCreation }: LearningGoalsFormState) =>
  noteCreation.uploadedFileList.length > 0 &&
  noteCreation.uploadedFileList.every((file) => Boolean(file.file));

const isGoalSettingComplete = ({ goalSetting }: LearningGoalsFormState) =>
  hasText(goalSetting.title) &&
  hasSelection(goalSetting.learningPurposes) &&
  hasText(goalSetting.targetScore) &&
  hasText(goalSetting.maxScore) &&
  hasPeriod(goalSetting) &&
  Object.values(goalSetting.weeklyStudyHours).some(hasText) &&
  hasSelection(goalSetting.learningMethods);

const STEP_COMPLETION_RULES = [
  isNoteCreationComplete,
  isGoalSettingComplete,
] as const;

export const isLearningGoalsStepComplete = (
  form: LearningGoalsFormState,
  currentStep: number,
) => {
  if (currentStep === STEP_COMPLETION_RULES.length + 1) {
    return STEP_COMPLETION_RULES.every((rule) => rule(form));
  }

  return STEP_COMPLETION_RULES[currentStep - 1]?.(form) ?? false;
};
