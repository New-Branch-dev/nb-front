import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type TabSize =
  | "sm"
  | "toolbar"
  | "toolbarSort"
  | "md"
  | "lg"
  | "xlg";

/** filled: 연보라 트랙(기본) · surface: 흰 배경(목록 필터 등) */
export type TabListTone = "filled" | "surface";

export type TabItem<V extends string = string> = {
  value: V;
  label: ReactNode;
};

export type TabProps<V extends string> = Omit<
  ComponentPropsWithoutRef<"div">,
  "role"
> & {
  "aria-label": string;
  items: readonly TabItem<V>[];
  value: V;
  onValueChange: (value: V) => void;
  size?: TabSize;
  /** false이면 트랙 너비가 라벨에 맞게 줄어들어, 부모에서 flex 가운데 정렬하기 좋습니다. */
  fullWidth?: boolean;
  listTone?: TabListTone;
};

export type LinkTabItem<V extends string = string> = TabItem<V> & {
  href: string;
};

export type LinkTabProps<V extends string> = Omit<
  ComponentPropsWithoutRef<"div">,
  "role"
> & {
  "aria-label": string;
  items: readonly LinkTabItem<V>[];
  value: V;
  size?: TabSize;
  fullWidth?: boolean;
  listTone?: TabListTone;
  /** `next/link` 등으로 탭 이동 시 상단 스크롤 여부 (기본 false) */
  scroll?: boolean;
};
