export type ProfileState = {
  nickname: string;
  school: string;
};

export type PatternState = {
  interests: string[];
  strengths: string[];
  personality: string[];
  learningTendencies: string[];
};

export type LearningTypeState = {
  materialFormats: string[];
  classStyles: string[];
  learningMethods: string[];
};

export type PreferredPartnerState = {
  teacherStyles: string[];
  teamMemberStyles: string[];
};

export type FormState = {
  profile: ProfileState;
  learningPattern: PatternState;
  learningType: LearningTypeState;
  preferredPartner: PreferredPartnerState;
};

export type StoreState = FormState & {
  setProfile: (profile: Partial<ProfileState>) => void;
  setProfileField: <Field extends keyof ProfileState>(
    field: Field,
    value: ProfileState[Field],
  ) => void;
  setLearningPattern: (learningPattern: Partial<PatternState>) => void;
  setLearningType: (learningType: Partial<LearningTypeState>) => void;
  setPreferredPartner: (
    preferredPartner: Partial<PreferredPartnerState>,
  ) => void;
  resetMyLearning: () => void;
};
