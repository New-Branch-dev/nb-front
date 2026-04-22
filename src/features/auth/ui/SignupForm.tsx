import { Button, Input } from "@shared/ui";

import {
  authFieldGroup,
  authMetaActions,
  authMetaButton,
  authSubmitButton,
  authTitle,
} from "./AuthForm.css";

type SignupFormProps = {
  onSwitchToLogin: () => void;
};

export function SignupForm({ onSwitchToLogin }: SignupFormProps) {
  return (
    <>
      <h2 className={authTitle}>회원가입</h2>

      <div className={authFieldGroup}>
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

      <Button type="submit" className={authSubmitButton}>
        회원가입
      </Button>

      <div className={authMetaActions}>
        <Button
          type="button"
          variant="text"
          size="sm"
          className={authMetaButton}
          onClick={onSwitchToLogin}
        >
          로그인으로 돌아가기
        </Button>
      </div>
    </>
  );
}
