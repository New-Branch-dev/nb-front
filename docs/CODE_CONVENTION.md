## Code Convention

- 파일명 / 폴더명: `kebab-case`
- 컴포넌트명 / 타입명: `PascalCase`
- 변수명 / 함수명: `camelCase`
- 상수명: `SCREAMING_SNAKE_CASE`
- 커스텀 훅: `use` 를 접두사로 사용
- 이벤트 핸들러: `handle` 를 접두사로 사용
- 조회 함수: `fetch` 를 접두사로 사용
- 생성 / 수정 / 삭제 함수:
  `create`, `update`, `delete` 를 접두사로 사용
- 값을 변환 하는 함수: `convert` 를 접두사로 사용
- 배열: `List`를 접미사로 사용
- boolean: 상태에 따라
  - `is`: 상태 체크,
  - `has`: 데이터 존재 여부 체크,
  - `can`: 가능 여부 체크
    를 접두사로 사용
    예)
    <br>
    const isOpen = false; // 열려있는 상태인가?
    <br>
    const isValid = false; // 유효한 상태인가?
    <br>
    const hasToken = true; // 토큰이 존재하나?
    <br>
    const canSubmit = true; // 제출할 수 있나?

### 📌 Comment Convention

코드만으로 의도가 충분히 드러난다면 주석은 최소화합니다.
<br>
왜 이런 구조나 처리가 필요한지 설명이 필요한 경우에만 주석을 작성합니다.
<br>
단순 동작 설명 주석은 지양합니다.

- 지양
  // 유저 이름을 가져온다
  <br>
  const userName = user.name;

- 권장
  // 서버 응답 스펙상 null 이 올 수 있어 기본값을 보장합니다.
  <br>
  const userName = user.name ?? "Unknown";

### 📌 Import Convention

#### import 순서

import는 아래 순서를 기준으로 정렬합니다.

1. React / Next 등 외부 라이브러리
2. shared
3. entities
4. features
5. widgets
6. pages
7. 상대 경로

예)
<br>
import { useQuery } from "@tanstack/react-query";

import { Button } from "@shared/ui/button";
import { userQueryOptions } from "@entities/user/api/user-query-options";
import { useLogin } from "@features/auth/model/use-login";

import "./style.css";

### 📌 Styling Convention

##### 스타일 작성 원칙

이 프로젝트는 `vanilla-extract`를 사용합니다.
<br>
스타일은 컴포넌트 파일에 직접 작성하지 않고, 같은 `ui` 폴더의 `.css.ts` 파일로 분리합니다.

- 파일명은 컴포넌트 파일명과 동일한 `kebab-case`를 사용합니다.
  <br>
  예) `my-profile.tsx` → `my-profile.css.ts`

- 컴포넌트에서는 `.css.ts`에서 export한 className만 import해서 사용합니다.

```tsx
import { container, title } from "./my-profile.css";

export const MyProfile = () => {
  return (
    <section className={container}>
      <h2 className={title}>내 프로필</h2>
    </section>
  );
};
```

- 인라인 스타일은 지양합니다.
  <br>
  예외적으로 런타임 계산값이 반드시 필요한 경우에도 우선 CSS 변수, variant, props 기반 class 조합을 고려합니다.

```tsx
// 지양
<div style={{ marginTop: 24 }} />

// 권장
<div className={content} />
```

##### 토큰 사용

색상, 폰트 크기, 반응형 조건은 직접 하드코딩하기보다 `shared/styles`의 토큰을 우선 사용합니다.
<br>
새 값이 여러 곳에서 반복되거나 의미가 있다면 먼저 토큰 추가를 고려합니다.

- 색상: `@shared/styles/colors.css`
- 타이포그래피: `@shared/styles/typography.css`
- 반응형 미디어쿼리: `@shared/styles/media-query.css`
- 공통 flex 유틸: `@shared/styles/flex.css`

```ts
import { style } from "@vanilla-extract/css";

import { colors, typography } from "@shared/styles";

export const title = style({
  color: colors.textPrimary,
  fontSize: typography.headingLg,
});
```

##### class 이름 작성

`.css.ts`에서 export하는 변수명은 역할이 드러나는 `camelCase`를 사용합니다.
<br>
컴포넌트명이나 태그명을 그대로 반복하기보다 레이아웃/역할 중심으로 작성합니다.

- 권장: `container`, `header`, `content`, `fieldRow`, `actionButton`
- 지양: `divStyle`, `blueText`, `myProfileWrapperStyle`

##### recipe 사용 기준

상태나 크기처럼 variant가 필요한 스타일은 `@vanilla-extract/recipes`의 `recipe`를 사용합니다.
<br>
단순 class 분기보다 variant 이름으로 의미가 드러나게 작성합니다.

```ts
import { recipe } from "@vanilla-extract/recipes";

export const chip = recipe({
  base: {
    borderRadius: 999,
  },
  variants: {
    selected: {
      true: {
        backgroundColor: colors.primary,
        color: colors.white,
      },
      false: {
        backgroundColor: colors.white,
        color: colors.textPrimary,
      },
    },
  },
});
```

##### 반응형 작성

반응형 스타일은 프로젝트 미디어쿼리 토큰을 사용합니다.
<br>
컴포넌트마다 임의의 breakpoint 문자열을 새로 만들지 않습니다.

```ts
import { style } from "@vanilla-extract/css";

import { maxWidthMediaQueryText } from "@shared/styles";

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  "@media": {
    [maxWidthMediaQueryText]: {
      gridTemplateColumns: "1fr",
    },
  },
});
```

##### 스타일 분리 기준

공통 UI에서 반복되는 스타일은 `shared/ui` 또는 `shared/styles`로 이동합니다.
<br>
특정 도메인 화면에서만 쓰이는 스타일은 해당 slice 내부에 둡니다.

- `shared/styles`: 색상, 폰트, 미디어쿼리처럼 전역 토큰
- `shared/ui`: Button, Chip, Input처럼 재사용 UI 스타일
- `features/*/ui/*.css.ts`: 해당 기능 컴포넌트 전용 스타일
- `views/*/ui/*.css.ts`: 페이지 조합 레이아웃 전용 스타일

##### 작성 시 주의사항

- magic number를 남발하지 않습니다. 반복되는 간격/크기는 의미 있는 변수나 토큰화를 고려합니다.
- 하나의 `.css.ts` 파일이 너무 커지면 컴포넌트 책임이 커진 신호로 보고 UI 분리를 검토합니다.
- 색상 이름으로 역할을 표현하지 않습니다. `purpleButton`보다 `primaryButton`, `selectedChip`처럼 의미를 드러냅니다.
- `!important`는 사용하지 않습니다. 필요한 경우 selector 구조나 컴포넌트 책임을 먼저 조정합니다.

### 📌 Type Convention

#### interface / type

객체 형태 정의는 상황에 따라 interface 또는 type을 사용하되, 하나의 파일 안에서는 일관성을 유지합니다.
<br>
Props 타입은 Props 또는 컴포넌트명 + Props 형식을 사용합니다.
<br>
interface Props {
<br>
name: string;
}
<br>
interface UserCardProps {
<br>
name: string;
<br>
}

#### enum / union type

enum보다 union type을 우선 고려합니다.
<br>
단순 상태값은 문자열 리터럴 유니온으로 관리합니다.
<br>
type UserRole = "admin" | "user";
<br>
type FetchStatus = "idle" | "pending" | "success" | "error";

### ENV 파일 관리

모든 환경 변수를 한 곳에서 관리함으로써 변경이 필요할 때 수정 지점이 명확해지고
<br>
직접 process.env를 참조하는 대신 객체를 통해 접근함으로써 오타로 인한 오류를 줄일 수 있습니다.
<br>
또한 객체의 구조가 환경 변수의 용도와 종류를 명시적으로 보여주므로 추가적인 문서 없이도 이해하기 쉬우며
<br>
개발, 테스트, 프로덕션 등 다양한 환경에 따른 설정을 체계적으로 관리할 수 있습니다.
<br>
// constants/env.constant.ts
<br>
const ENV = {
<br>
AUTH_UI_SERVER: process.env.NEXT_PUBLIC_AUTH_SERVER_URL,
<br>
API_SERVER: process.env.NEXT_PUBLIC_API_SERVER_URL,
<br>
NAVER_API_KEY: process.env.NEXT_PUBLIC_NAVER_API_KEY,
<br>
};
<br>
export default ENV;
