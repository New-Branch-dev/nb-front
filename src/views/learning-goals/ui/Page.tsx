import type { LearningGoalsStepSlug } from "@widgets/learning-goals";

import { LearningGoalsCreatePage } from "./CreatePage";
import { LearningGoalsListPage } from "./ListPage";

export type LearningGoalsPageProps =
  | { mode: "list" }
  | { mode: "create"; slug: LearningGoalsStepSlug };

/** @deprecated `LearningGoalsCreatePage` / `LearningGoalsListPage` 사용 */
export const LearningGoalsPage = (props: LearningGoalsPageProps) => {
  if (props.mode === "list") {
    return <LearningGoalsListPage />;
  }

  return <LearningGoalsCreatePage slug={props.slug} />;
};
