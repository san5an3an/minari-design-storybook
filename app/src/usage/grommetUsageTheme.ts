import type { ThemeType } from "grommet";

// 상태 글자색. 생성 테마 status-* 는 채움용 값이라 글자로 쓰면 대비가 모자람
export const STATUS_TEXT = {
  ok: "var(--semantic-fg-success-default)",
  warning: "var(--semantic-fg-warning-default)",
  critical: "var(--semantic-fg-danger-default)",
} as const;

// 채움 바탕 위 글자색 짝. 생성 테마 text 가 모드별 한 값이라 Grommet 이 바탕을 보고 글자색을 바꾸지 못함
export const ON_FILL = {
  brand: "var(--semantic-fg-on-brand-default)",
  ok: "var(--semantic-fg-on-success-default)",
  warning: "var(--semantic-fg-on-warning-default)",
} as const;

// 사용 화면 ThemeContext.Extend 값. 비활성 탭·링크·현재 단계 글자가 브랜드 채움색이고 달력 선택일·이웃 달 날짜 글자가 대비가 모자라 글자 토큰으로 연결
export const GROMMET_USAGE_THEME = {
  tab: { color: "var(--semantic-fg-brand-default)" },
  anchor: { color: { light: "var(--semantic-fg-brand-default)" } },
  stepper: {
    current: { label: { color: { light: "var(--semantic-fg-brand-default)" } } },
    currentCompleted: { label: { color: { light: "var(--semantic-fg-brand-default)" } } },
  },
  calendar: {
    day: {
      selected: { color: ON_FILL.brand },
      adjacent: { color: "var(--semantic-fg-neutral-subtle)" },
    },
  },
} as ThemeType;
