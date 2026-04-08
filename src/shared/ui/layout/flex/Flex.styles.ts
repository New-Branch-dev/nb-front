import { css } from '@emotion/css';

type FlexStyleParams = {
  direction: string;
  wrap: string;
  justify: string;
  align: string;
  gap: string;
  padding: string;
  width: string;
};

export const flexBaseStyle = css`
  display: flex;
  width: 100%;
`;

export const getFlexDynamicStyle = ({
  direction,
  wrap,
  justify,
  align,
  gap,
  padding,
  width,
}: FlexStyleParams) => css`
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
  padding: ${padding};
  width: ${width};
`;
