"use client";

import { useEffect, useState } from "react";

import {
  fetchLearningGoalDetail,
  type LearningGoalDetail,
  LearningGoalDetailView,
} from "@entities/learning-goals";

type LearningGoalsDetailPageProps = {
  goalId: string;
};

export const LearningGoalsDetailPage = ({
  goalId,
}: LearningGoalsDetailPageProps) => {
  const [detail, setDetail] = useState<LearningGoalDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let canSetState = true;

    const loadDetail = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        const nextDetail = await fetchLearningGoalDetail(goalId);

        if (canSetState) {
          setDetail(nextDetail);
        }
      } catch {
        if (canSetState) {
          setHasError(true);
          setDetail(null);
        }
      } finally {
        if (canSetState) {
          setIsLoading(false);
        }
      }
    };

    void loadDetail();

    return () => {
      canSetState = false;
    };
  }, [goalId]);

  if (isLoading) {
    return <p>학습 목표를 불러오는 중이에요</p>;
  }

  if (hasError || !detail) {
    return <p>학습 목표를 불러오지 못했어요</p>;
  }

  return <LearningGoalDetailView detail={detail} />;
};
