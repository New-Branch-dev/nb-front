import { css } from '@emotion/css';

export const containerBaseStyle = css`
  width: min(1120px, calc(100% - 2rem));
  margin-inline: auto;

  @media (min-width: 768px) {
    width: min(1120px, calc(100% - 4rem));
  }
`;
