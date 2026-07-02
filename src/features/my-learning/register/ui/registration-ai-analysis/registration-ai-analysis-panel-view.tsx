import { ChipInputGroup } from "@shared/ui";

import {
  aiDivider,
  aiPanel,
  aiPanelInner,
  aiPanelTitle,
} from "@features/my-learning/register/ui/registration-ai-analysis/registration-ai-analysis.css";

export type RegistrationAiChipInputViewProps = {
  items: readonly string[];
  selectedItems: string[];
  onSelectedItemsChange: (items: string[]) => void;
  isDirectInputActive: boolean;
  onDirectInputActiveChange: (isActive: boolean) => void;
  directInputValue: string;
  onDirectInputChange: (value: string) => void;
  directInputTags: string[];
  onDirectInputTagsChange: (tags: string[]) => void;
  directInputName: string;
  directInputPlaceholder: string;
};

export type RegistrationAiAnalysisPanelViewProps = {
  titleId: string;
  learningStyleInput: RegistrationAiChipInputViewProps;
  recommendedMethodInput: RegistrationAiChipInputViewProps;
};

const RegistrationAiChipInputView = ({
  items,
  selectedItems,
  onSelectedItemsChange,
  isDirectInputActive,
  onDirectInputActiveChange,
  directInputValue,
  onDirectInputChange,
  directInputTags,
  onDirectInputTagsChange,
  directInputName,
  directInputPlaceholder,
}: RegistrationAiChipInputViewProps) => {
  return (
    <ChipInputGroup
      chipSurface="onPrimary"
      items={items}
      selectedItems={selectedItems}
      onSelectedItemsChange={onSelectedItemsChange}
      isDirectInputActive={isDirectInputActive}
      onDirectInputActiveChange={onDirectInputActiveChange}
      directInputValue={directInputValue}
      onDirectInputChange={onDirectInputChange}
      directInputTags={directInputTags}
      onDirectInputTagsChange={onDirectInputTagsChange}
      directInputName={directInputName}
      directInputPlaceholder={directInputPlaceholder}
    />
  );
};

export const RegistrationAiAnalysisPanelView = ({
  titleId,
  learningStyleInput,
  recommendedMethodInput,
}: RegistrationAiAnalysisPanelViewProps) => {
  return (
    <section className={aiPanel} aria-labelledby={titleId}>
      <div className={aiPanelInner}>
        <h2 id={titleId} className={aiPanelTitle}>
          AI 분석
        </h2>

        <RegistrationAiChipInputView {...learningStyleInput} />

        <div className={aiDivider} aria-hidden />

        <RegistrationAiChipInputView {...recommendedMethodInput} />
      </div>
    </section>
  );
};
