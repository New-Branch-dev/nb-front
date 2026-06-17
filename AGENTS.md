<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Overview

This project uses a customized Feature-Sliced Design (FSD) architecture.

The architecture is designed for:

- scalability
- maintainability
- predictable domain ownership
- clear separation of responsibilities

Tech Stack:

- Next.js App Router
- React
- TypeScript
- vanilla-extract
- pnpm
- Vitest

---

# Core Architecture

Project layers:

```txt
app
views
widgets
features
entities
shared
```

---

# Layer Responsibilities

## app

Application-level initialization layer.

Contains:

- providers
- routing
- layouts
- global styles
- app initialization logic

Rules:

- should not contain domain business logic
- should not contain reusable business UI

---

## views

Page composition layer.

Responsible for:

- composing widgets
- composing features
- composing entities
- page-level layout

Rules:

- keep views declarative
- avoid heavy business logic
- avoid direct API handling

---

## widgets

Large UI composition blocks.

Examples:

- sidebar
- dashboard section
- complex form section
- navigation area

Rules:

- compose features/entities together
- focus on layout and composition
- avoid owning business rules

---

## features

Dynamic interaction layer.

Responsible for:

- POST requests
- PUT requests
- DELETE requests
- mutations
- user interactions
- form actions
- state transitions

Examples:

- login action
- submit form
- create learning goal
- update profile

Rules:

- features own interactive logic
- features should not own read-only domain rendering
- business actions belong here

---

## entities

Read-focused domain layer.

Responsible for:

- GET requests
- domain models
- read-only business UI
- reusable domain state

Examples:

- user profile display
- learning goal card
- course information

Rules:

- entities should avoid mutation logic
- entities focus on displaying and reading data

---

## shared

Global reusable layer.

Contains:

- shared UI
- utilities
- configs
- constants
- hooks
- design tokens
- common types

Rules:

- shared must remain domain-agnostic
- no business-specific logic
- no domain ownership

---

# Slice Rules

Slices are separated using two principles:

1. Domain-based separation
2. Reusable/common functionality separation

Examples:

```txt
features/my-learning
features/auth
features/submit-button

entities/user
entities/course

shared/modal
shared/button
```

Rules:

- a slice should represent either:
  - a business domain
  - a reusable functional unit
- avoid mixing unrelated domains inside one slice

---

# Segment Rules

Each slice is divided by responsibility.

Common segments:

```txt
ui
model
hook
api
lib
types
consts
config
```

---

# Segment Responsibilities

## ui

Visual rendering layer.

Rules:

- focus on rendering only
- receive clear props
- avoid heavy business logic
- avoid direct API calls

---

## model

Business logic layer.

Contains:

- state management
- validation logic
- business rules
- domain state transitions

Rules:

- keep business logic centralized
- avoid UI rendering logic

---

## hook

Custom React hooks.

Rules:

- encapsulate reusable logic
- keep hooks focused
- avoid unnecessary side effects

---

## api

API communication layer.

Responsible for:

- fetch logic
- request functions
- API adapters

Rules:

- no UI logic
- no rendering logic
- keep request logic isolated

---

## lib

Pure utility functions.

Rules:

- keep functions side-effect free
- keep reusable
- avoid React dependency

---

# Import Rules

Follow layer dependency direction strictly.

Allowed direction:

```txt
shared
↑
entities
↑
features
↑
widgets
↑
views
↑
app
```

Rules:

- lower layers must not import upper layers
- entities cannot import features
- shared cannot import entities
- features cannot import widgets
- widgets cannot import views

## Public entry imports (excluding `app`)

For code under `views`, `widgets`, `features`, `entities`, and `shared`, when you import from **another slice folder** (a different top-level directory under `src/` for that layer), import through that slice’s **public `index.ts` barrel** — or the path alias that resolves to it (e.g. `@widgets/navigation`, `@shared/ui/tab`). Avoid deep paths such as `@widgets/foo/ui/Bar.tsx` across slice boundaries so exports stay stable. The **`app`** layer is exempt when wiring routes, layouts, and app-only glue.

---

# React (project version)

This project pins **React 19.2.x** and **`@types/react` 19** (see `package.json`). Prefer APIs and patterns documented for that line of releases (including **React hooks** and concurrent-related behavior). When in doubt, read the current React reference for the installed minor, not older major-version blogs.

## `<Activity>` for `condition ? <Component /> : <nonComponent>`

If UI is written as a ternary (or logical equivalent) of the form **`condition ? <RealComponentTree /> : <nonComponent>`**, where **`<nonComponent>`** is anything that is **not** the same mounted subtree you care about — common cases: **`null`**, **`false`**, bare **text**, or a **different** placeholder element that would **unmount** the real subtree — you **must** wrap the substantive UI in **`<Activity mode={condition ? "visible" : "hidden"}>`** from **`react`** instead of removing the subtree with `null` alone. That keeps the tree and state model aligned with React 19.2’s visibility semantics. See the official reference: [`<Activity>`](https://19.react.dev/reference/react/Activity).

```tsx
// required pattern (example)
<Activity mode={isOpen ? "visible" : "hidden"}>
  <Panel />
</Activity>
```

Do **not** use `isOpen ? <Panel /> : null` for mountable UI that should follow this rule; prefer `Activity` + `mode` as above.

---

# Development Principles

## Code Convention

Rules:

- file and folder names use `kebab-case`
- component names and type names use `PascalCase`
- variable names and function names use `camelCase`
- constants use `SCREAMING_SNAKE_CASE`
- custom hooks use the `use` prefix
- event handlers use the `handle` prefix
- read/query functions use the `fetch` prefix
- create/update/delete functions use the `create`, `update`, or `delete` prefix
- value conversion functions use the `convert` prefix
- arrays use the `List` suffix
- booleans use status-specific prefixes:
  - `is` for state checks
  - `has` for data existence checks
  - `can` for capability checks

---

## Follow Existing Patterns

Before creating new structures:

- inspect nearby files
- follow existing patterns
- maintain naming consistency

Avoid unnecessary abstractions.

---

## Component Principles

Rules:

- keep components small
- separate UI from business logic
- when component logic is needed, follow the VAC pattern: keep the container/controller responsible for state, store access, side effects, and event composition, and keep the view component focused on rendering with explicit props
- for component-local VAC helpers, keep small formatting, normalization, and event mapping utilities inside the container file; move reusable domain validation or shared business rules to `lib` or `model`
- when a component needs a modal, use the common `widgets/modal` shell and compose its domain-specific contents from an allowed upper layer such as `app` or `views`
- keep modal state and dialog event handling in the `widgets/modal` container and keep `ModalView` focused on rendering explicit props
- prefer composition over massive components
- avoid deep prop drilling
- split responsibilities clearly

---

## State Management Principles

Rules:

- keep state local when possible
- avoid unnecessary global state
- separate server state from UI state
- avoid over-engineering

---

# Styling Rules

This project uses vanilla-extract.

Rules:

- separate styles into `.css.ts`
- avoid inline styles
- prefer recipe-based variants
- use design tokens consistently
- keep styling predictable

---

# TypeScript Rules

Rules:

- avoid `any`
- prefer explicit typing
- use meaningful type names
- keep types near domain ownership

Boolean naming conventions:

- `is`
- `has`
- `can`
- `should`

Examples:

- `isLoading`
- `hasError`
- `canSubmit`
- `shouldRefetch`

---

# API Rules

Rules:

- isolate API requests inside `api`
- avoid fetch logic inside UI
- validate response structure when necessary
- avoid duplicated request logic

---

# Testing Rules

Testing Stack:

- Vitest

Rules:

- test business logic first
- avoid implementation-detail testing
- keep tests readable
- focus on user behavior

---

# Performance Principles

Rules:

- avoid unnecessary re-renders
- avoid excessive client components
- prefer server components when possible
- lazy load heavy UI when necessary
- memoize only when beneficial

---

# Forbidden Rules

NEVER:

- use `any` unnecessarily
- place business logic inside `shared`
- place mutation logic inside `entities`
- create massive components
- break import direction
- mix API logic inside UI components
- introduce unrelated refactors
- add libraries without necessity
- duplicate domain logic
- bypass existing architecture patterns

---

# Agent Workflow

Before editing:

1. inspect related files
2. understand existing patterns
3. verify architecture direction
4. minimize unnecessary changes

After editing:

1. verify type safety
2. verify lint
3. verify test stability
4. summarize changes clearly
5. explain architectural decisions briefly

When summarizing work:

- group related changes by category
- use larger category titles for each work area
- describe each category with concise list items
- keep each list focused on core changes, not exhaustive implementation detail

---

# Git Workflow

Branch naming:

```txt
feat/*
fix/*
refactor/*
chore/*
docs/*
```

Commit conventions:

```txt
feat:
fix:
refactor:
chore:
docs:
```

Commit and push message rules:

- write commit messages in Korean
- write push/PR work summaries in Korean
- keep messages concise and easy for other developers to scan

Examples:

```txt
feat: 학습 목표 생성 흐름 추가
fix: 하이드레이션 불일치 수정
refactor: 유효성 검사 로직과 UI 분리
docs: 아키텍처 가이드 갱신
```

---

# Code Review Checklist

Before finalizing code:

- verify layer direction
- verify slice ownership
- verify domain separation
- verify type safety
- verify unnecessary rerender risks
- verify accessibility basics
- verify API separation
- verify business logic placement

---

# AI Agent Instructions

When generating code:

- prioritize maintainability
- prioritize readability
- follow existing project structure
- avoid speculative abstractions
- prefer explicit code over overly clever patterns

When modifying existing code:

- preserve current architecture
- avoid unrelated refactors
- keep changes minimal and focused
- explain major structural decisions
