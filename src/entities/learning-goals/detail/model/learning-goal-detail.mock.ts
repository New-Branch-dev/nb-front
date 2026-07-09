import type { LearningGoalDetail } from "@entities/learning-goals/detail/model/learning-goal-detail.types";
import { LEARNING_GOALS_MOCK } from "@entities/learning-goals/list/model/learningGoals.mock";

const DEFAULT_DETAIL_BASE = LEARNING_GOALS_MOCK[0];

export const LEARNING_GOAL_DETAIL_MOCK: LearningGoalDetail = {
  ...DEFAULT_DETAIL_BASE,
  id: "goal-1",
  category: "의무 교육",
  title: "고2 통합사회 기말",
  createdAt: "2026-06-20",
  startAt: "2026-06-22",
  deadlineAt: "2026-07-31",
  periodStart: "2026.06.22",
  periodEnd: "2026.07.31",
  targetScore: 89,
  maxScore: 100,
  headerIconSrc: "/learning-goals-list/compulsory-education.svg",
  weeklyTargetHour: 11,
  noteFileList: [
    {
      id: "note-1",
      iconSrc: "/learning-goals/book.svg",
      name: "비상 평가문제집 통합사회 고2.pdf",
    },
    {
      id: "note-2",
      iconSrc: "/learning-goals/paper.svg",
      name: "내신 기출문제 요약본.word",
    },
    {
      id: "note-3",
      iconSrc: "/learning-goals/text.svg",
      name: "3/26 통사 수업 녹음본.mp3",
    },
  ],
  condensedNoteList: [
    {
      id: "condensed-1",
      iconSrc: "/book-mark-icon.png",
      name: "고2 통합사회 기말자료",
    },
  ],
  goalChipList: [
    "중2 국어 중간고사 내신대비",
    "시험 준비",
    "89점 목표",
    "이해 중심 학습",
  ],
  periodInfoList: [
    {
      label: "기간",
      valueList: ["26.06.22 - 26.07.31"],
    },
    {
      label: "제외일",
      valueList: [
        "총 6일 제외",
        "6월27일",
        "7월1일",
        "7월2일",
        "7월3일",
        "7월17일",
        "7월18일",
      ],
    },
    {
      label: "공부시간",
      valueList: ["주 11시간 목표", "월 3시간", "화 1시간", "수 3시간", "목 1시간", "금 3시간"],
    },
  ],
};
