import { css } from '@emotion/css';

export const pageStyle = css`
  min-height: 100svh;
  background: #ffffff;
`;

export const heroHeadingStyle = css`
  max-width: 14ch;
  font-size: clamp(2rem, 7vw, 4.25rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
`;

export const heroBodyStyle = css`
  max-width: 56ch;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.65;
`;

export const cardGridStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const cardStyle = css`
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 1rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
`;

export const sectionTitleStyle = css`
  margin-bottom: 1rem;
  font-size: clamp(1.4rem, 3.5vw, 2rem);
  letter-spacing: -0.01em;
`;
