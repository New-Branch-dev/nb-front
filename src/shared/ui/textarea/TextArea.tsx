import type { TextareaHTMLAttributes } from "react";

import { textAreaBase } from "@shared/ui/textarea/TextArea.css";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ className, ...rest }: TextAreaProps) => {
  const mergedClassName = [textAreaBase, className].filter(Boolean).join(" ");

  return <textarea className={mergedClassName} {...rest} />;
};
