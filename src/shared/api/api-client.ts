import axios, {
  type AxiosError,
  AxiosHeaders,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from "axios";

import {
  fetchAccessToken,
  fetchRefreshToken,
  saveAuthToken,
} from "@shared/api/auth-token";
import { API_BASE_URL, API_ENDPOINT, createApiUrl } from "@shared/config";

export type ApiResponse<TData> = {
  status?: string;
  code?: string;
  message?: string;
  data?: TData;
};

export type ApiRequestConfig = AxiosRequestConfig;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

type TokenResponse = {
  accessToken: string;
  refreshToken: string;
  nickname?: string;
};

type RetryableRequestConfig = InternalAxiosRequestConfig & {
  isRetryRequest?: boolean;
};

const checkIsAuthenticationError = (error: AxiosError<ApiResponse<unknown>>) => {
  const responseStatus = error.response?.status;
  const responseCode = error.response?.data?.code;
  const responseMessage = error.response?.data?.message;

  return (
    responseStatus === 401 ||
    responseCode === "A001" ||
    responseCode === "A002" ||
    responseMessage === "Authentication is required"
  );
};

const checkIsAuthenticationResponse = (response: ApiResponse<unknown>) => {
  return (
    response.code === "A001" ||
    response.code === "A002" ||
    response.message === "Authentication is required"
  );
};

let refreshTokenRequest: Promise<string | null> | null = null;

const refreshAccessToken = async () => {
  const refreshToken = fetchRefreshToken();

  if (!refreshToken) {
    return null;
  }

  if (!refreshTokenRequest) {
    refreshTokenRequest = axios
      .post<ApiResponse<TokenResponse>>(
        createApiUrl(API_ENDPOINT.auth.refresh),
        { refreshToken },
        { timeout: 10000 },
      )
      .then((response) => {
        const token = unwrapApiData<TokenResponse>(response.data);

        saveAuthToken(token);

        return token.accessToken;
      })
      .catch(() => null)
      .finally(() => {
        refreshTokenRequest = null;
      });
  }

  return refreshTokenRequest;
};

const setAuthorizationHeader = (
  config: InternalAxiosRequestConfig,
  accessToken: string,
) => {
  config.headers = AxiosHeaders.from(config.headers);
  config.headers.set("Authorization", `Bearer ${accessToken}`);
};

apiClient.interceptors.request.use((config) => {
  const accessToken = fetchAccessToken();

  if (accessToken) {
    setAuthorizationHeader(config, accessToken);
  }

  return config;
});

apiClient.interceptors.response.use(
  async (response) => {
    const requestConfig = response.config as RetryableRequestConfig;
    const responseData = response.data as ApiResponse<unknown>;

    if (
      requestConfig.isRetryRequest ||
      !responseData ||
      typeof responseData !== "object" ||
      !checkIsAuthenticationResponse(responseData)
    ) {
      return response;
    }

    const accessToken = await refreshAccessToken();

    if (!accessToken) {
      return response;
    }

    requestConfig.isRetryRequest = true;
    setAuthorizationHeader(requestConfig, accessToken);

    return apiClient(requestConfig);
  },
  async (error: AxiosError<ApiResponse<unknown>>) => {
    const requestConfig = error.config as RetryableRequestConfig | undefined;

    if (
      !requestConfig ||
      requestConfig.isRetryRequest ||
      !checkIsAuthenticationError(error)
    ) {
      return Promise.reject(error);
    }

    const accessToken = await refreshAccessToken();

    if (!accessToken) {
      return Promise.reject(error);
    }

    requestConfig.isRetryRequest = true;
    setAuthorizationHeader(requestConfig, accessToken);

    return apiClient(requestConfig);
  },
);

export const unwrapApiData = <TData>(response: TData | ApiResponse<TData>) => {
  if (
    response &&
    typeof response === "object" &&
    "status" in response &&
    (response as ApiResponse<TData>).status === "error"
  ) {
    throw new Error(
      (response as ApiResponse<TData>).message ?? "API 요청에 실패했습니다.",
    );
  }

  if (
    response &&
    typeof response === "object" &&
    "data" in response &&
    (response as ApiResponse<TData>).data !== undefined
  ) {
    return (response as ApiResponse<TData>).data as TData;
  }

  if (
    response &&
    typeof response === "object" &&
    ("status" in response || "code" in response || "message" in response)
  ) {
    return undefined as TData;
  }

  return response as TData;
};

export const fetchApi = async <TData>(
  url: string,
  config?: ApiRequestConfig,
): Promise<TData> => {
  const response = await apiClient.get<TData | ApiResponse<TData>>(url, config);

  return unwrapApiData(response.data);
};

export const createApi = async <TData, TBody = unknown>(
  url: string,
  body?: TBody,
  config?: ApiRequestConfig,
): Promise<TData> => {
  const response = await apiClient.post<TData | ApiResponse<TData>>(
    url,
    body,
    config,
  );

  return unwrapApiData(response.data);
};

export const updateApi = async <TData, TBody = unknown>(
  url: string,
  body?: TBody,
  config?: ApiRequestConfig,
): Promise<TData> => {
  const response = await apiClient.put<TData | ApiResponse<TData>>(
    url,
    body,
    config,
  );

  return unwrapApiData(response.data);
};

export const deleteApi = async <TData = void>(
  url: string,
  config?: ApiRequestConfig,
): Promise<TData> => {
  const response = await apiClient.delete<TData | ApiResponse<TData>>(
    url,
    config,
  );

  return unwrapApiData(response.data);
};
