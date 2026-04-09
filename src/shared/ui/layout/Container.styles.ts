import styled from "@emotion/styled";

export const ContainerRoot = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInner = styled.main`
  width: 100%;
  padding-block: 9rem;
  padding-inline: 5rem;

  @media (max-width: 768px) {
    padding-block: 7rem;
    padding-inline: 0;
  }
`;
