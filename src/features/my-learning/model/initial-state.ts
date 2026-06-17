import type { FormState } from "@features/my-learning/model/store.types";

export const initialMyLearningState: FormState = {
  profile: {
    nickname: "",
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
