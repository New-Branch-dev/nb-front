import { notFound, redirect } from "next/navigation";

import { isLearningGoalsStepSlug } from "@widgets/learning-goals/model/slug";

import { LearningGoalsCreatePage } from "@views/learning-goals";

type LearningGoalsStepPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LearningGoalsStepPage({
  params,
}: LearningGoalsStepPageProps) {
  const { slug } = await params;

  if (slug === "note-preview") {
    redirect("/learning-goals/goal-setting");
  }

  if (!isLearningGoalsStepSlug(slug)) {
    notFound();
  }

  return <LearningGoalsCreatePage slug={slug} />;
}
