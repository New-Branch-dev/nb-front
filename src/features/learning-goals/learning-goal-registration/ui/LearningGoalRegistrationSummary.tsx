"use client";

import { useLearningGoalsDraft } from "../../draft";
import {
  buildGoalSettingChipRows,
  buildPeriodSettingsChips,
} from "../../draft/lib/formatLearningGoalsSummary";
import {
  emptyText,
  noteCard,
  noteCardList,
  noteCardSubtitle,
  noteCardTitle,
  section,
  sectionHeader,
  sectionTitle,
  summaryCard,
  countBadge,
} from "./LearningGoalRegistrationPanel.css";
import { LearningGoalSummarySection } from "./LearningGoalSummarySection";

export const LearningGoalRegistrationSummary = () => {
  const { draft } = useLearningGoalsDraft();

  const goalChipRows = buildGoalSettingChipRows(draft.goalSetting);
  const memorizationChips = [buildPeriodSettingsChips(draft.memorization)];
  const retrievalChips = [buildPeriodSettingsChips(draft.retrieval)];
  const otherLearningChips = [buildPeriodSettingsChips(draft.otherLearning)];

  return (
    <article className={summaryCard} aria-label="학습 목표 등록 요약">
      <section className={section} aria-label="학습노트">
        <header className={sectionHeader}>
          <h3 className={sectionTitle}>학습노트</h3>
          <span className={countBadge}>총 {draft.notes.length}개</span>
        </header>

        {draft.notes.length > 0 ? (
          <div className={noteCardList}>
            {draft.notes.map((note) => (
              <article key={note.id} className={noteCard}>
                <p className={noteCardTitle}>{note.title}</p>
                {note.subtitle ? (
                  <p className={noteCardSubtitle}>{note.subtitle}</p>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <p className={emptyText}>등록된 학습 노트가 없습니다.</p>
        )}
      </section>

      <LearningGoalSummarySection title="학습목표" chipRowsData={goalChipRows} />
      <LearningGoalSummarySection title="암기" chipRowsData={memorizationChips} />
      <LearningGoalSummarySection title="인출" chipRowsData={retrievalChips} />
      <LearningGoalSummarySection title="기타학습" chipRowsData={otherLearningChips} />
    </article>
  );
};
