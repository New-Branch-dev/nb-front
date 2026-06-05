import "server-only";

export type MyLearningSetupStatus = {
  isConfigured: boolean;
};

export const fetchMyLearningSetupStatus =
  async (): Promise<MyLearningSetupStatus> => {
    // TODO: replace with GET my-learning setup status API.
    return { isConfigured: false };
  };
