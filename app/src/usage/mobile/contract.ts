import type { SafeArea } from "../safeArea";

// 껍데기 루트, 앱 바, 스크롤 본문, 바닥 칸, 탭바와 탭 칸의 data 속성 이름 정의
export const SHELL = {
  root: "usage-mobile-shell",
  appbar: "data-ods-appbar",
  body: "data-ods-body",
  footer: "data-ods-footer",
  tabsLabel: "화면 이동",
  tab: "data-ods-tab",
  // 라이브러리 부품 없이 공용 틀이 직접 그린 탭 칸에만 붙이는 속성 지정
  tabDrawn: "data-ods-tab-drawn",
} as const;

// 44px 규칙에서 제외하는 속성 지정. 이 속성을 단 요소와 자손은 키우지 않음
export const TOUCH_EXEMPT = "data-touch-exempt";

// 누르는 요소의 최소 크기 2.75rem(44px) 지정
export const TOUCH = "2.75rem";

// 하단 탭바 칸의 최소 높이 지정. 아이콘과 라벨 두 줄이 들어가는 높이로 shadcn 껍데기와 같은 값임
export const TAB_MIN_HEIGHT = "3.25rem";

// 기기 틀 안에서 UsageFrame 이 넣는 safe area 변수 지정. 앱 안 좁은 창에서는 0
export const SAFE_TOP = "var(--ods-safe-top, 0px)";
export const SAFE_BOTTOM = "var(--ods-safe-bottom, 0px)";

// 껍데기 높이 지정. 기기 틀 iframe 에서는 UsageFrame 이 100dvh 를 주고, 앱 안에서는 데스크탑 액자와 같은 높이
export const SHELL_HEIGHT = "var(--ods-usage-height, max(20rem, calc(100dvh - 9rem)))";

// 팝업과 화면 가장자리 사이 거리 지정. 좌우는 본문 여백 16, 위아래는 safe area 에 5 를 더함
const POPUP_GUTTER = 16;
const POPUP_EDGE = 5;

// 뜨는 팝업(선택 목록, 메뉴, 팝오버)이 지킬 네 변의 거리(px) 계산. 라이브러리마다 받는 형태가 달라 숫자로 전달함
export interface PopupSafeBox { top: number; right: number; bottom: number; left: number }

export function popupSafeBox(safe: SafeArea): PopupSafeBox {
  return {
    top: safe.top + POPUP_EDGE,
    right: POPUP_GUTTER,
    bottom: safe.bottom + POPUP_EDGE,
    left: POPUP_GUTTER,
  };
}
