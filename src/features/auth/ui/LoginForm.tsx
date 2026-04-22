import { Button, Input } from "@shared/ui";

import {
  authButtonGroup,
  authFieldGroup,
  authGoogleButton,
  authMetaActions,
  authMetaButton,
  authSubmitButton,
  authTitle,
} from "./AuthForm.css";

type LoginFormProps = {
  onSwitchToSignup: () => void;
};

export function LoginForm({ onSwitchToSignup }: LoginFormProps) {
  return (
    <>
      <h2 className={authTitle}>로그인</h2>

      <div className={authFieldGroup}>
        <Input
          type="email"
          name="email"
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          autoComplete="email"
        />
        <Input
          type="password"
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          autoComplete="current-password"
        />
      </div>

      <div className={authButtonGroup}>
        <Button type="submit" className={authSubmitButton}>
          로그인
        </Button>
        <Button type="button" className={authGoogleButton}>
          구글로 로그인
        </Button>
      </div>

      <div className={authMetaActions}>
        <Button
          type="button"
          variant="text"
          size="sm"
          className={authMetaButton}
          onClick={onSwitchToSignup}
        >
          회원가입
        </Button>
        <Button type="button" variant="text" size="sm" className={authMetaButton}>
          비밀번호 찾기
        </Button>
      </div>
    </>
  );
}
