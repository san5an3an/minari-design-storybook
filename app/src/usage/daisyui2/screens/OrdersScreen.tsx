import * as React from "react";
import { CircleDollarSign, MoreVertical, PackageCheck, ShoppingBag, Truck } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=60";

interface Order {
  id: string;
  item: string;
  amount: string;
  status: "배송 준비" | "배송 중" | "배송 완료";
  recipient: string;
  address: string;
}

const ORDERS: Order[] = [
  { id: "#8821", item: "무선 이어버드 Pro", amount: "129,000원", status: "배송 준비", recipient: "김서연", address: "서울 마포구 연남동 12-3" },
  { id: "#8820", item: "캔버스 백팩", amount: "58,000원", status: "배송 중", recipient: "박도윤", address: "경기 성남시 분당구 정자동 45" },
  { id: "#8819", item: "미니멀 데스크 램프", amount: "42,000원", status: "배송 중", recipient: "이하은", address: "서울 강남구 역삼동 890" },
  { id: "#8818", item: "스테인리스 텀블러", amount: "19,000원", status: "배송 완료", recipient: "정서준", address: "부산 해운대구 우동 101" },
  { id: "#8817", item: "무선 이어버드 Pro", amount: "129,000원", status: "배송 완료", recipient: "최지후", address: "서울 종로구 계동 5" },
  { id: "#8815", item: "세라믹 머그컵 세트", amount: "24,000원", status: "배송 완료", recipient: "오세준", address: "인천 연수구 송도동 220" },
];

const STAGES = ["배송 준비", "배송 중", "배송 완료"] as const;

const STATS = [
  { label: "오늘 주문", value: "34건", delta: "+6", icon: ShoppingBag },
  { label: "오늘 매출", value: "₩2,180,000", delta: "+12%", icon: CircleDollarSign },
  { label: "배송 중", value: "9건", delta: "+2", icon: Truck },
  { label: "완료율", value: "91%", delta: "+3%", icon: PackageCheck },
] as const;

const TREND = [12, 18, 15, 22, 28, 24, 34];

function TrendChart {
  const w = 320, h = 80, max = Math.max(...TREND);
  const pts = TREND.map((v, i) => {
    const x = (i / (TREND.length - 1)) * w;
    const y = h - (v / max) * h;
    return `${x},${y}`;
  }).join(" ");
  const area = `0,${h} ${pts} ${w},${h}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "6rem" }} preserveAspectRatio="none">
      <polygon points={area} fill="var(--semantic-bg-brand-subtle)" />
      <polyline points={pts} fill="none" stroke="var(--semantic-bg-brand-default)" strokeWidth={2} />
    </svg>
  );
}

export function OrdersScreen {
  const [orders, setOrders] = React.useState<Order[]>(ORDERS);
  const [selected, setSelected] = React.useState<Order | null>(null);

  const markDelivered = (id: string) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: "배송 완료" } : o)));
  };

  if (selected) {
    const stageIndex = STAGES.indexOf(selected.status);
    return (
      <div className="d-card bg-base-100 shadow" style={{ padding: "1.25rem" }}>
        <div className="d-card-body">
          <button type="button" className="d-btn d-btn-ghost d-btn-sm" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelected(null)}>
            ← 목록으로
          </button>
          <h3 style={{ fontWeight: 700, fontSize: "1.1rem", margin: "0.5rem 0 0" }}>{selected.id} · {selected.item}</h3>
          <span className="text-sm opacity-60">{selected.amount}</span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", margin: "1rem 0" }}>
            {STAGES.map((stage, i) => (
              <React.Fragment key={stage}>
                <span className="text-sm" style={{ color: i <= stageIndex ? "var(--color-primary)" : undefined, opacity: i <= stageIndex ? 1 : 0.5 }}>{stage}</span>
                {i < STAGES.length - 1 && <span aria-hidden style={{ width: "1.5rem", height: 2, background: i < stageIndex ? "var(--color-primary)" : "var(--color-base-300)" }} />}
              </React.Fragment>
            ))}
          </div>
          <span className="text-sm opacity-60">수령인</span>
          <span>{selected.recipient}</span>
          <span className="text-sm opacity-60" style={{ marginTop: "0.5rem" }}>배송지</span>
          <span>{selected.address}</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div
        className="flex flex-col justify-end gap-1 px-6 py-4"
        style={{
          minHeight: "8rem",
          borderRadius: "var(--radius-box, 0.5rem)",
          backgroundImage:
            `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
            `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <span style={{ color: "white", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.25 }}>오늘도 주문이 활발해요</span>
        <span style={{ color: "white", opacity: 0.9 }}>배송 중 9건. 실시간 현황을 확인해요.</span>
      </div>

      <div className="grid grid-cols-2 gap-3 d2o-stats">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="d-card bg-base-100 shadow">
              <div className="d-card-body" style={{ padding: "0.9rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <span className="d-badge d-badge-primary d-badge-outline" style={{ padding: "0.4rem" }}>
                    <Icon size={14} aria-hidden />
                  </span>
                  <span className="text-sm opacity-60">{s.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "1.25rem", fontWeight: 700 }}>{s.value}</span>
                  <span className="text-sm text-success">{s.delta}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style>{"@container d2shell (min-width: 32rem) { .d2o-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); } }"}</style>

      <div className="grid grid-cols-1 gap-4 d2o-charts">
        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body">
            <span style={{ fontWeight: 600 }}>최근 7일 주문 추이</span>
            <TrendChart />
          </div>
        </div>

        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body">
            <span style={{ fontWeight: 600 }}>실시간 배송 추적</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}>
              {orders.slice(0, 4).map((o) => {
                const stageIndex = STAGES.indexOf(o.status);
                return (
                  <div key={o.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: "3.5rem", fontSize: "0.75rem" }} className="opacity-60">{o.id}</span>
                    <span style={{ flex: 1, fontSize: "0.8125rem" }}>{o.item}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      {STAGES.map((stage, i) => (
                        <React.Fragment key={stage}>
                          <span
                            aria-hidden
                            style={{
                              width: 8, height: 8, borderRadius: "50%",
                              background: i <= stageIndex ? "var(--semantic-bg-brand-default)" : "var(--color-base-300)",
                            }}
                          />
                          {i < STAGES.length - 1 && (
                            <span
                              aria-hidden
                              style={{ width: "1rem", height: 2, background: i < stageIndex ? "var(--semantic-bg-brand-default)" : "var(--color-base-300)" }}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <span className="d-badge d-badge-sm d-badge-ghost" style={{ width: "4.5rem", justifyContent: "center" }}>{o.status}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style>{"@container d2shell (min-width: 40rem) { .d2o-charts { grid-template-columns: 1fr 1.4fr; } }"}</style>

      <div className="overflow-x-auto">
        <table className="d-table d-table-zebra">
          <thead>
            <tr>
              <th>주문번호</th>
              <th>상품</th>
              <th>금액</th>
              <th>상태</th>
              <th aria-hidden />
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td className="cursor-pointer" onClick={ => setSelected(o)}>{o.id}</td>
                <td className="cursor-pointer" onClick={ => setSelected(o)}>{o.item}</td>
                <td className="cursor-pointer" onClick={ => setSelected(o)}>{o.amount}</td>
                <td className="cursor-pointer" onClick={ => setSelected(o)}>
                  <span
                    className={`d-badge d-badge-sm ${
                      o.status === "배송 완료" ? "d-badge-success" : o.status === "배송 중" ? "d-badge-primary" : "d-badge-warning"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
                <td>
                  {/* dropdown #003 기반, 상세 보기는 행 클릭과 동일, 완료 표시는 상태 변경 */}
                  <div className="d-dropdown d-dropdown-end">
                    <div tabIndex={0} role="button" className="d-btn d-btn-ghost d-btn-xs d-btn-circle">
                      <MoreVertical size={14} aria-hidden />
                    </div>
                    <ul tabIndex={0} className="d-dropdown-content d-menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                      <li><a onClick={ => setSelected(o)}>상세 보기</a></li>
                      <li>
                        <a
                          className={o.status === "배송 완료" ? "d-menu-disabled" : ""}
                          onClick={ => { if (o.status !== "배송 완료") markDelivered(o.id); }}
                        >
                          배송 완료로 표시
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
