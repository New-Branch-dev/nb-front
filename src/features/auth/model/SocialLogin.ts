export const useSocialLogin = () => {

  const handleGoogleLogin = () => {
    const GOOGLE_AUTH_URL = `http://localhost:8080/oauth2/authorization/google`;
    window.location.href = GOOGLE_AUTH_URL;
  };

  return {
    handleGoogleLogin,
  };
};