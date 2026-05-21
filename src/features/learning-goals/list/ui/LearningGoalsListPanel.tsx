"use client";

import Image from "next/image";

import { emptyListMessage, emptyState, listRoot } from "./LearningGoalsListPanel.css";

export const LearningGoalsListPanel = () => {
  return (
    <section className={listRoot} aria-label="내 학습 목표 목록">
      <div className={emptyState}>
        <Image
          src="/target-gray.svg"
          alt=""
          width={49}
          height={48}
          aria-hidden
        />
        <p className={emptyListMessage}>아직 학습 목표가 없어요</p>
      </div>
    </section>
  );
};
