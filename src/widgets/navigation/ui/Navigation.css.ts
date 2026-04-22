import { style } from "@vanilla-extract/css";

import { flexInlineCenter } from "@shared/styles/flex.css";
import { mediaQuery } from "@shared/styles/media-query.css";
import { themeTokens } from "@shared/styles/theme.css";

export const navShell = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  zIndex: 10,
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.96)",
  borderBottom: "1px solid rgba(23, 23, 23, 0.12)",
});

export const navInner = style([
  {
    width: "100%",
    minHeight: "4rem",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: themeTokens.gap.md,
    paddingInline: "10rem",
  },
  mediaQuery({
    mobile: {
      paddingInline: "1.5rem",
      gap: themeTokens.gap.sm,
    },
    laptop: {
      paddingInline: "5rem",
      gap: themeTokens.gap.md,
    },
  }),
]);

export const centerSlot = style({ justifySelf: "center" });

export const brand = style({
  fontSize: "clamp(1rem, 2vw, 1.125rem)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#171717",
});

export const menu = style([
  {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    gap: themeTokens.gap["9xl"],
    margin: 0,
    padding: 0,
  },
  mediaQuery({
    laptop: { gap: themeTokens.gap["6xl"] },
    mobile: { gap: themeTokens.gap.sm },
  }),
]);

export const link = style([
  flexInlineCenter,
  {
    minHeight: "2.25rem",
    color: "#171717",
    fontSize: "0.9rem",
    transition: "color 0.2s ease",
    selectors: {
      "&:hover": { color: "#171717" },
    },
  },
]);

export const navActionGroup = style([
  flexInlineCenter,
  { gap: themeTokens.gap["2xl"] },
  mediaQuery({
    laptop: { gap: themeTokens.gap.lg },
    mobile: { gap: themeTokens.gap.sm },
  }),
]);
