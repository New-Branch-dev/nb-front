"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { initialLearningGoalsState } from "@features/learning-goals/model/initial-state";
import type {
  LearningGoalsFormState,
  LearningGoalsStoreState,
} from "@features/learning-goals/model/store.types";

export const LEARNING_GOALS_STORAGE_KEY = "learning-goals-store";

const convertUploadedFileForStorage = ({
  id,
  attachmentId,
  name,
  size,
  lastModified,
  sizeLabel,
  fileUrl,
  content,
}: LearningGoalsFormState["noteCreation"]["uploadedFileList"][number]) => ({
  id,
  attachmentId,
  name,
  size,
  lastModified,
  sizeLabel,
  fileUrl,
  content,
});

const pickLearningGoalsFormState = ({
  noteCreation,
  goalSetting,
}: LearningGoalsStoreState): LearningGoalsFormState => ({
  noteCreation: {
    ...noteCreation,
    uploadedFileList: noteCreation.uploadedFileList.map(
      convertUploadedFileForStorage,
    ),
  },
  goalSetting,
});

const mergePersistedLearningGoalsState = (
  persistedState: unknown,
  currentState: LearningGoalsStoreState,
): LearningGoalsStoreState => {
  const persistedFormState = persistedState as Partial<LearningGoalsFormState>;
  const persistedUploadedFileList =
    persistedFormState.noteCreation?.uploadedFileList ?? [];
  const validUploadedFileList = persistedUploadedFileList.filter(
    (file) =>
      Number.isInteger(file.attachmentId) && Number(file.attachmentId) > 0,
  );

  return {
    ...currentState,
    noteCreation: {
      ...currentState.noteCreation,
      ...persistedFormState.noteCreation,
      uploadedFileList: validUploadedFileList,
    },
    goalSetting: {
      ...currentState.goalSetting,
      ...persistedFormState.goalSetting,
      weeklyStudyHours: {
        ...currentState.goalSetting.weeklyStudyHours,
        ...persistedFormState.goalSetting?.weeklyStudyHours,
      },
    },
  };
};

export const useLearningGoalsStore = create<LearningGoalsStoreState>()(
  persist(
    (set) => ({
      ...initialLearningGoalsState,
      isUploadingAttachments: false,
      appendUploadedFiles: (uploadedFileList) =>
        set((state) => {
          const uploadedFileIdSet = new Set(
            state.noteCreation.uploadedFileList.map(({ id }) => id),
          );
          const nextUploadedFileList = uploadedFileList.filter(
            ({ id }) => !uploadedFileIdSet.has(id),
          );

          return {
            noteCreation: {
              ...state.noteCreation,
              uploadedFileList: [
                ...state.noteCreation.uploadedFileList,
                ...nextUploadedFileList,
              ],
            },
          };
        }),
      setUploadedFileList: (uploadedFileList) =>
        set((state) => ({
          noteCreation: {
            ...state.noteCreation,
            uploadedFileList,
          },
        })),
      deleteUploadedFile: (fileId) =>
        set((state) => ({
          noteCreation: {
            ...state.noteCreation,
            uploadedFileList: state.noteCreation.uploadedFileList.filter(
              (file) => file.id !== fileId,
            ),
          },
        })),
      deleteUploadedFileList: (fileIdList) =>
        set((state) => {
          const fileIdSet = new Set(fileIdList);

          return {
            noteCreation: {
              ...state.noteCreation,
              uploadedFileList: state.noteCreation.uploadedFileList.filter(
                (file) => !fileIdSet.has(file.id),
              ),
            },
          };
        }),
      setNoteDirectText: (directText) =>
        set((state) => ({
          noteCreation: {
            ...state.noteCreation,
            directText,
          },
        })),
      setDirectTextAttachment: (attachmentId, savedDirectText) =>
        set((state) => ({
          noteCreation: {
            ...state.noteCreation,
            directTextAttachmentId: attachmentId,
            savedDirectText,
          },
        })),
      setIsUploadingAttachments: (isUploadingAttachments) =>
        set({ isUploadingAttachments }),
      setGoalSetting: (goalSetting) =>
        set((state) => ({
          goalSetting: {
            ...state.goalSetting,
            ...goalSetting,
          },
        })),
      setWeeklyStudyHour: (field, value) =>
        set((state) => ({
          goalSetting: {
            ...state.goalSetting,
            weeklyStudyHours: {
              ...state.goalSetting.weeklyStudyHours,
              [field]: value,
            },
          },
        })),
      resetLearningGoals: () =>
        set({
          ...initialLearningGoalsState,
          isUploadingAttachments: false,
        }),
    }),
    {
      name: LEARNING_GOALS_STORAGE_KEY,
      storage: createJSONStorage(() => sessionStorage),
      partialize: pickLearningGoalsFormState,
      merge: mergePersistedLearningGoalsState,
    },
  ),
);
