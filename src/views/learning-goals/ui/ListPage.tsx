"use client";

import { LearningGoalsListPanel, LearningGoalsTabRail } from "@features/learning-goals";

import {
  INACTIVE_STEP_FLOW_NAVIGATION,
  LEARNING_GOALS_STEPS,
  useLearningGoalsCreateHref,
} from "@widgets/learning-goals";
import { LearningStepLayout } from "@widgets/learning-step-layout";

export const LearningGoalsListPage = () => {
  const createHref = useLearningGoalsCreateHref();

  return (
    <LearningStepLayout
      titleText="학습 목표 달성"
      descriptionText="개별화 교육으로 학습 목표를 달성하세요."
      progressItems={LEARNING_GOALS_STEPS}
      currentStep={1}
      navigation={INACTIVE_STEP_FLOW_NAVIGATION}
      wizardChrome={false}
      belowHeader={
        <LearningGoalsTabRail activeTab="list" createHref={createHref} />
      }
    >
      <LearningGoalsListPanel createHref={createHref} />
    </LearningStepLayout>
  );
};
