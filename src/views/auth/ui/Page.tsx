import { AuthForm } from "@features/auth";

import { authPage } from "@views/auth/ui/Page.css";

export const Page = () => {
  return (
    <main className={authPage} aria-label="인증 페이지">
      <AuthForm />
    </main>
  );
};
