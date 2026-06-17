"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { initialLearningGoalsState } from "@features/learning-goals/model/initial-state";
import type {
  LearningGoalsFormState,
  LearningGoalsStoreState,
  UploadedNoteFile,
} from "@features/learning-goals/model/store.types";

export const LEARNING_GOALS_STORAGE_KEY = "learning-goals-store";

const createUploadedFileKey = ({
  name,
  size,
  lastModified,
}: UploadedNoteFile): string => `${name}-${size}-${lastModified}`;

const convertUploadedFileForStorage = ({
  id,
  name,
  size,
  lastModified,
  sizeLabel,
  addedAtLabel,
}: UploadedNoteFile): UploadedNoteFile => ({
  id,
  name,
  size,
  lastModified,
  sizeLabel,
  addedAtLabel,
});

const pickLearningGoalsFormState = ({
  noteCreation,
  goalSetting,
  memorization,
  otherLearning,
  retrieval,
}: LearningGoalsStoreState): LearningGoalsFormState => ({
  noteCreation: {
    uploadedFileList: noteCreation.uploadedFileList.map(
      convertUploadedFileForStorage,
    ),
  },
  goalSetting,
  memorization,
  otherLearning,
  retrieval,
});

const mergePersistedLearningGoalsState = (
  persistedState: unknown,
  currentState: LearningGoalsStoreState,
): LearningGoalsStoreState => {
  const persistedFormState = persistedState as Partial<LearningGoalsFormState>;

  return {
    ...currentState,
    ...persistedFormState,
    noteCreation: {
      ...currentState.noteCreation,
      ...persistedFormState.noteCreation,
    },
  };
};

export const clearUploadedFilesFromLearningGoalsSession = () => {
  const storageValue = sessionStorage.getItem(LEARNING_GOALS_STORAGE_KEY);

  if (!storageValue) {
    return;
  }

  try {
    const parsedStorage = JSON.parse(storageValue) as {
      state?: Partial<LearningGoalsFormState>;
    };

    if (!parsedStorage.state?.noteCreation) {
      return;
    }

    parsedStorage.state.noteCreation.uploadedFileList = [];
    sessionStorage.setItem(
      LEARNING_GOALS_STORAGE_KEY,
      JSON.stringify(parsedStorage),
    );
  } catch {
    sessionStorage.removeItem(LEARNING_GOALS_STORAGE_KEY);
  }
};

export const useLearningGoalsStore = create<LearningGoalsStoreState>()(
  persist(
    (set) => ({
      ...initialLearningGoalsState,
      appendUploadedFiles: (uploadedFileList) =>
        set((state) => {
          const uploadedFileMap = new Map(
            state.noteCreation.uploadedFileList.map((file) => [
              createUploadedFileKey(file),
              file,
            ]),
          );
          const nextUploadedFileList = [...state.noteCreation.uploadedFileList];

          uploadedFileList.forEach((file) => {
            const fileKey = createUploadedFileKey(file);
            const existingFile = uploadedFileMap.get(fileKey);

            if (!existingFile) {
              uploadedFileMap.set(fileKey, file);
              nextUploadedFileList.push(file);
              return;
            }

            if (!existingFile.file) {
              const existingFileIndex = nextUploadedFileList.findIndex(
                (uploadedFile) => createUploadedFileKey(uploadedFile) === fileKey,
              );

              nextUploadedFileList[existingFileIndex] = {
                ...existingFile,
                file: file.file,
              };
            }
          });

          return {
            noteCreation: {
              ...state.noteCreation,
              uploadedFileList: nextUploadedFileList,
            },
          };
        }),
      deleteUploadedFile: (fileId) =>
        set((state) => ({
          noteCreation: {
            ...state.noteCreation,
            uploadedFileList: state.noteCreation.uploadedFileList.filter(
              (file) => file.id !== fileId,
            ),
          },
        })),
      deleteAllUploadedFiles: () =>
        set((state) => ({
          noteCreation: {
            ...state.noteCreation,
            uploadedFileList: [],
          },
        })),
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
      setMemorization: (memorization) =>
        set((state) => ({
          memorization: {
            ...state.memorization,
            ...memorization,
          },
        })),
      setRetrieval: (retrieval) =>
        set((state) => ({
          retrieval: {
            ...state.retrieval,
            ...retrieval,
          },
        })),
      setOtherLearning: (otherLearning) =>
        set((state) => ({
          otherLearning: {
            ...state.otherLearning,
            ...otherLearning,
          },
        })),
      resetLearningGoals: () => set(initialLearningGoalsState),
    }),
    {
      name: LEARNING_GOALS_STORAGE_KEY,
      storage: createJSONStorage(() => sessionStorage),
      partialize: pickLearningGoalsFormState,
      merge: mergePersistedLearningGoalsState,
    },
  ),
);
