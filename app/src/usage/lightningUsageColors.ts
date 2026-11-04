import type { CSSProperties } from "react";

// 흰 상자 밖(바탕 = 의미 토큰 surface) SLDS 글자색 연결. SLDS 기본 글자색은 테마에 안 이은 neutral-base 계단(#181818·#444444)이라 다크·고대비 바탕 위에서 안 보임
// 흰 상자(slds-theme_default) 안은 모든 모드에서 흰 바탕이라 계단 값 그대로 둠
export const SURFACE_WEAK_TEXT: CSSProperties = { color: "var(--semantic-fg-neutral-subtle)" };

// 탭 글자 훅. 활성 탭은 SLDS 가 -active 값을 기본 훅에 다시 넣음
export const SURFACE_TABS = {
  "--slds-c-tabs-item-text-color": "var(--semantic-fg-neutral-subtle)",
  "--slds-c-tabs-item-text-color-active": "var(--semantic-fg-neutral-default)",
} as CSSProperties;

// 상자 밖 완료 알약. slds-theme_shade 는 바탕(#f3f3f3 리터럴)만 정해 다크에서 밝은 글자를 물려받음
export const SURFACE_DONE_PILL: CSSProperties = {
  background: "var(--semantic-bg-neutral-subtle)",
  color: "var(--semantic-fg-neutral-default)",
};

// 흰 상자 안 아직 단계 알약. opacity 0.55 는 고대비 기준(Lc 75)에 못 미쳐 흐린 느낌을 계단 색으로 냄
export const BOX_TODO_PILL: CSSProperties = { color: "var(--slds-g-color-neutral-base-30)" };

// 중립 버튼 글자는 SLDS 리터럴 파랑(#0176d3, hover #014486)이라 기본·hover·active 를 같은 토큰으로
export const buttonText = (color: string) => ({
  "--slds-c-button-text-color": color,
  "--slds-c-button-text-color-hover": color,
  "--slds-c-button-text-color-active": color,
}) as CSSProperties;
