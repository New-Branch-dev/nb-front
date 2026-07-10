import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ACCESS_TOKEN_COOKIE_KEY = "accessToken";
const PROTECTED_PATH_LIST = ["/my-learning", "/learning-goals"];

const checkIsProtectedPath = (pathname: string) =>
  PROTECTED_PATH_LIST.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (!checkIsProtectedPath(pathname)) {
    return NextResponse.next();
  }

  const hasAccessToken = Boolean(
    request.cookies.get(ACCESS_TOKEN_COOKIE_KEY)?.value,
  );

  if (hasAccessToken) {
    return NextResponse.next();
  }

  const signInUrl = request.nextUrl.clone();
  signInUrl.pathname = "/sign-in";
  signInUrl.searchParams.set("redirect", pathname);

  return NextResponse.redirect(signInUrl);
};

export const config = {
  matcher: ["/my-learning/:path*", "/learning-goals/:path*"],
};
