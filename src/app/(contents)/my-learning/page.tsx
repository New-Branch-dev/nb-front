import { redirect } from "next/navigation";

import { fetchMyLearningSetupStatus } from "@entities/my-learning/api/fetch-my-learning-setup-status";

import { MyLearningConfiguredPage } from "@views/my-learning";

const MyLearningRoutePage = async () => {
  const { isConfigured } = await fetchMyLearningSetupStatus();

  if (!isConfigured) {
    redirect("/my-learning/profile");
  }

  return <MyLearningConfiguredPage />;
};

export default MyLearningRoutePage;
