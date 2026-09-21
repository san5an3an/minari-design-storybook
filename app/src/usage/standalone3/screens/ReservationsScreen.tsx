import * as React from "react";
import { BookMarked, Hourglass, Library, X } from "lucide-react";
import { Badge } from "../../../bases/standalone/Badge";
import { Stat } from "../../../bases/standalone/Stat";
import { Button } from "../../../bases/standalone/Button";
import { Accordion } from "../../../bases/standalone/Accordion";
import { Banner } from "../../../bases/standalone/Banner";
import { Dialog } from "../../../bases/standalone/Dialog";
import { Toast } from "../../../bases/standalone/Toast";
import { Empty } from "../../../bases/standalone/Empty";

interface Reservation {
  book: string;
  requester: string;
  position: number;
  requested: string;
}

export const RESERVATIONS: Reservation[] = [
  { book: "타입스크립트 핸드북", requester: "정하은", position: 1, requested: "09-16" },
  { book: "아침의 문", requester: "한지우", position: 1, requested: "09-17" },
  { book: "행동경제학 강의", requester: "오세준", position: 1, requested: "09-15" },
  { book: "행동경제학 강의", requester: "윤새별", position: 2, requested: "09-17" },
  { book: "타입스크립트 핸드북", requester: "송민재", position: 2, requested: "09-18" },
  { book: "아침의 문", requester: "임도현", position: 2, requested: "09-18" },
];

// 취소 후 도서별 대기 순번 재계산
function renumber(list: readonly Reservation[]): Reservation[] {
  const byBook = new Map<string, Reservation[]>;
  for (const r of list) {
    const arr = byBook.get(r.book) ?? [];
    arr.push(r);
    byBook.set(r.book, arr);
  }
  const result: Reservation[] = [];
  for (const arr of byBook.values) {
    arr.sort((a, b) => a.position - b.position);
    arr.forEach((r, i) => result.push({ ...r, position: i + 1 }));
  }
  return result;
}

export function ReservationsScreen {
  const [reservations, setReservations] = React.useState<readonly Reservation[]>(RESERVATIONS);
  const [target, setTarget] = React.useState<{ book: string; requester: string } | null>(null);

  const books = Array.from(new Set(reservations.map((r) => r.book)));
  const firstInLine = reservations.filter((r) => r.position === 1).length;

  const closeConfirm =  => setTarget(null);
  const confirmCancel =  => {
    if (!target) return;
    setReservations((prev) => renumber(prev.filter((r) => !(r.book === target.book && r.requester === target.requester))));
    Toast.show({ title: "예약을 취소했어요", description: `${target.book} · ${target.requester}님`, type: "info" });
    closeConfirm;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
      <style>{`
        .sa3-rv-stats { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 0.75rem; }
        @container sa3 (min-width: 28rem) { .sa3-rv-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
      `}</style>

      <Banner soft title="예약은 자동으로 알려드려요">
        예약하신 도서가 반납되면 그 순간 대기 1순위인 분께 알림을 보내드려요.
      </Banner>

      <div className="sa3-rv-stats">
        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "var(--semantic-radius-control)", background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }}>
              <Hourglass size={14} aria-hidden />
            </span>
          </div>
          <Stat label="총 대기 건수" value={`${reservations.length}건`} />
        </div>
        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "var(--semantic-radius-control)", background: "var(--semantic-bg-success-subtle)", color: "var(--semantic-fg-success-default)" }}>
              <BookMarked size={14} aria-hidden />
            </span>
          </div>
          <Stat label="대기 1순위" value={`${firstInLine}건`} />
        </div>
        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "var(--semantic-radius-control)", background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }}>
              <Library size={14} aria-hidden />
            </span>
          </div>
          <Stat label="예약된 도서 종수" value={`${books.length}종`} />
        </div>
      </div>

      {reservations.length === 0 ? (
        <Empty>
          <Empty.Header>
            <Empty.Media><Hourglass size={22} aria-hidden /></Empty.Media>
            <Empty.Title>대기 중인 예약이 없어요</Empty.Title>
            <Empty.Description>도서 상세에서 "예약하기"를 누르면 여기 쌓여요.</Empty.Description>
          </Empty.Header>
        </Empty>
      ) : (
        <Accordion
          items={books.map((book) => {
            const requesters = reservations.filter((r) => r.book === book).sort((a, b) => a.position - b.position);
            return {
              value: book,
              title: (
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {book}
                  <Badge tone="brand">{requesters.length}명 대기</Badge>
                </span>
              ),
              body: (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {requesters.map((r) => (
                    <div key={r.requester} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
                        <Badge tone={r.position === 1 ? "brand" : "neutral"}>{r.position}번</Badge>
                        <span style={{ fontSize: "0.8125rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.requester}</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>신청 {r.requested}</span>
                      </div>
                      <Button variant="plain" tone="danger" size="sm" onClick={ => setTarget({ book, requester: r.requester })} style={{ padding: 0, height: "auto" }}>
                        <X size={12} aria-hidden /> 취소
                      </Button>
                    </div>
                  ))}
                </div>
              ),
            };
          })}
        />
      )}

      <Dialog
        open={target !== null}
        onClose={closeConfirm}
        title="예약을 취소할까요?"
        actions={
          <>
            <Button variant="subtle" tone="neutral" onClick={closeConfirm}>아니요</Button>
            <Button variant="solid" tone="danger" onClick={confirmCancel}>예약 취소</Button>
          </>
        }
      >
        {target && <p>{target.book} · {target.requester}님의 예약을 취소해요. 뒤 순번이 하나씩 당겨져요.</p>}
      </Dialog>
    </div>
  );
}
