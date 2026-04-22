import type { InputHTMLAttributes } from "react";

import { inputBase, inputFieldWrapper, inputLabel } from "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className, id, ...rest }: InputProps) {
  const inputId = id ?? rest.name;
  const mergedClassName = [inputBase, className].filter(Boolean).join(" ");

  return (
    <label className={inputFieldWrapper} htmlFor={inputId}>
      {label ? <span className={inputLabel}>{label}</span> : null}
      <input id={inputId} className={mergedClassName} {...rest} />
    </label>
  );
}
