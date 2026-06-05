import { redirect } from "next/navigation";

import { fetchMyLearningSetupStatus } from "@entities/my-learning/api/fetch-my-learning-setup-status";

const MyLearningRoutePage = async () => {
  const isConfigured = await fetchMyLearningSetupStatus();

  if (isConfigured) {
    redirect("/my-learning/result");
  }

  redirect("/my-learning/profile");
};

export default MyLearningRoutePage;
