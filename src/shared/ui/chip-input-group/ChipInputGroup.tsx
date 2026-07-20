"use client";

import { Chip } from "@shared/ui/chip/Chip";
import {
  chipRow,
  directInput,
  directInputOnPrimary,
  root,
} from "@shared/ui/chip-input-group/ChipInputGroup.css";
import { Input } from "@shared/ui/input/Input";
import { TagInput } from "@shared/ui/tag-input/TagInput";

export const DIRECT_INPUT_CHIP_LABEL = "직접입력";

export type ChipInputItem = string | {
  label: string;
  value: string;
};

export type ChipInputGroupProps = {
  items: readonly ChipInputItem[];
  selectedItems: string[];
  onSelectedItemsChange: (items: string[]) => void;
  isDirectInputActive: boolean;
  onDirectInputActiveChange: (active: boolean) => void;
  directInputValue: string;
  onDirectInputChange: (value: string) => void;
  directInputPlaceholder?: string;
  directInputName?: string;
  /** 보라색 배경 위 chip 스타일 (AI 분석 패널) */
  chipSurface?: "default" | "onPrimary";
  /**
   * 두 prop을 함께 넘기면 직접입력 영역이 TagInput으로 동작합니다.
   * 쉼표/스페이스/Enter로 단어를 끊어 chip으로 묶고, 이 배열로 반영됩니다.
   */
  directInputTags?: string[];
  onDirectInputTagsChange?: (tags: string[]) => void;
};

const convertChipInputItemToOption = (item: ChipInputItem) => {
  if (typeof item === "string") {
    return {
      label: item,
      value: item,
    };
  }

  return item;
};

export const ChipInputGroup = ({
  items,
  selectedItems,
  onSelectedItemsChange,
  isDirectInputActive,
  onDirectInputActiveChange,
  directInputValue,
  onDirectInputChange,
  directInputPlaceholder = "직접 입력해 주세요",
  directInputName = "chip-direct-input",
  chipSurface = "default",
  directInputTags,
  onDirectInputTagsChange,
}: ChipInputGroupProps) => {
  const isTagMode = directInputTags !== undefined && onDirectInputTagsChange !== undefined;
  const itemOptions = items.map(convertChipInputItemToOption);
  const presetItems = itemOptions.filter(
    (item) => item.label !== DIRECT_INPUT_CHIP_LABEL,
  );
  const hasDirectInputChip = itemOptions.some(
    (item) => item.label === DIRECT_INPUT_CHIP_LABEL,
  );

  const handleChipClick = (item: { label: string; value: string }) => {
    if (item.label === DIRECT_INPUT_CHIP_LABEL) {
      onDirectInputActiveChange(!isDirectInputActive);
      return;
    }

    if (selectedItems.includes(item.value)) {
      onSelectedItemsChange(
        selectedItems.filter((entry) => entry !== item.value),
      );
      return;
    }

    onSelectedItemsChange([...selectedItems, item.value]);
  };

  return (
    <div className={root}>
      <div className={chipRow}>
        {presetItems.map((item) => (
          <Chip
            key={item.value}
            responsiveSize="laptopMdPcLg"
            surface={chipSurface}
            selected={selectedItems.includes(item.value)}
            onClick={() => handleChipClick(item)}
          >
            {item.label}
          </Chip>
        ))}
        {hasDirectInputChip ? (
          <Chip
            responsiveSize="laptopMdPcLg"
            surface={chipSurface}
            labelTone="muted"
            selected={isDirectInputActive}
            onClick={() =>
              handleChipClick({
                label: DIRECT_INPUT_CHIP_LABEL,
                value: DIRECT_INPUT_CHIP_LABEL,
              })
            }
          >
            {DIRECT_INPUT_CHIP_LABEL}
          </Chip>
        ) : null}
      </div>

      {isDirectInputActive ? (
        isTagMode ? (
          <TagInput
            className={directInput}
            name={directInputName}
            placeholder={directInputPlaceholder}
            surface={chipSurface}
            tags={directInputTags}
            onTagsChange={onDirectInputTagsChange}
            inputValue={directInputValue}
            onInputValueChange={onDirectInputChange}
          />
        ) : (
          <Input
            className={[
              directInput,
              chipSurface === "onPrimary" ? directInputOnPrimary : undefined,
            ]
              .filter(Boolean)
              .join(" ")}
            name={directInputName}
            placeholder={directInputPlaceholder}
            aria-label={directInputPlaceholder}
            value={directInputValue}
            onChange={(event) => onDirectInputChange(event.target.value)}
          />
        )
      ) : null}
    </div>
  );
};
