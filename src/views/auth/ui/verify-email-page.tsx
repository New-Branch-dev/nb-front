import { EmailVerification } from "@features/auth";

import { authPage } from "@views/auth/ui/Page.css";

type VerifyEmailPageProps = {
  token: string;
};

export const VerifyEmailPage = ({ token }: VerifyEmailPageProps) => {
  return (
    <main className={authPage} aria-label="이메일 인증 페이지">
      <EmailVerification token={token} />
    </main>
  );
};
