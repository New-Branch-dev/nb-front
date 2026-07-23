const MY_LEARNING_SETUP_STATUS_STORAGE_KEY = "my-learning-setup-completed";

const checkIsBrowser = () => typeof window !== "undefined";

export const fetchMyLearningSetupCompleted = () => {
  if (!checkIsBrowser()) {
    return false;
  }

  return localStorage.getItem(MY_LEARNING_SETUP_STATUS_STORAGE_KEY) === "true";
};

export const saveMyLearningSetupCompleted = () => {
  if (!checkIsBrowser()) {
    return;
  }

  localStorage.setItem(MY_LEARNING_SETUP_STATUS_STORAGE_KEY, "true");
};

export const clearMyLearningSetupCompleted = () => {
  if (!checkIsBrowser()) {
    return;
  }

  localStorage.removeItem(MY_LEARNING_SETUP_STATUS_STORAGE_KEY);
};
