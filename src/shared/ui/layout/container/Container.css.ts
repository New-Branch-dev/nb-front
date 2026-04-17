import { style } from "@vanilla-extract/css";

import { mediaQuery } from "@shared/styles/media-query.css";
import {
  alignItemsStyle,
  flexBaseStyle,
  flexDirectionStyle,
  justifyContentStyle,
} from "@shared/ui/layout/flex/Flex.css";

export const containerRootStyle = style([
  flexBaseStyle,
  flexDirectionStyle.column,
  justifyContentStyle.between,
  alignItemsStyle.center,
  {
    width: "100%",
    height: "100%",
    minHeight: "100dvh",
  },
]);

export const containerInnerStyle = style([
  {
    width: "100%",
    paddingBlock: "9rem",
    paddingInline: "5rem",
  },
  mediaQuery({
    mobile: {
      paddingBlock: "7rem",
      paddingInline: 0,
    },
  }),
]);
