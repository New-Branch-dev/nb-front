"use client";

import React, { useState } from "react";

import { Stepper } from "@shared/ui";

import type { SignupFormType } from "@features/auth/model/validation";
import { container, title } from "@features/auth/ui/signup/SignUpForm.css";
import Step1 from "@features/auth/ui/signup/steps/Step1";
import Step2 from "@features/auth/ui/signup/steps/Step2";
import Step3 from "@features/auth/ui/signup/steps/Step4";

export const SignUpForm = () => {
  const [step, setStep] = useState(1);

  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    privacyOpt: false,
    marketing: false,
  });

  const [formData, setFormData] = useState<Omit<SignupFormType, 'birthDate'> & { birthDate: Date | null }>({
    name: "",
    birthDate: null,
    userid: "",
    password: "",
    passwordConfirm: "",
    email: "",
    isEmailVerified: false,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className={container}>
      <h2 className={title}>회원가입</h2>

      <Stepper currentStep={step} totalSteps={3} />

      {step === 1 && (
        <Step1
          onNext={nextStep}
          agreements={agreements}
          setAgreements={setAgreements}
        />
      )}


      {step === 2 && (
        <Step2
          onNext={nextStep}
          onPrev={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 3 && <Step3 />}
    </div>
  );
};