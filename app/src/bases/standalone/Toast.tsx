import * as React from "react";
import { CircleCheck, CircleX, Info, TriangleAlert, X } from "lucide-react";

import type { ToastImpl, ToastProps } from "../../systems/props";

const cx = (...v: (string | false | undefined)[]) => v.filter(Boolean).join(" ");

const TONE: Record<string, string> = {
  success: "success", info: "info", warning: "warning", error: "danger",
};

// Lucide만 사용. 글리프 대신하면 모양이 글꼴 따라 달라지는 문제 있음
const ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  success: CircleCheck, info: Info, warning: TriangleAlert, error: CircleX,
};

// 기본 표시 시간. 밖에서 duration으로 덮을 수 있음
const DEFAULT_DURATION = 5000;

function ToastRoot({ title, description, type, className }: ToastProps) {
  const tone = type ? TONE[type] : undefined;
  const Icon = type ? ICON[type] : undefined;
  return (
    <div className={cx("ods-toast", tone && `ods-toast--${tone}`, className)}>
      {Icon ? <Icon className="ods-toast-icon" /> : null}
      <div className="ods-toast-content">
        {title ? <div className="ods-toast-title">{title}</div> : null}
        {description ? <div className="ods-toast-body">{description}</div> : null}
      </div>
      <button type="button" className="ods-toast-close" aria-label="알림 닫기">
        <X />
      </button>
    </div>
  );
}

type Item = {
  id: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  type?: string;
  duration: number;
  // 퇴장 중 상태, 목록에는 유지되고 화면에서만 사라지는 중
  leaving?: boolean;
};

let seq = 0;
let items: Item[] = [];
const listeners = new Set< => void>;
const emit =  => listeners.forEach((f) => f);

function push(opts: Omit<Item, "id" | "duration" | "leaving"> & { duration?: number }) {
  const item: Item = { ...opts, id: ++seq, duration: opts.duration ?? DEFAULT_DURATION };
  items = [...items, item];
  emit;
  return item.id;
}

function dismiss(id: number) {
  if (!items.some((t) => t.id === id && !t.leaving)) return;
  items = items.map((t) => (t.id === id ? { ...t, leaving: true } : t));
  emit;
}

function drop(id: number) {
  if (!items.some((t) => t.id === id)) return;
  items = items.filter((t) => t.id !== id);
  emit;
}

// 종료 소요 시간, EXIT 값 사본
const EXIT_MS = 180;
// 완료 신호 누락 대비 타임아웃, 종료 시간의 3배로 설정. 신호 오면 사용되지 않는 안전장치임
const EXIT_FALLBACK = EXIT_MS * 3;

// 떠 있는 알림 하나. 알림마다 자체 타이머 보유
function LiveToast({ item }: { item: Item }) {
  const tone = item.type ? TONE[item.type] : undefined;
  const Icon = item.type ? ICON[item.type] : undefined;
  const ref = React.useRef<HTMLDivElement>(null);
  const leaving = item.leaving === true;

  // 타이머는 알림 표시 동안만 유지, Region 갱신마다 재설정돼 먼저 사라지는 문제임
  React.useEffect( => {
    if (leaving) return;
    const t = setTimeout( => dismiss(item.id), item.duration);
    return  => clearTimeout(t);
  }, [item.id, item.duration, leaving]);

  React.useLayoutEffect( => {
    const el = ref.current;
    if (!leaving || !el) return;
    el.style.setProperty("--ods-toast-leave-block-size", `${el.offsetHeight}px`);
    el.classList.add("ods-toast--collapsing");
  }, [leaving]);

  // 애니메이션 종료 후 요소 제거
  React.useEffect( => {
    const el = ref.current;
    if (!leaving || !el) return;
    // 이벤트 출처 확인. 안 하면 무관한 갱신에도 애니메이션이 초기화되는 문제 있음
    const done = (e: AnimationEvent) => { if (e.target === el) drop(item.id); };
    el.addEventListener("animationend", done);
    // 안전장치, 애니메이션이 시작하지 못하면 animationend가 오지 않아 알림이 남음
    const t = setTimeout( => drop(item.id), EXIT_FALLBACK);
    return  => { el.removeEventListener("animationend", done); clearTimeout(t); };
  }, [leaving, item.id]);

  return (
    <div
      ref={ref}
      className={cx("ods-toast", tone && `ods-toast--${tone}`,
                    leaving && "ods-toast--leaving")}
    >
      {Icon ? <Icon className="ods-toast-icon" /> : null}
      <div className="ods-toast-content">
        {item.title ? <div className="ods-toast-title">{item.title}</div> : null}
        {item.description ? <div className="ods-toast-body">{item.description}</div> : null}
      </div>
      <button
        type="button"
        className="ods-toast-close"
        aria-label="알림 닫기"
        onClick={ => dismiss(item.id)}
      >
        <X />
      </button>
      {/* 남은 시간은 CSS로 줄이기 처리, 초 값만 변수 전달. 정적 렌더링엔 JS 없음 */}
      <div
        className="ods-toast-progress"
        aria-hidden="true"
        style={{ "--ods-toast-duration": `${item.duration}ms` } as React.CSSProperties}
      />
    </div>
  );
}

// 알림 표시 위치, 기본값 오른쪽 아래
type Position =
  | "top-start" | "top-center" | "top-end"
  | "bottom-start" | "bottom-center" | "bottom-end";

// 알림 표시 위치, 화면당 한 번만 배치. 두 번 두면 알림이 중복 표시되는 문제가 있음
function Region({ position = "bottom-end" }: { position?: Position }) {
  const [, force] = React.useReducer((n: number) => n + 1, 0);
  React.useEffect( => {
    listeners.add(force);
    return  => { listeners.delete(force); };
  }, []);

  return (
    <div
      className={cx("ods-toast-region", `ods-toast-region--${position}`)}
      role="status"
      aria-live="polite"
    >
      {items.map((it) => <LiveToast key={it.id} item={it} />)}
    </div>
  );
}

// 토스트 실제 표시, 컴포넌트 외부에서도 호출하기
function show(opts: {
  title?: string;
  description?: string;
  type?: string;
  duration?: number;
}) {
  return push(opts);
}

export const Toast = Object.assign(ToastRoot, { Region, show, dismiss }) as unknown as ToastImpl;
