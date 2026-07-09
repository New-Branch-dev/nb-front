import { GoalSetting } from "@features/learning-goals";

import { LearningGoalsEditPage } from "@views/learning-goals";

type LearningGoalsGoalSettingEditRoutePageProps = {
  searchParams: Promise<{
    goalId?: string;
  }>;
};

const LearningGoalsGoalSettingEditRoutePage = async ({
  searchParams,
}: LearningGoalsGoalSettingEditRoutePageProps) => {
  const { goalId } = await searchParams;

  return (
    <LearningGoalsEditPage goalId={goalId} stepKey="goalSetting">
      <GoalSetting />
    </LearningGoalsEditPage>
  );
};

export default LearningGoalsGoalSettingEditRoutePage;
