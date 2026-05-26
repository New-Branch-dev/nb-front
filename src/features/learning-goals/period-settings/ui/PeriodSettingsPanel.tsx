"use client";

import { useReportStepValidity } from "@shared/hook/useReportStepValidity";
import { ChipInputGroup, DateField, SectionCard, SectionCardStack } from "@shared/ui";

import { useSyncPeriodSettingsDraft } from "../../draft/hook/useSyncPeriodSettingsDraft";
import { ReviewCountField } from "../../ui/ReviewCountField";
import {
  columnCell,
  inlineCountSection,
  inlineLabelRow,
  panelRoot,
  sectionLabel,
  twoColumnRow,
} from "../../ui/settingsPanel.css";
import type { PeriodSettingsPanelConfig } from "../model/periodSettings.types";
import { usePeriodSettingsForm } from "../model/usePeriodSettingsForm";

type PeriodSettingsPanelProps = {
  onValidityChange: (isValid: boolean) => void;
  isActive: boolean;
  config: PeriodSettingsPanelConfig;
};

export const PeriodSettingsPanel = ({
  onValidityChange,
  isActive,
  config,
}: PeriodSettingsPanelProps) => {
  const form = usePeriodSettingsForm();

  useReportStepValidity(isActive, form.isValid, onValidityChange);

  useSyncPeriodSettingsDraft(config.draftKey, {
    startDate: form.startDate,
    endDate: form.endDate,
    reviewCount: form.reviewCount,
    selectedMethods: form.methodSelections,
    methodDirectText: form.methodDirectText,
  });

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
                value={form.startDate}
                onChange={form.setStartDate}
                maxDate={form.endDate ?? undefined}
              />
            </div>
            <div className={columnCell}>
              <DateField
                id={config.endDateFieldId}
                placeholder="마감일"
                aria-label={`${config.periodTitle} 마감일`}
                value={form.endDate}
                onChange={form.setEndDate}
                minDate={form.startDate ?? undefined}
              />
            </div>
          </div>
        </SectionCard>

        <section className={inlineCountSection} aria-label={config.reviewCountTitle}>
          <div className={inlineLabelRow}>
            <h3 className={sectionLabel}>{config.reviewCountTitle}</h3>
            <ReviewCountField
              name={config.reviewCountFieldName}
              aria-label={config.reviewCountAriaLabel}
              value={form.reviewCount}
              onChange={form.setReviewCount}
              options={config.reviewCountOptions}
            />
          </div>
        </section>

        <SectionCard title={config.methodTitle}>
          <ChipInputGroup
            items={config.methodItems}
            selectedItems={form.methodSelections}
            onSelectedItemsChange={form.setMethodSelections}
            isDirectInputActive={form.isMethodDirectInput}
            onDirectInputActiveChange={form.setIsMethodDirectInput}
            directInputValue={form.methodDirectText}
            onDirectInputChange={form.setMethodDirectText}
            directInputTags={form.methodDirectTags}
            onDirectInputTagsChange={form.setMethodDirectTags}
            directInputName={config.methodDirectInputName}
            directInputPlaceholder={config.methodDirectInputPlaceholder}
          />
        </SectionCard>
      </SectionCardStack>
    </div>
  );
};
