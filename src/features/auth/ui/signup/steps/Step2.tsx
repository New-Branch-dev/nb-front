import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { z } from "zod";

import { Button, DatePicker, Input } from "@shared/ui";

import { checkIdDuplication, registerUser, requestEmailVerification, verifyEmailCode } from "@features/auth/model/api";
import {
  formatNameInput,
  formatUseridInput,
  type SignupFormType,
  signupSchema
} from "@features/auth/model/validation";

import { actionGroup, fieldGroup, flexInput, rowGroup, sectionTitle } from "../SignUpForm.css";

type ModifiedSignupForm = Omit<SignupFormType, 'birthDate'> & { birthDate: Date | null };

interface StepProps {
  onNext: () => void;
  onPrev: () => void;
  formData: ModifiedSignupForm;
  setFormData: React.Dispatch<React.SetStateAction<ModifiedSignupForm>>;
}

const Step2 = ({ onNext, onPrev, formData, setFormData }: StepProps) => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isEmailDuplicate, setIsEmailDuplicate] = useState<boolean>(false);
  const [isIdDuplicate, setIsIdDuplicate] = useState<boolean | null>(null);

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsOpenCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setFormData((prev) => ({ ...prev, [name]: formatNameInput(value) }));
      return;
    }

    if (name === "userid") {
      const formattedId = formatUseridInput(value);
      setFormData((prev) => ({ ...prev, [name]: formattedId }));

      if (formattedId.trim().length >= 2) {
        const duplicated = await checkIdDuplication(formattedId);
        setIsIdDuplicate(duplicated);
      } else {
        setIsIdDuplicate(null);
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prev) => ({ ...prev, birthDate: date }));
    setIsOpenCalendar(false);
  };

  const handleEmailVerifyClick = async () => {
    if (!formData.email.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }
    setIsSending(true);
    setIsEmailDuplicate(false);

    const success = await requestEmailVerification(formData.email);

    if (success) {
      setIsEmailSent(true);
      alert("입력하신 이메일로 인증번호 6자리가 발송되었습니다.");
    } else {
      setIsEmailDuplicate(true);
    }
    setIsSending(false);
  }

  const handleCodeConfirmClick = async () => {
    if (verificationCode.length !== 6) {
      alert("인증번호 6자리를 정확히 입력해주세요.");
      return;
    }
    setIsVerifying(true);
    try {
      const success = await verifyEmailCode(formData.email, verificationCode);
      if (success) {
        setFormData((prev) => ({ ...prev, isEmailVerified: true }));
        alert("이메일 인증이 성공적으로 완료되었습니다!");
      } else {
        alert("인증번호가 일치하지 않거나 만료되었습니다.");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "인증 처리 중 오류가 발생했습니다.");
      } else {
        alert("인증 처리 중 오류가 발생했습니다.");
      }
    } finally {
      setIsVerifying(false);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const getSubmittableData = () => {
    const formattedBirthDate = formData.birthDate ? formatDate(formData.birthDate) : "";
    return {
      ...formData,
      birthDate: formattedBirthDate,
    };
  };

  const parsedResult = signupSchema.safeParse(getSubmittableData());
  const isValid = parsedResult.success && isIdDuplicate === false && !isEmailDuplicate;
  const showPasswordError =
    formData.passwordConfirm.length > 0 &&
    !parsedResult.success &&
    parsedResult.error.issues.some((err: z.ZodIssue) => err.path.includes("passwordConfirm"));

  const handleFormSubmit = async () => {
    if (isIdDuplicate) {
      alert("사용할 수 없는 아이디입니다.");
      return;
    }

    const submittableData = getSubmittableData();
    const result = signupSchema.safeParse(submittableData);

    if (!result.success) {
      alert(result.error.issues[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      const success = await registerUser({
        loginId : submittableData.userid,
        email: submittableData.email,
        password: submittableData.password,
        nickname: submittableData.name
      });

      if (success) {
        onNext();
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "회원가입 처리 중 오류가 발생했습니다.");
      } else if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("회원가입 처리 중 오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h3 className={sectionTitle}>회원정보 입력</h3>
      <div className={fieldGroup}>
        <Input type="text" name="name" placeholder="이름" value={formData.name} onChange={handleInputChange} />

        <div ref={calendarRef} style={{ position: "relative" }}>
          <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setIsOpenCalendar(!isOpenCalendar)}>
            <Input type="text" placeholder="생년월일" value={formatDate(formData.birthDate)} readOnly style={{ paddingRight: "40px", width: "100%" }} />
            <span style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "18px", pointerEvents: "none" }}>📅</span>
          </div>
          {isOpenCalendar && (
            <div style={{ position: "absolute", top: "100%", left: "0", zIndex: 10, backgroundColor: "#FFFFFF", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)", borderRadius: "8px", marginTop: "4px" }}>
              <DatePicker value={formData.birthDate as Date} onChange={handleDateChange} />
            </div>
          )}
        </div>

        <Input
          type="text"
          name="userid"
          placeholder="아이디"
          value={formData.userid}
          onChange={handleInputChange}
          style={{ borderColor: isIdDuplicate ? "#FF4D4F" : "inherit" }}
        />
        {isIdDuplicate && (
          <p style={{ color: "#FF4D4F", fontSize: "12px", marginTop: "-12px", marginBottom: "8px" }}>
            사용할 수 없는 아이디입니다.
          </p>
        )}
        {isIdDuplicate === false && formData.userid.trim().length >= 2 && (
          <p style={{ color: "#2BBE6C", fontSize: "12px", marginTop: "-12px", marginBottom: "8px" }}>
            사용 가능한 아이디입니다.
          </p>
        )}

        <Input type="password" name="password" placeholder="비밀번호" value={formData.password} onChange={handleInputChange} />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          value={formData.passwordConfirm}
          onChange={handleInputChange}
          style={{
            color: showPasswordError ? "#FF4D4F" : "inherit",
            borderColor: showPasswordError ? "#FF4D4F" : "inherit"
          }}
        />
        {showPasswordError && (
          <p style={{ color: "#FF4D4F", fontSize: "12px", marginTop: "-12px", marginBottom: "8px" }}>
            비밀번호가 일치하지 않습니다.
          </p>
        )}

        <div className={rowGroup}>
          <div className={flexInput}>
            <Input type="email" name="email" placeholder="이메일" value={formData.email} onChange={handleInputChange} disabled={formData.isEmailVerified} />
          </div>
          <Button variant="secondary" onClick={handleEmailVerifyClick} disabled={isSending || formData.isEmailVerified} style={{ backgroundColor: formData.isEmailVerified ? "#E8E5F4" : "#6641DF", color: formData.isEmailVerified ? "#999999" : "#FFFFFF", padding: "0 20px" }}>
            {isSending ? "요청중..." : formData.isEmailVerified ? "인증됨" : "인증번호 발송"}
          </Button>
        </div>

        {isEmailSent && !formData.isEmailVerified && (
          <div className={rowGroup} style={{ marginTop: "8px" }}>
            <div className={flexInput}>
              <Input type="text" placeholder="인증번호 6자리 입력" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))} />
            </div>
            <Button variant="primary" onClick={handleCodeConfirmClick} disabled={isVerifying || verificationCode.length !== 6} style={{ padding: "0 20px", backgroundColor: "#6641DF" }}>
              {isVerifying ? "확인중..." : "인증 확인"}
            </Button>
          </div>
        )}
      </div>

      <div className={actionGroup}>
        <Button variant="secondary" onClick={onPrev} disabled={isSubmitting} style={{ flex: 1, backgroundColor: "#F3EFFF", color: "#6641DF", border: "none" }}>
          이전
        </Button>
        <Button
          variant="primary"
          onClick={handleFormSubmit}
          disabled={!isValid || isSubmitting}
          style={{
            flex: 1,
            backgroundColor: (isValid && !isSubmitting) ? "#6641DF" : "#D6D4DF",
            cursor: (isValid && !isSubmitting) ? "pointer" : "not-allowed"
          }}
        >
          {isSubmitting ? "가입 중..." : "가입 완료"}
        </Button>
      </div>
    </>
  );
};

export default Step2;