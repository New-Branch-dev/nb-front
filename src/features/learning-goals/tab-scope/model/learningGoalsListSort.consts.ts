import type { TabItem } from "@shared/ui/tab";

export type LearningGoalsListSortKey = "latest" | "oldest" | "importance";

export const LEARNING_GOALS_LIST_SORT_ITEMS: readonly TabItem<LearningGoalsListSortKey>[] =
  [
    { value: "latest", label: "최신 등록순" },
    { value: "oldest", label: "오래된순" },
    { value: "importance", label: "중요도순" },
  ];
