import React from "react";

import { Button } from "@shared/ui";

import { actionGroup,successBox, successSub, successTitle } from "@features/auth/ui/signup/SignUpForm.css";

const Step4 = () => {
  return (
    <>
      <div className={successBox}>
        <h3 className={successTitle}>환영합니다, 뉴브랜치님</h3>
        <p className={successSub}>회원가입이 완료되었습니다.</p>
      </div>

      <div className={actionGroup}>
        <Button variant="secondary" style={{ flex: 1, backgroundColor: "#F3EFFF", color: "#6641DF", border: "none" }}>
          홈으로
        </Button>
        <Button variant="primary" style={{ flex: 1, backgroundColor: "#6641DF" }}>
          학습 설정 하기
        </Button>
      </div>
    </>
  );
};

export default Step4;