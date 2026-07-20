const ACCESS_TOKEN_COOKIE_KEY = "accessToken";
const REFRESH_TOKEN_COOKIE_KEY = "refreshToken";
const NICKNAME_COOKIE_KEY = "nickname";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

type AuthToken = {
  accessToken: string;
  refreshToken: string;
  nickname?: string;
};

const checkIsBrowser = () => typeof window !== "undefined";

const fetchCookieValue = (key: string) => {
  if (!checkIsBrowser()) {
    return null;
  }

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${key}=`));

  const value = cookie?.split("=").slice(1).join("=");

  if (!value || value === "undefined" || value === "null") {
    return null;
  }

  return decodeURIComponent(value);
};

const saveCookieValue = (key: string, value: string) => {
  document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;
};

const clearCookieValue = (key: string) => {
  document.cookie = `${key}=; path=/; max-age=0; SameSite=Lax`;
};

export const fetchAccessToken = () =>
  fetchCookieValue(ACCESS_TOKEN_COOKIE_KEY);

export const fetchRefreshToken = () =>
  fetchCookieValue(REFRESH_TOKEN_COOKIE_KEY);

export const fetchStoredNickname = () => fetchCookieValue(NICKNAME_COOKIE_KEY);

export const saveAuthToken = ({
  accessToken,
  refreshToken,
  nickname,
}: AuthToken) => {
  if (!checkIsBrowser()) {
    return;
  }

  saveCookieValue(ACCESS_TOKEN_COOKIE_KEY, accessToken);
  saveCookieValue(REFRESH_TOKEN_COOKIE_KEY, refreshToken);

  if (nickname) {
    saveCookieValue(NICKNAME_COOKIE_KEY, nickname);
  }
};

export const clearAuthToken = () => {
  if (!checkIsBrowser()) {
    return;
  }

  clearCookieValue(ACCESS_TOKEN_COOKIE_KEY);
  clearCookieValue(REFRESH_TOKEN_COOKIE_KEY);
  clearCookieValue(NICKNAME_COOKIE_KEY);
};
