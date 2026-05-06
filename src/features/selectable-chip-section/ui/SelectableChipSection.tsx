import { Chip, SectionCard } from "@shared/ui";

import { toggleSelectableItems } from "../model/toggleSelectableItems";
import { chipList } from "./SelectableChipSection.css";

type SelectableChipSectionProps = {
  title: string;
  description?: string;
  items: string[];
  selectedItems: string[];
  onSelectedItems: (items: string[]) => void;
};

export const SelectableChipSection = ({
  title,
  description,
  items,
  selectedItems,
  onSelectedItems,
}: SelectableChipSectionProps) => {
  return (
    <SectionCard title={title} description={description}>
      <div className={chipList}>
        {items.map((item) => (
          <Chip
            key={item}
            size="sm"
            selected={selectedItems.includes(item)}
            onClick={() =>
              onSelectedItems(toggleSelectableItems(selectedItems, item))
            }
          >
            {item}
          </Chip>
        ))}
      </div>
    </SectionCard>
  );
};
