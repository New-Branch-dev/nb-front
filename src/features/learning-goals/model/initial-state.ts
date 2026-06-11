import type { LearningGoalsFormState } from "@features/learning-goals/model/store.types";

export const initialLearningGoalsState: LearningGoalsFormState = {
  noteCreation: {
    uploadedFileList: [],
  },
  goalSetting: {
    learningPurposes: [],
    targetScore: "",
    maxScore: "",
    startDate: "",
    endDate: "",
    weeklyStudyHours: {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    learningMethods: [],
  },
  memorization: {
    startDate: "",
    endDate: "",
    reviewCount: "",
    memorizationMethods: [],
  },
  retrieval: {
    startDate: "",
    endDate: "",
    reviewCount: "",
    retrievalMethods: [],
  },
  otherLearning: {
    startDate: "",
    endDate: "",
    reviewCount: "",
    otherLearningMethods: [],
  },
};
