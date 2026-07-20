export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export const createApiUrl = (endpoint: string) =>
  endpoint.startsWith("http") ? endpoint : `${API_BASE_URL}${endpoint}`;
