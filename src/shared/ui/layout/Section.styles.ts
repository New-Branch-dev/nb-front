import styled from "@emotion/styled";

type SectionProps = {
  paddingBlock?: string;
  paddingInline?: string;
};

export const Section = styled.section<SectionProps>`
  width: 100%;
  padding-block: ${({ paddingBlock = "5rem" }) => paddingBlock};
  padding-inline: ${({ paddingInline = "1rem" }) => paddingInline};
`;
