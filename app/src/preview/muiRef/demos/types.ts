/* 예제 모듈이 주고받는 것.
 *
 * ⚠️ 생성물(`demos/{슬러그}/index.ts`)과 손으로 쓴 것(`demos/_overrides/`)이 **둘 다**
 *    이 파일을 본다. 타입을 `demos/index.ts` 에 두면 생성물이 그 파일을 보고 그 파일이
 *    다시 생성물을 보는 **고리**가 생긴다. (antd 쪽에서 같은 이유로 갈라 둔 자리다.)
 */
import type * as React from "react";

/** 이 시스템이 실제로 가진 역할 하나 — 이름과, 지금 모드에서의 색. */
export interface ToneColor { name: string; hex: string }

/** 모든 예제가 같은 값을 받는다. 쓰는 것은 손으로 쓴 예제뿐이다. */
export interface DemoProps { tones: ToneColor[] }

/**
 * 예제 이름 → 세울 수 있는 컴포넌트.
 *
 * ⚠️ 열쇠는 **공식 예제 파일의 이름**(`BasicButtons`)이다. 화면에 보이는 글이 아니다 —
 *    공식 문서는 예제마다 제목을 달지 않고 **절 안에 그냥 끼워 넣기** 때문에,
 *    사람이 읽는 이름이 아예 없는 예제가 대부분이다.
 */
/* ⚠️ `ComponentType<DemoProps>` 로 좁히지 않는다 — **좁히면 공식 예제가 안 들어온다.**
 *    그쪽 예제 중에는 제 props 를 따로 선언한 것이 있다:
 *
 *        interface Props { window?: () => Window }   // AppBar · Drawer 등 6개
 *
 *    전부 선택 항목뿐인 타입이라, TypeScript 의 **약한 타입(weak type)** 규칙이
 *    "겹치는 이름이 하나도 없는" `DemoProps` 를 거부한다 (실측 2026-08-26 · 6건).
 *    예제 본문을 고쳐 맞출 수는 있지만 그러면 생성기의 첫 규칙이 깨진다.
 *
 *    부르는 쪽은 **언제나 `DemoProps` 를 넘긴다.** 그 밖의 props 를 선언한 예제는
 *    그것을 안 쓸 뿐이다(공식 문서 사이트가 iframe 때문에 넣던 값이다).
 *    `systems/types.ts` 의 `ComponentImpl` 이 같은 까닭으로 같은 모양이다. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DemoSet = Record<string, React.ComponentType<any>>;

export interface DemoModule {
  demos: DemoSet;
  /** 못 세운 예제 이름 → **왜 못 세웠는지**. 화면이 이 말을 그대로 적는다. */
  skipped: Record<string, string>;
}
