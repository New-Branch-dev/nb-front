import { css } from "@emotion/css";

export const sliderWrapperStyle = css`
  width: 100%;
`;

export const sliderViewportStyle = css`
  width: 100%;
`;

export const sliderSlideStyle = css`
  width: auto;
`;

export const sliderItemStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: min(24rem, calc((100vw - 5rem) / 3));
  min-width: 15rem;
  min-height: clamp(12rem, 42vh, 24rem);
  max-height: calc(100svh - 10rem);
  padding: 0.75rem 1rem;
  border: 1px solid rgba(23, 23, 23, 0.18);
  border-radius: 0.75rem;
  background: #ffffff;
  color: #171717;
  font-size: 0.9rem;

  @media (max-width: 1024px) {
    width: min(22rem, calc((100vw - 4rem) / 2));
    min-height: clamp(11rem, 38vh, 18rem);
  }

  @media (max-width: 640px) {
    width: calc(100vw - 3rem);
    min-width: calc(100vw - 3rem);
    min-height: clamp(10rem, 34vh, 14rem);
  }
`;
