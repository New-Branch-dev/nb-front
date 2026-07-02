import { Chip } from "@shared/ui";

import type { WeeklyStudyHours } from "@features/learning-goals/model/store.types";
import {
  countBadge,
  emptyText,
  noteCard,
  noteCardList,
  noteCardSubtitle,
  noteCardTitle,
  section,
  sectionHeader,
  sectionTitle,
  summaryCard,
} from "@features/learning-goals/register/ui/register.css";
import { RegisterSummarySection } from "@features/learning-goals/register/ui/register-summary-section";

type RegisterSummaryNote = {
  id: string;
  name: string;
  sizeLabel: string;
};

type RegisterSummaryGoalSetting = {
  learningPurposes: string[];
  targetScore: string;
  maxScore: string;
  startDate: string;
  endDate: string;
  weeklyStudyHours: WeeklyStudyHours;
  learningMethods: string[];
};

type RegisterSummaryPeriod = {
  startDate: string;
  endDate: string;
  reviewCount: string;
  methods: string[];
};

type RegisterSummaryViewProps = {
  noteList: RegisterSummaryNote[];
  goalSetting: RegisterSummaryGoalSetting;
  memorization: RegisterSummaryPeriod;
  retrieval: RegisterSummaryPeriod;
  otherLearning: RegisterSummaryPeriod;
};

const convertPeriodLabel = (startDate: string, endDate: string) =>
  startDate && endDate
    ? `${convertDateKeyToShortLabel(startDate)} - ${convertDateKeyToShortLabel(endDate)}`
    : "";

const convertScoreLabel = (targetScore: string, maxScore: string) =>
  targetScore && maxScore ? `${targetScore} / ${maxScore}점` : "";

const convertReviewCountLabel = (reviewCount: string) =>
  reviewCount ? `${reviewCount}회독` : "";

const convertDateKeyToShortLabel = (dateKey: string) => {
  const [year, month, day] = dateKey.split("-");

  if (!year || !month || !day) {
    return "";
  }

  return `${year.slice(2)}.${month}.${day}`;
};

const convertWeeklyStudyHourList = (weeklyStudyHours: WeeklyStudyHours) => {
  const weekdayLabels: Record<keyof WeeklyStudyHours, string> = {
    monday: "월",
    tuesday: "화",
    wednesday: "수",
    thursday: "목",
    friday: "금",
    saturday: "토",
    sunday: "일",
  };

  const weeklyStudyHourList = Object.entries(weeklyStudyHours).flatMap(
    ([field, hour]) =>
      hour ? [`${weekdayLabels[field as keyof WeeklyStudyHours]} ${hour}시간`] : [],
  );

  return weeklyStudyHourList.length > 0 ? [weeklyStudyHourList.join(" · ")] : [];
};

export const RegisterSummaryView = ({
  noteList,
  goalSetting,
  memorization,
  retrieval,
  otherLearning,
}: RegisterSummaryViewProps) => {
  return (
    <article className={summaryCard} aria-label="학습 목표 등록 요약">
      <section className={section} aria-label="학습노트">
        <header className={sectionHeader}>
          <h3 className={sectionTitle}>학습자료</h3>
          <Chip
            className={countBadge}
            responsiveSize="laptopMdPcLg"
            tabIndex={-1}
          >
            총 {noteList.length}개
          </Chip>
        </header>

        {noteList.length > 0 ? (
          <div className={noteCardList}>
            {noteList.map((note) => (
              <div key={note.id} className={noteCard}>
                <h4 className={noteCardTitle}>{note.name}</h4>
                <p className={noteCardSubtitle}>{note.sizeLabel}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className={emptyText}>등록된 학습 노트가 없습니다.</p>
        )}
      </section>

      <RegisterSummarySection
        title="학습목표"
        chipRowsData={[
          goalSetting.learningPurposes,
          [
            convertScoreLabel(goalSetting.targetScore, goalSetting.maxScore),
            convertPeriodLabel(goalSetting.startDate, goalSetting.endDate),
          ],
          convertWeeklyStudyHourList(goalSetting.weeklyStudyHours),
          goalSetting.learningMethods,
        ]}
      />
      <RegisterSummarySection
        title="암기"
        badge={convertReviewCountLabel(memorization.reviewCount)}
        chipRowsData={[
          [convertPeriodLabel(memorization.startDate, memorization.endDate)],
          memorization.methods,
        ]}
      />
      <RegisterSummarySection
        title="인출"
        badge={convertReviewCountLabel(retrieval.reviewCount)}
        chipRowsData={[
          [convertPeriodLabel(retrieval.startDate, retrieval.endDate)],
          retrieval.methods,
        ]}
      />
      <RegisterSummarySection
        title="기타학습"
        badge={convertReviewCountLabel(otherLearning.reviewCount)}
        chipRowsData={[
          [convertPeriodLabel(otherLearning.startDate, otherLearning.endDate)],
          otherLearning.methods,
        ]}
      />
    </article>
  );
};
