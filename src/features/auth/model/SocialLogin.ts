export const useSocialLogin = () => {

  const handleGoogleLogin = () => {
    const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
    const GOOGLE_AUTH_URL = `${BACKEND_URL}/oauth2/authorization/google`;
    window.location.href = GOOGLE_AUTH_URL;
  };

  return {
    handleGoogleLogin,
  };
};