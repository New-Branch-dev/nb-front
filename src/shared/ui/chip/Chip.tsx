import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { chipRecipe, chipResponsiveLaptopMdPcLg } from "./Chip.css";

export type ChipResponsiveSize = "laptopMdPcLg";

type ChipProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "sm" | "md" | "lg";
    /** laptop: md, pc: lg (mobile 포함 ~laptop 구간은 md) */
    responsiveSize?: ChipResponsiveSize;
    selected?: boolean;
    /** 선택 전 라벨 색 — muted는 회색(직접입력 등) */
    labelTone?: "default" | "muted";
    /** 보라색 배경 위 chip (AI 분석 패널 등) */
    surface?: "default" | "onPrimary";
  }
>;

export const Chip = ({
  children,
  size = "md",
  responsiveSize,
  selected = false,
  labelTone = "default",
  surface = "default",
  className,
  type = "button",
  ...rest
}: ChipProps) => {
  const recipeSize =
    responsiveSize === "laptopMdPcLg" ? "md" : size;

  const mergedClassName = [
    chipRecipe({ size: recipeSize, selected, labelTone, surface }),
    responsiveSize === "laptopMdPcLg" ? chipResponsiveLaptopMdPcLg : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={mergedClassName} {...rest}>
      {children}
    </button>
  );
};
