import type { LearningGoalsFormState } from "@features/learning-goals/model/store.types";

export const initialLearningGoalsState: LearningGoalsFormState = {
  noteCreation: {
    uploadedFileList: [],
  },
  goalSetting: {
    title: "",
    learningPurposes: [],
    targetScore: "",
    maxScore: "",
    startDate: "",
    endDate: "",
    excludedDateList: [],
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
};
