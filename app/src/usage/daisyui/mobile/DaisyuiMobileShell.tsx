"use client";

import * as React from "react";
import { ChevronLeft } from "lucide-react";
import { SAFE_BOTTOM, SHELL } from "../../mobile/contract";
import { MobileFrame } from "../../mobile/MobileFrame";

// 중립 옅은 글자색과 경계선 정의. 데스크탑 daisyUI 화면과 같은 변수임
export const SUBTLE = "var(--semantic-fg-neutral-subtle)";
export const DIVIDER = "var(--border) solid var(--color-base-300)";

// 브랜드, 성공 글자색 토큰 정의. Tailwind text-primary, text-success 는 이 앱에서 daisyUI 변수가 아닌 앱 팔레트로 변환되어 모바일 화면은 style 로 토큰을 넣음
export const BRAND = "var(--semantic-fg-brand-default)";
export const SUCCESS = "var(--semantic-fg-success-default)";

// 껍데기 안에서만 daisyUI --size-field 를 0.275rem 으로 올려 md 크기 Component 높이를 44px 로 고정. 이 문자열 안에는 백틱 사용 금지
const ROOT = `[data-slot="${SHELL.root}"]`;
const SHELL_CSS = `
${ROOT} {
  --size-field: 0.275rem;
}
${ROOT} .d-modal-bottom > .d-modal-box {
  padding-bottom: calc(1.5rem + ${SAFE_BOTTOM});
}
`;

const DOCK_STYLE: React.CSSProperties = {
  position: "static",
  height: `calc(4rem + ${SAFE_BOTTOM})`,
  paddingBottom: SAFE_BOTTOM,
};

export interface DockTab {
  key: string;
  label: string;
  icon: React.ReactNode;
}

// 공식 d-dock 으로 하단 Tab bar 생성. 칸마다 contract.ts 의 표지를 달기 위함
function Dock({ tabs, activeKey, onSelect }: { tabs: readonly DockTab[]; activeKey: string; onSelect: (key: string) => void }) {
  return (
    <nav aria-label={SHELL.tabsLabel}>
      <div className="d-dock" style={DOCK_STYLE}>
        {tabs.map((tab) => {
          const active = tab.key === activeKey;
          return (
            <button
              key={tab.key}
              type="button"
              className={active ? "d-dock-active" : undefined}
              aria-current={active ? "page" : undefined}
              {...{ [SHELL.tab]: tab.key }}
              onClick={() => onSelect(tab.key)}
              style={{ color: active ? BRAND : SUBTLE }}
            >
              {tab.icon}
              <span className="d-dock-label" style={{ fontWeight: active ? 700 : 500 }}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export interface DaisyuiMobileShellProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  tabs: readonly DockTab[];
  activeKey: string;
  onSelect: (key: string) => void;
  children: React.ReactNode;
}

export function DaisyuiMobileShell({ title, subtitle, tabs, activeKey, onSelect, children }: DaisyuiMobileShellProps) {
  // 현재 탭을 다시 누르면 화면을 다시 생성해 처음 상태로 이동. 상세, 폼 상태가 화면 안에 있어 초기화하기 위함
  const [round, setRound] = React.useState(0);
  const select = (key: string) => {
    if (key === activeKey) setRound((n) => n + 1);
    else onSelect(key);
  };

  const header = (
    <div className="d-navbar gap-2 px-4" style={{ borderBottom: DIVIDER }}>
      <div className="min-w-0 flex-1">
        <div className="truncate font-bold">{title}</div>
        {subtitle ? <div className="truncate text-xs" style={{ color: SUBTLE }}>{subtitle}</div> : null}
      </div>
      <div className="flex-none">
        <span className="d-badge d-badge-ghost">daisyUI</span>
      </div>
    </div>
  );

  return (
    <MobileFrame
      header={header}
      footer={<Dock tabs={tabs} activeKey={activeKey} onSelect={select} />}
      scrollKeys={[activeKey, round]}
      extraCss={SHELL_CSS}
    >
      <React.Fragment key={round}>{children}</React.Fragment>
    </MobileFrame>
  );
}

// d-modal-bottom 으로 아래 시트 생성, 배경 클릭과 Escape 로 닫기 처리. id 는 여는 버튼의 aria-controls 가 가리키는 값임
export function Sheet({ id, label, ref, children }: {
  id: string;
  label: string;
  ref: React.Ref<HTMLDialogElement>;
  children: React.ReactNode;
}) {
  return (
    <dialog ref={ref} id={id} className="d-modal d-modal-bottom" aria-label={label}>
      <div className="d-modal-box">{children}</div>
      <form method="dialog" className="d-modal-backdrop"><button type="submit">닫기</button></form>
    </dialog>
  );
}

// 시트를 여는 버튼 속성 제공. 보조 기술과 측정 도구가 여는 대상을 읽기 위함
export const opensSheet = (id: string) => ({ "aria-haspopup": "dialog", "aria-controls": id }) as const;

// 화면 안 상세, 폼에서 목록으로 이동하는 버튼 제공. md 크기라 높이 44px 임
export function BackToList({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="d-btn d-btn-ghost self-start" style={{ marginInlineStart: "-0.75rem" }} onClick={onClick}>
      <ChevronLeft size={18} aria-hidden /> 목록으로
    </button>
  );
}

// key 가 바뀌면 껍데기 본문 스크롤을 맨 위로 이동. 돌려준 ref 를 화면 뿌리 요소에 다는 방식임
export function useBodyTopOn<T extends HTMLElement>(key: unknown): React.RefObject<T | null> {
  const ref = React.useRef<T>(null);
  React.useLayoutEffect(() => {
    ref.current?.closest(`[${SHELL.body}]`)?.scrollTo({ top: 0 });
  }, [key]);
  return ref;
}

// 사진 위 글자색은 on-brand 토큰, 끝 색은 글자 명도를 뒤집은 색으로 섞어 지정. 섞기는 in srgb 사용하고, in oklch 면 채도 0 색에 빨강 색상값이 끼어드는 문제 있음
const ON_BRAND = "var(--semantic-fg-on-brand-default)";
const HERO_SCRIM = "oklch(from var(--semantic-fg-on-brand-default) calc(1 - l) 0 0)";
const HERO_END = `color-mix(in srgb, var(--semantic-bg-brand-default) 55%, ${HERO_SCRIM})`;

// 사진 히어로 생성. 글자가 바닥에 있어 끝 색을 40% 지점부터 채우기 위함
export function MobileHero({ image, title, sub }: { image: string; title: string; sub: string }) {
  return (
    <div
      className="flex flex-col justify-end gap-1 rounded-box p-4"
      style={{
        minHeight: "8rem",
        color: ON_BRAND,
        backgroundImage:
          `linear-gradient(180deg, color-mix(in srgb, var(--semantic-bg-brand-default) 15%, transparent) 0%, ${HERO_END} 40%), url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="text-xl font-bold" style={{ lineHeight: 1.3 }}>{title}</span>
      <span className="text-sm" style={{ opacity: 0.9 }}>{sub}</span>
    </div>
  );
}
