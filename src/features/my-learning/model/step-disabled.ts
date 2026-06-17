import type { FormState } from "@features/my-learning/model/store.types";

const hasText = (value: string) => value.trim().length > 0;
const hasSelection = (values: string[]) => values.length > 0;

const isProfileComplete = ({ profile }: FormState) =>
  hasText(profile.nickname) && hasText(profile.school);

const isLearningPatternComplete = ({ learningPattern }: FormState) =>
  hasSelection(learningPattern.interests) &&
  hasSelection(learningPattern.strengths) &&
  hasText(learningPattern.personality);

const isPreferredTimeComplete = ({ preferredTime }: FormState) =>
  hasSelection(preferredTime.restDates);

const isLearningPreferencesComplete = ({ learningPreferences }: FormState) =>
  hasSelection(learningPreferences.materialFormats) &&
  hasSelection(learningPreferences.classStyles) &&
  hasSelection(learningPreferences.learningMethods);

const isPreferredPartnerComplete = ({ preferredPartner }: FormState) =>
  hasSelection(preferredPartner.teacherTypes) &&
  hasSelection(preferredPartner.friendTypes) &&
  hasSelection(preferredPartner.userTypes);

const isAiAnalysisComplete = ({ aiAnalysis }: FormState) =>
  hasSelection(aiAnalysis.learningStyles) &&
  hasSelection(aiAnalysis.recommendedMethods);

const STEP_COMPLETION_RULES = [
  isProfileComplete,
  isLearningPatternComplete,
  isPreferredTimeComplete,
  isLearningPreferencesComplete,
  isPreferredPartnerComplete,
] as const;

export const isMyLearningStepComplete = (
  form: FormState,
  currentStep: number,
) => {
  if (currentStep === STEP_COMPLETION_RULES.length + 1) {
    return (
      STEP_COMPLETION_RULES.every((rule) => rule(form)) &&
      isAiAnalysisComplete(form)
    );
  }

  return STEP_COMPLETION_RULES[currentStep - 1]?.(form) ?? false;
};
