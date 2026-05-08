"use client";

import { LearningStepLayout } from "@widgets/learning-step-layout";
import {
  deriveStepFlowNavigation,
  useStepValidityByStep,
} from "@widgets/learning-step-layout";
import { MyLearningStepContent } from "@widgets/my-learning";
import { MY_LEARNING_STEPS, STEP_ITEMS } from "@widgets/my-learning/model/consts";
import {
  getStepBySlug,
  type MyLearningStepSlug,
} from "@widgets/my-learning/model/slug";

type MyLearningPageProps = {
  slug: MyLearningStepSlug;
};

export const MyLearningPage = ({ slug }: MyLearningPageProps) => {
  const stepMeta = getStepBySlug(slug);
  const currentStep = stepMeta.step;
  const { validityByStep, handlersByStep } = useStepValidityByStep(MY_LEARNING_STEPS);
  const navigation = deriveStepFlowNavigation({
    steps: MY_LEARNING_STEPS,
    currentStep,
    validityByStep,
    getStepHref: (stepSlug) => `/my-learning/${stepSlug}`,
  });

  return (
    <LearningStepLayout
      titleText="나만의 학습"
      descriptionText="경쟁을 강화하여 나만의 학습 시스템을 구축해보세요."
      progressItems={STEP_ITEMS}
      currentStep={currentStep}
      navigation={navigation}
      actionActivityNamePrefix="my-learning"
    >
      <MyLearningStepContent
        key={`step-content-${slug}`}
        currentStep={currentStep}
        handlersByStep={handlersByStep}
      />
    </LearningStepLayout>
  );
};
