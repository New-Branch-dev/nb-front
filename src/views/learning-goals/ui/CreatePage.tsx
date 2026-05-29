"use client";

import { useEffect } from "react";

import { LearningGoalsTabRail } from "@features/learning-goals";

import {
  getStepBySlug,
  LEARNING_GOALS_STEP_ITEMS,
  LEARNING_GOALS_STEPS,
  LearningGoalsStepContent,
  type LearningGoalsStepSlug,
  saveLastCreateSlug,
  useLearningGoalsCreateHref,
} from "@widgets/learning-goals";
import { LearningStepLayout } from "@widgets/learning-step-layout";
import {
  deriveStepFlowNavigation,
  useStepValidityByStep,
} from "@widgets/learning-step-layout";

type LearningGoalsCreatePageProps = {
  slug: LearningGoalsStepSlug;
};

export const LearningGoalsCreatePage = ({ slug }: LearningGoalsCreatePageProps) => {
  const stepMeta = getStepBySlug(slug);
  const currentStep = stepMeta.step;
  const createHref = useLearningGoalsCreateHref(slug);

  const { validityByStep, handlersByStep } = useStepValidityByStep(
    LEARNING_GOALS_STEPS,
  );
  const navigation = deriveStepFlowNavigation({
    steps: LEARNING_GOALS_STEPS,
    currentStep,
    validityByStep,
    getStepHref: (stepSlug) => `/learning-goals/${stepSlug}`,
  });

  useEffect(() => {
    saveLastCreateSlug(slug);
  }, [slug]);

  return (
    <LearningStepLayout
      titleText="학습 목표 달성"
      descriptionText="개별화 교육으로 학습 목표를 달성하세요."
      progressItems={LEARNING_GOALS_STEP_ITEMS}
      currentStep={currentStep}
      navigation={navigation}
      actionActivityNamePrefix="learning-goals"
      finalEnabledLabel="목표 생성"
      finalDisabledLabel="목표 생성"
      belowHeader={
        <LearningGoalsTabRail activeTab="create" createHref={createHref} />
      }
    >
      <LearningGoalsStepContent
        key={`learning-goals-step-${slug}`}
        currentStep={currentStep}
        handlersByStep={handlersByStep}
      />
    </LearningStepLayout>
  );
};
