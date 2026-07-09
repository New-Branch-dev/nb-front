import { NoteCreation } from "@features/learning-goals";

import { LearningGoalsEditPage } from "@views/learning-goals";

type LearningGoalsNoteCreationEditRoutePageProps = {
  searchParams: Promise<{
    goalId?: string;
  }>;
};

const LearningGoalsNoteCreationEditRoutePage = async ({
  searchParams,
}: LearningGoalsNoteCreationEditRoutePageProps) => {
  const { goalId } = await searchParams;

  return (
    <LearningGoalsEditPage goalId={goalId} stepKey="noteCreation">
      <NoteCreation />
    </LearningGoalsEditPage>
  );
};

export default LearningGoalsNoteCreationEditRoutePage;
