import { style } from "@vanilla-extract/css";

import { flexColumnBetweenCenter } from "@shared/styles/flex.css";
import { mediaQuery } from "@shared/styles/media-query.css";

export const containerRoot = style([
  flexColumnBetweenCenter,
  {
    width: "100%",
    height: "100%",
    minHeight: "100dvh",
  },
]);

export const containerInner = style([
  {
    width: "100%",
    paddingBlock: "10.5rem",
    paddingInline: "10rem",
  },
  mediaQuery({
    laptop: {
      paddingBlock: "8rem",
      paddingInline: "5rem",
    },
    mobile: {
      paddingBlock: "5rem",
      paddingInline: "1.5rem",
    },
  }),
]);
