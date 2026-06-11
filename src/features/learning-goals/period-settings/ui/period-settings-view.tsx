"use client";
/**3,4,5단계 공통 컴포넌트 */

import {
  DateField,
  SectionCard,
  SectionCardStack,
} from "@shared/ui";

import type { PeriodSettingsConfig } from "@features/learning-goals/period-settings/model/period-settings.types";
import { ReviewCountField } from "@features/learning-goals/ui/ReviewCountField";
import {
  columnCell,
  inlineCountSection,
  inlineLabelRow,
  panelRoot,
  sectionLabel,
  twoColumnRow,
} from "@features/learning-goals/ui/settingsPanel.css";
import { SelectableChipSection } from "@features/selectable-chip-section";

type PeriodSettingsViewProps = {
  config: PeriodSettingsConfig;
  startDate: Date | null;
  endDate: Date | null;
  reviewCount: string;
  methodSelections: string[];
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
  onReviewCountChange: (value: string) => void;
  onMethodSelectionsChange: (items: string[]) => void;
};

export const PeriodSettingsView = ({
  config,
  startDate,
  endDate,
  reviewCount,
  methodSelections,
  onStartDateChange,
  onEndDateChange,
  onReviewCountChange,
  onMethodSelectionsChange,
}: PeriodSettingsViewProps) => {
  return (
    <div className={panelRoot} aria-label={config.ariaLabel}>
      <SectionCardStack>
        <SectionCard title={config.periodTitle}>
          <div className={twoColumnRow}>
            <div className={columnCell}>
              <DateField
                id={config.startDateFieldId}
                placeholder="시작일"
                aria-label={`${config.periodTitle} 시작일`}
                value={startDate}
                onChange={onStartDateChange}
              />
            </div>
            <div className={columnCell}>
              <DateField
                id={config.endDateFieldId}
                placeholder="마감일"
                aria-label={`${config.periodTitle} 마감일`}
                value={endDate}
                onChange={onEndDateChange}
              />
            </div>
          </div>
        </SectionCard>

        <section
          className={inlineCountSection}
          aria-label={config.reviewCountTitle}
        >
          <div className={inlineLabelRow}>
            <h3 className={sectionLabel}>{config.reviewCountTitle}</h3>
            <ReviewCountField
              name={config.reviewCountFieldName}
              aria-label={config.reviewCountAriaLabel}
              value={reviewCount}
              onChange={onReviewCountChange}
              options={config.reviewCountOptions}
            />
          </div>
        </section>

        <SelectableChipSection
          title={config.methodTitle}
          description="(복수 선택 가능)"
          items={config.methodItems}
          selectedItems={methodSelections}
          onSelectedItems={onMethodSelectionsChange}
          directInputName={config.methodDirectInputName}
          directInputPlaceholder={config.methodDirectInputPlaceholder}
        />
      </SectionCardStack>
    </div>
  );
};
