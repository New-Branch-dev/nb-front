export type ProfileState = {
  nickname: string;
  age: number | null;
  school: string;
};

export type PatternState = {
  interests: string[];
  strengths: string[];
  personality: string;
};

export type PreferredTimeState = {
  restDates: string[];
};

export type PreferencesState = {
  materialFormats: string[];
  classStyles: string[];
  learningMethods: string[];
};

export type PreferredPartnerState = {
  teacherTypes: string[];
  friendTypes: string[];
  userTypes: string[];
};

export type AiAnalysisState = {
  learningStyles: string[];
  recommendedMethods: string[];
};

export type FormState = {
  profile: ProfileState;
  learningPattern: PatternState;
  preferredTime: PreferredTimeState;
  learningPreferences: PreferencesState;
  preferredPartner: PreferredPartnerState;
  aiAnalysis: AiAnalysisState;
};

export type StoreState = FormState & {
  setProfile: (profile: Partial<ProfileState>) => void;
  setProfileField: <Field extends keyof ProfileState>(
    field: Field,
    value: ProfileState[Field],
  ) => void;
  setLearningPattern: (learningPattern: Partial<PatternState>) => void;
  setPreferredTime: (preferredTime: Partial<PreferredTimeState>) => void;
  setLearningPreferences: (
    learningPreferences: Partial<PreferencesState>,
  ) => void;
  setPreferredPartner: (
    preferredPartner: Partial<PreferredPartnerState>,
  ) => void;
  setAiAnalysis: (aiAnalysis: Partial<AiAnalysisState>) => void;
  resetMyLearning: () => void;
};
