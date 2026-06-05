"use client";

import { usePathname } from "next/navigation";

import { authFormRoot } from "./AuthForm.css";
import { SignInForm } from "./login/SignInForm";
import { SignUpForm } from "./signup/SignUpForm";

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
