"use client";

import { useState } from "react";

import {
  LearningGoalsListPanel,
  type LearningGoalsListSortKey,
} from "@entities/learning-goals";

import { LearningGoalsTabRail } from "@features/learning-goals";

import { LearningStepLayout } from "@widgets/learning-step-layout";

import {
  LEARNING_GOALS_DESCRIPTION,
  LEARNING_GOALS_TITLE,
} from "@views/learning-goals/lib/content-title";
import { INACTIVE_STEP_FLOW_NAVIGATION } from "@views/learning-goals/lib/inactive-step-flow-navigation";
import { LEARNING_GOALS_STEPS } from "@views/learning-goals/lib/step";

const LEARNING_GOALS_CREATE_HREF = "/learning-goals/note-creation";

export const LearningGoalsListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<LearningGoalsListSortKey>("latest");

  return (
    <LearningStepLayout
      titleText={LEARNING_GOALS_TITLE}
      descriptionText={LEARNING_GOALS_DESCRIPTION}
      progressItems={LEARNING_GOALS_STEPS}
      currentStep={1}
      navigation={INACTIVE_STEP_FLOW_NAVIGATION}
      wizardChrome={false}
      belowHeader={
        <LearningGoalsTabRail
          activeTab="list"
          createHref={LEARNING_GOALS_CREATE_HREF}
          searchQuery={searchQuery}
          sortKey={sortKey}
          onSearchQueryChange={setSearchQuery}
          onSortChange={setSortKey}
        />
      }
    >
      <LearningGoalsListPanel searchQuery={searchQuery} sortKey={sortKey} />
    </LearningStepLayout>
  );
};
