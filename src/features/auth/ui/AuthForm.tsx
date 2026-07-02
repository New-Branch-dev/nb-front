"use client";

import { usePathname } from "next/navigation";

import { authFormRoot } from "@features/auth/ui/AuthForm.css";
import { SignInForm } from "@features/auth/ui/login/SignInForm";
import { SignUpForm } from "@features/auth/ui/signup/SignUpForm";

export const AuthForm = () => {
  const pathName = usePathname();

  return (
    <div
      className={authFormRoot}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {pathName === "/sign-in" ? <SignInForm /> : <SignUpForm />}
    </div>
  );
};
