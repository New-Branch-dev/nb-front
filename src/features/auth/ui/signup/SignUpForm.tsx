// import { Button, Input } from "@shared/ui";
//
// import {
//   authFieldGroup,
//   authMetaActions,
//   authMetaButton,
//   authSubmitButton,
//   authTitle,
// } from "../AuthForm.css";
//
// export const SignUpForm = () => {
//   return (
//     <>
//       <h2 className={authTitle}>회원가입</h2>
//
//       <div className={authFieldGroup}>
//         <Input
//           type="email"
//           name="signupEmail"
//           placeholder="이메일을 입력해 주세요"
//           autoComplete="email"
//         />
//         <Input
//           type="password"
//           name="signupPassword"
//           placeholder="비밀번호를 입력해 주세요"
//           autoComplete="new-password"
//         />
//         <Input
//           type="password"
//           name="signupPasswordConfirm"
//           placeholder="비밀번호를 다시 입력해 주세요"
//           autoComplete="new-password"
//         />
//         <Input
//           type="text"
//           name="name"
//           placeholder="이름을 입력해 주세요"
//           autoComplete="name"
//         />
//       </div>
//
//       <Button type="submit" className={authSubmitButton}>
//         회원가입
//       </Button>
//
//       <div className={authMetaActions}>
//         <Button
//           type="button"
//           variant="text"
//           size="sm"
//           className={authMetaButton}
//         >
//           로그인으로 돌아가기
//         </Button>
//       </div>
//     </>
//   );
// };
"use client";

import React, { useState } from "react";

import { Stepper } from "@shared/ui";

import { container, title } from "./SignUpForm.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

export const SignUpForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className={container}>
      <h2 className={title}>회원가입</h2>

      {/* 공통 UI로 분리한 스태퍼 */}
      <Stepper currentStep={step} totalSteps={4} />

      {step === 1 && <Step1 onNext={nextStep} />}
      {step === 2 && <Step2 onNext={nextStep} onPrev={prevStep} />}
      {step === 3 && <Step3 onNext={nextStep} onPrev={prevStep} />}
      {step === 4 && <Step4 />}
    </div>
  );
};