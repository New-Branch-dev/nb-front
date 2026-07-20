import type { TabItem } from "@shared/ui/tab";

import type { LearningGoalsListSortKey } from "@entities/learning-goals";

export type { LearningGoalsListSortKey } from "@entities/learning-goals";

export const LEARNING_GOALS_LIST_SORT_ITEMS: readonly TabItem<LearningGoalsListSortKey>[] =
  [
    { value: "latest", label: "최신 등록순" },
    { value: "oldest", label: "오래된순" },
    { value: "deadline", label: "마감일순" },
  ];
