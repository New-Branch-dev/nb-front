export type UploadedNoteFile = {
  id: string;
  name: string;
  size: number;
  lastModified: number;
  sizeLabel: string;
  file?: File;
};

export type NoteCreationState = {
  uploadedFileList: UploadedNoteFile[];
};

export type WeeklyStudyHours = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
};

export type WeeklyStudyHourField = keyof WeeklyStudyHours;

export type GoalSettingState = {
  learningPurposes: string[];
  targetScore: string;
  maxScore: string;
  startDate: string;
  endDate: string;
  weeklyStudyHours: WeeklyStudyHours;
  learningMethods: string[];
};

export type MemorizationState = {
  startDate: string;
  endDate: string;
  reviewCount: string;
  memorizationMethods: string[];
};

export type RetrievalState = {
  startDate: string;
  endDate: string;
  reviewCount: string;
  retrievalMethods: string[];
};

export type OtherLearningState = {
  startDate: string;
  endDate: string;
  reviewCount: string;
  otherLearningMethods: string[];
};

export type LearningGoalsFormState = {
  noteCreation: NoteCreationState;
  goalSetting: GoalSettingState;
  memorization: MemorizationState;
  retrieval: RetrievalState;
  otherLearning: OtherLearningState;
};

export type LearningGoalsStoreState = LearningGoalsFormState & {
  appendUploadedFiles: (uploadedFileList: UploadedNoteFile[]) => void;
  deleteUploadedFile: (fileId: string) => void;
  deleteAllUploadedFiles: () => void;
  setGoalSetting: (goalSetting: Partial<GoalSettingState>) => void;
  setWeeklyStudyHour: (
    field: WeeklyStudyHourField,
    value: WeeklyStudyHours[WeeklyStudyHourField],
  ) => void;
  setMemorization: (memorization: Partial<MemorizationState>) => void;
  setRetrieval: (retrieval: Partial<RetrievalState>) => void;
  setOtherLearning: (otherLearning: Partial<OtherLearningState>) => void;
  resetLearningGoals: () => void;
};
