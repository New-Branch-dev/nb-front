import { useState } from "react";

import { saveAuthToken } from "@shared/api";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (loginId: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginId, password }),
      });

      const result = await response.json();
      console.log("서버 응답 데이터:", result);

      if (response.ok && result.data) {
        saveAuthToken({
          accessToken: result.data.accessToken,
          refreshToken: result.data.refreshToken,
          nickname: result.data.nickname,
        });

        window.dispatchEvent(new Event("login-success"));
        window.location.href = "/main";
      } else {
        if (result.code === "A005") {
          alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        } else {
          const errorMessages: Record<string, string> = {
            "A005": "이메일 또는 비밀번호가 일치하지 않습니다.",
            "A001": "로그인이 필요합니다.",
            "A002": "세션이 만료되었습니다. 다시 로그인해주세요.",
            "U001": "존재하지 않는 사용자 계정입니다.",
            "E004": "이메일 인증이 완료되지 않았습니다. 메일함을 확인해주세요.",
            "C002": "입력 형식이 올바르지 않습니다.",
          };
          const targetMessage = errorMessages[result.code] || result.message || "로그인 중 오류가 발생했습니다.";
          alert(targetMessage);
        }
      }
    } catch (error) {
      console.error("로그인 통신 에러:", error);
      alert("서버와 통신 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, isLoading };
};