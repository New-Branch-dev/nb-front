import { Chip, Icon } from "@shared/ui";

import {
  checkIconBox,
  headerDescription,
  headerText,
  headerTitle,
  noteIconBox,
  noteItem,
  noteList as noteListStyle,
  noteName,
  noteSize,
  periodMeta,
  periodText,
  row,
  rowContent,
  rowCount,
  rowLabel,
  rowTitle,
  scoreMaxText,
  scoreText,
  summaryCard,
  summaryChip,
  summaryHeader,
  titleText,
  weeklyCard,
  weeklyCardActive,
  weeklyCardDimmed,
  weeklyGrid,
  weeklyHeader,
  weeklyHour,
} from "@features/learning-goals/register/ui/register.css";

type RegisterSummaryNote = {
  id: string;
  name: string;
  sizeLabel: string;
};

type RegisterSummaryWeeklyStudyHour = {
  field: string;
  label: string;
  hour: string;
  hasHour: boolean;
  isExcludedWeekday: boolean;
};

type RegisterSummaryData = {
  title: string;
  learningPurposes: string[];
  targetScore: string;
  maxScore: string;
  startDateLabel: string;
  endDateLabel: string;
  excludedDateLabelList: string[];
  weeklyStudyHourList: RegisterSummaryWeeklyStudyHour[];
  learningMethods: string[];
  totalPeriodDayCount: number;
  studyDayCount: number;
  excludedDateCount: number;
  learningMethodCount: number;
  noteCount: number;
};

type RegisterSummaryViewProps = {
  noteList: RegisterSummaryNote[];
  summary: RegisterSummaryData;
};

const renderChipList = (items: string[]) =>
  items.map((item) => (
    <Chip
      key={item}
      className={summaryChip}
      responsiveSize="laptopMdPcLg"
      tabIndex={-1}
    >
      {item}
    </Chip>
  ));

export const RegisterSummaryView = ({
  noteList,
  summary,
}: RegisterSummaryViewProps) => {
  return (
    <article className={summaryCard} aria-label="학습 목표 등록 요약">
      <header className={summaryHeader}>
        <span className={checkIconBox}>
          <Icon
            src="/my-learning-icon/check-box-pupple.svg"
            size="md"
            aria-hidden
          />
        </span>
        <div className={headerText}>
          <h3 className={headerTitle}>최종확인</h3>
          <p className={headerDescription}>
            아래 내용으로 단원화 자료를 생성합니다. 확인 후 생성해주세요.
          </p>
        </div>
      </header>

      <section className={row} aria-label="제목">
        <h4 className={rowTitle}>제목</h4>
        <p className={titleText}>{summary.title}</p>
      </section>

      <section className={row} aria-label="학습목적">
        <span className={rowLabel}>학습목적</span>
        <div className={rowContent}>{renderChipList(summary.learningPurposes)}</div>
      </section>

      <section className={row} aria-label="목표점수">
        <span className={rowLabel}>목표점수</span>
        <div className={rowContent}>
          <strong className={scoreText}>{summary.targetScore}</strong>
          <span className={scoreMaxText}>/ {summary.maxScore}점</span>
        </div>
      </section>

      <section className={row} aria-label="학습기간">
        <span className={rowLabel}>학습기간</span>
        <div className={rowContent}>
          <strong className={periodText}>{summary.startDateLabel}</strong>
          <span className={periodText}>→</span>
          <strong className={periodText}>{summary.endDateLabel}</strong>
          <span className={periodMeta}>
            총 {summary.totalPeriodDayCount}일 중 {summary.studyDayCount}일 학습
          </span>
        </div>
      </section>

      <section className={row} aria-label="학습제외일">
        <span className={rowLabel}>
          학습제외일 <strong className={rowCount}>{summary.excludedDateCount}</strong>
        </span>
        <div className={rowContent}>
          {renderChipList(summary.excludedDateLabelList)}
        </div>
      </section>

      <section className={row} aria-label="공부시간">
        <span className={rowLabel}>공부시간</span>
        <div className={weeklyGrid}>
          {summary.weeklyStudyHourList.map(
            ({ field, label, hour, hasHour, isExcludedWeekday }) => (
              <div
                key={field}
                className={[
                  weeklyCard,
                  hasHour ? weeklyCardActive : undefined,
                  isExcludedWeekday ? weeklyCardDimmed : undefined,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className={weeklyHeader}>{label}</span>
                <strong className={weeklyHour}>{hour}시간</strong>
              </div>
            ),
          )}
        </div>
      </section>

      <section className={row} aria-label="학습방법">
        <span className={rowLabel}>
          학습방법 <strong className={rowCount}>{summary.learningMethodCount}</strong>
        </span>
        <div className={rowContent}>{renderChipList(summary.learningMethods)}</div>
      </section>

      <section className={row} aria-label="학습자료">
        <span className={rowLabel}>
          학습자료 <strong className={rowCount}>{summary.noteCount}</strong>
        </span>
        <div className={noteListStyle}>
          {noteList.map((note) => (
            <div key={note.id} className={noteItem}>
              <span className={noteIconBox} aria-hidden />
              <strong className={noteName}>{note.name}</strong>
              <span className={noteSize}>{note.sizeLabel}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
