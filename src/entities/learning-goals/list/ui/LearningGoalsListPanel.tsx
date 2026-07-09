"use client";

import { useMemo } from "react";

import { Icon } from "@shared/ui";

import { filterLearningGoalList } from "@entities/learning-goals/list/lib/filter-learning-goal-list";
import type { LearningGoalsListSortKey } from "@entities/learning-goals/list/model/learningGoal.types";
import { LEARNING_GOALS_MOCK } from "@entities/learning-goals/list/model/learningGoals.mock";
import { LearningGoalCard } from "@entities/learning-goals/list/ui/LearningGoalCard";
import {
  emptyListMessage,
  emptyState,
  grid,
  listRoot,
} from "@entities/learning-goals/list/ui/LearningGoalsListPanel.css";

type LearningGoalsListPanelProps = {
  searchQuery: string;
  sortKey: LearningGoalsListSortKey;
};

export const LearningGoalsListPanel = ({
  searchQuery,
  sortKey,
}: LearningGoalsListPanelProps) => {
  const itemList = useMemo(
    () => filterLearningGoalList(LEARNING_GOALS_MOCK, searchQuery, sortKey),
    [searchQuery, sortKey],
  );

  if (itemList.length === 0) {
    return (
      <section className={listRoot} aria-label="내 학습 목표 목록">
        <div className={emptyState}>
          <Icon src="/target-gray.svg" size="lg" aria-hidden />
          <p className={emptyListMessage}>
            {searchQuery.trim() ? "검색 결과가 없어요" : "아직 학습 목표가 없어요"}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={listRoot} aria-label="내 학습 목표 목록">
      <div className={grid}>
        {itemList.map((item) => (
          <LearningGoalCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
