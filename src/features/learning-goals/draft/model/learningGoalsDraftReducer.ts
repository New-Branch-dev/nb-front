import {
  createEmptyLearningGoalsDraft,
  type LearningGoalsDraft,
  type LearningGoalsGoalSettingDraft,
  type LearningGoalsNoteItem,
  type LearningGoalsPeriodSettingsDraft,
} from "./learningGoalsDraft.types";

export type LearningGoalsDraftAction =
  | { type: "SET_NOTES"; notes: LearningGoalsNoteItem[] }
  | {
      type: "SET_GOAL_SETTING";
      goalSetting: LearningGoalsGoalSettingDraft | null;
    }
  | {
      type: "SET_MEMORIZATION";
      memorization: LearningGoalsPeriodSettingsDraft | null;
    }
  | {
      type: "SET_RETRIEVAL";
      retrieval: LearningGoalsPeriodSettingsDraft | null;
    }
  | {
      type: "SET_OTHER_LEARNING";
      otherLearning: LearningGoalsPeriodSettingsDraft | null;
    };

export const learningGoalsDraftReducer = (
  state: LearningGoalsDraft,
  action: LearningGoalsDraftAction,
): LearningGoalsDraft => {
  switch (action.type) {
    case "SET_NOTES":
      return { ...state, notes: action.notes };
    case "SET_GOAL_SETTING":
      return { ...state, goalSetting: action.goalSetting };
    case "SET_MEMORIZATION":
      return { ...state, memorization: action.memorization };
    case "SET_RETRIEVAL":
      return { ...state, retrieval: action.retrieval };
    case "SET_OTHER_LEARNING":
      return { ...state, otherLearning: action.otherLearning };
    default:
      return state;
  }
};

export const createInitialLearningGoalsDraft = createEmptyLearningGoalsDraft;
