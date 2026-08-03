import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@shared/ui";

import { actionGroup,successBox, successSub, successTitle } from "@features/auth/ui/signup/SignUpForm.css";

const Step4 = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <>
      <div className={successBox}>
        <h3 className={successTitle}>환영합니다, 뉴브랜치님</h3>
        <p className={successSub}>
          회원가입이 완료되었습니다. 메일함에서 이메일 인증을 진행해주세요.
        </p>
      </div>

      <div className={actionGroup}>
        <Button variant="secondary" onClick={handleGoHome} style={{ flex: 1, backgroundColor: "#F3EFFF", color: "#6641DF", border: "none" }}>
          홈으로
        </Button>
        <Button variant="primary" onClick={handleGoSignIn} style={{ flex: 1, backgroundColor: "#6641DF" }}>
          학습 설정 하기
        </Button>
      </div>
    </>
  );
};

export default Step4;
