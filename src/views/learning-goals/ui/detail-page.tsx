import type { LearningGoalDetail } from "@entities/learning-goals";
import { LearningGoalDetailView } from "@entities/learning-goals";

type LearningGoalsDetailPageProps = {
  detail: LearningGoalDetail;
};

export const LearningGoalsDetailPage = ({
  detail,
}: LearningGoalsDetailPageProps) => {
  return <LearningGoalDetailView detail={detail} />;
};
