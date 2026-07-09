import type { ImageProps } from "next/image";
import Image from "next/image";

import { iconRecipe } from "@shared/ui/icon/icon.css";

export type IconSize = "sm" | "md" | "lg";

type IconProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  src: string;
  alt?: string;
  size?: IconSize;
};

const ICON_SIZE_PX: Record<IconSize, number> = {
  sm: 20,
  md: 26,
  lg: 48,
};

export const Icon = ({
  src,
  alt = "",
  size = "md",
  className,
  "aria-hidden": ariaHidden,
  ...rest
}: IconProps) => {
  const mergedClassName = [iconRecipe({ size }), className]
    .filter(Boolean)
    .join(" ");

  return (
    <Image
      src={src}
      alt={alt}
      width={ICON_SIZE_PX[size]}
      height={ICON_SIZE_PX[size]}
      className={mergedClassName}
      aria-hidden={alt ? ariaHidden : true}
      {...rest}
    />
  );
};
