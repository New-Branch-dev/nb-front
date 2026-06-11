import { LearningGoalsPage } from "@views/learning-goals";

const LearningGoalsCreateRouteLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <LearningGoalsPage>{children}</LearningGoalsPage>;
};

export default LearningGoalsCreateRouteLayout;
