"use client";

import { useEffect, useMemo, useState } from "react";

import { getApiErrorMessage } from "@shared/api";
import { Icon } from "@shared/ui";

import { fetchLearningGoals } from "@entities/learning-goals/api/fetch-learning-goals";
import { filterLearningGoalList } from "@entities/learning-goals/list/lib/filter-learning-goal-list";
import type {
  LearningGoalItem,
  LearningGoalsListSortKey,
} from "@entities/learning-goals/list/model/learningGoal.types";
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
  onDelete?: (goalId: string) => Promise<void> | void;
};

export const LearningGoalsListPanel = ({
  searchQuery,
  sortKey,
  onDelete,
}: LearningGoalsListPanelProps) => {
  const [learningGoalList, setLearningGoalList] = useState<LearningGoalItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const itemList = useMemo(
    () => filterLearningGoalList(learningGoalList, searchQuery, sortKey),
    [learningGoalList, searchQuery, sortKey],
  );
  const emptyMessage = searchQuery.trim()
    ? "검색 결과가 없어요"
    : "아직 학습 목표가 없어요";

  useEffect(() => {
    let canSetState = true;

    const loadLearningGoalList = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        const nextLearningGoalList = await fetchLearningGoals();

        if (canSetState) {
          setLearningGoalList(nextLearningGoalList);
        }
      } catch {
        if (canSetState) {
          setHasError(true);
          setLearningGoalList([]);
        }
      } finally {
        if (canSetState) {
          setIsLoading(false);
        }
      }
    };

    void loadLearningGoalList();

    return () => {
      canSetState = false;
    };
  }, []);

  const handleDelete = async (goalId: string) => {
    try {
      await onDelete?.(goalId);
      setLearningGoalList((currentList) =>
        currentList.filter((item) => item.id !== goalId),
      );
    } catch (error) {
      alert(getApiErrorMessage(error, "학습 목표 삭제에 실패했습니다."));
    }
  };

  if (isLoading) {
    return (
      <section className={listRoot} aria-label="내 학습 목표 목록">
        <div className={emptyState}>
          <Icon src="/target-gray.svg" size="lg" aria-hidden />
          <p className={emptyListMessage}>학습 목표를 불러오는 중이에요</p>
        </div>
      </section>
    );
  }

  if (hasError) {
    return (
      <section className={listRoot} aria-label="내 학습 목표 목록">
        <div className={emptyState}>
          <Icon src="/target-gray.svg" size="lg" aria-hidden />
          <p className={emptyListMessage}>학습 목표를 불러오지 못했어요</p>
        </div>
      </section>
    );
  }

  if (itemList.length === 0) {
    return (
      <section className={listRoot} aria-label="내 학습 목표 목록">
        <div className={emptyState}>
          <Icon src="/target-gray.svg" size="lg" aria-hidden />
          <p className={emptyListMessage}>{emptyMessage}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={listRoot} aria-label="내 학습 목표 목록">
      <div className={grid}>
        {itemList.map((item) => (
          <LearningGoalCard key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
};
