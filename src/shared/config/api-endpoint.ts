export const API_V1_ENDPOINT = "/api/v1";

export const API_ENDPOINT = {
  auth: {
    login: `${API_V1_ENDPOINT}/auth/login`,
    logout: `${API_V1_ENDPOINT}/auth/logout`,
  },
} as const;
