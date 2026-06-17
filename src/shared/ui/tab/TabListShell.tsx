import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { getTabItemTitle } from "./lib/getTabItemTitle";
import { tabListRecipe } from "./Tab.css";
import type { TabItem, TabListTone, TabSize } from "./types";

type TabListShellProps<
  V extends string,
  I extends TabItem<V> = TabItem<V>,
> = Omit<ComponentPropsWithoutRef<"div">, "role" | "children"> & {
  "aria-label": string;
  items: readonly I[];
  value: V;
  size: TabSize;
  fullWidth: boolean;
  listTone: TabListTone;
  className?: string;
  renderItem: (
    item: I,
    selected: boolean,
    title: string | undefined,
  ) => ReactNode;
};

export const TabListShell = <
  V extends string,
  I extends TabItem<V> = TabItem<V>,
>({
  items,
  value,
  size,
  fullWidth,
  listTone,
  className,
  "aria-label": ariaLabel,
  renderItem,
  ...rest
}: TabListShellProps<V, I>) => {
  const listClassName = [tabListRecipe({ size, fullWidth, listTone }), className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={listClassName}
      {...rest}
    >
      {items.map((item) => {
        const selected = item.value === value;
        return renderItem(item, selected, getTabItemTitle(item.label));
      })}
    </div>
  );
};
