import axios from "axios";

export const logApiError = (error: unknown, context: string) => {
  if (!axios.isAxiosError(error)) {
    console.error(context, error);
    return;
  }

  console.error(context, {
    method: error.config?.method,
    url: error.config?.url,
    status: error.response?.status,
    data: error.response?.data,
  });
};

export const getApiErrorMessage = (error: unknown, fallback: string) => {
  if (axios.isAxiosError(error)) {
    const responseMessage = error.response?.data?.message;

    if (typeof responseMessage === "string") {
      return responseMessage;
    }

    return error.message || fallback;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
};
