import type { ComponentType, CSSProperties, ReactNode } from "react";

export const MODES = ["light", "dark", "high-contrast"] as const;
export type Mode = (typeof MODES)[number];

// 테마 공급자 props, mode 필수
export interface ProviderProps {
  mode: Mode;
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentImpl = ComponentType<any>;

export interface ApiProp {
  prop: string;
  // variant(값 여럿), flag(켬끔), attr(표준 속성), slot(위치)
  kind: string;
  // 선택 가능 값 목록, 빈 배열이면 값 없는 속성
  values: string[];
  // 값 미지정 시 기본값. null이면 기본값이 없다는 뜻임
  default: string | null;
  desc: string;
  required?: boolean;
}

// Figma 자식 아이템에 대응하는 Parts 단위
export interface ApiPart {
  name: string;
  cls: string;
  tag: string;
  desc: string;
  props: ApiProp[];
}

// 컴포넌트 한 종의 선언 전부
export interface ComponentApi {
  name: string;
  title: string;
  summary: string;
  // 루트 태그 및 클래스
  root: string;
  base: string;
  props: ApiProp[];
  parts: ApiPart[];
}

export type SystemApi = Record<string, ComponentApi>;

export interface DialogProps {
  open: boolean;
  onClose:  => void;
  title: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  stacked?: boolean;
}

// 시스템별 개수가 다른 컴포넌트 하나
export interface ComponentEntry {
  // 토큰 경로와 CSS 클래스에 쓰이는 이름. 예: button은 .ods-button
  name: string;
  title: string;
  summary: string;
  // React 실제 구현 여부, 현재 미구현이 다수임
  ready: boolean;
}

export interface SystemDefinition {
  slug: string;
  name: string;
  // 시스템이 기반으로 하는 프레임워크
  baseTitle: string;
  // 베이스의 기계용 식별자. 주소와 레지스트리 키로 사용
  baseKey: string;
  // 한 행 성격 설명, 명세 tone 값 그대로 사용
  tone: string;
  // 타입 스케일 비율. 본문 16px 기준으로 이 비율만큼 단계 상승 계산
  typeRatio: number;
  // 브랜드 solid 9단계 hex 값, 사이드바 점 표시에 사용
  brand: string;
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  css: string;
  vars: string;
  refs: Record<string, Record<string, string>>;
  api: SystemApi;
  Provider: ComponentType<ProviderProps>;
  impl: Readonly<Record<string, ComponentImpl>>;
  // 시스템에서 선택 가능한 값. 화면 컨트롤에 이 값 적용
  buttonVariants: readonly string[];
  buttonTones: readonly string[];
  components: readonly ComponentEntry[];
}
