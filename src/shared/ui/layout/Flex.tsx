import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";

import { flexBaseStyle } from "./Flex.css";

type FlexProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: string;
  padding?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
} & ComponentPropsWithoutRef<"div">;

export function Flex({
  as: Component = "div",
  children,
  className,
  direction = "row",
  wrap = "nowrap",
  justify = "flex-start",
  align = "stretch",
  gap = "0",
  padding = "0",
  width = "100%",
  backgroundColor = "transparent",
  color = "inherit",
  style: inlineStyle,
  ...rest
}: FlexProps) {
  const styleProps: CSSProperties = {
    width,
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    alignItems: align,
    gap,
    padding,
    backgroundColor,
    color,
    ...inlineStyle,
  };

  const mergedClassName = [flexBaseStyle, className].filter(Boolean).join(" ");

  return (
    <Component className={mergedClassName} style={styleProps} {...rest}>
      {children}
    </Component>
  );
}
