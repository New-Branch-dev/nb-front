import { Button, Input } from "@shared/ui";

import {
  authButtonGroupStyle,
  authFieldGroupStyle,
  authGoogleButtonStyle,
  authMetaActionsStyle,
  authMetaButtonStyle,
  authSubmitButtonStyle,
  authTitleStyle,
} from "./AuthForm.css";

type LoginFormProps = {
  onSwitchToSignup: () => void;
};

export function LoginForm({ onSwitchToSignup }: LoginFormProps) {
  return (
    <>
      <h2 className={authTitleStyle}>로그인</h2>

      <div className={authFieldGroupStyle}>
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

      <div className={authButtonGroupStyle}>
        <Button type="submit" className={authSubmitButtonStyle}>
          로그인
        </Button>
        <Button type="button" className={authGoogleButtonStyle}>
          구글로 로그인
        </Button>
      </div>

      <div className={authMetaActionsStyle}>
        <Button
          type="button"
          variant="text"
          size="sm"
          className={authMetaButtonStyle}
          onClick={onSwitchToSignup}
        >
          회원가입
        </Button>
        <Button type="button" variant="text" size="sm" className={authMetaButtonStyle}>
          비밀번호 찾기
        </Button>
      </div>
    </>
  );
}
