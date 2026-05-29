import Link from "next/link";

import { tabTriggerRecipe } from "./Tab.css";
import { TabListShell } from "./TabListShell";
import type { LinkTabItem, LinkTabProps } from "./types";

export const LinkTab = <V extends string>({
  items,
  value,
  size = "md",
  fullWidth = true,
  listTone = "filled",
  className,
  "aria-label": ariaLabel,
  scroll = false,
  ...rest
}: LinkTabProps<V>) => (
  <TabListShell<V, LinkTabItem<V>>
    items={items}
    value={value}
    size={size}
    fullWidth={fullWidth}
    listTone={listTone}
    className={className}
    aria-label={ariaLabel}
    {...rest}
    renderItem={(item, selected, title) => (
      <Link
        key={item.value}
        href={item.href}
        role="tab"
        aria-selected={selected}
        title={title}
        scroll={scroll}
        className={tabTriggerRecipe({ selected, size, listTone })}
      >
        {item.label}
      </Link>
    )}
  />
);
