import { ChipInputGroup, SectionCard } from "@shared/ui";

type SelectableChipSectionProps = {
  title: string;
  description?: string;
  items: readonly string[];
  selectedItems: string[];
  onSelectedItems: (items: string[]) => void;
  isDirectInputActive: boolean;
  onDirectInputActiveChange: (active: boolean) => void;
  directInputValue: string;
  onDirectInputChange: (value: string) => void;
  directInputPlaceholder?: string;
  directInputName?: string;
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
}: SelectableChipSectionProps) => {
  return (
    <SectionCard title={title} description={description}>
      <ChipInputGroup
        items={items}
        selectedItems={selectedItems}
        onSelectedItemsChange={onSelectedItems}
        isDirectInputActive={isDirectInputActive}
        onDirectInputActiveChange={onDirectInputActiveChange}
        directInputValue={directInputValue}
        onDirectInputChange={onDirectInputChange}
        directInputPlaceholder={directInputPlaceholder}
        directInputName={directInputName}
      />
    </SectionCard>
  );
};
