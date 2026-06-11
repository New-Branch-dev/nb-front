import {
  chipRow,
  chipRows,
  countBadge,
  section,
  sectionHeader,
  sectionTitle,
  summaryChip,
} from "./register.css";

type RegisterSummarySectionProps = {
  title: string;
  chipRowsData: string[][];
  badge?: string;
};

export const RegisterSummarySection = ({
  title,
  chipRowsData,
  badge,
}: RegisterSummarySectionProps) => {
  const hasChips = chipRowsData.some((row) => row.length > 0);

  return (
    <section className={section} aria-label={title}>
      <header className={sectionHeader}>
        <h3 className={sectionTitle}>{title}</h3>
        {badge ? <span className={countBadge}>{badge}</span> : null}
      </header>

      {hasChips ? (
        <div className={chipRows}>
          {chipRowsData.map((row, rowIndex) =>
            row.length > 0 ? (
              <div key={`${title}-row-${rowIndex}`} className={chipRow}>
                {row.map((chip) => (
                  <span key={chip} className={summaryChip}>
                    {chip}
                  </span>
                ))}
              </div>
            ) : null,
          )}
        </div>
      ) : null}
    </section>
  );
};
