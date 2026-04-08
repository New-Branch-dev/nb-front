import { css } from "@emotion/css";

export const sectionBaseStyle = css`
  width: 100%;
`;

type SectionPaddingOptions = {
  padding?: string;
  paddingBlock?: string;
  paddingInline?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
};

export const getSectionPaddingStyle = ({
  padding,
  paddingBlock,
  paddingInline,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: SectionPaddingOptions) => css`
  ${!padding &&
  !paddingBlock &&
  !paddingInline &&
  !paddingTop &&
  !paddingRight &&
  !paddingBottom &&
  !paddingLeft
    ? `
      padding-block: 4rem;

      @media (min-width: 768px) {
        padding-block: 6rem;
      }
    `
    : ""}
  ${padding ? `padding: ${padding};` : ""}
  ${paddingBlock ? `padding-block: ${paddingBlock};` : ""}
  ${paddingInline ? `padding-inline: ${paddingInline};` : ""}
  ${paddingTop ? `padding-top: ${paddingTop};` : ""}
  ${paddingRight ? `padding-right: ${paddingRight};` : ""}
  ${paddingBottom ? `padding-bottom: ${paddingBottom};` : ""}
  ${paddingLeft ? `padding-left: ${paddingLeft};` : ""}
`;
