"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

import { saveAuthToken } from "@shared/api";

const RedirectStatus = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p>로그인 완료 중입니다. 잠시만 기다려주세요...</p>
    </div>
  );
};

const OAuth2RedirectContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const nickname = searchParams.get("nickname");

    if (accessToken && refreshToken) {
      saveAuthToken({
        accessToken,
        refreshToken,
        nickname: nickname ? decodeURIComponent(nickname) : undefined,
      });

      window.location.href = "/";
    } else {
      router.replace("/sign-in?error=social_login_failed");
    }
  }, [router, searchParams]);

  return <RedirectStatus />;
};

const OAuth2RedirectPage = () => {
  return (
    <Suspense fallback={null}>
      <OAuth2RedirectContent />
    </Suspense>
  );
};

export default OAuth2RedirectPage;