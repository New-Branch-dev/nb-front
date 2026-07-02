import type { InputHTMLAttributes } from "react";

import {
  checkboxField,
  checkboxLabelRecipe,
  checkboxRecipe,
} from "@shared/ui/checkbox/Checkbox.css";

type CheckboxLabelColor = "primary" | "textPrimary" | "gray700" | "gray800" | "white";
type CheckboxLabelSize = "sm" | "md" | "lg";
type CheckboxLabelWeight = "regular" | "medium" | "semibold" | "bold";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  label: string;
  size?: "sm" | "md";
  shape?: "square" | "round";
} & {
  labelColor?: CheckboxLabelColor;
  labelSize?: CheckboxLabelSize;
  labelWeight?: CheckboxLabelWeight;
};

export const Checkbox = ({
  label,
  size = "md",
  shape = "square",
  labelColor = "gray700",
  labelSize = "md",
  labelWeight = "regular",
  className,
  id,
  ...rest
}: CheckboxProps) => {
  const checkboxId = id ?? rest.name ?? label;
  const mergedClassName = [checkboxRecipe({ size, shape }), className].filter(Boolean).join(" ");
  const labelClassName = checkboxLabelRecipe({
    color: labelColor,
    size: labelSize,
    weight: labelWeight,
  });

  return (
    <label className={checkboxField} htmlFor={checkboxId}>
      <input id={checkboxId} type="checkbox" className={mergedClassName} {...rest} />
      <span className={labelClassName}>{label}</span>
    </label>
  );
};
