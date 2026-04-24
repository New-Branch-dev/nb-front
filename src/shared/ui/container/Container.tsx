import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { containerInner, containerRoot } from "./Container.css";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export function ContainerRoot({
  as: Component = "div",
  children,
  className,
  ...rest
}: ContainerProps) {
  const mergedClassName = [containerRoot, className].filter(Boolean).join(" ");
  return (
    <Component className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
}

export function ContainerInner({
  as: Component = "main",
  children,
  className,
  ...rest
}: ContainerProps) {
  const mergedClassName = [containerInner, className].filter(Boolean).join(" ");
  return (
    <Component className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
}
