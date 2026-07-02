import type { FormState } from "@features/my-learning/model/store.types";

export const initialMyLearningState: FormState = {
  profile: {
    nickname: "",
    school: "",
  },

  learningPattern: {
    interests: [],
    strengths: [],
    personality: [],
    learningTendencies: [],
  },

  learningType: {
    materialFormats: [],
    classStyles: [],
    learningMethods: [],
  },

  preferredPartner: {
    teacherStyles: [],
    teamMemberStyles: [],
  },

  aiAnalysis: {
    learningStyles: [],
    recommendedMethods: [],
  },
};
