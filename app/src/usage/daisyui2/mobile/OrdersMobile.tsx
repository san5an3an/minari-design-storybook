"use client";

import * as React from "react";
import { Eye, MoreVertical, PackageCheck } from "lucide-react";
import { MobileHero, Sheet, BackToList, opensSheet, useBodyTopOn } from "../../daisyui/mobile/DaisyuiMobileShell";
import { HERO_IMAGE, ORDERS, STAGES, STATS, TrendChart, type Order } from "../screens/OrdersScreen";

const ACTIONS_SHEET = "d2-order-actions";

const STATUS_BADGE: Record<Order["status"], string> = {
  "배송 완료": "d-badge-success",
  "배송 중": "d-badge-primary",
  "배송 준비": "d-badge-warning",
};

export function OrdersMobile() {
  const [orders, setOrders] = React.useState<Order[]>(ORDERS);
  const [selected, setSelected] = React.useState<Order | null>(null);
  const [menuFor, setMenuFor] = React.useState<Order | null>(null);
  const actionsRef = React.useRef<HTMLDialogElement>(null);
  const top = useBodyTopOn<HTMLDivElement>(selected?.id ?? "list");

  const markDelivered = (id: string) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: "배송 완료" } : o)));
  };
  const openActions = (o: Order) => {
    setMenuFor(o);
    actionsRef.current?.showModal();
  };

  if (selected) {
    const stageIndex = STAGES.indexOf(selected.status);
    return (
      <div ref={top} className="d-card bg-base-100 shadow">
        <div className="d-card-body gap-2 p-4">
          <BackToList onClick={() => setSelected(null)} />
          <h3 className="text-lg font-bold">{selected.id} · {selected.item}</h3>
          <span className="text-sm opacity-60">{selected.amount}</span>
          <ul className="d-steps my-3 w-full">
            {STAGES.map((stage, i) => (
              <li key={stage} className={`d-step text-sm ${i <= stageIndex ? "d-step-primary" : ""}`}>{stage}</li>
            ))}
          </ul>
          <span className="text-sm opacity-60">수령인</span>
          <span>{selected.recipient}</span>
          <span className="mt-2 text-sm opacity-60">배송지</span>
          <span>{selected.address}</span>
        </div>
      </div>
    );
  }

  return (
    <div ref={top} className="flex flex-col gap-4">
      {/* 줄 메뉴의 두 항목을 아래 시트 안 d-menu 로 표시. d-dropdown 은 위치 계산이 없어 좁은 화면에서 안전 영역, 앱 바 밑으로 가려지는 문제 있음 */}
      <Sheet id={ACTIONS_SHEET} label="주문 메뉴" ref={actionsRef}>
        {menuFor ? (
          <>
            <h3 className="text-lg font-bold">{menuFor.id} · {menuFor.item}</h3>
            <p className="text-sm opacity-60">{menuFor.amount} · {menuFor.status}</p>
            <ul className="d-menu d-menu-lg mt-3 w-full p-0">
              <li>
                <button type="button" onClick={() => { actionsRef.current?.close(); setSelected(menuFor); }}>
                  <Eye size={18} aria-hidden /> 상세 보기
                </button>
              </li>
              <li>
                <button
                  type="button"
                  disabled={menuFor.status === "배송 완료"}
                  onClick={() => { markDelivered(menuFor.id); actionsRef.current?.close(); }}
                >
                  <PackageCheck size={18} aria-hidden /> 배송 완료로 표시
                </button>
              </li>
            </ul>
          </>
        ) : null}
        <div className="d-modal-action">
          <form method="dialog" className="w-full"><button className="d-btn w-full">닫기</button></form>
        </div>
      </Sheet>

      <MobileHero image={HERO_IMAGE} title="오늘도 주문이 활발해요" sub="배송 중 9건. 실시간 현황을 확인해요." />

      <div className="grid grid-cols-2 gap-3">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="d-card bg-base-100 shadow">
              <div className="d-card-body gap-1 p-3">
                <div className="flex items-center gap-2">
                  <span className="d-badge d-badge-primary d-badge-outline" style={{ padding: "0.4rem" }}>
                    <Icon size={14} aria-hidden />
                  </span>
                  <span className="truncate text-sm opacity-60">{s.label}</span>
                </div>
                <span className="text-lg font-bold">{s.value}</span>
                <span className="d-badge d-badge-success d-badge-sm">{s.delta}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body p-4">
          <span className="font-semibold">최근 7일 주문 추이</span>
          <TrendChart />
        </div>
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body p-4">
          <span className="font-semibold">실시간 배송 추적</span>
          <div className="mt-2 flex flex-col gap-3">
            {orders.slice(0, 4).map((o) => {
              const stageIndex = STAGES.indexOf(o.status);
              return (
                <div key={o.id} className="flex items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="text-xs opacity-60">{o.id}</div>
                    <div className="truncate text-sm">{o.item}</div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1" aria-hidden>
                    {STAGES.map((stage, i) => (
                      <React.Fragment key={stage}>
                        <span
                          className="size-2 rounded-full"
                          style={{ background: i <= stageIndex ? "var(--semantic-bg-brand-default)" : "var(--color-base-300)" }}
                        />
                        {i < STAGES.length - 1 && (
                          <span className="h-0.5 w-3" style={{ background: i < stageIndex ? "var(--semantic-bg-brand-default)" : "var(--color-base-300)" }} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <span className="d-badge d-badge-sm d-badge-ghost w-18 shrink-0 justify-center">{o.status}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ul className="d-list rounded-box bg-base-100 shadow">
        <li className="px-4 pt-4 pb-2 text-sm font-semibold">주문 목록</li>
        {orders.map((o) => (
          <li key={o.id} className="d-list-row items-center gap-1 py-1 ps-0 pe-2">
            <button type="button" className="d-list-col-grow flex min-w-0 items-center gap-3 py-2 ps-4 text-left" onClick={() => setSelected(o)}>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">{o.id} · {o.item}</div>
                <div className="text-sm opacity-60">{o.amount}</div>
              </div>
              <span className={`d-badge d-badge-sm ${STATUS_BADGE[o.status]}`}>{o.status}</span>
            </button>
            <button
              type="button"
              className="d-btn d-btn-ghost d-btn-square"
              aria-label={`주문 ${o.id} 메뉴`}
              {...opensSheet(ACTIONS_SHEET)}
              onClick={() => openActions(o)}
            >
              <MoreVertical size={18} aria-hidden />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
