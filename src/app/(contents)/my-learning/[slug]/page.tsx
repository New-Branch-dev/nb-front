import { notFound } from "next/navigation";

import { isMyLearningStepSlug } from "@widgets/my-learning/model/slug";

import { MyLearningPage } from "@views/my-learning";

type MyLearningStepPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function MyLearningStepPage({
  params,
}: MyLearningStepPageProps) {
  const { slug } = await params;

  if (!isMyLearningStepSlug(slug)) {
    notFound();
  }

  return <MyLearningPage slug={slug} />;
}
