import {
  countBadge,
  emptyText,
  section,
  sectionHeader,
  sectionTitle,
  summaryCard,
} from "./register.css";
import { RegisterSummarySection } from "./register-summary-section";

export const RegisterSummaryView = () => {
  return (
    <article className={summaryCard} aria-label="학습 목표 등록 요약">
      <section className={section} aria-label="학습노트">
        <header className={sectionHeader}>
          <h3 className={sectionTitle}>학습노트</h3>
          <span className={countBadge}>총 0개</span>
        </header>

        <p className={emptyText}>등록된 학습 노트가 없습니다.</p>
      </section>

      <RegisterSummarySection title="학습목표" chipRowsData={[]} />
      <RegisterSummarySection title="암기" chipRowsData={[]} />
      <RegisterSummarySection title="인출" chipRowsData={[]} />
      <RegisterSummarySection title="기타학습" chipRowsData={[]} />
    </article>
  );
};
