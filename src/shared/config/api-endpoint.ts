export const API_V1_ENDPOINT = "/api/v1";
export const MY_LEARNING_API_ENDPOINT = "/api/mylearning";

export const API_ENDPOINT = {
  auth: {
    base: `${API_V1_ENDPOINT}/auth`,
    login: `${API_V1_ENDPOINT}/auth/login`,
    logout: `${API_V1_ENDPOINT}/auth/logout`,
    refresh: `${API_V1_ENDPOINT}/auth/refresh`,
    signup: `${API_V1_ENDPOINT}/auth/signup`,
    requestEmailVerification: `${API_V1_ENDPOINT}/auth/verify-email`,
    verifyEmail: `${API_V1_ENDPOINT}/auth/verify-email`,
    googleOAuth: (backendUrl: string) =>
      `${backendUrl}/oauth2/authorization/google`,
  },
  learningGoals: {
    list: `${API_V1_ENDPOINT}/goals`,
    create: `${API_V1_ENDPOINT}/goals`,
    detail: (goalId: string) => `${API_V1_ENDPOINT}/goals/${goalId}`,
    update: (goalId: string) => `${API_V1_ENDPOINT}/goals/${goalId}`,
    delete: (goalId: string) => `${API_V1_ENDPOINT}/goals/${goalId}`,
  },
  users: {
    me: `${API_V1_ENDPOINT}/users/me`,
  },
  myLearning: {
    create: MY_LEARNING_API_ENDPOINT,
    detail: (usersId: number | string) =>
      `${MY_LEARNING_API_ENDPOINT}/${usersId}`,
    update: (usersId: number | string) =>
      `${MY_LEARNING_API_ENDPOINT}/${usersId}`,
    delete: (usersId: number | string) =>
      `${MY_LEARNING_API_ENDPOINT}/${usersId}`,
  },
  attachments: {
    uploadFiles: `${API_V1_ENDPOINT}/attachments/file`,
    saveText: `${API_V1_ENDPOINT}/attachments/text`,
    delete: (attachmentId: number) =>
      `${API_V1_ENDPOINT}/attachments/${attachmentId}`,
  },
  schools: {
    search: (query: string) =>
      `/api/schools?query=${encodeURIComponent(query)}`,
    neisSchoolInfo: "https://open.neis.go.kr/hub/schoolInfo",
  },
} as const;
