import type {
  LearningGoalItem,
  LearningGoalsListSortKey,
} from "@entities/learning-goals/list/model/learningGoal.types";

const convertDateTextToTime = (dateText: string) => new Date(dateText).getTime();

const compareByCreatedAtDesc = (
  previous: LearningGoalItem,
  next: LearningGoalItem,
) => convertDateTextToTime(next.createdAt) - convertDateTextToTime(previous.createdAt);

const compareByCreatedAtAsc = (
  previous: LearningGoalItem,
  next: LearningGoalItem,
) => convertDateTextToTime(previous.createdAt) - convertDateTextToTime(next.createdAt);

const compareByDeadlineAsc = (
  previous: LearningGoalItem,
  next: LearningGoalItem,
) => convertDateTextToTime(previous.deadlineAt) - convertDateTextToTime(next.deadlineAt);

const filterByTitle = (item: LearningGoalItem, searchQuery: string) => {
  const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  if (!normalizedSearchQuery) {
    return true;
  }

  return item.title.toLowerCase().includes(normalizedSearchQuery);
};

export const filterLearningGoalList = (
  itemList: readonly LearningGoalItem[],
  searchQuery: string,
  sortKey: LearningGoalsListSortKey,
) => {
  const filteredItemList = itemList.filter((item) => filterByTitle(item, searchQuery));

  return [...filteredItemList].sort((previous, next) => {
    if (sortKey === "oldest") {
      return compareByCreatedAtAsc(previous, next);
    }

    if (sortKey === "deadline") {
      return compareByDeadlineAsc(previous, next);
    }

    return compareByCreatedAtDesc(previous, next);
  });
};
