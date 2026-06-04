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
  startTime: string;
  endTime: string;
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

export type FormState = {
  profile: ProfileState;
  learningPattern: PatternState;
  preferredTime: PreferredTimeState;
  learningPreferences: PreferencesState;
  preferredPartner: PreferredPartnerState;
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
  resetMyLearning: () => void;
};
