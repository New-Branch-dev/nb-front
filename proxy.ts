import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ACCESS_TOKEN_COOKIE_KEY = "accessToken";
const SIGN_IN_PATHNAME = "/sign-in";

export function proxy(request: NextRequest) {
  const hasAccessToken = Boolean(
    request.cookies.get(ACCESS_TOKEN_COOKIE_KEY)?.value,
  );

  if (hasAccessToken) {
    return NextResponse.next();
  }

  const signInUrl = new URL(SIGN_IN_PATHNAME, request.url);
  signInUrl.searchParams.set("redirectTo", request.nextUrl.pathname);

  return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: ["/my-learning/:path*", "/learning-goals/:path*"],
};
