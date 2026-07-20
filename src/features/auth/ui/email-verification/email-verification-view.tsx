import { Button } from "@shared/ui";

import {
  actionGroup,
  verificationBox,
  verificationDescription,
  verificationPanel,
  verificationTitle,
} from "@features/auth/ui/email-verification/email-verification.css";

export type EmailVerificationStatus = "loading" | "success" | "error";

type EmailVerificationViewProps = {
  status: EmailVerificationStatus;
  message: string;
  onLoginClick: () => void;
  onSignUpClick: () => void;
};

const getTitle = (status: EmailVerificationStatus) => {
  if (status === "loading") {
    return "이메일 인증 중";
  }

  if (status === "success") {
    return "이메일 인증 완료";
  }

  return "이메일 인증 실패";
};

export const EmailVerificationView = ({
  status,
  message,
  onLoginClick,
  onSignUpClick,
}: EmailVerificationViewProps) => {
  return (
    <div className={verificationBox}>
      <div className={verificationPanel}>
        <h2 className={verificationTitle}>{getTitle(status)}</h2>
        <p className={verificationDescription}>{message}</p>
      </div>

      <div className={actionGroup}>
        <Button
          type="button"
          variant="secondary"
          fullWidth
          onClick={onSignUpClick}
        >
          회원가입으로
        </Button>
        <Button
          type="button"
          variant="primary"
          fullWidth
          disabled={status === "loading"}
          onClick={onLoginClick}
        >
          로그인으로
        </Button>
      </div>
    </div>
  );
};
