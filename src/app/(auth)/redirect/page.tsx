"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

import { saveAuthToken } from "@shared/api";

const RedirectStatus = () => {
  return <p>로그인 완료 중입니다. 잠시만 기다려주세요...</p>;
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

      window.location.href = "/main";
    } else {
      router.replace("/sign-in?error=social_login_failed");
    }
  }, [router, searchParams]);

  /*TODO: 리다이렉트페이지 퍼블 필요*/
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
