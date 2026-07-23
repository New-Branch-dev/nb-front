export type MainSliderItem = {
  id: string;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const MAIN_SLIDER_ITEMS: MainSliderItem[] = [
  {
    id: "1",
    icon: "/human-icon.png",
    iconAlt: "나만의 학습 아이콘",
    title: "나만의 학습",
    description:
      "간단한 정보 입력만으로 나에게 맞는 \n학습 시스템을 완성해 보세요.",
    href: "/my-learning/profile",
    imageSrc: "/blue-puzzle.png",
    imageAlt: "나만의 학습 일러스트",
  },
  {
    id: "2",
    icon: "/target-icon.png",
    iconAlt: "학습 목표 달성 아이콘",
    title: "학습 목표 달성",
    description: "개별화 교육으로 나만의 학습 목표를\n 설정하고 달성해 보세요.",
    href: "/learning-goals/note-creation",
    imageSrc: "/target.png",
    imageAlt: "학습 목표 달성 일러스트",
  },
  {
    id: "3",
    icon: "/book-mark-icon.png",
    iconAlt: "단권화 아이콘",
    title: "단권화",
    description: "여러 학습 자료를 하나로 통합하여\n 효율적으로 학습 하세요.",
    href: "/condensed-notes",
    imageSrc: "/book.png",
    imageAlt: "단권화 일러스트",
  },
];
