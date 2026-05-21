"use client";

import { usePathname } from "next/navigation";

import { authFormRoot } from "./AuthForm.css";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignupForm";

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
