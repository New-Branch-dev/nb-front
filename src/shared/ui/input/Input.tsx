import type { InputHTMLAttributes, RefObject } from "react";

import { inputBase, inputFieldWrapper } from "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: RefObject<HTMLInputElement | null>;
  placeholder: string;
};

export const Input = ({ className, id, ref, ...rest }: InputProps) => {
  const inputId = id ?? rest.name;
  const mergedClassName = [inputBase, className].filter(Boolean).join(" ");

  return (
    <label className={inputFieldWrapper} htmlFor={inputId}>
      <input id={inputId} ref={ref} className={mergedClassName} {...rest} />
    </label>
  );
};
