/* 예제 모듈이 주고받는 것.
 *
 * ⚠️ 생성물(`demos/{슬러그}/index.ts`)과 손으로 쓴 것(`demos/_overrides/`)이 **둘 다**
 *    이 파일을 본다. 타입을 `demos/index.ts` 에 두면 생성물이 그 파일을 보고 그 파일이
 *    다시 생성물을 보는 **고리**가 생긴다.
 */
import type * as React from "react";

/** 이 시스템이 실제로 가진 역할 하나 — 이름과, 지금 모드에서의 색. */
export interface ToneColor { name: string; hex: string }

/** 모든 예제가 같은 값을 받는다. 쓰는 것은 손으로 쓴 예제뿐이다. */
export interface DemoProps { tones: ToneColor[] }

/** 예제 이름 → 세울 수 있는 컴포넌트. 열쇠는 `examples[].name` 과 글자까지 같다. */
export type DemoSet = Record<string, React.ComponentType<DemoProps>>;

export interface DemoModule {
  demos: DemoSet;
  /** 못 세운 예제 이름 → **왜 못 세웠는지**. 화면이 이 말을 그대로 적는다. */
  skipped: Record<string, string>;
}
