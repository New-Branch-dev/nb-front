export type UploadedNoteFile = {
  id: string;
  attachmentId: number | null;
  name: string;
  size: number;
  lastModified: number;
  sizeLabel: string;
  file?: File;
  fileUrl?: string;
  content?: string;
};

export type NoteCreationState = {
  uploadedFileList: UploadedNoteFile[];
  directText: string;
  directTextAttachmentId: number | null;
  savedDirectText: string;
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
  isUploadingAttachments: boolean;
  appendUploadedFiles: (uploadedFileList: UploadedNoteFile[]) => void;
  setUploadedFileList: (uploadedFileList: UploadedNoteFile[]) => void;
  deleteUploadedFile: (fileId: string) => void;
  deleteUploadedFileList: (fileIdList: string[]) => void;
  setNoteDirectText: (directText: string) => void;
  setDirectTextAttachment: (
    attachmentId: number | null,
    savedDirectText: string,
  ) => void;
  setIsUploadingAttachments: (isUploadingAttachments: boolean) => void;
  setGoalSetting: (goalSetting: Partial<GoalSettingState>) => void;
  setWeeklyStudyHour: (
    field: WeeklyStudyHourField,
    value: WeeklyStudyHours[WeeklyStudyHourField],
  ) => void;
  resetLearningGoals: () => void;
};
