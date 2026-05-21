"use client";

import { useReportStepValidity } from "@shared/hook/useReportStepValidity";
import {
  ChipInputGroup,
  DateField,
  RegistrationAiAnalysisPanel,
  SectionCard,
  SectionCardStack,
  registrationStepRoot,
  stepSummaryPanelCard,
} from "@shared/ui";

import { useSyncGoalSettingDraft } from "../../draft/hook/useSyncGoalSettingDraft";
import {
  LEARNING_METHOD_ITEMS,
  LEARNING_PURPOSE_ITEMS,
  WEEKDAY_LABELS,
  type WeekdayLabel,
} from "../model/consts";
import { useGoalSettingForm } from "../model/useGoalSettingForm";
import {
  columnCell,
  dayBody,
  dayCard,
  dayHeader,
  dayTimeField,
  dayTimeInput,
  dayTimeSuffix,
  panelRoot,
  scoreField,
  scoreInput,
  scoreLabel,
  scoreSuffix,
  twoColumnRow,
  weeklyGrid,
} from "./GoalSettingPanel.css";

type GoalSettingPanelProps = {
  onValidityChange: (isValid: boolean) => void;
  isActive: boolean;
};

export const GoalSettingPanel = ({
  onValidityChange,
  isActive,
}: GoalSettingPanelProps) => {
  const form = useGoalSettingForm();

  useReportStepValidity(isActive, form.isValid, onValidityChange);

  useSyncGoalSettingDraft({
    purposeSelections: form.purposeSelections,
    purposeDirectText: form.purposeDirectText,
    targetScore: form.targetScore,
    maxScore: form.maxScore,
    startDate: form.startDate,
    endDate: form.endDate,
    weeklyHours: form.weeklyHours,
    methodSelections: form.methodSelections,
    methodDirectText: form.methodDirectText,
  });

  return (
    <div className={panelRoot} aria-label="목표 설정">
      <SectionCardStack>
        <SectionCard title="학습목적">
          <ChipInputGroup
            items={LEARNING_PURPOSE_ITEMS}
            selectedItems={form.purposeSelections}
            onSelectedItemsChange={form.setPurposeSelections}
            isDirectInputActive={form.isPurposeDirectInput}
            onDirectInputActiveChange={form.setIsPurposeDirectInput}
            directInputValue={form.purposeDirectText}
            onDirectInputChange={form.setPurposeDirectText}
            directInputName="learning-goals-purpose-direct"
            directInputPlaceholder="학습 목적을 입력해 주세요"
          />
        </SectionCard>

        <SectionCard title="목표점수">
          <div className={twoColumnRow}>
            <label className={scoreField} aria-label="목표 점수">
              <span className={scoreLabel}>목표</span>
              <input
                className={scoreInput}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={3}
                placeholder="-"
                value={form.targetScore}
                onChange={(event) => form.setTargetScore(event.target.value)}
              />
              <span className={scoreSuffix}>점</span>
            </label>

            <label className={scoreField} aria-label="만점">
              <span className={scoreLabel}>만점</span>
              <input
                className={scoreInput}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={3}
                placeholder="-"
                value={form.maxScore}
                onChange={(event) => form.setMaxScore(event.target.value)}
              />
              <span className={scoreSuffix}>점</span>
            </label>
          </div>
        </SectionCard>

        <SectionCard title="학습기간">
          <div className={twoColumnRow}>
            <div className={columnCell}>
              <DateField
                id="learning-goals-start-date"
                placeholder="시작일"
                aria-label="시작일"
                value={form.startDate}
                onChange={form.setStartDate}
                maxDate={form.endDate ?? undefined}
              />
            </div>
            <div className={columnCell}>
              <DateField
                id="learning-goals-end-date"
                placeholder="마감일"
                aria-label="마감일"
                value={form.endDate}
                onChange={form.setEndDate}
                minDate={form.startDate ?? undefined}
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="공부시간">
          <div className={weeklyGrid}>
            {WEEKDAY_LABELS.map((day) => (
              <div key={day} className={dayCard}>
                <span className={dayHeader}>{day}</span>
                <div className={dayBody}>
                  <div className={dayTimeField}>
                    <input
                      className={dayTimeInput}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={2}
                      name={`learning-goals-weekly-${day}`}
                      aria-label={`${day}요일 공부 시간`}
                      placeholder="-"
                      value={form.weeklyHours[day as WeekdayLabel]}
                      onChange={(event) =>
                        form.setWeeklyHour(
                          day as WeekdayLabel,
                          event.target.value,
                        )
                      }
                    />
                    <span className={dayTimeSuffix}>시간</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="학습방법">
          <ChipInputGroup
            items={LEARNING_METHOD_ITEMS}
            selectedItems={form.methodSelections}
            onSelectedItemsChange={form.setMethodSelections}
            isDirectInputActive={form.isMethodDirectInput}
            onDirectInputActiveChange={form.setIsMethodDirectInput}
            directInputValue={form.methodDirectText}
            onDirectInputChange={form.setMethodDirectText}
            directInputName="learning-goals-method-direct"
            directInputPlaceholder="학습 방법을 입력해 주세요"
          />
        </SectionCard>
      </SectionCardStack>
    </div>
  );
};
