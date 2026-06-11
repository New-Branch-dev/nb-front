import type { FormState } from "./store.types";

export const initialMyLearningState: FormState = {
  profile: {
    nickname: "",
    age: null,
    school: "",
  },

  learningPattern: {
    interests: [],
    strengths: [],
    personality: "",
  },

  preferredTime: {
    restDates: [],
  },

  learningPreferences: {
    materialFormats: [],
    classStyles: [],
    learningMethods: [],
  },

  preferredPartner: {
    teacherTypes: [],
    friendTypes: [],
    userTypes: [],
  },

  aiAnalysis: {
    learningStyles: [],
    recommendedMethods: [],
  },
};
