import { createElement, type ComponentType, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

// shadcn 컴포넌트에 치수 클래스 부착. inline style 대신 클래스라서 shadcn 의 상태·변형 규칙(has-, group-data-)이 계속 우선함
export function withDims<P extends { className?: string }>(C: ComponentType<P>, dims: string): ComponentType<P> {
  const W = (props: P) => createElement(C, { ...props, className: cn(dims, props.className) });
  W.displayName = `withDims(${C.displayName ?? C.name ?? "Component"})`;
  return W;
}

// 기본 행간 snug 1.3 적용. 본문 행간 1.5면 한 줄 컨트롤 높이가 커지는 문제 있음
export function sizeVars(comp: string, size?: string, lh = "snug"): CSSProperties {
  // size 생략 시 접두사 없는 토큰명 사용. 크기별 컴포넌트 아니면 토큰 평평하기 때문임
  const p = size ? `${comp}-${size}` : comp;
  return {
    paddingInline: `var(--component-${p}-padding-inline)`,
    paddingBlock: `var(--component-${p}-padding-block)`,
    fontSize: `var(--component-${p}-font-size)`,
    lineHeight: `var(--base-font-line-height-${lh})`,
    height: "auto",
  };
}

export function fieldVars(comp: string): CSSProperties {
  return {
    "--input": `var(--component-${comp}-border)`,
    "--ring": `var(--component-${comp}-border-focus)`,
    "--background": `var(--component-${comp}-bg)`,
    "--foreground": `var(--component-${comp}-fg)`,
    "--muted-foreground": `var(--component-${comp}-fg-placeholder)`,
    "--destructive": `var(--component-${comp}-border-invalid)`,
    borderRadius: `var(--component-${comp}-radius)`,
  } as CSSProperties;
}

// 역할 이름은 시스템마다 상이, brand danger만 공통 표시
export function toneVars(tone: string): CSSProperties {
  return {
    "--primary": `var(--semantic-bg-${tone}-default)`,
    "--primary-foreground": `var(--semantic-fg-on-${tone}-default)`,
    "--secondary": `var(--semantic-bg-${tone}-subtle)`,
    "--secondary-foreground": `var(--semantic-fg-on-${tone}-subtle)`,
    "--muted": `var(--semantic-bg-${tone}-subtle)`,
    "--muted-foreground": `var(--semantic-fg-on-${tone}-subtle)`,
    "--destructive": `var(--semantic-bg-${tone}-default)`,
    // --border를 테두리 색으로 읽음. 고대비에서 subtle/disabled 버튼 유지 위한 역할 지정 방식임
    "--border": `var(--semantic-border-${tone}-default)`,
  } as CSSProperties;
}
