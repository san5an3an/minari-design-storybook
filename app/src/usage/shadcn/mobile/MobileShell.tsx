"use client";
import * as React from "react";
import { PopupSafeAreaContext, type PopupSafeArea } from "../../../bases/shadcn/internal/popupCollision";
import { SafeAreaContext } from "../../safeArea";

export interface MobileTab {
  key: string;
  label: string;
  icon: React.ReactNode;
}

interface MobileShellProps {
  // 앱 바 제목 지정. bare면 앱 바를 그리지 않음
  title?: React.ReactNode;
  // 제목 아래 보조 한 줄 표시
  subtitle?: React.ReactNode;
  // 앱 바 왼쪽 영역 지정. 뒤로 가기 버튼용이며 터치 영역은 44px 이상 확보함
  leading?: React.ReactNode;
  // 앱 바 오른쪽 작업 버튼, 아바타 메뉴 영역 지정
  trailing?: React.ReactNode;
  tabs?: readonly MobileTab[];
  activeKey?: string;
  // 값이 바뀌면 본문 스크롤을 맨 위로 초기화. 탭은 같고 내용만 바뀌는 상세 화면용임
  scrollKey?: string;
  onSelect?: (key: string) => void;
  // 앱 바, Tab bar 없이 본문만 표시. 로그인 화면용이며 safe area만 적용함
  bare?: boolean;
  children: React.ReactNode;
}

// 터치 영역 최소 크기 2.75rem(44px) 지정. 시스템 밀도 토큰보다 우선 적용함
export const TOUCH = "2.75rem";

const SAFE_TOP = "var(--ods-safe-top, 0px)";
const SAFE_BOTTOM = "var(--ods-safe-bottom, 0px)";

// 팝업이 화면 가장자리에서 띄우는 거리 지정. 좌우는 본문 여백 16px, 위아래는 safe area에 Base UI 기본 간격 5px를 더함
const POPUP_GUTTER = 16;
const POPUP_EDGE = 5;

// 모바일 껍데기 안과 포털 팝업에 터치 영역 44px 일괄 적용. 어댑터 인라인 style을 이기기 위해 !important 사용함
const MOBILE_CSS = `
[data-slot="usage-mobile-shell"] :is(button, [role="button"], [role="tab"], [role="combobox"], [role="menuitem"], select, a[href], input:not([type="checkbox"], [type="radio"], [type="hidden"], [type="range"])) {
  min-height: 2.75rem !important;
}
[data-slot="usage-mobile-shell"] :is(button, [role="button"], [role="tab"], a[href]) {
  min-width: 2.75rem !important;
}
[data-slot="usage-mobile-shell"] a[href] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
[data-slot="usage-mobile-shell"] [data-slot="tabs-list"] {
  height: auto;
  width: 100%;
}
[data-slot="usage-mobile-shell"] [data-slot="tabs-trigger"] {
  height: auto;
  flex: 1 1 0;
  min-width: 0;
}
html[data-ods-mobile] :is([data-slot="dropdown-menu-item"], [data-slot="dropdown-menu-checkbox-item"], [data-slot="dropdown-menu-radio-item"], [data-slot="dropdown-menu-sub-trigger"], [data-slot="select-item"], [data-slot="command-item"]) {
  min-height: 2.75rem !important;
}
html[data-ods-mobile] [data-slot="command-input"] {
  min-height: 2.75rem !important;
}
html[data-ods-mobile] [data-slot="sheet-content"] [data-slot="sheet-close"] {
  min-width: 2.75rem !important;
  min-height: 2.75rem !important;
}
html[data-ods-mobile] [data-slot="drawer-content"] :is(button, [role="combobox"], input:not([type="checkbox"], [type="radio"], [type="hidden"], [type="range"])) {
  min-height: 2.75rem !important;
}
html[data-ods-mobile] [data-slot="drawer-content"] button {
  min-width: 2.75rem !important;
}
`;

export function MobileShell({ title, subtitle, leading, trailing, tabs, activeKey, scrollKey, onSelect, bare, children }: MobileShellProps) {
  const scroller = React.useRef<HTMLDivElement>(null);

  // 팝업이 safe area 안에서만 열리도록 값 제공. 포털로 떠도 React 트리로 전달되어 body 아래 목록에도 적용됨
  const safe = React.useContext(SafeAreaContext);
  const popupSafe = React.useMemo<PopupSafeArea>(() => ({
    collisionPadding: {
      top: safe.top + POPUP_EDGE,
      bottom: safe.bottom + POPUP_EDGE,
      left: POPUP_GUTTER,
      right: POPUP_GUTTER,
    },
    alignItemWithTrigger: false,
  }), [safe.top, safe.bottom]);

  // 껍데기가 떠 있는 동안 html에 포털 보정 CSS용 속성 지정
  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.odsMobile = "true";
    return () => { delete root.dataset.odsMobile; };
  }, []);

  // 화면 전환 시 본문 스크롤 위치를 맨 위로 초기화
  React.useLayoutEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [activeKey, scrollKey]);

  return (
    <PopupSafeAreaContext.Provider value={popupSafe}>
    <div
      data-slot="usage-mobile-shell"
      className="flex flex-col overflow-hidden"
      style={{
        /* 기기 화면에서는 UsageFrame이 준 높이 사용, 앱 안 좁은 창에서는 데스크탑 액자와 같은 높이 사용 */
        height: "var(--ods-usage-height, max(20rem, calc(100dvh - 9rem)))",
        background: "var(--semantic-bg-neutral-surface)",
        color: "var(--semantic-fg-neutral-default)",
      }}
    >
      <style>{MOBILE_CSS}</style>
      {bare ? null : (
        <header
          className="flex shrink-0 items-center gap-(--semantic-space-sm) px-(--semantic-space-md)"
          style={{
            /* 상단 safe area까지 머리 배경 적용. 상태 막대 아래까지 칠해야 iOS 앱처럼 보임 */
            paddingTop: `calc(${SAFE_TOP} + var(--semantic-space-sm))`,
            paddingBottom: "var(--semantic-space-sm)",
            minHeight: `calc(${SAFE_TOP} + ${TOUCH} + var(--semantic-space-sm) * 2)`,
            background: "var(--semantic-bg-neutral-surface)",
            borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          {leading ? <div className="flex shrink-0 items-center">{leading}</div> : null}
          <div className="flex min-w-0 flex-1 flex-col">
            <h1
              className="truncate"
              style={{
                margin: 0,
                fontSize: "var(--semantic-text-heading-sm)",
                lineHeight: "var(--semantic-line-height-tight)",
                color: "var(--semantic-fg-neutral-default)",
              }}
            >
              {title}
            </h1>
            {subtitle ? (
              <span
                className="truncate"
                style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}
              >
                {subtitle}
              </span>
            ) : null}
          </div>
          {trailing ? <div className="flex shrink-0 items-center gap-(--semantic-space-sm)">{trailing}</div> : null}
        </header>
      )}

      <div
        ref={scroller}
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
        style={bare ? { paddingTop: SAFE_TOP, paddingBottom: SAFE_BOTTOM } : undefined}
      >
        {children}
      </div>

      {bare || !tabs?.length ? null : (
        <nav
          aria-label="화면 이동"
          className="grid shrink-0"
          style={{
            gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
            /* 하단 safe area를 Tab bar 아래 Padding으로 사용. 홈 표시줄과 겹치지 않게 하기 위함 */
            paddingBottom: SAFE_BOTTOM,
            background: "var(--semantic-bg-neutral-surface)",
            borderTop: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          {tabs.map((t) => {
            const on = t.key === activeKey;
            return (
              <button
                key={t.key}
                type="button"
                aria-current={on ? "page" : undefined}
                onClick={() => onSelect?.(t.key)}
                className="flex flex-col items-center justify-center gap-(--semantic-space-xs) px-(--semantic-space-xs)"
                style={{
                  minHeight: "3.25rem",
                  minWidth: TOUCH,
                  border: 0,
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "var(--semantic-text-caption)",
                  fontWeight: on ? 600 : 400,
                  color: on ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-subtle)",
                }}
              >
                <span aria-hidden className="flex items-center justify-center">{t.icon}</span>
                <span className="max-w-full truncate">{t.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
    </PopupSafeAreaContext.Provider>
  );
}
