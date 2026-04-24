import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

// FSD 레이어 의존 방향(하위 -> 상위 금지) 기준 순서
const LAYER_ORDER = ["shared", "entities", "features", "widgets", "views"];

// 각 레이어 파일에서 상위 레이어 import를 금지하는 규칙 생성기
const createFsdLayerRule = (layer) => {
  const currentIndex = LAYER_ORDER.indexOf(layer);
  const restrictedLayers = LAYER_ORDER.slice(currentIndex + 1);

  return {
    files: [`src/${layer}/**/*.{js,jsx,ts,tsx}`],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: restrictedLayers.map((name) => `@${name}/*`),
              message: `${layer} 레이어는 상위 레이어(${restrictedLayers.join("/")})를 참조할 수 없습니다.`,
            },
          ],
        },
      ],
    },
  };
};

const eslintConfig = defineConfig([
  // Next.js 권장 성능/접근성(Core Web Vitals) 규칙
  ...nextVitals,
  // Next.js + TypeScript 기본 권장 규칙
  ...nextTs,
  // 프로젝트 전역 코드 컨벤션 규칙
  {
    // src 하위의 JS/TS 파일에 공통 적용
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    // import 정렬 규칙 플러그인 등록
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Code Convention: 타입은 PascalCase, 변수/함수는 camelCase, 상수는 UPPER_CASE
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: ["variable", "function"],
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
        },
      ],
      // 함수 선언문 대신 함수 표현식(화살표 함수 포함) 사용 강제
      "func-style": ["error", "expression", { allowArrowFunctions: true }],
      // Import Convention: 외부 -> shared -> entities -> features -> widgets -> viwes -> 상대경로
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 외부 패키지(next/react 포함) - prettier sort-imports와 순서 일치
            ["^next", "^react$", "^@?\\w"],
            // FSD 계층 alias
            ["^@shared(/.*|$)"],
            ["^@entities(/.*|$)"],
            ["^@features(/.*|$)"],
            ["^@widgets(/.*|$)"],
            ["^@views(/.*|$)"],
            // 현재 파일 기준 상대 경로
            ["^\\."],
          ],
        },
      ],
      // export 구문도 정렬 기준을 강제
      "simple-import-sort/exports": "error",
    },
  },
  // FSD 아키텍처: 레이어별 상위 레이어 참조 금지 규칙 자동 생성
  ...LAYER_ORDER.slice(0, -1).map(createFsdLayerRule),
  // Next 기본 ignore를 유지하면서 명시적으로 관리
  globalIgnores([
    // 빌드 산출물/자동 생성 파일은 lint 대상에서 제외
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
