import type { FormState } from "@features/my-learning/model/store.types";

const hasText = (value: string) => value.trim().length > 0;
const hasSelection = (values: string[]) => values.length > 0;

const isProfileComplete = ({ profile }: FormState) =>
  hasText(profile.nickname) && hasText(profile.school);

const isLearningPatternComplete = ({ learningPattern }: FormState) =>
  hasSelection(learningPattern.interests) &&
  hasSelection(learningPattern.strengths) &&
  hasSelection(learningPattern.personality) &&
  hasSelection(learningPattern.learningTendencies);

const isLearningTypeComplete = ({ learningType }: FormState) =>
  hasSelection(learningType.materialFormats) &&
  hasSelection(learningType.classStyles) &&
  hasSelection(learningType.learningMethods);

const isPreferredPartnerComplete = ({ preferredPartner }: FormState) =>
  hasSelection(preferredPartner.teacherStyles) &&
  hasSelection(preferredPartner.teamMemberStyles);

const STEP_COMPLETION_RULES = [
  isProfileComplete,
  isLearningPatternComplete,
  isLearningTypeComplete,
  isPreferredPartnerComplete,
] as const;

export const isMyLearningStepComplete = (
  form: FormState,
  currentStep: number,
) => {
  if (currentStep === STEP_COMPLETION_RULES.length + 1) {
    return STEP_COMPLETION_RULES.every((rule) => rule(form));
  }

  return STEP_COMPLETION_RULES[currentStep - 1]?.(form) ?? false;
};
