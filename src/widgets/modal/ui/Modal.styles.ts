import { css } from "@emotion/css";

export const modalDialogStyle = css`
  width: min(32rem, calc(100% - 2rem));
  margin: auto;
  border: none;
  border-radius: 1rem;
  padding: 0;
  background: #ffffff;
  color: #171717;

  &::backdrop {
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(2px);
  }
`;

export const modalContainerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;
