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

  return <LearningGoalsDetailPage goalId={goalId} />;
};

export default LearningGoalsDetailRoutePage;
