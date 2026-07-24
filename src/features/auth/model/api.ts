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
  loginId: string;
  email: string;
  password: string;
  nickname: string;
}

export const requestEmailVerification = async (email: string): Promise<boolean> => {
  try {
    await authApi.post(`/email/request`, null, {
      params: { email },
    });
    return true;
  } catch (error: unknown) {
    console.error("이메일 인증 발송 API 에러:", error);
    return false;
  }
};

export const verifyEmailCode = async (email: string, code: string): Promise<boolean> => {
  try {
    const response = await authApi.post(`/email/verify`, null, {
      params: { email, code },
    });

    if (response.data?.status === "error") {
      throw new Error(response.data?.message || "인증번호가 일치하지 않거나 만료되었습니다.");
    }
    return true;
  } catch (error: unknown) {
    console.error("인증번호 검증 API 에러:", error);

    if (axios.isAxiosError(error)) {
      alert(error.response?.data?.message || "인증 실패");
    } else if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("인증 실패");
    }
    return false;
  }
};

export const registerUser = async (signUpData: SignupRequest): Promise<boolean> => {
  try {
    const response = await authApi.post(`/signup`, signUpData);

    if (response.data?.status === "error") {
      throw new Error(response.data?.message || "회원가입 요청에 실패했습니다.");
    }
    return true;
  } catch (error: unknown) {
    console.error("회원가입 API 에러:", error);

    if (axios.isAxiosError(error)) {
      alert(error.response?.data?.message || "회원가입 요청에 실패했습니다.");
    } else if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("회원가입 요청에 실패했습니다.");
    }
    return false;
  }
};

export const checkIdDuplication = async (id: string): Promise<boolean> => {
  try {
    const response = await authApi.get(`/check-userid`, {
      params: { loginId: id },
    });
    return response.data?.data ?? false;
  } catch (error: unknown) {
    console.error("아이디 중복 확인 API 에러:", error);

    if (axios.isAxiosError(error) && error.response) {
      const serverMessage = error.response.data?.message || "";

      if (serverMessage.includes("exists") || serverMessage.includes("already")) {
        return true;
      }
    }

    return false;
  }
};