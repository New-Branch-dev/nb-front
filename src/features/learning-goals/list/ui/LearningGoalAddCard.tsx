import Link from "next/link";

import { Icon } from "@shared/ui";

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
      <Icon src="/plus-primary.svg" size="md" />
    </span>
    <span className={addCardLabel}>새 학습 목표 만들기</span>
  </Link>
);
