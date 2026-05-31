import { useRouter } from "next/navigation";
import React from "react";

import { Button, Checkbox } from "@shared/ui";

import { actionGroup,linkText, termsItem, termsWrapper } from "../SignUpForm.css";

interface StepProps {
  onNext: () => void;
  agreements: {
    terms: boolean;
    privacy: boolean;
    privacyOpt: boolean;
    marketing: boolean;
  };
  setAgreements: React.Dispatch<React.SetStateAction<{
    terms: boolean;
    privacy: boolean;
    privacyOpt: boolean;
    marketing: boolean;
  }>>;
}

const Step1 = ({ onNext, agreements, setAgreements }: StepProps) => {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/");
  };

  const isAllChecked = Object.values(agreements).every(Boolean);

  const handleAllCheckChange = () => {
    const nextValue = !isAllChecked;
    setAgreements({
      terms: nextValue,
      privacy: nextValue,
      privacyOpt: nextValue,
      marketing: nextValue,
    });
  };

  const handleSingleCheckChange = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isNextDisabled = !agreements.terms || !agreements.privacy;

  return (
    <>
      <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px" }}>약관동의 및 인증</h3>
      <div className={termsWrapper}>
        <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          {/*TODO: 체크박스 공통 컴포넌트 수정 후 적용*/}
          <Checkbox name="all" label="" checked={isAllChecked} onChange={handleAllCheckChange}/>
          <span style={{ fontSize: "16px", color: "#1C1B1F" }}>전체동의</span>
        </label>
        <hr style={{ width: "100%", border: "0", height: "1px", backgroundColor: "#D6D4DF" }} />

        <div className={termsItem}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <Checkbox name="terms" label="" checked={agreements.terms} onChange={() => handleSingleCheckChange("terms")} />
            <span style={{ fontSize: "16px", color: "#1C1B1F" }}>
              <span style={{ color: "#6641DF", fontWeight: "bold" }}>(필수)</span> 이용약관
            </span>
          </label>
          <span className={linkText}>상세보기 &gt;</span>
        </div>
        <div className={termsItem}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
            <Checkbox name="privacy" label="" checked={agreements.privacy} onChange={() => handleSingleCheckChange("privacy")} />
            <span style={{ fontSize: "16px", color: "#1C1B1F" }}>
              <span style={{ color: "#6641DF", fontWeight: "bold" }}>(필수)</span> 개인정보 수정 및 이용
            </span>
          </label>
          <span className={linkText}>상세보기 &gt;</span>
        </div>
        <div className={termsItem}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
            <Checkbox name="privacyOpt" label="" checked={agreements.privacyOpt} onChange={() => handleSingleCheckChange("privacyOpt")}/>
            <span style={{ fontSize: "16px", color: "#1C1B1F" }}>(선택) 개인정보 수정 및 이용</span>
          </label>
          <span className={linkText}>상세보기 &gt;</span>
        </div>
        <div className={termsItem}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
            <Checkbox name="marketing" label="" checked={agreements.marketing} onChange={() => handleSingleCheckChange("marketing")}/>
            <span style={{ fontSize: "16px", color: "#1C1B1F" }}>(선택) 마케팅 및 광고 활용 동의</span>
          </label>
          <span className={linkText}>상세보기 &gt;</span>
        </div>
      </div>

      <div className={actionGroup}>
        <Button variant="secondary" style={{ flex: 1, backgroundColor: "#F3EFFF", color: "#6641DF", border: "none" }} onClick={handleCancel}>
          취소
        </Button>
        <Button variant="primary" onClick={onNext} disabled={isNextDisabled} style={{ flex: 1, backgroundColor: "#6641DF" }}>
          다음
        </Button>
      </div>
    </>
  );
};

export default Step1;