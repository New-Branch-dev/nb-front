"use client";

import { usePathname } from "next/navigation";

import { authFormRoot } from "./AuthForm.css";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export const AuthForm = () => {
  const pathName = usePathname();

  return (
    <form
      className={authFormRoot}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {pathName === "/sign-in" ? <SignInForm /> : <SignUpForm />}
    </form>
  );
};
