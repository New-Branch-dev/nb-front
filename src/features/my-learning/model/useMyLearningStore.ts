"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { initialMyLearningState } from "./initialState";
import type { FormState, StoreState } from "./store.types";

export const MY_LEARNING_STORAGE_KEY = "my-learning-store";

const pickMyLearningFormState = ({
  profile,
  learningPattern,
  preferredTime,
  learningPreferences,
  preferredPartner,
  aiAnalysis,
}: StoreState): FormState => ({
  profile,
  learningPattern,
  preferredTime,
  learningPreferences,
  preferredPartner,
  aiAnalysis,
});

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
      setPreferredTime: (preferredTime) =>
        set((state) => ({
          preferredTime: {
            ...state.preferredTime,
            ...preferredTime,
          },
        })),
      setLearningPreferences: (learningPreferences) =>
        set((state) => ({
          learningPreferences: {
            ...state.learningPreferences,
            ...learningPreferences,
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
    },
  ),
);
