import React from "react";

import { Button, Input } from "@shared/ui";

import { actionGroup,fieldGroup, flexInput, rowGroup, sectionTitle } from "../SignUpForm.css";

interface StepProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step3 = ({ onNext, onPrev }: StepProps) => {
  return (
    <>
      <h3 className={sectionTitle}>가입정보</h3>
      <div className={fieldGroup}>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <Input type="password" placeholder="비밀번호 확인" />

        <div className={rowGroup}>
          <div className={flexInput}>
            <Input type="email" placeholder="이메일" />
          </div>
          <Button variant="secondary" style={{ backgroundColor: "#6641DF", color: "#FFFFFF", padding: "0 20px" }}>
            인증
          </Button>
        </div>
      </div>

      <div className={actionGroup}>
        <Button variant="secondary" onClick={onPrev} style={{ flex: 1, backgroundColor: "#F3EFFF", color: "#6641DF", border: "none" }}>
          취소
        </Button>
        <Button variant="primary" onClick={onNext} style={{ flex: 1, backgroundColor: "#6641DF" }}>
          다음
        </Button>
      </div>
    </>
  );
};

export default Step3;