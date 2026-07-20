export type CommonCodeItem = {
  code: string;
  label: string;
};

export type CommonCodeGroupId =
  | "LEARNING_PURPOSE_CD"
  | "LEARNING_METHOD_CD"
  | "CONSOLIDATIONS_ITEM_CD"
  | "CONSOLIDATIONS_METHOD_CD"
  | "DUPLICATE_PROCESSING_METHOD_CD"
  | "JOY_CD"
  | "APTITUDE_CD"
  | "PERSONALITY_CD"
  | "LEARNING_TENDENCY_CD"
  | "MATERIAL_TYPE_CD"
  | "TEACHING_METHOD_CD"
  | "LEARNING_STRATEGY_CD"
  | "TEACHER_STYLE_CD"
  | "TEAM_MEMBER_STYLE_CD";

const createCommonCodeItem = (
  groupId: CommonCodeGroupId,
  codeNumber: number,
  label: string,
): CommonCodeItem => {
  const code = String(codeNumber).padStart(3, "0");

  return {
    code: `${groupId}_${code}`,
    label,
  };
};

export const COMMON_CODE = {
  LEARNING_PURPOSE_CD: [
    createCommonCodeItem("LEARNING_PURPOSE_CD", 1, "시험준비"),
    createCommonCodeItem("LEARNING_PURPOSE_CD", 2, "자격증취득"),
    createCommonCodeItem("LEARNING_PURPOSE_CD", 3, "학점관리"),
    createCommonCodeItem("LEARNING_PURPOSE_CD", 4, "자기계발"),
    createCommonCodeItem("LEARNING_PURPOSE_CD", 5, "의무교육"),
    createCommonCodeItem("LEARNING_PURPOSE_CD", 6, "진로준비"),
    createCommonCodeItem("LEARNING_PURPOSE_CD", 7, "프로젝트수행"),
    createCommonCodeItem("LEARNING_PURPOSE_CD", 8, "업무역량향상"),
    createCommonCodeItem("LEARNING_PURPOSE_CD", 9, "취미교양학습"),
    createCommonCodeItem("LEARNING_PURPOSE_CD", 10, "연구탐구활동"),
  ],
  LEARNING_METHOD_CD: [
    createCommonCodeItem("LEARNING_METHOD_CD", 1, "이해중심학습"),
    createCommonCodeItem("LEARNING_METHOD_CD", 2, "암기중심학습"),
    createCommonCodeItem("LEARNING_METHOD_CD", 3, "구조화학습"),
    createCommonCodeItem("LEARNING_METHOD_CD", 4, "간격반복학습"),
    createCommonCodeItem("LEARNING_METHOD_CD", 5, "인출중심학습"),
    createCommonCodeItem("LEARNING_METHOD_CD", 6, "오류개선학습"),
    createCommonCodeItem("LEARNING_METHOD_CD", 7, "실전대비학습"),
    createCommonCodeItem("LEARNING_METHOD_CD", 8, "표현수행학습"),
    createCommonCodeItem("LEARNING_METHOD_CD", 9, "탐구프로젝트학습"),
    createCommonCodeItem("LEARNING_METHOD_CD", 10, "자기관리학습"),
  ],
  CONSOLIDATIONS_ITEM_CD: [
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 1, "핵심개념"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 2, "개념설명"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 3, "예시"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 4, "핵심요약"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 5, "구조관계"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 6, "비교차이점"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 7, "원리이유"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 8, "과정순서"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 9, "공식규칙"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 10, "암기포인트"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 11, "예상질문"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 12, "오답주의점"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 13, "배경지식"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 14, "관련개념"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 15, "탐구질문"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 16, "실생활연결"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 17, "관점해석"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 18, "자료분석"),
    createCommonCodeItem("CONSOLIDATIONS_ITEM_CD", 19, "학습상태표시"),
  ],
  CONSOLIDATIONS_METHOD_CD: [
    createCommonCodeItem("CONSOLIDATIONS_METHOD_CD", 1, "요약노트"),
    createCommonCodeItem("CONSOLIDATIONS_METHOD_CD", 2, "표정리"),
    createCommonCodeItem("CONSOLIDATIONS_METHOD_CD", 3, "마인드맵"),
    createCommonCodeItem("CONSOLIDATIONS_METHOD_CD", 4, "개념카드"),
    createCommonCodeItem("CONSOLIDATIONS_METHOD_CD", 5, "질문노트"),
    createCommonCodeItem("CONSOLIDATIONS_METHOD_CD", 6, "오답노트"),
    createCommonCodeItem("CONSOLIDATIONS_METHOD_CD", 7, "과정흐름도"),
    createCommonCodeItem("CONSOLIDATIONS_METHOD_CD", 8, "코넬노트"),
    createCommonCodeItem("CONSOLIDATIONS_METHOD_CD", 9, "시각자료정리"),
    createCommonCodeItem("CONSOLIDATIONS_METHOD_CD", 10, "포트폴리오정리"),
  ],
  DUPLICATE_PROCESSING_METHOD_CD: [
    createCommonCodeItem("DUPLICATE_PROCESSING_METHOD_CD", 1, "모든목차모두정리"),
    createCommonCodeItem("DUPLICATE_PROCESSING_METHOD_CD", 2, "모든목차요약정리"),
    createCommonCodeItem("DUPLICATE_PROCESSING_METHOD_CD", 3, "마지막에서만정리"),
    createCommonCodeItem("DUPLICATE_PROCESSING_METHOD_CD", 4, "처음에만정리"),
  ],
  JOY_CD: [
    createCommonCodeItem("JOY_CD", 1, "언어·문학"),
    createCommonCodeItem("JOY_CD", 2, "외국어·문화"),
    createCommonCodeItem("JOY_CD", 3, "수학·논리"),
    createCommonCodeItem("JOY_CD", 4, "과학·탐구"),
    createCommonCodeItem("JOY_CD", 5, "기술·AI"),
    createCommonCodeItem("JOY_CD", 6, "예술·창작"),
    createCommonCodeItem("JOY_CD", 7, "운동·신체"),
    createCommonCodeItem("JOY_CD", 8, "사회·경제"),
    createCommonCodeItem("JOY_CD", 9, "사람·심리"),
    createCommonCodeItem("JOY_CD", 10, "창업·리더십"),
  ],
  APTITUDE_CD: [
    createCommonCodeItem("APTITUDE_CD", 1, "논리적 사고"),
    createCommonCodeItem("APTITUDE_CD", 2, "창의성"),
    createCommonCodeItem("APTITUDE_CD", 3, "언어 능력"),
    createCommonCodeItem("APTITUDE_CD", 4, "수리 능력"),
    createCommonCodeItem("APTITUDE_CD", 5, "공간 지각"),
    createCommonCodeItem("APTITUDE_CD", 6, "예술 감각"),
    createCommonCodeItem("APTITUDE_CD", 7, "대인 관계"),
    createCommonCodeItem("APTITUDE_CD", 8, "자기 관리"),
    createCommonCodeItem("APTITUDE_CD", 9, "자연 탐구"),
    createCommonCodeItem("APTITUDE_CD", 10, "실행·리더십"),
  ],
  PERSONALITY_CD: [
    createCommonCodeItem("PERSONALITY_CD", 1, "개방성"),
    createCommonCodeItem("PERSONALITY_CD", 2, "성실성"),
    createCommonCodeItem("PERSONALITY_CD", 3, "외향성"),
    createCommonCodeItem("PERSONALITY_CD", 4, "친화성"),
    createCommonCodeItem("PERSONALITY_CD", 5, "안정성"),
    createCommonCodeItem("PERSONALITY_CD", 6, "도전성"),
    createCommonCodeItem("PERSONALITY_CD", 7, "자기주도성"),
    createCommonCodeItem("PERSONALITY_CD", 8, "탐구성"),
    createCommonCodeItem("PERSONALITY_CD", 9, "유연성"),
    createCommonCodeItem("PERSONALITY_CD", 10, "리더십"),
  ],
  LEARNING_TENDENCY_CD: [
    createCommonCodeItem("LEARNING_TENDENCY_CD", 1, "자기주도형"),
    createCommonCodeItem("LEARNING_TENDENCY_CD", 2, "탐구형"),
    createCommonCodeItem("LEARNING_TENDENCY_CD", 3, "실천형"),
    createCommonCodeItem("LEARNING_TENDENCY_CD", 4, "협력형"),
    createCommonCodeItem("LEARNING_TENDENCY_CD", 5, "전략형"),
    createCommonCodeItem("LEARNING_TENDENCY_CD", 6, "도전형"),
    createCommonCodeItem("LEARNING_TENDENCY_CD", 7, "성장형"),
    createCommonCodeItem("LEARNING_TENDENCY_CD", 8, "몰입형"),
    createCommonCodeItem("LEARNING_TENDENCY_CD", 9, "창조형"),
    createCommonCodeItem("LEARNING_TENDENCY_CD", 10, "안정형"),
  ],
  MATERIAL_TYPE_CD: [
    createCommonCodeItem("MATERIAL_TYPE_CD", 1, "글·문서 자료"),
    createCommonCodeItem("MATERIAL_TYPE_CD", 2, "시각 자료"),
    createCommonCodeItem("MATERIAL_TYPE_CD", 3, "영상 자료"),
    createCommonCodeItem("MATERIAL_TYPE_CD", 4, "음성 자료"),
    createCommonCodeItem("MATERIAL_TYPE_CD", 5, "구조화 자료"),
    createCommonCodeItem("MATERIAL_TYPE_CD", 6, "문제 풀이 자료"),
    createCommonCodeItem("MATERIAL_TYPE_CD", 7, "사례 기반 자료"),
    createCommonCodeItem("MATERIAL_TYPE_CD", 8, "체험형 자료"),
    createCommonCodeItem("MATERIAL_TYPE_CD", 9, "상호작용 자료"),
    createCommonCodeItem("MATERIAL_TYPE_CD", 10, "데이터 기반 자료"),
  ],
  TEACHING_METHOD_CD: [
    createCommonCodeItem("TEACHING_METHOD_CD", 1, "설명 중심 수업"),
    createCommonCodeItem("TEACHING_METHOD_CD", 2, "탐구 중심 수업"),
    createCommonCodeItem("TEACHING_METHOD_CD", 3, "문제 해결 수업"),
    createCommonCodeItem("TEACHING_METHOD_CD", 4, "프로젝트 수업"),
    createCommonCodeItem("TEACHING_METHOD_CD", 5, "토론·토의 수업"),
    createCommonCodeItem("TEACHING_METHOD_CD", 6, "협력 학습"),
    createCommonCodeItem("TEACHING_METHOD_CD", 7, "체험·실습 수업"),
    createCommonCodeItem("TEACHING_METHOD_CD", 8, "맞춤형 개별 수업"),
    createCommonCodeItem("TEACHING_METHOD_CD", 9, "반복·훈련 수업"),
    createCommonCodeItem("TEACHING_METHOD_CD", 10, "창의·융합 수업"),
  ],
  LEARNING_STRATEGY_CD: [
    createCommonCodeItem("LEARNING_STRATEGY_CD", 1, "이해 중심 학습"),
    createCommonCodeItem("LEARNING_STRATEGY_CD", 2, "반복 학습"),
    createCommonCodeItem("LEARNING_STRATEGY_CD", 3, "문제 해결 학습"),
    createCommonCodeItem("LEARNING_STRATEGY_CD", 4, "정리 학습"),
    createCommonCodeItem("LEARNING_STRATEGY_CD", 5, "인출 학습"),
    createCommonCodeItem("LEARNING_STRATEGY_CD", 6, "설명 학습"),
    createCommonCodeItem("LEARNING_STRATEGY_CD", 7, "연결 학습"),
    createCommonCodeItem("LEARNING_STRATEGY_CD", 8, "계획 학습"),
    createCommonCodeItem("LEARNING_STRATEGY_CD", 9, "협력 학습"),
    createCommonCodeItem("LEARNING_STRATEGY_CD", 10, "실천 학습"),
  ],
  TEACHER_STYLE_CD: [
    createCommonCodeItem("TEACHER_STYLE_CD", 1, "엄격형"),
    createCommonCodeItem("TEACHER_STYLE_CD", 2, "자유형"),
    createCommonCodeItem("TEACHER_STYLE_CD", 3, "설명형"),
    createCommonCodeItem("TEACHER_STYLE_CD", 4, "코칭형"),
    createCommonCodeItem("TEACHER_STYLE_CD", 5, "피드백형"),
    createCommonCodeItem("TEACHER_STYLE_CD", 6, "동기부여형"),
    createCommonCodeItem("TEACHER_STYLE_CD", 7, "도전제시형"),
    createCommonCodeItem("TEACHER_STYLE_CD", 8, "관계중심형"),
    createCommonCodeItem("TEACHER_STYLE_CD", 9, "실전중심형"),
    createCommonCodeItem("TEACHER_STYLE_CD", 10, "탐구촉진형"),
  ],
  TEAM_MEMBER_STYLE_CD: [
    createCommonCodeItem("TEAM_MEMBER_STYLE_CD", 1, "협동형"),
    createCommonCodeItem("TEAM_MEMBER_STYLE_CD", 2, "독립형"),
    createCommonCodeItem("TEAM_MEMBER_STYLE_CD", 3, "성장형"),
    createCommonCodeItem("TEAM_MEMBER_STYLE_CD", 4, "탐구형"),
    createCommonCodeItem("TEAM_MEMBER_STYLE_CD", 5, "창의형"),
    createCommonCodeItem("TEAM_MEMBER_STYLE_CD", 6, "실행형"),
    createCommonCodeItem("TEAM_MEMBER_STYLE_CD", 7, "리더형"),
    createCommonCodeItem("TEAM_MEMBER_STYLE_CD", 8, "지원형"),
    createCommonCodeItem("TEAM_MEMBER_STYLE_CD", 9, "경쟁형"),
    createCommonCodeItem("TEAM_MEMBER_STYLE_CD", 10, "책임형"),
  ],
} as const satisfies Record<CommonCodeGroupId, readonly CommonCodeItem[]>;

export const fetchCommonCodeLabelList = (groupId: CommonCodeGroupId) => {
  return COMMON_CODE[groupId].map((item) => item.label);
};

export const fetchCommonCodeOptionList = (groupId: CommonCodeGroupId) => {
  return COMMON_CODE[groupId].map((item) => ({
    label: item.label,
    value: item.code,
  }));
};

export const convertCommonCodeLabelToValue = (
  groupId: CommonCodeGroupId,
  label: string,
) => {
  const commonCodeItem = COMMON_CODE[groupId].find(
    (item) => item.label === label || item.code === label,
  );

  return commonCodeItem?.code ?? label;
};

export const convertCommonCodeValueToLabel = (
  groupId: CommonCodeGroupId,
  value: string,
) => {
  const commonCodeItem = COMMON_CODE[groupId].find(
    (item) => item.code === value || item.label === value,
  );

  return commonCodeItem?.label ?? value;
};

export const convertCommonCodeLabelListToValueList = (
  groupId: CommonCodeGroupId,
  labelList: string[],
) => {
  return labelList.map((label) => convertCommonCodeLabelToValue(groupId, label));
};

export const convertCommonCodeValueListToLabelList = (
  groupId: CommonCodeGroupId,
  valueList: string[],
) => {
  return valueList.map((value) => convertCommonCodeValueToLabel(groupId, value));
};
