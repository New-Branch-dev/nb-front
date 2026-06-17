"use client";

import { useEffect } from "react";

import {
  LearningGoalsDraftProvider,
  LearningGoalsTabRail,
} from "@features/learning-goals";

import {
  LEARNING_GOALS_STEPS,
  type LearningGoalsStepSlug,
  saveLastCreateSlug,
  STEP_PANEL_BY_STEP,
  useLearningGoalsCreateHref,
} from "@widgets/learning-goals";
import {
  LearningStepLayout,
  StepFlowPanelsSection,
  useStepFlow,
} from "@widgets/learning-step-layout";

type LearningGoalsCreatePageProps = {
  slug: LearningGoalsStepSlug;
};

export const LearningGoalsCreatePage = ({ slug }: LearningGoalsCreatePageProps) => {
  const createHref = useLearningGoalsCreateHref(slug);
  const { currentStep, handlersByStep, navigation } = useStepFlow({
    steps: LEARNING_GOALS_STEPS,
    currentSlug: slug,
    getStepHref: (stepSlug) => `/learning-goals/${stepSlug}`,
  });

  useEffect(() => {
    saveLastCreateSlug(slug);
  }, [slug]);

  return (
    <LearningStepLayout
      titleText="학습 목표 달성"
      descriptionText="개별화 교육으로 학습 목표를 달성하세요."
      progressItems={LEARNING_GOALS_STEPS}
      currentStep={currentStep}
      navigation={navigation}
      actionActivityNamePrefix="learning-goals"
      finalEnabledLabel="목표 생성"
      finalDisabledLabel="목표 생성"
      belowHeader={
        <LearningGoalsTabRail activeTab="create" createHref={createHref} />
      }
    >
      <LearningGoalsDraftProvider>
        <StepFlowPanelsSection
          steps={LEARNING_GOALS_STEPS}
          currentStep={currentStep}
          handlersByStep={handlersByStep}
          panelByStep={STEP_PANEL_BY_STEP}
          withoutPanelCardSteps={[6]}
          ariaLabel="학습 목표 달성 단계 콘텐츠"
          activityNamePrefix="learning-goals"
        />
      </LearningGoalsDraftProvider>
    </LearningStepLayout>
  );
};
