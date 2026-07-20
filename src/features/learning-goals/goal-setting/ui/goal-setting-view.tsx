"use client";

import { DateField, Input, SectionCard, SectionCardStack } from "@shared/ui";

import {
  LEARNING_METHOD_ITEMS,
  LEARNING_PURPOSE_ITEMS,
  WEEKDAY_FIELDS,
} from "@features/learning-goals/goal-setting/model/consts";
import { ExcludedDateSelector } from "@features/learning-goals/goal-setting/ui/excluded-date-selector";
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
  titleInput,
  twoColumnRow,
  weeklyGrid,
} from "@features/learning-goals/goal-setting/ui/goal-setting.css";
import type {
  WeeklyStudyHourField,
  WeeklyStudyHours,
} from "@features/learning-goals/model/store.types";
import { SelectableChipSection } from "@features/selectable-chip-section";

type GoalSettingViewProps = {
  title: string;
  learningPurposes: string[];
  targetScore: string;
  maxScore: string;
  startDate: Date | null;
  endDate: Date | null;
  excludedDateList: string[];
  weeklyStudyHours: WeeklyStudyHours;
  learningMethods: string[];
  onTitleChange: (value: string) => void;
  onLearningPurposesChange: (items: string[]) => void;
  onTargetScoreChange: (value: string) => void;
  onMaxScoreChange: (value: string) => void;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
  onExcludedDateListChange: (dateKeyList: string[]) => void;
  onWeeklyStudyHourChange: (field: WeeklyStudyHourField, value: string) => void;
  onLearningMethodsChange: (items: string[]) => void;
};

export const GoalSettingView = ({
  title,
  learningPurposes,
  targetScore,
  maxScore,
  startDate,
  endDate,
  excludedDateList,
  weeklyStudyHours,
  learningMethods,
  onTitleChange,
  onLearningPurposesChange,
  onTargetScoreChange,
  onMaxScoreChange,
  onStartDateChange,
  onEndDateChange,
  onExcludedDateListChange,
  onWeeklyStudyHourChange,
  onLearningMethodsChange,
}: GoalSettingViewProps) => {
  return (
    <div className={panelRoot} aria-label="목표 설정">
      <SectionCardStack>
        <SectionCard title="제목">
          <Input
            className={titleInput}
            name="learning-goals-title"
            placeholder="달성하고싶은 목표의 제목을 입력해 주세요"
            value={title}
            onChange={(event) => onTitleChange(event.target.value)}
          />
        </SectionCard>

        <SelectableChipSection
          title="학습목적"
          description="해당 목표의 목적을 선택하거나 입력해주세요. (복수선택가능)"
          items={LEARNING_PURPOSE_ITEMS}
          selectedItems={learningPurposes}
          onSelectedItems={onLearningPurposesChange}
          directInputName="learning-goals-purpose-direct"
          directInputPlaceholder="학습 목적을 입력해 주세요"
        />

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
                value={targetScore}
                onChange={(event) => onTargetScoreChange(event.target.value)}
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
                value={maxScore}
                onChange={(event) => onMaxScoreChange(event.target.value)}
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
                value={startDate}
                onChange={onStartDateChange}
              />
            </div>
            <div className={columnCell}>
              <DateField
                id="learning-goals-end-date"
                placeholder="마감일"
                aria-label="마감일"
                value={endDate}
                onChange={onEndDateChange}
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="학습제외일"
          description="학습 기간 중 학습이 불가능한 일자를 선택해주세요. (최대10일)"
        >
          <ExcludedDateSelector
            dateKeyList={excludedDateList}
            minDate={startDate}
            maxDate={endDate}
            onDateKeyListChange={onExcludedDateListChange}
          />
        </SectionCard>

        <SectionCard title="공부시간">
          <div className={weeklyGrid}>
            {WEEKDAY_FIELDS.map(({ label, field }) => {
              const hasStudyHour = weeklyStudyHours[field].length > 0;

              return (
                <div key={field} className={dayCard} data-active={hasStudyHour}>
                  <span className={dayHeader}>{label}</span>
                  <div className={dayBody}>
                    <div className={dayTimeField}>
                      <input
                        className={dayTimeInput}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={2}
                        name={`learning-goals-weekly-${field}`}
                        aria-label={`${label}요일 공부 시간`}
                        placeholder="-"
                        value={weeklyStudyHours[field]}
                        onChange={(event) =>
                          onWeeklyStudyHourChange(field, event.target.value)
                        }
                      />
                      <span className={dayTimeSuffix}>시간</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionCard>

        <SelectableChipSection
          title="학습방법"
          description="해당 목표를 이루기 위한 학습 방법을 선택해주세요. (복수선택가능)"
          items={LEARNING_METHOD_ITEMS}
          selectedItems={learningMethods}
          onSelectedItems={onLearningMethodsChange}
          directInputName="learning-goals-method-direct"
          directInputPlaceholder="학습 방법을 입력해 주세요"
        />
      </SectionCardStack>
    </div>
  );
};
