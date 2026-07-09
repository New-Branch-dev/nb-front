import Link from "next/link";

import { Icon } from "@shared/ui";

import type { LearningGoalDetail } from "@entities/learning-goals/detail/model/learning-goal-detail.types";
import {
  backLink,
  cardHeader,
  cardTitle,
  cardTitleCount,
  chipWrap,
  condensedField,
  detailGrid,
  detailHero,
  detailRoot,
  editButton,
  fieldList,
  fileField,
  heroActionLink,
  heroActions,
  heroCategory,
  heroContent,
  heroIconBox,
  heroMeta,
  heroPrimaryLink,
  heroTitle,
  heroTitleRow,
  infoCard,
  periodGroup,
  periodGroupTitle,
  periodTextList,
  sectionDividerTitle,
  sideColumn,
  statusDot,
  statusPill,
  summaryChip,
} from "@entities/learning-goals/detail/ui/learning-goal-detail.css";

type LearningGoalDetailProps = {
  detail: LearningGoalDetail;
};

export const LearningGoalDetailView = ({ detail }: LearningGoalDetailProps) => {
  const noteCreationEditHref = `/learning-goals/edit/note-creation?goalId=${detail.id}`;
  const goalSettingEditHref = `/learning-goals/edit/goal-setting?goalId=${detail.id}`;

  return (
    <main className={detailRoot}>
      <Link href="/learning-goals/list" className={backLink}>
        <Icon src="/arrow-left.svg" size="sm" aria-hidden />
        학습 목표 목록으로
      </Link>

      <section className={detailHero} aria-label="학습 목표 요약">
        <span className={heroIconBox} aria-hidden>
          <Icon src={detail.headerIconSrc} size="lg" />
        </span>

        <div className={heroContent}>
          <p className={heroCategory}>{detail.category}</p>
          <div className={heroTitleRow}>
            <h1 className={heroTitle}>{detail.title}</h1>
            <span className={statusPill}>
              <span className={statusDot} />
              진행중
            </span>
          </div>
          <p className={heroMeta}>
            <span>
              {detail.periodStart}- {detail.periodEnd}
            </span>
            <span aria-hidden>|</span>
            <span>주 {detail.weeklyTargetHour}시간 목표</span>
            <span aria-hidden>|</span>
            <span>학습자료 {detail.noteFileList.length}개</span>
          </p>
        </div>

        <div className={heroActions}>
          <Link href="/learning-goals/note-creation" className={heroActionLink}>
            <Icon src="/learning-goals/pencil-white.svg" size="sm" aria-hidden />
            수정
          </Link>
          <Link href="/condensed-notes" className={heroPrimaryLink}>
            <Icon src="/learning-goals/book-pupple.svg" size="sm" aria-hidden />
            단권화 자료 바로가기
          </Link>
        </div>
      </section>

      <div className={detailGrid}>
        <aside className={sideColumn} aria-label="학습 목표 상세 정보">
          <section className={infoCard}>
            <div className={cardHeader}>
              <h2 className={cardTitle}>
                학습 자료 <span className={cardTitleCount}>{detail.noteFileList.length}</span>
              </h2>
              <Link href={noteCreationEditHref} className={editButton} aria-label="학습 자료 수정">
                <Icon src="/my-learning-icon/pencil.svg" size="sm" aria-hidden />
              </Link>
            </div>

            <div className={fieldList}>
              {detail.noteFileList.map((file) => (
                <div key={file.id} className={fileField}>
                  <Icon src={file.iconSrc} size="sm" aria-hidden />
                  <span>{file.name}</span>
                </div>
              ))}
            </div>

            <h3 className={sectionDividerTitle}>
              단권화 자료 <span className={cardTitleCount}>{detail.condensedNoteList.length}</span>
            </h3>
            <div className={fieldList}>
              {detail.condensedNoteList.map((file) => (
                <Link key={file.id} href="/condensed-notes" className={condensedField}>
                  <Icon src={file.iconSrc} size="sm" aria-hidden />
                  <span>{file.name}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className={infoCard}>
            <div className={cardHeader}>
              <h2 className={cardTitle}>학습목표</h2>
              <Link href={goalSettingEditHref} className={editButton} aria-label="학습 목표 수정">
                <Icon src="/my-learning-icon/pencil.svg" size="sm" aria-hidden />
              </Link>
            </div>
            <div className={chipWrap}>
              {detail.goalChipList.map((chip) => (
                <span key={chip} className={summaryChip}>
                  {chip}
                </span>
              ))}
            </div>
          </section>

          <section className={infoCard}>
            <div className={cardHeader}>
              <h2 className={cardTitle}>학습하는 날</h2>
              <Link href={goalSettingEditHref} className={editButton} aria-label="학습 기간 수정">
                <Icon src="/my-learning-icon/pencil.svg" size="sm" aria-hidden />
              </Link>
            </div>
            <div className={fieldList}>
              {detail.periodInfoList.map((group) => (
                <div key={group.label} className={periodGroup}>
                  <strong className={periodGroupTitle}>
                    <Icon src="/learning-goals/calander.svg" size="sm" aria-hidden />
                    {group.valueList[0]}
                  </strong>
                  {group.valueList.length > 1 && (
                    <div className={periodTextList}>
                      {group.valueList.slice(1).map((value, index) => (
                        <span key={value}>
                          {index > 0 && <span aria-hidden>| </span>}
                          {value}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
};
