# 🏗️ Architecture

본 프로젝트는 **FSD(Feature-Sliced Design)** 아키텍처를 기반으로,
기존 FSD에서 파일 분리 기준이 모호해질 수 있는 문제를 보완한 구조를 사용합니다.

**Layer - Slice - Segment** 구조를 통해 역할과 도메인을 명확하게 분리했습니다.

---

## 📌 Structure Overview

- **Layer**: 역할 범위 기준 분리
- **Slice**: 도메인 기준 분리
- **Segment**: 도메인 내부 역할 기준 분리

```bash
features/
 ┗ user/
    ┣ ui/
    ┣ model/
    ┣ action/
    ┣ api/
    ┗ lib/
```

---

## 📌 Layer

### app

애플리케이션 전역 설정을 담당합니다.
Provider, Global CSS, Routing 등 앱 실행에 필요한 공통 설정을 관리합니다.

### pages

최종 화면을 구성하는 계층입니다.
Widget을 조합하여 하나의 페이지 UI를 완성합니다.

### widgets

Feature와 Entities를 조합한 UI 단위입니다.
페이지 내에서 의미 있는 블록 단위의 UI를 구성합니다.

### features

사용자 인터랙션과 상태 변경을 담당합니다.
CRUD 중 **CUD(Create, Update, Delete)** 중심의 기능을 처리합니다.

### entities

데이터 조회 및 표현을 담당합니다.
CRUD 중 **R(Read)** 역할을 수행하며, 서버 데이터를 가져오고 가공합니다.

### shared

모든 계층에서 재사용 가능한 공통 코드를 관리합니다.
UI 컴포넌트, 유틸 함수, 타입, 상수 등을 포함합니다.

---

## 📌 Slice (Domain)

Slice는 **도메인 기준**으로 나눕니다.
import는 각 도메인마다 index.ts 파일을 생성 하고 index.ts에서 export 합니다.
(도메인의 함수,컴포넌트들은 해당 도메인의 index.ts에 export)

예시:

- user
- auth
- post

관련된 로직과 UI를 하나의 도메인 안에 모아
구조를 직관적으로 유지하고 응집도를 높입니다.

---

## 📌 Segment (Responsibility)

Segment는 도메인 내부에서 **역할 기준**으로 나눕니다.

### ui

화면을 구성하는 컴포넌트

### model

비즈니스 로직 및 상태 관리

### action

서버 액션 (Next.js Server Action)

### api

서버 통신 및 API 요청 함수

### lib

비즈니스 로직이 아닌 범용 유틸 함수

---

## 📌 Design Principle

- Slice 간 직접 참조를 제한하여 도메인 간 결합도를 낮춤
- 각 파일이 명확한 역할을 가지도록 구조 설계
- 도메인 중심 구조를 유지하면서 역할 단위로 세분화

---

## 📌 Why This Architecture?

기존 FSD는 역할 분리에 강점이 있지만,
실제 개발 과정에서 파일을 어느 위치에 두어야 할지 모호해지는 경우가 있습니다.

이를 해결하기 위해 각 Segment의 역할을 명확히 정의하여
파일 배치 기준을 일관되게 유지할 수 있도록 설계했습니다.

이를 통해 다음과 같은 효과를 기대할 수 있습니다.

- 코드 응집도 증가
- 도메인 간 결합도 감소
- 유지보수성과 확장성 향상
- 구조 파악 용이성 증가
