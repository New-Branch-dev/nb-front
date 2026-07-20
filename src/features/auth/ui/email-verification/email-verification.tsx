"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { verifyEmail } from "@features/auth/model/api";
import {
  type EmailVerificationStatus,
  EmailVerificationView,
} from "@features/auth/ui/email-verification/email-verification-view";

type EmailVerificationProps = {
  token: string;
};

export const EmailVerification = ({ token }: EmailVerificationProps) => {
  const router = useRouter();
  const [status, setStatus] = useState<EmailVerificationStatus>("loading");
  const [message, setMessage] = useState("이메일 인증을 처리하고 있습니다.");

  useEffect(() => {
    const handleVerifyEmail = async () => {
      if (!token) {
        setStatus("error");
        setMessage("이메일 인증 토큰이 없습니다.");
        return;
      }

      try {
        await verifyEmail(token);
        setStatus("success");
        setMessage("인증이 완료되었습니다. 로그인 후 서비스를 이용해주세요.");
      } catch (error) {
        setStatus("error");
        setMessage(
          error instanceof Error
            ? error.message
            : "이메일 인증에 실패했습니다.",
        );
      }
    };

    void handleVerifyEmail();
  }, [token]);

  return (
    <EmailVerificationView
      status={status}
      message={message}
      onLoginClick={() => router.push("/sign-in")}
      onSignUpClick={() => router.push("/sign-up")}
    />
  );
};
