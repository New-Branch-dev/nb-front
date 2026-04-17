import type { InputHTMLAttributes } from "react";

import { inputBaseStyle, inputFieldWrapperStyle, inputLabelStyle } from "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className, id, ...rest }: InputProps) {
  const inputId = id ?? rest.name;
  const mergedClassName = [inputBaseStyle, className].filter(Boolean).join(" ");

  return (
    <label className={inputFieldWrapperStyle} htmlFor={inputId}>
      {label ? <span className={inputLabelStyle}>{label}</span> : null}
      <input id={inputId} className={mergedClassName} {...rest} />
    </label>
  );
}
