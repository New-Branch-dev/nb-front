import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(1, "이름은 필수 입력 항목입니다.")
    .max(10, "이름은 10자 이내여야 합니다.")
    .regex(/^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\s]+$/, "이름은 한글 또는 영어만 가능합니다."),

  birthDate: z
    .any()
    .refine((val) => val !== null && val !== undefined && val !== "", {
      message: "생년월일을 선택해주세요."
    }),

  userid: z
    .string()
    .min(4, "아이디는 최소 4자 이상이어야 합니다.")
    .max(20, "아이디는 20자 이내여야 합니다.")
    .regex(/^[a-zA-Z0-9{} [\]/?.,;:|)*~`!^\-_+<>@###$%&\\\=\(\'\"]+$/, "아이디는 영문, 숫자 및 특수문자만 입력 가능합니다.")
    .regex(/[a-zA-Z]/, "아이디에 영문이 최소 1개 이상 포함되어야 합니다."),

  password: z
    .string()
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[{}[\]/?.,;:|)*~`!^\-_+<>@###$%&\\\=\(\'\"])/, "비밀번호는 영문, 숫자, 특수문자 조합이어야 합니다."),
  passwordConfirm: z.string(),
  email: z
    .string()
    .min(1, "이메일은 필수입니다.")
    .email("올바른 이메일 형식이 아닙니다."),
  isEmailVerified: z
    .boolean()
    .refine((val) => val === true, { message: "이메일 인증이 필요합니다." }),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "비밀번호가 일치하지 않습니다.",
  path: ["passwordConfirm"],
});

export type SignupFormType = z.infer<typeof signupSchema>;

export const formatNameInput = (value: string): string => {
  return value.replace(/[^a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]/g, "").slice(0, 10);
};

export const formatUseridInput = (value: string): string => {
  return value.replace(/[^a-zA-Z0-9{} [\]/?.,;:|)*~`!^\-_+<>@###$%&\\\=\(\'\"]/g, "").slice(0, 20);
};