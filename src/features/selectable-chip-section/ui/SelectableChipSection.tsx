import { useState } from "react";

import {
  ChipInputGroup,
  DIRECT_INPUT_CHIP_LABEL,
  SectionCard,
} from "@shared/ui";

type SelectableChipSectionProps = {
  title: string;
  description?: string;
  items: readonly string[];
  selectedItems: string[];
  onSelectedItems: (items: string[]) => void;
  isDirectInputActive?: boolean;
  onDirectInputActiveChange?: (active: boolean) => void;
  directInputValue?: string;
  onDirectInputChange?: (value: string) => void;
  directInputPlaceholder?: string;
  directInputName?: string;
  /**
   * 두 prop을 함께 넘기면 직접입력이 TagInput으로 동작합니다.
   * 쉼표·스페이스·Enter로 한 단어를 chip으로 묶어 이 배열에 반영합니다.
   */
  directInputTags?: string[];
  onDirectInputTagsChange?: (tags: string[]) => void;
};

export const SelectableChipSection = ({
  title,
  description,
  items,
  selectedItems,
  onSelectedItems,
  isDirectInputActive,
  onDirectInputActiveChange,
  directInputValue,
  onDirectInputChange,
  directInputPlaceholder,
  directInputName,
  directInputTags,
  onDirectInputTagsChange,
}: SelectableChipSectionProps) => {
  const [internalIsDirectInputActive, setInternalIsDirectInputActive] =
    useState(false);
  const [internalDirectInputValue, setInternalDirectInputValue] = useState("");
  const presetItems = items.filter((item) => item !== DIRECT_INPUT_CHIP_LABEL);
  const presetSelections = selectedItems.filter((item) =>
    presetItems.includes(item),
  );
  const customSelections = selectedItems.filter(
    (item) => !presetItems.includes(item),
  );
  const resolvedIsDirectInputActive =
    isDirectInputActive ?? internalIsDirectInputActive;
  const resolvedDirectInputValue =
    directInputValue ?? internalDirectInputValue;

  const handleDirectInputTagsChange = (tags: string[]) => {
    if (onDirectInputTagsChange) {
      onDirectInputTagsChange(tags);
      return;
    }

    onSelectedItems([...presetSelections, ...tags]);
  };

  return (
    <SectionCard title={title} description={description}>
      <ChipInputGroup
        items={items}
        selectedItems={selectedItems}
        onSelectedItemsChange={onSelectedItems}
        isDirectInputActive={resolvedIsDirectInputActive}
        onDirectInputActiveChange={
          onDirectInputActiveChange ?? setInternalIsDirectInputActive
        }
        directInputValue={resolvedDirectInputValue}
        onDirectInputChange={onDirectInputChange ?? setInternalDirectInputValue}
        directInputPlaceholder={directInputPlaceholder}
        directInputName={directInputName}
        directInputTags={directInputTags ?? customSelections}
        onDirectInputTagsChange={handleDirectInputTagsChange}
      />
    </SectionCard>
  );
};
