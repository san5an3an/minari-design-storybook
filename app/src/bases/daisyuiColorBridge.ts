import type { CSSProperties } from "react";

// Tailwind 색 클래스가 daisyUI 테마 색을 읽도록 연결. 앱 @theme inline 이 primary·success·warning 을 앱 팔레트 변수로 먼저 묶어 daisyUI 값이 안 닿음
export const DAISYUI_COLOR_BRIDGE = {
  "--primary": "var(--color-primary)",
  "--success": "var(--color-success)",
  "--warning": "var(--color-warning)",
} as CSSProperties;

// 사용 화면은 글자에 쓰는 primary·success 를 시스템 글자 토큰으로 연결. daisyUI 테마 색은 채움용이라 흰 바탕 글자로 쓰면 대비 2:1 안팎임
export const DAISYUI_USAGE_COLOR_BRIDGE = {
  "--primary": "var(--semantic-fg-brand-default)",
  "--success": "var(--semantic-fg-success-default)",
  "--warning": "var(--color-warning)",
} as CSSProperties;
