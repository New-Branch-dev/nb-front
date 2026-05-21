"use client";

import { Chip } from "../chip/Chip";
import { Input } from "../input/Input";
import {
  chipRow,
  directInput,
  directInputOnPrimary,
  root,
} from "./ChipInputGroup.css";

export const DIRECT_INPUT_CHIP_LABEL = "직접입력";

export type ChipInputGroupProps = {
  items: readonly string[];
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
}: ChipInputGroupProps) => {
  const presetItems = items.filter((item) => item !== DIRECT_INPUT_CHIP_LABEL);
  const hasDirectInputChip = items.includes(DIRECT_INPUT_CHIP_LABEL);

  const handleChipClick = (item: string) => {
    if (item === DIRECT_INPUT_CHIP_LABEL) {
      onDirectInputActiveChange(!isDirectInputActive);
      return;
    }

    if (selectedItems.includes(item)) {
      onSelectedItemsChange(selectedItems.filter((entry) => entry !== item));
      return;
    }

    onSelectedItemsChange([...selectedItems, item]);
  };

  return (
    <div className={root}>
      <div className={chipRow}>
        {presetItems.map((item) => (
          <Chip
            key={item}
            responsiveSize="laptopMdPcLg"
            surface={chipSurface}
            selected={selectedItems.includes(item)}
            onClick={() => handleChipClick(item)}
          >
            {item}
          </Chip>
        ))}
        {hasDirectInputChip ? (
          <Chip
            responsiveSize="laptopMdPcLg"
            surface={chipSurface}
            labelTone="muted"
            selected={isDirectInputActive}
            onClick={() => handleChipClick(DIRECT_INPUT_CHIP_LABEL)}
          >
            {DIRECT_INPUT_CHIP_LABEL}
          </Chip>
        ) : null}
      </div>

      {isDirectInputActive ? (
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
      ) : null}
    </div>
  );
};
