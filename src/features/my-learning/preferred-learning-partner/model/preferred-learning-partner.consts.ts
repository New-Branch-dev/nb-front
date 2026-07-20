import { fetchCommonCodeOptionList } from "@shared/config";
import { DIRECT_INPUT_CHIP_LABEL } from "@shared/ui";

export const TEACHER_STYLE_ITEMS = [
  ...fetchCommonCodeOptionList("TEACHER_STYLE_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;

export const TEAM_MEMBER_STYLE_ITEMS = [
  ...fetchCommonCodeOptionList("TEAM_MEMBER_STYLE_CD"),
  DIRECT_INPUT_CHIP_LABEL,
] as const;
