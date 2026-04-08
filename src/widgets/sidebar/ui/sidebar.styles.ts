import { css } from "@emotion/css";

export const sidebarLayerStyle = css`
  position: fixed;
  inset: 0;
  z-index: 30;
`;

export const sidebarOverlayStyle = css`
  position: absolute;
  inset: 0;
  appearance: none;
  border: 0;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;

export const sidebarPanelStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: min(22rem, 100vw);
  padding: 1.25rem 1rem;
  background: #ffffff;
  box-shadow: -8px 0 24px rgba(0, 0, 0, 0.16);
`;

export const sidebarWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const sidebarTitleStyle = css`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #171717;
`;

export const sidebarMenuListStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const sidebarMenuLinkStyle = css`
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
  padding-inline: 0.25rem;
  border-radius: 0.5rem;
  color: #171717;
  font-size: 0.95rem;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(23, 23, 23, 0.06);
  }
`;
