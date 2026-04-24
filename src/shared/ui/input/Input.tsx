import type { InputHTMLAttributes } from "react";

import { inputBase, inputFieldWrapper } from "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
};

export const Input = ({ className, id, ...rest }: InputProps) => {
  const inputId = id ?? rest.name;
  const mergedClassName = [inputBase, className].filter(Boolean).join(" ");

  return (
    <label className={inputFieldWrapper} htmlFor={inputId}>
      <input id={inputId} className={mergedClassName} {...rest} />
    </label>
  );
};
