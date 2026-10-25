"use client";

import * as React from "react";
import { AlertTriangle, CalendarClock, CreditCard, Gauge, Plus, Receipt, Wallet, X } from "lucide-react";
import { INITIAL_CARDS, INVOICES, PAGE_SIZE, STATUS_BADGE, USAGE, type Card } from "../screens/BillingScreen";
import { BRAND, DIVIDER, Sheet, opensSheet } from "./DaisyuiMobileShell";

const INVOICE_SHEET = "d1-invoice-sheet";
const CARD_SHEET = "d1-card-sheet";

export function BillingMobile() {
  const [page, setPage] = React.useState(1);
  const [detailId, setDetailId] = React.useState<string | null>(null);
  const [cards, setCards] = React.useState<Card[]>(INITIAL_CARDS);
  const [defaultCardId, setDefaultCardId] = React.useState(INITIAL_CARDS[0].id);
  const [pickedCardId, setPickedCardId] = React.useState(INITIAL_CARDS[0].id);
  const [addingCard, setAddingCard] = React.useState(false);
  const [newCardNumber, setNewCardNumber] = React.useState("");
  const [newCardExpiry, setNewCardExpiry] = React.useState("");

  const detailRef = React.useRef<HTMLDialogElement>(null);
  const cardRef = React.useRef<HTMLDialogElement>(null);

  const totalPages = Math.ceil(INVOICES.length / PAGE_SIZE);
  const pageItems = INVOICES.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const detail = INVOICES.find((inv) => inv.id === detailId);
  const defaultCard = cards.find((c) => c.id === defaultCardId) ?? cards[0];

  const openDetail = (id: string) => {
    setDetailId(id);
    detailRef.current?.showModal();
  };
  const openCardSheet = () => {
    setPickedCardId(defaultCardId);
    setAddingCard(false);
    cardRef.current?.showModal();
  };
  const confirmCard = () => {
    setDefaultCardId(pickedCardId);
    cardRef.current?.close();
  };
  const submitNewCard = () => {
    const digits = newCardNumber.replace(/\D/g, "");
    if (digits.length < 4 || !newCardExpiry.trim()) return;
    const card: Card = { id: `c-${Date.now()}`, brand: "새 카드", last4: digits.slice(-4), expiry: newCardExpiry.trim() };
    setCards((prev) => [...prev, card]);
    setPickedCardId(card.id);
    setAddingCard(false);
    setNewCardNumber("");
    setNewCardExpiry("");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* 청구 내역 상세를 오른쪽 위 닫기 버튼이 있는 아래 시트로 표시 */}
      <Sheet id={INVOICE_SHEET} label="청구 내역 상세" ref={detailRef}>
        <form method="dialog">
          <button className="d-btn d-btn-circle d-btn-ghost absolute top-2 right-2" aria-label="닫기">
            <X size={18} aria-hidden />
          </button>
        </form>
        {detail ? (
          <>
            <h3 className="text-lg font-bold">{detail.id}</h3>
            <span className={`d-badge ${STATUS_BADGE[detail.status]} d-badge-sm mt-1`}>{detail.status}</span>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span className="opacity-60">기본 요금</span>
                <span>₩{Math.round(detail.amount / 1.1).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-60">부가세(10%)</span>
                <span>₩{(detail.amount - Math.round(detail.amount / 1.1)).toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 font-bold" style={{ borderTop: DIVIDER }}>
                <span>합계</span>
                <span>₩{detail.amount.toLocaleString()}</span>
              </div>
              <div className="mt-1 flex justify-between">
                <span className="opacity-60">결제 수단</span>
                <span>{defaultCard.brand} •••• {defaultCard.last4}</span>
              </div>
            </div>
          </>
        ) : null}
      </Sheet>

      {/* 결제 수단 관리 시트에 저장된 카드 라디오와 새 카드 추가 fieldset 배치 */}
      <Sheet id={CARD_SHEET} label="결제 수단 관리" ref={cardRef}>
        <h3 className="text-lg font-bold">결제 수단 관리</h3>
        <div className="mt-3 flex flex-col gap-2">
          {cards.map((c) => (
            <label
              key={c.id}
              className="flex min-h-11 cursor-pointer items-center gap-3 px-3 py-2"
              style={{ border: DIVIDER, borderRadius: "var(--radius-field, 0.5rem)" }}
            >
              <input
                type="radio"
                name="payment-card-mobile"
                className="d-radio d-radio-primary d-radio-sm"
                checked={pickedCardId === c.id}
                onChange={() => setPickedCardId(c.id)}
              />
              <span className="flex-1">{c.brand} •••• {c.last4}</span>
              <span className="text-sm opacity-50">{c.expiry}</span>
              {c.id === defaultCardId && <span className="d-badge d-badge-primary d-badge-outline d-badge-sm">기본</span>}
            </label>
          ))}
        </div>

        {addingCard ? (
          <fieldset className="d-fieldset mt-3 rounded-box border border-base-300 bg-base-200 p-4">
            <legend className="d-fieldset-legend">새 카드</legend>
            <label className="d-label" htmlFor="d1m-card-number">카드 번호</label>
            <input
              id="d1m-card-number"
              className="d-input d-validator w-full"
              type="text"
              inputMode="numeric"
              required
              minLength={13}
              placeholder="1234 5678 9012 3456"
              value={newCardNumber}
              onChange={(e) => setNewCardNumber(e.target.value)}
            />
            <p className="d-validator-hint">최소 13자리 숫자를 입력해 주세요</p>
            <label className="d-label mt-2" htmlFor="d1m-card-expiry">유효기간</label>
            <input
              id="d1m-card-expiry"
              className="d-input w-full"
              type="text"
              placeholder="MM/YY"
              value={newCardExpiry}
              onChange={(e) => setNewCardExpiry(e.target.value)}
            />
            <div className="mt-3 flex gap-2">
              <button type="button" className="d-btn d-btn-ghost flex-1" onClick={() => setAddingCard(false)}>취소</button>
              <button type="button" className="d-btn d-btn-primary flex-1" onClick={submitNewCard}>카드 추가</button>
            </div>
          </fieldset>
        ) : (
          <button type="button" className="d-btn d-btn-ghost mt-3 w-full" onClick={() => setAddingCard(true)}>
            <Plus size={16} aria-hidden /> 새 카드 추가
          </button>
        )}

        <div className="d-modal-action">
          <form method="dialog" className="flex w-full gap-2">
            <button type="button" className="d-btn flex-1" onClick={() => cardRef.current?.close()}>취소</button>
            <button type="button" className="d-btn d-btn-primary flex-1" onClick={confirmCard}>기본으로 설정</button>
          </form>
        </div>
      </Sheet>

      <div role="alert" className="d-alert d-alert-warning">
        <AlertTriangle size={18} aria-hidden />
        <span>다음 결제일까지 D-9 남았어요 · {defaultCard.brand} •••• {defaultCard.last4}로 자동 결제돼요.</span>
      </div>

      <div className="d-stats d-stats-vertical w-full bg-base-100 shadow">
        <div className="d-stat py-3">
          <div className="d-stat-figure" style={{ color: BRAND }}><Wallet size={24} aria-hidden /></div>
          <div className="d-stat-title">현재 요금제</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem", color: BRAND }}>Pro</div>
          <div className="d-stat-desc">월 ₩49,000</div>
        </div>
        <div className="d-stat py-3">
          <div className="d-stat-figure" style={{ color: BRAND }}><Gauge size={24} aria-hidden /></div>
          <div className="d-stat-title">이번 달 사용량</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>82%</div>
          <div className="d-stat-desc">10,000건 중 8,200건</div>
        </div>
        <div className="d-stat py-3">
          <div className="d-stat-figure" style={{ color: BRAND }}><CalendarClock size={24} aria-hidden /></div>
          <div className="d-stat-title">다음 결제일</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>10월 1일</div>
          <div className="d-stat-desc">D-9</div>
        </div>
      </div>

      {/* 청구 내역을 표 대신 공식 d-list 머리 줄과 d-list-row 로 표시 */}
      <div className="rounded-box bg-base-100 shadow">
        <ul className="d-list">
          <li className="px-4 pt-4 pb-2 text-sm font-semibold">청구 내역</li>
          {pageItems.map((row) => (
            <li key={row.id}>
              <button
                type="button"
                className="d-list-row w-full items-center py-3 text-left"
                {...opensSheet(INVOICE_SHEET)}
                onClick={() => openDetail(row.id)}
              >
                <Receipt size={18} className="opacity-60" aria-hidden />
                <div className="d-list-col-grow min-w-0">
                  <div className="text-sm font-semibold">{row.id}</div>
                  <div className="text-sm opacity-60">₩{row.amount.toLocaleString()}</div>
                </div>
                <span className={`d-badge ${STATUS_BADGE[row.status]} d-badge-sm`}>{row.status}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-2 px-4 pt-1 pb-4">
          <span className="text-sm opacity-60">
            {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, INVOICES.length)} / {INVOICES.length}건
          </span>
          <div className="d-join">
            <button type="button" className="d-join-item d-btn" aria-label="이전 쪽" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>«</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={`d-join-item d-btn ${n === page ? "d-btn-active" : ""}`}
                aria-current={n === page ? "page" : undefined}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
            <button type="button" className="d-join-item d-btn" aria-label="다음 쪽" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>»</button>
          </div>
        </div>
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body p-4">
          <span className="font-semibold">항목별 사용량</span>
          <div className="mt-2 flex flex-col gap-3">
            {USAGE.map((u) => (
              <div key={u.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{u.label}</span>
                  <span className="opacity-60">{u.used.toLocaleString()} / {u.total.toLocaleString()}</span>
                </div>
                <progress className="d-progress d-progress-primary w-full" value={u.used} max={u.total} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body p-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">결제 수단</span>
            <button type="button" className="d-btn d-btn-ghost" {...opensSheet(CARD_SHEET)} onClick={openCardSheet}>변경</button>
          </div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="flex size-9 shrink-0 items-center justify-center"
              style={{ borderRadius: "var(--radius-field, 0.5rem)", background: "var(--color-base-200)" }}
            >
              <CreditCard size={16} style={{ color: BRAND }} aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold">{defaultCard.brand} •••• {defaultCard.last4}</div>
              <div className="text-sm opacity-60">유효기간 {defaultCard.expiry}</div>
            </div>
            <span className="d-badge d-badge-primary d-badge-outline d-badge-sm">기본</span>
          </div>
        </div>
      </div>
    </div>
  );
}
