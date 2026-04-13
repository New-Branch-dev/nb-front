import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";

import {
  alignItemsStyle,
  flexBaseStyle,
  flexDirectionStyle,
  flexGapStyle,
  flexInlineStyle,
  flexWrapStyle,
  justifyContentStyle,
} from "./Flex.css";

type FlexDirectionKey = keyof typeof flexDirectionStyle;
type FlexWrapKey = keyof typeof flexWrapStyle;
type JustifyContentKey = keyof typeof justifyContentStyle;
type AlignItemsKey = keyof typeof alignItemsStyle;
type FlexGapKey = keyof typeof flexGapStyle;

type FlexProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  inline?: boolean;
  direction?: FlexDirectionKey | CSSProperties["flexDirection"];
  wrap?: FlexWrapKey | CSSProperties["flexWrap"];
  justify?: JustifyContentKey | CSSProperties["justifyContent"];
  align?: AlignItemsKey | CSSProperties["alignItems"];
  gap?: FlexGapKey | CSSProperties["gap"];
  padding?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
} & ComponentPropsWithoutRef<"div">;

export function Flex({
  as: Component = "div",
  children,
  className,
  inline = false,
  direction = "row",
  wrap = "nowrap",
  justify = "start",
  align = "stretch",
  gap = "none",
  padding = "0",
  width = "100%",
  backgroundColor = "transparent",
  color = "inherit",
  style: inlineStyle,
  ...rest
}: FlexProps) {
  const directionClass = flexDirectionStyle[direction as FlexDirectionKey];
  const wrapClass = flexWrapStyle[wrap as FlexWrapKey];
  const justifyClass = justifyContentStyle[justify as JustifyContentKey];
  const alignClass = alignItemsStyle[align as AlignItemsKey];
  const gapClass = flexGapStyle[gap as FlexGapKey];

  const styleProps: CSSProperties = {
    width,
    padding,
    backgroundColor,
    color,
    ...(directionClass ? null : { flexDirection: direction }),
    ...(wrapClass ? null : { flexWrap: wrap }),
    ...(justifyClass ? null : { justifyContent: justify }),
    ...(alignClass ? null : { alignItems: align }),
    ...(gapClass ? null : { gap }),
    ...inlineStyle,
  };

  const mergedClassName = [
    inline ? flexInlineStyle : flexBaseStyle,
    directionClass,
    wrapClass,
    justifyClass,
    alignClass,
    gapClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={mergedClassName} style={styleProps} {...rest}>
      {children}
    </Component>
  );
}
