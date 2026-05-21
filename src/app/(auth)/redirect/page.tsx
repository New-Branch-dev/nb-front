"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const OAuth2RedirectPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const nickname = searchParams.get("nickname");

    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      if (nickname) {
        localStorage.setItem("nickname", decodeURIComponent(nickname));
      }

      window.location.href = "/";
    } else {
      router.replace("/sign-in?error=social_login_failed");
    }
  }, [searchParams]);

  const handleSaveToken = (access: string, refresh: string, nickname: string) => {
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
    localStorage.setItem("nickname", nickname);
  };

  /*TODO: 리다이렉트페이지 퍼블 필요*/
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p>로그인 완료 중입니다. 잠시만 기다려주세요...</p>
    </div>
  );
};

export default OAuth2RedirectPage;