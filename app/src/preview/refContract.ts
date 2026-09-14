import type React from "react";
import type { Mode, SystemDefinition } from "../systems/types";

// 공식에 있는 그대로 반영. null/[] 로 뭉개지 않음
export type Presence =
  | "official" // 공식 표와 섹션 인용
  | "derived" // 공식 표 없이 타입 선언 등에서 추출. 화면에 그 출처 표시
  | "absent-in-official" // 공식에 없음
  | "not-imported" // 공식에 있으나 미포함, 사유 필수 표기
  | "code-only"; // 공식에 있으나 코드라 제외

export type SkipCode =
  | "package-missing" // 미설치 패키지
  | "local-module-missing" // 공식 저장소에 없는 별칭 모듈 경로
  | "self-themed" // 예제가 공급자에 theme 직접 지정
  | "base-theme-only" // 공식도 기본 테마에서만 보임
  | "fixed-palette" // 커스텀 색상을 의도적으로 덮어쓰는 예제
  | "global-css" // 예제 본문 CSS는 예제 CSS 기준 미달
  | "external-request" // U-2 불허일 때만 런타임 외부 요청 전달
  | "runtime-unavailable" // 런타임에 없는 항목
  | "data-endpoint-missing" // 동봉된 공식 로컬 모듈이 앱에 없는 동일 출처 경로로 요청
  | "private-api" // import 경로 치환 대상, 설치본 공개 진입점에 같은 값 없음
  | "not-an-example" // 조종판, 펜스 등 kind 밖 요소
  | "other";

export interface BaseRefExample {
  key: string;
  // Kid 라벨은 공식 이름 또는 가까운 제목 사용, 임의 생성 금지
  name: string;
  // 예제가 속한 ## 섹션 제목, 밖이면 null
  axis: string | null;
  // example만 Master, 문서 순서에 반영하기
  kind: "example" | "playground" | "fence";
  description: string | null;
  descFormat: "md" | "html" | "text" | null;
  // 저장소@태그 또는 커밋:경로:줄 형식
  source: string;
  stage: "inline" | "contain" | "iframe";
  iframeHeight: number | null;
  // 스토리 args를 공급자 옵션으로 변환, 허용 키는 PROVIDER_ARG_KEYS로 지정
  providerProps: Record<string, unknown> | null;
  // meta.args와 story.args 병합한 기본 args, 없으면 null
  args: Record<string, unknown> | null;
}

export interface BaseRefDoc {
  slug: string;
  title: string;
  lead: string | null;
  leadFormat: "md" | "html" | "text" | null;
  group: string | null;
  docHref: string | null;
  // 문서 목록, lead, API 출처와 버전 표시
  docSource: string | null;
  examples: BaseRefExample[];
  // examples 비어 있을 때만 채우기
  emptyReason: null | "official-none" | "not-collected";
  master: { rule: "official-mark" | "doc-order-first"; key: string | null; reason: string | null };
  // 산문 섹션 렌더링. title이 null이면 원본에 제목이 없다는 뜻이며 지어내지 않음
  prose: { title: string | null; text: string; format: "md" | "html" | "text" }[];
  parts: { presence: Presence; columns: string[]; rows: string[][] };
  // 공식 표 여러 개 지원. 열 구성은 공식 표 그대로 유지
  api: { presence: Presence; tables: { name: string | null; columns: string[]; rows: string[][] }[] };
  // --component-<이름>-* 그룹, 이름 대응 없으면 null
  tokenGroup: string | null;
}

// html은 daisyui 등 마크업 계열 프레임워크 값
// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- ADR §7 원문 모양 그대로
export type DemoValue = React.ComponentType<{}> | { html: string };

export interface BaseRefProviderProps {
  // slug, 색, 모드를 공급자가 직접 지정하는 베이스용 필드 전달
  system: SystemDefinition;
  mode: Mode;
  children: React.ReactNode;
  providerProps?: Record<string, unknown> | null;
}

export interface BaseRefAdapter {
  INDEX: { slug: string; title: string }[];
  GROUPS?: Record<string, string[]>;
  TITLE?: Map<string, string>;
  isSlug(slug: string): boolean;
  loadDoc(slug: string): Promise<BaseRefDoc> | null;
  // 모듈을 {demos, skipped}로 변환. 키는 examples[].key
  loadDemos(slug: string): Promise<{
    demos: Record<string, DemoValue>;
    skipped: Record<string, { code: SkipCode; detail: string }>;
  }> | null;
  // 예제별 감싸는 공급자, 없으면 Fragment
  Provider: React.ComponentType<BaseRefProviderProps>;
  // 테마, CSS 베이스만 대상. 반환 함수는 이탈, 색, 모드 변경 직전에 호출
  mountTheme?(system: SystemDefinition, mode: Mode, doc: Document):  => void;
}
