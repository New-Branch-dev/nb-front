import { API_ENDPOINT } from "@shared/config";

export const useSocialLogin = () => {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  const handleGoogleLogin = () => {
    const GOOGLE_AUTH_URL = API_ENDPOINT.auth.googleOAuth(backendUrl);
    window.location.href = GOOGLE_AUTH_URL;
  };

  return {
    handleGoogleLogin,
  };
};
