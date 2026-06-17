"use client";

import { Icon } from "@shared/ui";

import { LEARNING_GOALS_MOCK } from "../model/learningGoals.mock";
import { LearningGoalCard } from "./LearningGoalCard";
import {
  emptyListMessage,
  emptyState,
  grid,
  listRoot,
} from "./LearningGoalsListPanel.css";

export const LearningGoalsListPanel = () => {
  const items = LEARNING_GOALS_MOCK;

  if (items.length === 0) {
    return (
      <section className={listRoot} aria-label="내 학습 목표 목록">
        <div className={emptyState}>
          <Icon src="/target-gray.svg" size="lg" aria-hidden />
          <p className={emptyListMessage}>아직 학습 목표가 없어요</p>
        </div>
      </section>
    );
  }

  return (
    <section className={listRoot} aria-label="내 학습 목표 목록">
      <div className={grid}>
        {items.map((item) => (
          <LearningGoalCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
