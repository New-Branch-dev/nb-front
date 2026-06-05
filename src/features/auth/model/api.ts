import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const authApi = axios.create({
  baseURL: `${BACKEND_URL}/api/v1/auth`,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  timeout: 5000,
});

export interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
  ageGroup: string;
  schoolName: string;
}

/**
 * 이메일 인증번호 발송
 */
export const requestEmailVerification = async (email: string): Promise<boolean> => {
  try {
    const response = await authApi.post(`/email/request`, null, {
      params: { email },
    });

    if (response.data?.status === "error") {
      throw new Error(response.data?.message || "이메일 인증 요청에 실패했습니다.");
    }
    return true;
  } catch (error: any) {
    console.error("이메일 인증 발송 API 에러:", error);
    const errorMsg = error.response?.data?.message || error.message || "서버 연결에 실패했습니다.";
    alert(errorMsg);
    return false;
  }
};

/**
 * 이메일 인증 코드
 */
export const verifyEmailCode = async (email: string, code: string): Promise<boolean> => {
  try {
    const response = await authApi.post(`/email/verify`, null, {
      params: { email, code },
    });

    if (response.data?.status === "error") {
      throw new Error(response.data?.message || "인증번호가 일치하지 않거나 만료되었습니다.");
    }
    return true;
  } catch (error: any) {
    console.error("인증번호 검증 API 에러:", error);
    alert(error.response?.data?.message || "인증 실패");
    return false;
  }
};

/**
 * 회원가입
 */
export const registerUser = async (signUpData: SignupRequest): Promise<boolean> => {
  try {
    const response = await authApi.post(`/signup`, signUpData);

    if (response.data?.status === "error") {
      throw new Error(response.data?.message || "회원가입 요청에 실패했습니다.");
    }
    return true;
  } catch (error: any) {
    console.error("회원가입 API 에러:", error);
    alert(error.response?.data?.message || "회원가입 요청에 실패했습니다.");
    return false;
  }
};