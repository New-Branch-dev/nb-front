import { Chip } from "@shared/ui";

import {
  chipRow,
  chipRows,
  countBadge,
  section,
  sectionHeader,
  sectionTitle,
  summaryChip,
} from "@features/learning-goals/register/ui/register.css";

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
  const filteredChipRowsData = chipRowsData
    .map((row) => row.filter(Boolean))
    .filter((row) => row.length > 0);
  const hasChips = filteredChipRowsData.length > 0;

  return (
    <section className={section} aria-label={title}>
      <header className={sectionHeader}>
        <h3 className={sectionTitle}>{title}</h3>
        {badge ? (
          <Chip
            className={countBadge}
            responsiveSize="laptopMdPcLg"
            tabIndex={-1}
          >
            {badge}
          </Chip>
        ) : null}
      </header>

      {hasChips ? (
        <div className={chipRows}>
          {filteredChipRowsData.map((row, rowIndex) => (
            <div key={`${title}-row-${rowIndex}`} className={chipRow}>
              {row.map((chip) => (
                <Chip
                  key={chip}
                  className={summaryChip}
                  responsiveSize="laptopMdPcLg"
                  tabIndex={-1}
                >
                  {chip}
                </Chip>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};
