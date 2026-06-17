import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { containerInner, containerRoot } from "@shared/ui/container/Container.css";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export const ContainerRoot = ({
  as: Component = "div",
  children,
  className,
  ...rest
}: ContainerProps) => {
  const mergedClassName = [containerRoot, className].filter(Boolean).join(" ");
  return (
    <Component className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
};

export const ContainerInner = ({
  as: Component = "main",
  children,
  className,
  ...rest
}: ContainerProps) => {
  const mergedClassName = [containerInner, className].filter(Boolean).join(" ");
  return (
    <Component className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
};
