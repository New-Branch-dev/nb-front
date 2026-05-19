import React from "react";

import { Button, Input } from "@shared/ui";

import { actionGroup,fieldGroup, flexInput, rowGroup, sectionTitle } from "../SignUpForm.css";

interface StepProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step2 = ({ onNext, onPrev }: StepProps) => {
  return (
    <>
      <h3 className={sectionTitle}>회원정보</h3>
      <div className={fieldGroup}>
        <Input type="text" placeholder="이름" />
        <Input type="text" placeholder="생년월일" /> {/* 달력 아이콘 커스텀 필요시 배경 지정 */}

        <div className={rowGroup}>
          <div className={flexInput}>
            <Input type="text" placeholder="휴대폰 번호" />
          </div>
          {/* 가이드 상 Button / Secondary(활성화-2) #F3EFFF 스타일 매칭 */}
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

export default Step2;