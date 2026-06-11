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
  noteCreation.uploadedFileList.length > 0;

const isGoalSettingComplete = ({ goalSetting }: LearningGoalsFormState) =>
  hasSelection(goalSetting.learningPurposes) &&
  hasText(goalSetting.targetScore) &&
  hasText(goalSetting.maxScore) &&
  hasPeriod(goalSetting) &&
  Object.values(goalSetting.weeklyStudyHours).some(hasText) &&
  hasSelection(goalSetting.learningMethods);

const isMemorizationComplete = ({
  memorization,
}: LearningGoalsFormState) =>
  hasPeriod(memorization) &&
  hasText(memorization.reviewCount) &&
  hasSelection(memorization.memorizationMethods);

const isRetrievalComplete = ({ retrieval }: LearningGoalsFormState) =>
  hasPeriod(retrieval) &&
  hasText(retrieval.reviewCount) &&
  hasSelection(retrieval.retrievalMethods);

const isOtherLearningComplete = ({
  otherLearning,
}: LearningGoalsFormState) =>
  hasPeriod(otherLearning) &&
  hasText(otherLearning.reviewCount) &&
  hasSelection(otherLearning.otherLearningMethods);

const STEP_COMPLETION_RULES = [
  isNoteCreationComplete,
  isGoalSettingComplete,
  isMemorizationComplete,
  isRetrievalComplete,
  isOtherLearningComplete,
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
