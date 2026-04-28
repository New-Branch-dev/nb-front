"use client";

import { useEffect, useState } from "react";

import { Chip, TextArea } from "@shared/ui";

import {
  chipList,
  learningPatternRoot,
  sectionCard,
  sectionDescription,
  sectionTitle,
} from "./LearningPattern.css";

const INTEREST_ITEMS = [
  "국어",
  "과학",
  "수학",
  "영어",
  "음악",
  "미술",
  "체육",
  "역사",
  "경제",
  "기술",
  "철학",
  "심리학",
  "+",
];

const STRENGTH_ITEMS = [
  "논리적 사고",
  "창의성",
  "언어 능력",
  "수리 능력",
  "공간 지각",
  "음악 감각",
  "대인 관계",
  "자기 이해",
  "자연 탐구",
  "+",
];

type LearningPatternProps = {
  onValidityChange: (isValid: boolean) => void;
};

const toggleItem = (prev: string[], item: string) => {
  return prev.includes(item)
    ? prev.filter((value) => value !== item)
    : [...prev, item];
};

export const LearningPattern = ({ onValidityChange }: LearningPatternProps) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([]);
  const [personality, setPersonality] = useState("");

  const isProfileStepCompleted = Object.values(selectedInterests).every(
    (value) => value.trim().length > 0,
  );

  useEffect(() => {
    onValidityChange(isProfileStepCompleted);
  }, [isProfileStepCompleted, onValidityChange]);

  return (
    <section className={learningPatternRoot} aria-label="학습 성향 입력">
      <article className={sectionCard}>
        <h3 className={sectionTitle}>
          흥미<span className={sectionDescription}>(복수 선택 가능)</span>
        </h3>
        <div className={chipList}>
          {INTEREST_ITEMS.map((item) => (
            <Chip
              key={item}
              size="sm"
              selected={selectedInterests.includes(item)}
              onClick={() =>
                setSelectedInterests((prev) => toggleItem(prev, item))
              }
            >
              {item}
            </Chip>
          ))}
        </div>
      </article>

      <article className={sectionCard}>
        <h3 className={sectionTitle}>
          적성<span className={sectionDescription}>(복수 선택 가능)</span>
        </h3>
        <div className={chipList}>
          {STRENGTH_ITEMS.map((item) => (
            <Chip
              key={item}
              size="sm"
              selected={selectedStrengths.includes(item)}
              onClick={() =>
                setSelectedStrengths((prev) => toggleItem(prev, item))
              }
            >
              {item}
            </Chip>
          ))}
        </div>
      </article>

      <article className={sectionCard}>
        <h3 className={sectionTitle}>성격</h3>
        <TextArea
          value={personality}
          onChange={(event) => setPersonality(event.target.value)}
          placeholder="나의 성격을 자유롭게 설명해주세요. (예: 꼼꼼하고 계획적인 편)"
          aria-label="성격 입력"
        />
      </article>
    </section>
  );
};
