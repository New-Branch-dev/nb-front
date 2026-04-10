import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from "react";

import { sectionBaseStyle } from "./Section.css";

type SectionProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  paddingBlock?: string;
  paddingInline?: string;
} & ComponentPropsWithoutRef<"section">;

export function Section({
  as: Component = "section",
  children,
  className,
  paddingBlock = "5rem",
  paddingInline = "1rem",
  style: inlineStyle,
  ...rest
}: SectionProps) {
  const styleProps: CSSProperties = {
    paddingBlock,
    paddingInline,
    ...inlineStyle,
  };
  const mergedClassName = [sectionBaseStyle, className].filter(Boolean).join(" ");

  return (
    <Component className={mergedClassName} style={styleProps} {...rest}>
      {children}
    </Component>
  );
}
