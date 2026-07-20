import axios from "axios";

import { getApiErrorMessage } from "@shared/api";
import { API_BASE_URL, API_ENDPOINT } from "@shared/config";

const authApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
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
 * 이메일 인증 메일 발송
 */
export const requestEmailVerification = async (
  email: string,
): Promise<boolean> => {
  try {
    const response = await authApi.get(API_ENDPOINT.auth.requestEmailVerification, {
      params: { email: email.trim() },
    });

    if (response.data?.status === "error") {
      throw new Error(response.data?.message || "이메일 인증 요청에 실패했습니다.");
    }
    return true;
  } catch (error) {
    console.error("이메일 인증 발송 API 에러:", error);
    alert(getApiErrorMessage(error, "이메일 인증 요청에 실패했습니다."));
    return false;
  }
};

/**
 * 이메일 인증 토큰 확인
 */
export const verifyEmail = async (token: string): Promise<boolean> => {
  try {
    const response = await authApi.get(API_ENDPOINT.auth.verifyEmail, {
      params: { token },
    });

    if (response.data?.status === "error") {
      throw new Error(response.data?.message || "이메일 인증에 실패했습니다.");
    }
    return true;
  } catch (error) {
    console.error("이메일 인증 API 에러:", error);
    throw new Error(getApiErrorMessage(error, "이메일 인증에 실패했습니다."));
  }
};

/**
 * 회원가입
 */
export const registerUser = async (signUpData: SignupRequest): Promise<boolean> => {
  try {
    const response = await authApi.post(API_ENDPOINT.auth.signup, signUpData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data?.status === "error") {
      throw new Error(response.data?.message || "회원가입 요청에 실패했습니다.");
    }
    return true;
  } catch (error) {
    console.error("회원가입 API 에러:", error);
    alert(getApiErrorMessage(error, "회원가입 요청에 실패했습니다."));
    return false;
  }
};
