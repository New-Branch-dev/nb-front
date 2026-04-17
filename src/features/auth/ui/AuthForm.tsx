"use client";

import { useState } from "react";

import { authFormRootStyle } from "./AuthForm.css";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export function AuthForm() {
  const [isSignupMode, setIsSignupMode] = useState(false);

  return (
    <form
      className={authFormRootStyle}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {isSignupMode ? (
        <SignupForm onSwitchToLogin={() => setIsSignupMode(false)} />
      ) : (
        <LoginForm onSwitchToSignup={() => setIsSignupMode(true)} />
      )}
    </form>
  );
}
