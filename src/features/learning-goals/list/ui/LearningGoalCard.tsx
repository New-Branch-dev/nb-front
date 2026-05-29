import Image from "next/image";

import { getLearningGoalColorTheme } from "../lib/getLearningGoalColorTheme";
import { getLearningGoalThumbnail } from "../lib/getLearningGoalThumbnail";
import type {
  LearningGoalItem,
  LearningGoalStatus,
} from "../model/learningGoal.types";
import {
  actionRow,
  card,
  cardHeader,
  category,
  dDay,
  deleteButton,
  detailButton,
  editButton,
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
  progressPercent,
  progressTrack,
  statusBadge,
  statusDot,
  title as titleStyle,
} from "./LearningGoalCard.css";

const STATUS_LABEL: Record<LearningGoalStatus, string> = {
  notStarted: "시작전",
  inProgress: "진행중",
  imminent: "완료임박",
  completed: "완료",
};

type LearningGoalCardProps = {
  item: LearningGoalItem;
};

export const LearningGoalCard = ({ item }: LearningGoalCardProps) => {
  const colorTheme = getLearningGoalColorTheme(item.id);
  const thumbnailSrc = getLearningGoalThumbnail(colorTheme);

  return (
    <article className={card} aria-label={item.title}>
      <header className={cardHeader}>
        <span className={iconBox} aria-hidden>
          <Image
            src={thumbnailSrc}
            alt=""
            width={46}
            height={46}
            className={iconImage}
          />
        </span>
        <span className={statusBadge({ status: item.status })}>
          <span className={statusDot({ status: item.status })} />
          {STATUS_LABEL[item.status]}
        </span>
      </header>

      <div>
        <p className={category({ colorTheme })}>{item.category}</p>
        <h3 className={titleStyle}>{item.title}</h3>
      </div>

      <dl className={metaList}>
        <div className={metaRow}>
          <dt className={metaLabel}>
            <Image
              src="/learning-goals/target.svg"
              alt=""
              width={18}
              height={18}
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
            <Image
              src="/learning-goals/calander.svg"
              alt=""
              width={18}
              height={18}
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
          <span>
            <span className={progressLabel}>진행률</span>
            <span className={progressPercent}>{item.progress}%</span>
          </span>
          <span className={dDay}>D-{item.dDay}</span>
        </div>
        <div
          className={progressTrack}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={item.progress}
        >
          <div
            className={progressFill({ colorTheme })}
            style={{ width: `${item.progress}%` }}
          />
        </div>
      </div>

      <div className={actionRow}>
        <button type="button" className={detailButton}>
          상세보기
        </button>
        <button type="button" className={editButton}>
          수정
        </button>
        <button type="button" className={deleteButton}>
          삭제
        </button>
      </div>
    </article>
  );
};
