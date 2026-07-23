"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { fetchMyLearningSetupCompleted } from "@features/my-learning";

const MyLearningRoutePage = () => {
  const router = useRouter();

  useEffect(() => {
    const nextHref = fetchMyLearningSetupCompleted()
      ? "/my-learning/result"
      : "/my-learning/profile";

    router.replace(nextHref);
  }, [router]);

  return null;
};

export default MyLearningRoutePage;
