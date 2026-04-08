'use client';

import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from 'react';

import { flexBaseStyle, getFlexDynamicStyle } from './Flex.styles';

type FlexDirection = CSSProperties['flexDirection'];
type FlexWrap = CSSProperties['flexWrap'];
type JustifyContent = CSSProperties['justifyContent'];
type AlignItems = CSSProperties['alignItems'];

type FlexProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: string;
  padding?: string;
  width?: string;
} & ComponentPropsWithoutRef<'div'>;

export function Flex({
  as: Component = 'div',
  children,
  className,
  direction = 'row',
  wrap = 'nowrap',
  justify = 'flex-start',
  align = 'stretch',
  gap = '0',
  padding = '0',
  width = '100%',
  ...rest
}: FlexProps) {
  const dynamicStyle = getFlexDynamicStyle({
    direction,
    wrap,
    justify,
    align,
    gap,
    padding,
    width,
  });

  const mergedClassName = [flexBaseStyle, dynamicStyle, className].filter(Boolean).join('');

  return (
    <Component className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
}
