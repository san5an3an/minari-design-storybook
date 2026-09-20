import * as React from "react";
import { AlertTriangle, CalendarClock, CreditCard, Gauge, Plus, Wallet } from "lucide-react";

interface Invoice { id: string; amount: number; status: "결제 완료" | "환불" | "결제 실패" }

const INVOICES: Invoice[] = [
  { id: "INV-2026-09", amount: 49000, status: "결제 완료" },
  { id: "INV-2026-08", amount: 49000, status: "결제 완료" },
  { id: "INV-2026-07", amount: 39000, status: "환불" },
  { id: "INV-2026-06", amount: 39000, status: "결제 완료" },
  { id: "INV-2026-05", amount: 39000, status: "결제 완료" },
  { id: "INV-2026-04", amount: 29000, status: "결제 완료" },
  { id: "INV-2026-03", amount: 29000, status: "결제 완료" },
  { id: "INV-2026-02", amount: 29000, status: "결제 실패" },
  { id: "INV-2026-01", amount: 29000, status: "결제 완료" },
  { id: "INV-2025-12", amount: 29000, status: "결제 완료" },
  { id: "INV-2025-11", amount: 29000, status: "결제 완료" },
  { id: "INV-2025-10", amount: 19000, status: "결제 완료" },
  { id: "INV-2025-09", amount: 19000, status: "결제 완료" },
  { id: "INV-2025-08", amount: 19000, status: "결제 완료" },
] as const;

const STATUS_BADGE: Record<Invoice["status"], string> = {
  "결제 완료": "d-badge-success",
  "환불": "d-badge-warning",
  "결제 실패": "d-badge-error",
};

const USAGE = [
  { label: "API 호출", used: 8200, total: 10000 },
  { label: "저장 공간", used: 42, total: 100 },
  { label: "팀 시트", used: 6, total: 10 },
] as const;

interface Card { id: string; brand: string; last4: string; expiry: string }
const INITIAL_CARDS: Card[] = [
  { id: "c1", brand: "신한카드", last4: "4242", expiry: "09/28" },
  { id: "c2", brand: "삼성카드", last4: "8810", expiry: "03/27" },
];

const PAGE_SIZE = 10;

export function BillingScreen {
  const [page, setPage] = React.useState(1);
  const [detailId, setDetailId] = React.useState<string | null>(null);
  const [cards, setCards] = React.useState<Card[]>(INITIAL_CARDS);
  const [defaultCardId, setDefaultCardId] = React.useState(INITIAL_CARDS[0].id);
  const [pickedCardId, setPickedCardId] = React.useState(INITIAL_CARDS[0].id);
  const [addingCard, setAddingCard] = React.useState(false);
  const [newCardNumber, setNewCardNumber] = React.useState("");
  const [newCardExpiry, setNewCardExpiry] = React.useState("");

  const detailDialogRef = React.useRef<HTMLDialogElement>(null);
  const cardDialogRef = React.useRef<HTMLDialogElement>(null);

  const totalPages = Math.ceil(INVOICES.length / PAGE_SIZE);
  const pageItems = INVOICES.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const detail = INVOICES.find((inv) => inv.id === detailId);
  const defaultCard = cards.find((c) => c.id === defaultCardId) ?? cards[0];

  const openDetail = (id: string) => {
    setDetailId(id);
    detailDialogRef.current?.showModal;
  };
  const openCardModal =  => {
    setPickedCardId(defaultCardId);
    setAddingCard(false);
    cardDialogRef.current?.showModal;
  };
  const confirmCard =  => {
    setDefaultCardId(pickedCardId);
    cardDialogRef.current?.close;
  };
  const submitNewCard =  => {
    const digits = newCardNumber.replace(/\D/g, "");
    if (digits.length < 4 || !newCardExpiry.trim) return;
    const card: Card = { id: `c-${Date.now}`, brand: "새 카드", last4: digits.slice(-4), expiry: newCardExpiry.trim };
    setCards((prev) => [...prev, card]);
    setPickedCardId(card.id);
    setAddingCard(false);
    setNewCardNumber("");
    setNewCardExpiry("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* 청구 내역 상세 모달 */}
      <dialog ref={detailDialogRef} className="d-modal">
        <div className="d-modal-box">
          <form method="dialog">
            <button className="d-btn d-btn-sm d-btn-circle d-btn-ghost" style={{ position: "absolute", right: "0.5rem", top: "0.5rem" }}>✕</button>
          </form>
          {detail ? (
            <>
              <h3 className="text-lg font-bold">{detail.id}</h3>
              <span className={`d-badge ${STATUS_BADGE[detail.status]} d-badge-sm`} style={{ marginTop: "0.4rem" }}>{detail.status}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "0.9rem", fontSize: "0.875rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="opacity-60">기본 요금</span>
                  <span>₩{Math.round(detail.amount / 1.1).toLocaleString}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="opacity-60">부가세(10%)</span>
                  <span>₩{(detail.amount - Math.round(detail.amount / 1.1)).toLocaleString}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0.4rem", borderTop: "1px solid var(--color-base-300)", fontWeight: 700 }}>
                  <span>합계</span>
                  <span>₩{detail.amount.toLocaleString}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.4rem" }}>
                  <span className="opacity-60">결제 수단</span>
                  <span>{defaultCard.brand} •••• {defaultCard.last4}</span>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <form method="dialog" className="d-modal-backdrop"><button>close</button></form>
      </dialog>

      {/* 결제 수단 변경. 저장 카드 라디오 선택과 새 카드 추가 폼 */}
      <dialog ref={cardDialogRef} className="d-modal">
        <div className="d-modal-box">
          <h3 className="text-lg font-bold">결제 수단 관리</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.75rem" }}>
            {cards.map((c) => (
              <label key={c.id} className="d-label cursor-pointer justify-start gap-3" style={{ border: "1px solid var(--color-base-300)", borderRadius: "var(--radius-field, 0.5rem)", padding: "0.6rem 0.75rem" }}>
                <input
                  type="radio"
                  name="payment-card"
                  className="d-radio d-radio-primary d-radio-sm"
                  checked={pickedCardId === c.id}
                  onChange={ => setPickedCardId(c.id)}
                />
                <span style={{ flex: 1 }}>{c.brand} •••• {c.last4}</span>
                <span className="text-sm opacity-50">{c.expiry}</span>
                {c.id === defaultCardId && <span className="d-badge d-badge-primary d-badge-outline d-badge-sm">기본</span>}
              </label>
            ))}
          </div>

          {addingCard ? (
            <fieldset className="d-fieldset bg-base-200 border-base-300 rounded-box border p-4" style={{ marginTop: "0.75rem" }}>
              <legend className="d-fieldset-legend">새 카드</legend>
              <label className="d-label">카드 번호</label>
              <input
                className="d-input d-validator w-full"
                type="text"
                required
                minLength={13}
                placeholder="1234 5678 9012 3456"
                value={newCardNumber}
                onChange={(e) => setNewCardNumber(e.target.value)}
              />
              <p className="d-validator-hint">최소 13자리 숫자를 입력해 주세요</p>
              <label className="d-label mt-2">유효기간</label>
              <input
                className="d-input w-full"
                type="text"
                placeholder="MM/YY"
                value={newCardExpiry}
                onChange={(e) => setNewCardExpiry(e.target.value)}
              />
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginTop: "0.75rem" }}>
                <button type="button" className="d-btn d-btn-ghost d-btn-sm" onClick={ => setAddingCard(false)}>취소</button>
                <button type="button" className="d-btn d-btn-primary d-btn-sm" onClick={submitNewCard}>카드 추가</button>
              </div>
            </fieldset>
          ) : (
            <button type="button" className="d-btn d-btn-ghost d-btn-sm" style={{ marginTop: "0.75rem" }} onClick={ => setAddingCard(true)}>
              <Plus size={14} aria-hidden /> 새 카드 추가
            </button>
          )}

          <div className="d-modal-action">
            <form method="dialog" style={{ display: "flex", gap: "0.5rem" }}>
              <button type="button" className="d-btn" onClick={ => cardDialogRef.current?.close}>취소</button>
              <button type="button" className="d-btn d-btn-primary" onClick={confirmCard}>기본으로 설정</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="d-modal-backdrop"><button>close</button></form>
      </dialog>

      <div role="alert" className="d-alert d-alert-warning">
        <AlertTriangle size={18} aria-hidden />
        <span>다음 결제일까지 D-9 남았어요 · {defaultCard.brand} •••• {defaultCard.last4}로 자동 결제돼요.</span>
      </div>

      <div className="d-stats shadow">
        <div className="d-stat">
          <div className="d-stat-figure text-primary">
            <Wallet size={28} aria-hidden />
          </div>
          <div className="d-stat-title">현재 요금제</div>
          <div className="d-stat-value text-primary">Pro</div>
          <div className="d-stat-desc">월 ₩49,000</div>
        </div>
        <div className="d-stat">
          <div className="d-stat-figure text-primary">
            <Gauge size={28} aria-hidden />
          </div>
          <div className="d-stat-title">이번 달 사용량</div>
          <div className="d-stat-value">82%</div>
          <div className="d-stat-desc">10,000건 중 8,200건</div>
        </div>
        <div className="d-stat">
          <div className="d-stat-figure text-primary">
            <CalendarClock size={28} aria-hidden />
          </div>
          <div className="d-stat-title">다음 결제일</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>10월 1일</div>
          <div className="d-stat-desc">D-9</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 d1b-grid">
        <div className="d-card bg-base-100 shadow" style={{ minWidth: 0 }}>
          <div className="d-card-body" style={{ padding: "1rem" }}>
            <div className="overflow-x-auto">
              <table className="d-table d-table-zebra d-table-sm">
                <thead>
                  <tr>
                    <th>청구서</th>
                    <th>금액</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  {pageItems.map((row) => (
                    <tr key={row.id} className="cursor-pointer" onClick={ => openDetail(row.id)}>
                      <td>{row.id}</td>
                      <td>₩{row.amount.toLocaleString}</td>
                      <td>
                        <span className={`d-badge ${STATUS_BADGE[row.status]} d-badge-sm`}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.75rem" }}>
              <span className="text-sm opacity-60">
                {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, INVOICES.length)} / {INVOICES.length}건
              </span>
              <div className="d-join">
                <button type="button" className="d-join-item d-btn d-btn-sm" disabled={page === 1} onClick={ => setPage((p) => p - 1)}>«</button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`d-join-item d-btn d-btn-sm ${n === page ? "d-btn-active" : ""}`}
                    onClick={ => setPage(n)}
                  >
                    {n}
                  </button>
                ))}
                <button type="button" className="d-join-item d-btn d-btn-sm" disabled={page === totalPages} onClick={ => setPage((p) => p + 1)}>»</button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: 0 }}>
          <div className="d-card bg-base-100 shadow">
            <div className="d-card-body">
              <span style={{ fontWeight: 600 }}>항목별 사용량</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}>
                {USAGE.map((u) => (
                  <div key={u.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem", marginBottom: "0.25rem" }}>
                      <span>{u.label}</span>
                      <span className="opacity-60">{u.used.toLocaleString} / {u.total.toLocaleString}</span>
                    </div>
                    <progress className="d-progress d-progress-primary w-full" value={u.used} max={u.total} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="d-card bg-base-100 shadow">
            <div className="d-card-body">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600 }}>결제 수단</span>
                <button type="button" className="d-btn d-btn-ghost d-btn-xs" onClick={openCardModal}>변경</button>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: "0.5rem" }}>
                <span
                  aria-hidden
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "2.25rem", height: "2.25rem", borderRadius: "var(--radius-field, 0.5rem)",
                    background: "var(--color-base-200)", flexShrink: 0,
                  }}
                >
                  <CreditCard size={16} className="text-primary" aria-hidden />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{defaultCard.brand} •••• {defaultCard.last4}</div>
                  <div className="text-sm opacity-60">유효기간 {defaultCard.expiry}</div>
                </div>
                <span className="d-badge d-badge-primary d-badge-outline d-badge-sm">기본</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{"@container d1shell (min-width: 40rem) { .d1b-grid { grid-template-columns: 2fr 1fr; } }"}</style>
    </div>
  );
}
