"use client";

import * as React from "react";
import { SafeAreaContext } from "../safeArea";
import {
  SAFE_BOTTOM, SAFE_TOP, SHELL, SHELL_HEIGHT, TOUCH_EXEMPT, popupSafeBox, type PopupSafeBox,
} from "./contract";
import { useMobileDocFlag, useScrollTopOn } from "./useMobileDoc";

const PopupSafeBoxContext = React.createContext<PopupSafeBox | null>(null);
const PopupBoundaryContext = React.createContext<HTMLElement | null>(null);

// 껍데기 안에서 팝업이 지킬 네 변의 거리(px) 제공. 껍데기 밖 데스크탑에서는 null
export function usePopupSafeBox(): PopupSafeBox | null {
  return React.useContext(PopupSafeBoxContext);
}

// 껍데기의 스크롤 본문 요소 제공. 여백을 숫자 하나로만 받는 라이브러리의 경계로 사용함
export function usePopupBoundary(): HTMLElement | null {
  return React.useContext(PopupBoundaryContext);
}

// 껍데기 안 누르는 요소에 최소 44px 적용. 라이브러리가 인라인 style 로 밀도 값을 넣어 !important 사용하고, 이 문자열 안에는 백틱 사용 금지
const ROOT = `[data-slot="${SHELL.root}"]`;
const SKIP = `:not([role="switch"], [role="checkbox"], [role="radio"], [${TOUCH_EXEMPT}], [${TOUCH_EXEMPT}] *)`;
const FRAME_CSS = `
${ROOT} :is(button, [role="button"], [role="tab"], [role="combobox"], [role="menuitem"], select, a[href], input:not([type="checkbox"], [type="radio"], [type="hidden"], [type="range"]))${SKIP} {
  min-height: 2.75rem !important;
}
${ROOT} :is(button, [role="button"], [role="tab"], a[href])${SKIP} {
  min-width: 2.75rem !important;
}
`;

export interface MobileFrameProps {
  // 앱 바 내용 지정. 없으면 머리 칸 미표시
  header?: React.ReactNode;
  // 바닥 칸 내용 지정. 보통 BottomTabs 이고, 없으면 본문이 아래 safe area 를 여백으로 사용함
  footer?: React.ReactNode;
  // 값 중 하나가 바뀌면 본문 스크롤을 맨 위로 이동. 탭 키와 상세 열기 키 전달
  scrollKeys?: readonly unknown[];
  // 제공자 전용 CSS 지정. 공용 CSS 뒤에 붙음
  extraCss?: string;
  // position: fixed 자손의 기준 상자를 껍데기 루트로 지정. 앱 안 좁은 창에서 탭바가 액자 밖으로 나가지 않게 하기 위함
  containFixed?: boolean;
  // 머리 칸 배경색 지정. 위 safe area 까지 같은 색으로 칠함
  headerBackground?: string;
  children: React.ReactNode;
}

export function MobileFrame({
  header, footer, scrollKeys = [], extraCss, containFixed, headerBackground, children,
}: MobileFrameProps) {
  const safe = React.useContext(SafeAreaContext);
  const box = React.useMemo(() => popupSafeBox(safe), [safe]);
  const body = useScrollTopOn<HTMLDivElement>(...scrollKeys);
  // 본문 요소를 state 로도 보관. ref 만으로는 붙은 뒤 context 를 읽는 컴포넌트가 다시 그려지지 않음
  const [bodyEl, setBodyEl] = React.useState<HTMLDivElement | null>(null);
  const bodyRef = React.useCallback((el: HTMLDivElement | null) => {
    body.current = el;
    setBodyEl(el);
  }, [body]);
  useMobileDocFlag();

  return (
    <PopupSafeBoxContext.Provider value={box}>
    <PopupBoundaryContext.Provider value={bodyEl}>
      <div
        data-slot={SHELL.root}
        className="flex flex-col overflow-hidden"
        style={{
          height: SHELL_HEIGHT,
          background: "var(--semantic-bg-neutral-surface)",
          color: "var(--semantic-fg-neutral-default)",
          transform: containFixed ? "translateZ(0)" : undefined,
        }}
      >
        <style>{FRAME_CSS + (extraCss ?? "")}</style>
        {header == null ? null : (
          <header
            {...{ [SHELL.appbar]: "" }}
            className="flex shrink-0 items-center"
            style={{
              // 상태 막대가 덮는 위 safe area 만큼 머리 칸 위 여백 확보. 머리 배경이 거기까지 칠해져야 iOS 앱처럼 보임
              paddingTop: SAFE_TOP,
              background: headerBackground ?? "var(--semantic-bg-neutral-surface)",
            }}
          >
            <div className="min-w-0 flex-1">{header}</div>
          </header>
        )}

        <div
          ref={bodyRef}
          {...{ [SHELL.body]: "" }}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
          style={{
            paddingTop: header == null ? SAFE_TOP : undefined,
            paddingBottom: footer == null ? SAFE_BOTTOM : undefined,
          }}
        >
          {children}
        </div>

        {footer == null ? null : (
          <div {...{ [SHELL.footer]: "" }} className="shrink-0">{footer}</div>
        )}
      </div>
    </PopupBoundaryContext.Provider>
    </PopupSafeBoxContext.Provider>
  );
}
