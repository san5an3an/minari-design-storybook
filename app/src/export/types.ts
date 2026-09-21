export const EXPORT_KIND = "ods.export";
export const EXPORT_VERSION = 1;

export const FORMATS = ["html", "next", "both", "theme"] as const;
export type Format = (typeof FORMATS)[number];

export function wantsHtml(f: Format): boolean {
  return f === "html" || f === "both";
}
export function wantsNext(f: Format): boolean {
  return f === "next" || f === "both";
}
// 테마, 토큰만 해당. 라이브러리 경로에서만 의미 있음
export function wantsThemeOnly(f: Format): boolean {
  return f === "theme";
}

// 창에서 고른 값 전부. 내보내기 한 번에 필요한 입력임
export interface ExportRequest {
  // 색 테마 슬러그
  slug: string;
  // 베이스 식별 키. shadcn, mui, antd 등
  baseKey: string;
  // alert 컴포넌트 이름
  component: string;
  format: Format;
  // 값 축, { tone: ["neutral", "danger"] }
  values: Record<string, string[]>;
  // 포함할 컴포넌트, AlertIcon, AlertTitle
  parts: string[];
  // 함께 전달할 상태: ["disabled"]
  states: string[];
}

export interface ExportFile {
  // 그룹 내 이름 지정. 디렉토리 구분에 / 사용
  path: string;
  // 소비자 처리 방식을 결정하는 MIME 타입
  type: string;
  text: string;
}

export interface ExportSource {
  slug: string;
  // 사람이 읽는 색 이름, 슬러그 값 그대로 사용
  systemName: string;
  baseKey: string;
  component: string;
  // 사람이 읽는 컴포넌트 이름, api.json 계약에서 추출
  componentTitle: string;
}

export interface ExportPayload {
  kind: typeof EXPORT_KIND;
  version: number;
  source: ExportSource;
  // 선택한 값을 원본 그대로 유지
  selection: Omit<ExportRequest, "slug" | "baseKey" | "component">;
  files: ExportFile[];
}

// api.json 계약 프롭에서 값 축 하나 추출
export interface ExportAxis {
  prop: string;
  kind: string;
  values: string[];
  // 미지정 시 기본값. 축별 파일에서 나머지 축 고정 용도로 사용
  default: string | null;
}

// 화면 렌더링에 필요한 요소
export interface RenderArgs {
  // 루트 전달 props, variant/tone/disabled 예시
  props: Record<string, string | boolean>;
  // 내부에 렌더링할 컴포넌트 이름 목록. 비어 있으면 text 그대로 사용
  parts: string[];
  // 하위 컴포넌트 없을 때 root에 넣을 텍스트
  text: string;
}

export interface ExportResources {
  source: ExportSource;
  // generated/{slug}/vars.css 원문
  vars: string;
  // 컴포넌트 CSS 파일 원문
  componentCss: string;
  // 계약에서 온 값 전부
  axes: ExportAxis[];
  // 계약에서 온 하위 컴포넌트 이름 전부: AlertIcon, AlertTitle 등
  partNames: string[];
  // 값이 없는 프롭 이름 목록, ["disabled"]
  stateNames: string[];
  // React export 이름은 Alert
  exportName: string;
  // {name}.tsx 원문 재가공 없이 그대로 추가
  componentSource: string;
  // cx.ts 원문. 컴포넌트가 유일하게 호출하는 대상
  cxSource: string;
  // 화면 하나를 정적 마크업으로 표현. 내부에서 실제 컴포넌트 사용
  renderComponent(args: RenderArgs): string;

  lib?: LibResources;
}

// 라이브러리 경로가 쓰는 자원. 전부 산출물에서 읽은 원문임
export interface LibResources {
  // 사람이 읽는 이름, 예: Ant Design
  title: string;
  // 설치 대상
  packages: string[];
  // 컴포넌트 임포트 출처: antd, @mui/material
  importFrom: string;
  // generated/{slug}/base/{base}/theme.{themeExt} 표시
  themeSource: string;
  themeExt: "ts" | "css";
  // 공급자 파일 본문
  providerSource: string;
  // 함께 포함하는 저장소 파일 목록: { to, text, why }
  extras: { to: string; text: string; why: string }[];
  // 공식 컴포넌트가 실제로 쓰는 이름: Button
  componentName: string;
  // 선택 가능한 prop. 공식 메타데이터에서 추출하기
  props: { prop: string; values: string[]; default: string | null }[];
  dropped: string[];
}

// payload 전송. 브라우저에서 처리
export type Sink = (payload: ExportPayload) => Promise<void>;
