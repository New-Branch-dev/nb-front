import styled from "@emotion/styled";
import type { CSSProperties } from "react";

type FlexProps = {
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: string;
  padding?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  width: ${({ width = "100%" }) => width};
  flex-direction: ${({ direction = "row" }) => direction};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  justify-content: ${({ justify = "flex-start" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  gap: ${({ gap = "0" }) => gap};
  padding: ${({ padding = "0" }) => padding};
  background-color: ${({ backgroundColor = "transparent" }) => backgroundColor};
  color: ${({ color = "inherit" }) => color};
`;
