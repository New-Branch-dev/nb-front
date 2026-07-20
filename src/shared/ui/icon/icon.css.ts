import { recipe } from "@vanilla-extract/recipes";

export const iconRecipe = recipe({
  base: {
    display: "inline-block",
    flexShrink: 0,
    objectFit: "contain",
  },
  variants: {
    size: {
      sm: {
        width: "1.25rem",
        height: "1.25rem",
      },
      md: {
        width: "1.625rem",
        height: "1.625rem",
      },
      lg: {
        width: "3.125rem",
        height: "3.125rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
