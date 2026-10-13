import * as React from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Listrow } from "../../../bases/shadcn/Listrow";
import { TOUCH } from "../../shadcn/mobile/MobileShell";
import type { Transaction } from "../data";
import { CATEGORY_STYLE, DEFAULT_CATEGORY_STYLE, won } from "../screens/OverviewScreen";

// 분류 아이콘 칩 표시. size는 rem 문자열이고 아이콘은 칩의 절반 정도 크기로 지정함
export function CategoryChip({ category, size = "2rem", round = false }: { category: string; size?: string; round?: boolean }) {
  const { icon: Icon, tone } = CATEGORY_STYLE[category] ?? DEFAULT_CATEGORY_STYLE;
  return (
    <span
      aria-hidden
      className="flex shrink-0 items-center justify-center"
      style={{
        width: size,
        height: size,
        background: `var(--semantic-bg-${tone}-subtle)`,
        color: `var(--semantic-fg-${tone}-default)`,
        borderRadius: round ? "9999px" : "var(--semantic-radius-control)",
      }}
    >
      <Icon size={size === "2rem" ? 16 : 22} />
    </span>
  );
}

// 줄 전체를 누르는 button 틀 제공. Listrow 어댑터에 onClick이 없기 때문임
export function TappableRow({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-start"
      style={{
        minHeight: TOUCH,
        padding: 0,
        border: 0,
        background: "transparent",
        // 줄 글자색을 기본 글자색으로 지정. 카드 본문 색을 물려받으면 줄 제목까지 흐려짐
        color: "var(--semantic-fg-neutral-default)",
        font: "inherit",
        cursor: "pointer",
        borderRadius: "var(--semantic-radius-control)",
      }}
    >
      {children}
    </button>
  );
}

// 줄 사이 구분선 표시. 음수 여백으로 Card와 Listrow의 여백 중복을 상쇄함
export function RowList({ children }: { children: React.ReactNode }) {
  return (
    <ul
      className="flex flex-col p-0 -mx-(--component-listrow-padding-inline) -my-(--component-listrow-padding-block)"
      style={{ listStyle: "none" }}
    >
      {React.Children.toArray(children).map((child, i) => (
        <li
          key={i}
          style={{ borderTop: i === 0 ? undefined : "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)" }}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

// 거래 금액 표시. 수입은 플러스 부호와 성공색, 지출은 마이너스 부호와 기본색 사용함
export function Amount({ t, size = "var(--semantic-text-body-sm)" }: { t: Transaction; size?: string }) {
  return (
    <span
      className="shrink-0 tabular-nums"
      style={{ color: t.kind === "수입" ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-default)", fontSize: size }}
    >
      {t.kind === "수입" ? "+" : "-"}{won(t.amount)}
    </span>
  );
}

// 거래 한 줄 표시. 누르면 거래 상세 화면으로 이동함
export function TxRow({ t, sub, onOpen }: { t: Transaction; sub?: string; onOpen: (id: string) => void }) {
  return (
    <TappableRow onClick={() => onOpen(t.id)}>
      <Listrow
        lead={<CategoryChip category={t.category} />}
        title={t.title}
        sub={sub ?? `${t.category} · ${t.method}`}
        trail={<Amount t={t} />}
      />
    </TappableRow>
  );
}

// 수입, 지출 방향 화살표 표시. 분류 칩 대신 방향을 보여줄 줄에 사용함
export function Direction({ kind }: { kind: Transaction["kind"] }) {
  return (
    <span aria-hidden style={{ color: kind === "수입" ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-subtle)" }}>
      {kind === "수입" ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
    </span>
  );
}
