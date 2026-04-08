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

#### Emotion 스타일 네이밍

스타일 변수명은 역할이 드러나도록 작성합니다.
container, wrapper, title, button 등 의미 기반으로 작성합니다.
<br>
const containerStyle = css`  display: flex;`;
<br>
const titleStyle = css`  font-size: 20px;`;
<br>

##### 스타일 작성 원칙

공통으로 재사용되는 스타일은 shared로 분리합니다.
<br>
특정 컴포넌트에서만 사용하는 스타일은 해당 컴포넌트 내부 또는 동일 폴더에서 관리합니다.
<br>
단순 레이아웃보다 의미 없는 축약 이름은 지양합니다.
<br>
// 지양 const boxStyle = css`; 
// 권장 const loginFormContainerStyle = css`;

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
