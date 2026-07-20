import { fetchCommonCodeOptionList } from "@shared/config";
import { DIRECT_INPUT_CHIP_LABEL } from "@shared/ui";

export const MATERIAL_FORMAT_ITEMS = [
  ...fetchCommonCodeOptionList("MATERIAL_TYPE_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;

export const CLASS_STYLE_ITEMS = [
  ...fetchCommonCodeOptionList("TEACHING_METHOD_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;

export const LEARNING_METHOD_ITEMS = [
  ...fetchCommonCodeOptionList("LEARNING_STRATEGY_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;
