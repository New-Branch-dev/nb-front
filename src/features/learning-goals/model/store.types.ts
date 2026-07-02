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
  title: string;
  learningPurposes: string[];
  targetScore: string;
  maxScore: string;
  startDate: string;
  endDate: string;
  excludedDateList: string[];
  weeklyStudyHours: WeeklyStudyHours;
  learningMethods: string[];
};

export type LearningGoalsFormState = {
  noteCreation: NoteCreationState;
  goalSetting: GoalSettingState;
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
  resetLearningGoals: () => void;
};
