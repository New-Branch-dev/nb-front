import { css } from "@emotion/css";

export const navShellStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid rgba(23, 23, 23, 0.12);
`;

export const navInnerStyle = css`
  width: 100%;
  min-height: 4rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.75rem;
  padding-inline: 1rem;

  @media (min-width: 768px) {
    padding-inline: 5rem;
  }
`;

export const centerSlotStyle = css`
  justify-self: center;
`;

export const brandStyle = css`
  font-size: clamp(1rem, 2vw, 1.125rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  color: #171717;
`;

export const menuStyle = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const linkStyle = css`
  display: inline-flex;
  align-items: center;
  min-height: 2.25rem;
  color: #171717;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: #171717;
  }
`;

export const triggerLinkStyle = css`
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.25rem;
  padding-inline: 0.75rem;
  border: 1px solid rgba(23, 23, 23, 0.28);
  border-radius: 999px;
  background: transparent;
  color: rgba(23, 23, 23, 0.9);
  font-family: inherit;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: rgba(23, 23, 23, 0.7);
    color: #171717;
  }
`;

export const navActionGroupStyle = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

export const modalHeaderStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const modalCloseButtonStyle = css`
  border: 1px solid rgba(23, 23, 23, 0.25);
  border-radius: 999px;
  background: transparent;
  color: #171717;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
`;

export const modalMenuListStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
