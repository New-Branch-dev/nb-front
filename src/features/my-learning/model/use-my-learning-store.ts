"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { initialMyLearningState } from "@features/my-learning/model/initial-state";
import type {
  FormState,
  PatternState,
  StoreState,
} from "@features/my-learning/model/store.types";

export const MY_LEARNING_STORAGE_KEY = "my-learning-store";

const pickMyLearningFormState = ({
  profile,
  learningPattern,
  learningType,
  preferredPartner,
  aiAnalysis,
}: StoreState): FormState => ({
  profile,
  learningPattern,
  learningType,
  preferredPartner,
  aiAnalysis,
});

type PersistedPatternState = Partial<Omit<PatternState, "personality">> & {
  personality?: string[] | string;
};

type PersistedFormState = Partial<
  Omit<FormState, "learningType" | "learningPattern">
> & {
  learningPattern?: PersistedPatternState;
  learningType?: Partial<FormState["learningType"]>;
  learningPreferences?: Partial<FormState["learningType"]>;
  preferredPartner?: Partial<FormState["preferredPartner"]> & {
    teacherTypes?: string[];
    friendTypes?: string[];
  };
};

const convertStringList = (value: unknown) => {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }

  if (typeof value === "string" && value.trim().length > 0) {
    return [value];
  }

  return [];
};

const mergePersistedMyLearningState = (
  persistedState: unknown,
  currentState: StoreState,
): StoreState => {
  const persistedFormState =
    typeof persistedState === "object" && persistedState !== null
      ? (persistedState as PersistedFormState)
      : {};
  const persistedLearningPattern = persistedFormState.learningPattern;
  const persistedLearningType =
    persistedFormState.learningType ?? persistedFormState.learningPreferences;

  return {
    ...currentState,
    profile: {
      ...currentState.profile,
      ...persistedFormState.profile,
    },
    learningPattern: {
      ...currentState.learningPattern,
      ...persistedLearningPattern,
      interests: convertStringList(persistedLearningPattern?.interests),
      strengths: convertStringList(persistedLearningPattern?.strengths),
      personality: convertStringList(persistedLearningPattern?.personality),
      learningTendencies: convertStringList(
        persistedLearningPattern?.learningTendencies,
      ),
    },
    learningType: {
      ...currentState.learningType,
      materialFormats: convertStringList(persistedLearningType?.materialFormats),
      classStyles: convertStringList(persistedLearningType?.classStyles),
      learningMethods: convertStringList(persistedLearningType?.learningMethods),
    },
    preferredPartner: {
      ...currentState.preferredPartner,
      teacherStyles: convertStringList(
        persistedFormState.preferredPartner?.teacherStyles ??
          persistedFormState.preferredPartner?.teacherTypes,
      ),
      teamMemberStyles: convertStringList(
        persistedFormState.preferredPartner?.teamMemberStyles ??
          persistedFormState.preferredPartner?.friendTypes,
      ),
    },
    aiAnalysis: {
      ...currentState.aiAnalysis,
      ...persistedFormState.aiAnalysis,
    },
  };
};

export const useMyLearningStore = create<StoreState>()(
  persist(
    (set) => ({
      ...initialMyLearningState,
      setProfile: (profile) =>
        set((state) => ({
          profile: {
            ...state.profile,
            ...profile,
          },
        })),
      setProfileField: (field, value) =>
        set((state) => ({
          profile: {
            ...state.profile,
            [field]: value,
          },
        })),
      setLearningPattern: (learningPattern) =>
        set((state) => ({
          learningPattern: {
            ...state.learningPattern,
            ...learningPattern,
          },
        })),
      setLearningType: (learningType) =>
        set((state) => ({
          learningType: {
            ...state.learningType,
            ...learningType,
          },
        })),
      setPreferredPartner: (preferredPartner) =>
        set((state) => ({
          preferredPartner: {
            ...state.preferredPartner,
            ...preferredPartner,
          },
        })),
      setAiAnalysis: (aiAnalysis) =>
        set((state) => ({
          aiAnalysis: {
            ...state.aiAnalysis,
            ...aiAnalysis,
          },
        })),
      resetMyLearning: () => set(initialMyLearningState),
    }),
    {
      name: MY_LEARNING_STORAGE_KEY,
      storage: createJSONStorage(() => sessionStorage),
      partialize: pickMyLearningFormState,
      merge: mergePersistedMyLearningState,
    },
  ),
);
