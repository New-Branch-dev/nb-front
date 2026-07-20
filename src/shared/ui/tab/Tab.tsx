import { tabTriggerRecipe } from "@shared/ui/tab/Tab.css";
import { TabListShell } from "@shared/ui/tab/TabListShell";
import type { TabProps } from "@shared/ui/tab/types";

export const Tab = <V extends string,>({
  items,
  value,
  onValueChange,
  size = "md",
  fullWidth = true,
  listTone = "filled",
  className,
  "aria-label": ariaLabel,
  ...rest
}: TabProps<V>) => (
  <TabListShell
    items={items}
    value={value}
    size={size}
    fullWidth={fullWidth}
    listTone={listTone}
    className={className}
    aria-label={ariaLabel}
    {...rest}
    renderItem={(item, selected, title) => (
      <button
        key={item.value}
        type="button"
        role="tab"
        aria-selected={selected}
        className={tabTriggerRecipe({ selected, size, listTone })}
        title={title}
        onClick={() => onValueChange(item.value)}
      >
        {item.label}
      </button>
    )}
  />
);
