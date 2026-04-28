"use client";

import { useEffect, useState } from "react";

import { Input } from "@shared/ui";

import { fieldGroup } from "./my-profile/MyProfile.css";

type StepGoalContentProps = {
  onValidityChange: (isValid: boolean) => void;
};

export const StepGoalContent = ({ onValidityChange }: StepGoalContentProps) => {
  const [goal, setGoal] = useState("");

  const isValid = goal.trim().length > 0;

  useEffect(() => {
    onValidityChange(isValid);
  }, [isValid, onValidityChange]);

  return (
    <article aria-label="2단계 학습 목표 입력">
      <div className={fieldGroup}>
        <Input
          name="goal"
          placeholder="이번 학습의 목표를 입력해주세요"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
          aria-label="학습 목표"
        />
      </div>
    </article>
  );
};
