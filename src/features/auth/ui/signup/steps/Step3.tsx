// import React, { useState } from "react";
// import { z } from "zod";
//
// import { Button, Input } from "@shared/ui";
//
// import { requestEmailVerification } from "@features/auth/model/api";
// import {
//   type AccountInfoType,
//   formatUseridInput,
//   step3Schema} from "@features/auth/model/validation";
//
// import { actionGroup, fieldGroup, flexInput, rowGroup, sectionTitle } from "@features/auth/ui/signup/SignUpForm.css";
//
// interface StepProps {
//   onNext: () => void;
//   onPrev: () => void;
//   accountInfo: AccountInfoType;
//   setAccountInfo: React.Dispatch<React.SetStateAction<AccountInfoType>>;
// }
//
// const Step3 = ({ onNext, onPrev, accountInfo, setAccountInfo }: StepProps) => {
//   const [isSending, setIsSending] = useState(false);
//
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//
//     if (name === "userid") {
//       setAccountInfo((prev) => ({ ...prev, [name]: formatUseridInput(value) }));
//       return;
//     }
//
//     setAccountInfo((prev) => ({ ...prev, [name]: value }));
//   };
//
//   const handleEmailVerifyClick = async () => {
//     setIsSending(true);
//     const success = await requestEmailVerification(accountInfo.email);
//     if (success) {
//       setAccountInfo((prev) => ({ ...prev, isEmailVerified: true }));
//     }
//     setIsSending(false);
//   };
//
//   const parsedResult = step3Schema.safeParse(accountInfo);
//   const isValid = parsedResult.success;
//
//   const showPasswordError =
//     accountInfo.passwordConfirm.length > 0 &&
//     !parsedResult.success &&
//     parsedResult.error.issues.some((err: z.ZodIssue) => err.path.includes("passwordConfirm"));
//
//   return (
//     <>
//       <h3 className={sectionTitle}>가입정보</h3>
//       <div className={fieldGroup}>
//         <Input
//           type="text"
//           name="userid"
//           placeholder="아이디"
//           value={accountInfo.userid}
//           onChange={handleInputChange}
//         />
//
//         <Input
//           type="password"
//           name="password"
//           placeholder="비밀번호"
//           value={accountInfo.password}
//           onChange={handleInputChange}
//         />
//
//         <Input
//           type="password"
//           name="passwordConfirm"
//           placeholder="비밀번호 확인"
//           value={accountInfo.passwordConfirm}
//           onChange={handleInputChange}
//           style={{
//             color: showPasswordError ? "#FF4D4F" : "inherit",
//             borderColor: showPasswordError ? "#FF4D4F" : "inherit"
//           }}
//         />
//         {showPasswordError && (
//           <p style={{ color: "#FF4D4F", fontSize: "12px", marginTop: "-12px", marginBottom: "8px" }}>
//             비밀번호가 일치하지 않습니다.
//           </p>
//         )}
//
//         <div className={rowGroup}>
//           <div className={flexInput}>
//             <Input
//               type="email"
//               name="email"
//               placeholder="이메일"
//               value={accountInfo.email}
//               onChange={handleInputChange}
//               disabled={accountInfo.isEmailVerified}
//             />
//           </div>
//           <Button
//             variant="secondary"
//             onClick={handleEmailVerifyClick}
//             disabled={isSending || accountInfo.isEmailVerified}
//             style={{ backgroundColor: accountInfo.isEmailVerified ? "#E8E5F4" : "#6641DF", color: accountInfo.isEmailVerified ? "#999999" : "#FFFFFF", padding: "0 20px" }}
//           >
//             {accountInfo.isEmailVerified ? "인증됨" : "인증"}
//           </Button>
//         </div>
//       </div>
//
//       <div className={actionGroup}>
//         <Button variant="secondary" onClick={onPrev} style={{ flex: 1, backgroundColor: "#F3EFFF", color: "#6641DF", border: "none" }}>
//           취소
//         </Button>
//         <Button
//           variant="primary"
//           onClick={onNext}
//           disabled={!isValid}
//           style={{
//             flex: 1,
//             backgroundColor: isValid ? "#6641DF" : "#D6D4DF",
//             cursor: isValid ? "pointer" : "not-allowed"
//           }}
//         >
//           다음
//         </Button>
//       </div>
//     </>
//   );
// };
//
// export default Step3;