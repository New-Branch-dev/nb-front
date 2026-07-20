const DEFAULT_THUMBNAIL_SRC = "/learning-goals-list/etc.svg";

const THUMBNAIL_BY_CATEGORY: Record<string, string> = {
  시험준비: "/learning-goals-list/docs.svg",
  "시험 준비": "/learning-goals-list/docs.svg",
  시험: "/learning-goals-list/docs.svg",
  자격증취득: "/learning-goals-list/certification.svg",
  "자격증 취득": "/learning-goals-list/certification.svg",
  자격증: "/learning-goals-list/certification.svg",
  학점관리: "/learning-goals-list/management.svg",
  "학점 관리": "/learning-goals-list/management.svg",
  자기계발: "/learning-goals-list/self-development.svg",
  "자기 계발": "/learning-goals-list/self-development.svg",
  의무교육: "/learning-goals-list/compulsory-education.svg",
  "의무 교육": "/learning-goals-list/compulsory-education.svg",
  진로준비: "/learning-goals-list/career-preparation.svg",
  "진로 준비": "/learning-goals-list/career-preparation.svg",
  프로젝트수행: "/learning-goals-list/project.svg",
  "프로젝트 수행": "/learning-goals-list/project.svg",
  업무역량향상: "/learning-goals-list/Improvement-of-work-capabilities.svg",
  "업무역량 향상":
    "/learning-goals-list/Improvement-of-work-capabilities.svg",
  취미교양학습: "/learning-goals-list/hobby.svg",
  "취미 교양 학습": "/learning-goals-list/hobby.svg",
  연구탐구활동: "/learning-goals-list/research.svg",
  "연구 탐구 활동": "/learning-goals-list/research.svg",
  직접입력: DEFAULT_THUMBNAIL_SRC,
};

export const getLearningGoalThumbnail = (category: string): string =>
  THUMBNAIL_BY_CATEGORY[category] ?? DEFAULT_THUMBNAIL_SRC;
