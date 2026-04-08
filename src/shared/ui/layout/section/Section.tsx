'use client';

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { getSectionPaddingStyle, sectionBaseStyle } from './Section.styles';

type SectionProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  padding?: string;
  paddingBlock?: string;
  paddingInline?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
} & ComponentPropsWithoutRef<'section'>;

export function Section({
  as: Component = 'section',
  children,
  className,
  padding,
  paddingBlock,
  paddingInline,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  ...rest
}: SectionProps) {
  const sectionPaddingStyle = getSectionPaddingStyle({
    padding,
    paddingBlock,
    paddingInline,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  });
  const mergedClassName = [sectionBaseStyle, sectionPaddingStyle, className].filter(Boolean).join(' ');

  return (
    <Component className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
}
