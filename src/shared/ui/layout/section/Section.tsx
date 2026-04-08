'use client';

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { sectionBaseStyle } from './Section.styles';

type SectionProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<'section'>;

export function Section({ as: Component = 'section', children, className, ...rest }: SectionProps) {
  const mergedClassName = [sectionBaseStyle, className].filter(Boolean).join(' ');

  return (
    <Component className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
}
