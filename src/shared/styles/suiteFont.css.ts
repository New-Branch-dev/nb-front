import { globalFontFace } from "@vanilla-extract/css";

const SUITE_CDN =
  "https://cdn.jsdelivr.net/gh/sun-typeface/SUITE@2/fonts/static/woff2";

globalFontFace("SUITE", {
  src: `url("${SUITE_CDN}/SUITE-ExtraBold.woff2") format("woff2")`,
  fontWeight: 800,
  fontDisplay: "swap",
});
