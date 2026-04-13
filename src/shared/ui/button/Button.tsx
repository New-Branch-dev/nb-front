import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import {
  autoWidthStyle,
  buttonBaseStyle,
  fullWidthStyle,
  sizeStyle,
  variantStyle,
} from "./Button.css";

type ButtonStyleProps = {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps>;

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...rest
}: ButtonProps) {
  const mergedClassName = [
    buttonBaseStyle,
    variantStyle[variant],
    sizeStyle[size],
    fullWidth ? fullWidthStyle : autoWidthStyle,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={mergedClassName} {...rest}>
      {children}
    </button>
  );
}
