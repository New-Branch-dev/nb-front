import { notFound } from "next/navigation";

import { findLearningGoalDetailById } from "@entities/learning-goals";

import { LearningGoalsDetailPage } from "@views/learning-goals";

type LearningGoalsDetailRoutePageProps = {
  params: Promise<{
    "goal-id": string;
  }>;
};

const LearningGoalsDetailRoutePage = async ({
  params,
}: LearningGoalsDetailRoutePageProps) => {
  const { "goal-id": goalId } = await params;
  const detail = findLearningGoalDetailById(goalId);

  if (!detail) {
    notFound();
  }

  return <LearningGoalsDetailPage detail={detail} />;
};

export default LearningGoalsDetailRoutePage;
