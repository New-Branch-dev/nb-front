import { fetchCommonCodeOptionList } from "@shared/config";
import { DIRECT_INPUT_CHIP_LABEL } from "@shared/ui";

export const INTEREST_ITEMS = [
  ...fetchCommonCodeOptionList("JOY_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;

export const STRENGTH_ITEMS = [
  ...fetchCommonCodeOptionList("APTITUDE_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;

export const PERSONALITY_ITEMS = [
  ...fetchCommonCodeOptionList("PERSONALITY_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;

export const LEARNING_TENDENCY_ITEMS = [
  ...fetchCommonCodeOptionList("LEARNING_TENDENCY_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;
