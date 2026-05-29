"use client";

import {
  createContext,
  type Dispatch,
  type ReactNode,
  useContext,
  useReducer,
} from "react";

import {
  createInitialLearningGoalsDraft,
  learningGoalsDraftReducer,
  type LearningGoalsDraftAction,
} from "./learningGoalsDraftReducer";
import type {
  LearningGoalsDraft,
  LearningGoalsGoalSettingDraft,
  LearningGoalsNoteItem,
  LearningGoalsPeriodSettingsDraft,
} from "./learningGoalsDraft.types";

type LearningGoalsDraftContextValue = {
  draft: LearningGoalsDraft;
  /** `useReducer` dispatch — 참조가 안정적이라 sync effect 의존성에 안전합니다. */
  dispatch: Dispatch<LearningGoalsDraftAction>;
  setNotes: (notes: LearningGoalsNoteItem[]) => void;
  setGoalSetting: (value: LearningGoalsGoalSettingDraft | null) => void;
  setMemorization: (value: LearningGoalsPeriodSettingsDraft | null) => void;
  setRetrieval: (value: LearningGoalsPeriodSettingsDraft | null) => void;
  setOtherLearning: (value: LearningGoalsPeriodSettingsDraft | null) => void;
};

const LearningGoalsDraftContext =
  createContext<LearningGoalsDraftContextValue | null>(null);

type LearningGoalsDraftProviderProps = {
  children: ReactNode;
};

export const LearningGoalsDraftProvider = ({
  children,
}: LearningGoalsDraftProviderProps) => {
  const [draft, dispatch] = useReducer(
    learningGoalsDraftReducer,
    undefined,
    createInitialLearningGoalsDraft,
  );

  const setNotes = (notes: LearningGoalsNoteItem[]) => {
    dispatch({ type: "SET_NOTES", notes });
  };

  const setGoalSetting = (goalSetting: LearningGoalsGoalSettingDraft | null) => {
    dispatch({ type: "SET_GOAL_SETTING", goalSetting });
  };

  const setMemorization = (
    memorization: LearningGoalsPeriodSettingsDraft | null,
  ) => {
    dispatch({ type: "SET_MEMORIZATION", memorization });
  };

  const setRetrieval = (retrieval: LearningGoalsPeriodSettingsDraft | null) => {
    dispatch({ type: "SET_RETRIEVAL", retrieval });
  };

  const setOtherLearning = (
    otherLearning: LearningGoalsPeriodSettingsDraft | null,
  ) => {
    dispatch({ type: "SET_OTHER_LEARNING", otherLearning });
  };

  const value = {
    draft,
    dispatch,
    setNotes,
    setGoalSetting,
    setMemorization,
    setRetrieval,
    setOtherLearning,
  };

  return (
    <LearningGoalsDraftContext.Provider value={value}>
      {children}
    </LearningGoalsDraftContext.Provider>
  );
};

export const useLearningGoalsDraft = (): LearningGoalsDraftContextValue => {
  const context = useContext(LearningGoalsDraftContext);

  if (!context) {
    throw new Error(
      "useLearningGoalsDraft must be used within LearningGoalsDraftProvider",
    );
  }

  return context;
};
