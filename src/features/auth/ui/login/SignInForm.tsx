import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button, Checkbox, Input } from "@shared/ui";

import { useSocialLogin } from "@features/auth/model/SocialLogin";
import { useLogin } from "@features/auth/model/UseLogin";

import {
  authDescription,
  authFieldGroup,
  authFormRoot,
  authGoogleButton,
  authMetaActions,
  authMetaButton,
  authSimpleFieldGroup,
  authSimpleTitle,
  authSubmitButton,
  authTitle,
} from "../AuthForm.css";

export const SignInForm = () => {
  const { handleGoogleLogin } = useSocialLogin();
  const { handleLogin, isLoading } = useLogin();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 페이지 새로고침 방지
    if (!loginId || !password) return;
    handleLogin(loginId, password);
  };

  return (
    <form onSubmit={onSubmit} className={authFormRoot}>
      <div>
        <h2 className={authTitle}>로그인</h2>
        <p className={authDescription}>뉴브랜치에 오신 것을 환영합니다.</p>
      </div>

      <div className={authFieldGroup}>
        <Input
          type="id"
          name="id"
          placeholder="아이디"
          autoComplete="id"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit" className={authSubmitButton} disabled={isLoading}>
        {isLoading ? "로그인 중..." : "로그인"}
      </Button>

      <div className={authMetaActions}>
        <Checkbox
          name="rememberId"
          label="아이디 저장"
          shape="square"
          size="md"
          labelColor="gray700"
          labelSize="md"
          labelWeight="semibold"
        />

        <div>
          <Link href="/sign-up" className={authMetaButton}>
            회원가입
          </Link>

          <Link href="/forgot-password" className={authMetaButton}>
            아이디 찾기
          </Link>

          <Link href="/forgot-password" className={authMetaButton}>
            비밀번호 찾기
          </Link>
        </div>
      </div>

      <div className={authSimpleFieldGroup}>
        <h2 className={authSimpleTitle}>간편 로그인</h2>
        <Button type="button" className={authGoogleButton} onClick={handleGoogleLogin}>
          <Image
            src="/google.png"
            alt="구글"
            width={20}
            height={20}
            quality={100}
          />
          구글 계정으로 로그인
        </Button>
      </div>
    </form>
  );
};
