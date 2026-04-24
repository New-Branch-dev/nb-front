import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { buttonRecipe } from "./Button.css";

type ButtonStyleProps = {
  variant?: "primary" | "secondary" | "ghost" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps>;

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...rest
}: ButtonProps) => {
  const mergedClassName = [buttonRecipe({ variant, size, fullWidth }), className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={mergedClassName} {...rest}>
      {children}
    </button>
  );
};
