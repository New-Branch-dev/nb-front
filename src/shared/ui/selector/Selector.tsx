import type { SelectHTMLAttributes } from "react";

import {
  selectorChevron,
  selectorChevronCompact,
  selectorField,
  selectorFieldCompact,
  selectorWrap,
  selectorWrapCompact,
} from "./Selector.css";

export type SelectorOption = {
  value: string;
  label: string;
};

type SelectorProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "value" | "onChange"
> & {
  options: readonly SelectorOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  /** 공부시간 등 좁은 영역: 숫자 중앙 정렬, 작은 화살표 */
  variant?: "default" | "compact";
};

export const Selector = ({
  options,
  value,
  onChange,
  placeholder,
  variant = "default",
  className,
  id,
  "aria-label": ariaLabel,
  ...rest
}: SelectorProps) => {
  const isCompact = variant === "compact";
  const selectId = id ?? rest.name;
  const wrapClassName = isCompact ? selectorWrapCompact : selectorWrap;
  const fieldClassName = isCompact ? selectorFieldCompact : selectorField;
  const chevronClassName = isCompact ? selectorChevronCompact : selectorChevron;
  const mergedClassName = [fieldClassName, className].filter(Boolean).join(" ");

  return (
    <div className={wrapClassName}>
      <select
        id={selectId}
        className={mergedClassName}
        value={value}
        aria-label={ariaLabel}
        required={Boolean(placeholder)}
        onChange={(event) => onChange(event.target.value)}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className={chevronClassName} aria-hidden>
        ▼
      </span>
    </div>
  );
};
