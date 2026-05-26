import Link from "next/link";

import {
  addCard,
  addCardIcon,
  addCardLabel,
} from "./LearningGoalAddCard.css";

type LearningGoalAddCardProps = {
  href: string;
};

export const LearningGoalAddCard = ({ href }: LearningGoalAddCardProps) => (
  <Link
    href={href}
    className={addCard}
    aria-label="새 학습 목표 만들기"
  >
    <span className={addCardIcon} aria-hidden>
      <svg
        viewBox="0 0 24 24"
        width="50%"
        height="50%"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </span>
    <span className={addCardLabel}>새 학습 목표 만들기</span>
  </Link>
);
