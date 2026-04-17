import { Button, Input } from "@shared/ui";

import {
  authFieldGroupStyle,
  authMetaActionsStyle,
  authMetaButtonStyle,
  authSubmitButtonStyle,
  authTitleStyle,
} from "./AuthForm.css";

type SignupFormProps = {
  onSwitchToLogin: () => void;
};

export function SignupForm({ onSwitchToLogin }: SignupFormProps) {
  return (
    <>
      <h2 className={authTitleStyle}>회원가입</h2>

      <div className={authFieldGroupStyle}>
        <Input
          type="email"
          name="signupEmail"
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          autoComplete="email"
        />
        <Input
          type="password"
          name="signupPassword"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          autoComplete="new-password"
        />
        <Input
          type="password"
          name="signupPasswordConfirm"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해 주세요"
          autoComplete="new-password"
        />
        <Input
          type="text"
          name="name"
          label="이름"
          placeholder="이름을 입력해 주세요"
          autoComplete="name"
        />
      </div>

      <Button type="submit" className={authSubmitButtonStyle}>
        회원가입
      </Button>

      <div className={authMetaActionsStyle}>
        <Button
          type="button"
          variant="text"
          size="sm"
          className={authMetaButtonStyle}
          onClick={onSwitchToLogin}
        >
          로그인으로 돌아가기
        </Button>
      </div>
    </>
  );
}
