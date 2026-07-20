import { API_BASE_URL, API_ENDPOINT } from "@shared/config";

export const useSocialLogin = () => {
  const handleGoogleLogin = () => {
    const GOOGLE_AUTH_URL = API_ENDPOINT.auth.googleOAuth(API_BASE_URL);
    window.location.href = GOOGLE_AUTH_URL;
  };

  return {
    handleGoogleLogin,
  };
};
