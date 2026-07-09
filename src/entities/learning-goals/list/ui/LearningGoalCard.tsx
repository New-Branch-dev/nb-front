"use client";

import Link from "next/link";

import { Icon, Modal } from "@shared/ui";

import { getLearningGoalThumbnail } from "@entities/learning-goals/list/lib/getLearningGoalThumbnail";
import {
  convertLearningGoalRemainingDayCount,
  convertLearningGoalStatus,
  convertLearningGoalTotalDayCount,
} from "@entities/learning-goals/list/lib/learning-goal-period";
import type {
  LearningGoalItem,
  LearningGoalStatus,
} from "@entities/learning-goals/list/model/learningGoal.types";
import {
  actionRow,
  card,
  cardHeader,
  category,
  dDay,
  dDayRemaining,
  dDayTotal,
  deleteButton,
  deleteModalActions,
  deleteModalCancelButton,
  deleteModalConfirmButton,
  deleteModalContent,
  deleteModalMessage,
  deleteModalTitle,
  detailButton,
  iconBox,
  iconImage,
  metaLabel,
  metaList,
  metaRow,
  metaValue,
  metaValueMuted,
  progressBox,
  progressFill,
  progressHead,
  progressLabel,
  progressTrack,
  statusBadge,
  statusDot,
  title as titleStyle,
} from "@entities/learning-goals/list/ui/LearningGoalCard.css";

const STATUS_LABEL: Record<LearningGoalStatus, string> = {
  notStarted: "시작전",
  inProgress: "진행중",
  imminent: "완료임박",
  completed: "완료",
};

const STATUS_DOT_VISIBLE_SET = new Set<LearningGoalStatus>([
  "inProgress",
  "imminent",
]);

type LearningGoalCardProps = {
  item: LearningGoalItem;
};

export const LearningGoalCard = ({ item }: LearningGoalCardProps) => {
  const thumbnailSrc = getLearningGoalThumbnail(item.category);
  const status = convertLearningGoalStatus(item);
  const hasStatusDot = STATUS_DOT_VISIBLE_SET.has(status);
  const remainingDays = convertLearningGoalRemainingDayCount(item.deadlineAt);
  const totalDays = convertLearningGoalTotalDayCount(item);
  const elapsedDays = Math.min(Math.max(totalDays - remainingDays, 0), totalDays);
  const deadlineProgress = totalDays > 0 ? (elapsedDays / totalDays) * 100 : 0;

  return (
    <article className={card} aria-label={item.title}>
      <header className={cardHeader}>
        <span className={iconBox} aria-hidden>
          <Icon
            src={thumbnailSrc}
            size="lg"
            className={iconImage}
          />
        </span>
        <span className={statusBadge({ status })}>
          {hasStatusDot && <span className={statusDot({ status })} />}
          {STATUS_LABEL[status]}
        </span>
      </header>

      <div>
        <p className={category({ status })}>{item.category}</p>
        <h3 className={titleStyle}>{item.title}</h3>
      </div>

      <dl className={metaList}>
        <div className={metaRow}>
          <dt className={metaLabel}>
            <Icon
              src="/learning-goals/target.svg"
              size="sm"
              aria-hidden
            />
            목표점수
          </dt>
          <dd>
            <span className={metaValue}>{item.targetScore}</span>
            <span className={metaValueMuted}>
              {" "}
              / {item.maxScore} 점
            </span>
          </dd>
        </div>

        <div className={metaRow}>
          <dt className={metaLabel}>
            <Icon
              src="/learning-goals/calander.svg"
              size="sm"
              aria-hidden
            />
            학습기간
          </dt>
          <dd className={metaValueMuted}>
            {item.periodStart} - {item.periodEnd}
          </dd>
        </div>
      </dl>

      <div className={progressBox}>
        <div className={progressHead}>
          <span className={progressLabel}>마감일까지</span>
          <span className={dDay}>
            <span className={dDayRemaining}>D-{remainingDays}</span>
            <span className={dDayTotal}> / {totalDays}</span>
          </span>
        </div>
        <div
          className={progressTrack}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={deadlineProgress}
        >
          <div
            className={progressFill({ status })}
            style={{ width: `${deadlineProgress}%` }}
          />
        </div>
      </div>

      <div className={actionRow}>
        <Link href={`/learning-goals/${item.id}`} className={detailButton({ status })}>
          상세보기
        </Link>
        <Modal triggerText="삭제" triggerClassName={deleteButton}>
          {({ close }) => (
            <div className={deleteModalContent}>
              <div>
                <h2 className={deleteModalTitle}>학습 목표를 삭제할까요?</h2>
                <p className={deleteModalMessage}>
                  {item.title} 목표가 목록에서 삭제됩니다.
                </p>
              </div>
              <div className={deleteModalActions}>
                <button
                  type="button"
                  className={deleteModalCancelButton}
                  onClick={close}
                >
                  취소
                </button>
                <button
                  type="button"
                  className={deleteModalConfirmButton}
                  onClick={close}
                >
                  삭제
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </article>
  );
};
