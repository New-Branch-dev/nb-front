'use client';

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { containerBaseStyle } from './Container.styles';

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

export function Container({ as: Component = 'div', children, className, ...rest }: ContainerProps) {
  const mergedClassName = [containerBaseStyle, className].filter(Boolean).join(' ');

  return (
    <Component className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
}
