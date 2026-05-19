import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { chipRecipe } from "./Chip.css";

type ChipProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "sm" | "md" | "lg";
    selected?: boolean;
  }
>;

export const Chip = ({
  children,
  size = "md",
  selected = false,
  className,
  type = "button",
  ...rest
}: ChipProps) => {
  const mergedClassName = [chipRecipe({ size, selected }), className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={mergedClassName} {...rest}>
      {children}
    </button>
  );
};
