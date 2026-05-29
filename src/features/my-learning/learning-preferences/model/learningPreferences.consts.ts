import { DIRECT_INPUT_CHIP_LABEL } from "@shared/ui";

export const MATERIAL_FORMAT_ITEMS = [
  "텍스트 자료",
  "이미지/인포그래픽",
  "영상 강의",
  "오디오 자료",
  "실습 자료",
  DIRECT_INPUT_CHIP_LABEL,
] as const;

export const CLASS_STYLE_ITEMS = [
  "강의식 수업",
  "토론형 수업",
  "프로젝트형 수업",
  "문제풀이 중심 수업",
  "질의응답 중심 수업",
  DIRECT_INPUT_CHIP_LABEL,
] as const;

export const LEARNING_METHOD_ITEMS = [
  "반복 학습",
  "요약 정리",
  "필기 중심 학습",
  "실전 문제풀이",
  "스터디 그룹 학습",
  DIRECT_INPUT_CHIP_LABEL,
] as const;
