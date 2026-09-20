import * as React from "react";
import { RotateCw, Search, SearchX, ShieldAlert, Timer } from "lucide-react";
import { Table } from "../../../bases/standalone/Table";
import { Badge } from "../../../bases/standalone/Badge";
import { Pagination } from "../../../bases/standalone/Pagination";
import { Stat } from "../../../bases/standalone/Stat";
import { Button } from "../../../bases/standalone/Button";
import { Segmented } from "../../../bases/standalone/Segmented";
import { Alert } from "../../../bases/standalone/Alert";
import { Dialog } from "../../../bases/standalone/Dialog";
import { Toast } from "../../../bases/standalone/Toast";
import { Input } from "../../../bases/standalone/Input";
import { Empty } from "../../../bases/standalone/Empty";

interface Loan {
  id: string;
  book: string;
  borrower: string;
  due: string;
  status: "정상" | "연체";
}

export const LOANS: Loan[] = [
  { id: "l1", book: "타입스크립트 핸드북", borrower: "김도현", due: "09-20", status: "정상" },
  { id: "l2", book: "아침의 문", borrower: "이서아", due: "09-15", status: "연체" },
  { id: "l3", book: "행동경제학 강의", borrower: "박준서", due: "09-14", status: "연체" },
  { id: "l4", book: "코드가 만드는 세계", borrower: "최유나", due: "09-22", status: "정상" },
  { id: "l5", book: "고요한 지구", borrower: "정하은", due: "09-19", status: "정상" },
  { id: "l6", book: "디자인 시스템 만들기", borrower: "한지우", due: "09-25", status: "정상" },
  { id: "l7", book: "통계로 세상 읽기", borrower: "오세준", due: "09-13", status: "연체" },
  { id: "l8", book: "밤의 도서관", borrower: "윤새별", due: "09-24", status: "정상" },
];

const PAGE_SIZE = 5;

// MM-DD 형식에 일수 더해 날짜 계산. 연도는 2026 고정
function addDays(mmdd: string, days: number): string {
  const [m, d] = mmdd.split("-").map(Number);
  const date = new Date(2026, (m || 1) - 1, d || 1);
  date.setDate(date.getDate + days);
  const mm = String(date.getMonth + 1).padStart(2, "0");
  const dd = String(date.getDate).padStart(2, "0");
  return `${mm}-${dd}`;
}

export function LoansScreen {
  const [loans, setLoans] = React.useState<readonly Loan[]>(LOANS);
  const [statusFilter, setStatusFilter] = React.useState<string[]>(["전체"]);
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [extendingId, setExtendingId] = React.useState<string | null>(null);

  const activeFilter = statusFilter[0] ?? "전체";
  const filtered = loans
    .filter((l) => activeFilter === "전체" || l.status === activeFilter)
    .filter((l) => {
      const q = query.trim;
      return q === "" || l.book.includes(q) || l.borrower.includes(q);
    });
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const shown = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const overdue = loans.filter((l) => l.status === "연체").length;
  const normal = loans.filter((l) => l.status === "정상").length;

  const changeFilter = (v: string[]) => { setStatusFilter(v); setPage(1); };
  const extending = loans.find((l) => l.id === extendingId);

  const confirmExtend =  => {
    if (!extending) return;
    const nextDue = addDays(extending.due, 7);
    setLoans((prev) => prev.map((l) => (l.id === extending.id ? { ...l, due: nextDue, status: "정상" as const } : l)));
    setExtendingId(null);
    Toast.show({ title: "반납일을 연장했어요", description: `${extending.book} · 새 반납 예정일 ${nextDue}`, type: "success" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
      <style>{`
        .sa3-ln-stats { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 0.75rem; }
        @container sa3 (min-width: 28rem) { .sa3-ln-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
      `}</style>

      {overdue > 0 && (
        <Alert tone="danger" title="연체 도서가 있어요">
          {overdue}건이 반납 예정일을 넘겼어요. 대출자에게 알림을 보내거나 아래에서 반납일을 연장해 주세요.
        </Alert>
      )}

      <div className="sa3-ln-stats">
        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <Stat label="전체 대출" value={`${loans.length}건`} />
        </div>
        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "var(--semantic-radius-control)", background: "var(--semantic-bg-success-subtle)", color: "var(--semantic-fg-success-default)" }}>
              <Timer size={14} aria-hidden />
            </span>
          </div>
          <Stat label="정상" value={`${normal}건`} />
        </div>
        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "var(--semantic-radius-control)", background: "var(--semantic-bg-danger-subtle)", color: "var(--semantic-fg-danger-default)" }}>
              <ShieldAlert size={14} aria-hidden />
            </span>
          </div>
          <Stat label="연체" value={`${overdue}건`} direction={overdue > 0 ? "down" : "up"} />
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.625rem" }}>
        <Segmented value={statusFilter} onValueChange={changeFilter}>
          <Segmented.Item value="전체">전체</Segmented.Item>
          <Segmented.Item value="정상">정상</Segmented.Item>
          <Segmented.Item value="연체">연체</Segmented.Item>
        </Segmented>
        <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
          <Search size={13} aria-hidden style={{ position: "absolute", left: "0.6rem", color: "var(--semantic-fg-neutral-subtle)", pointerEvents: "none" }} />
          <input
            className="ods-input"
            style={{ paddingInlineStart: "1.9rem", width: "10rem" }}
            placeholder="도서명·대출자 검색"
            aria-label="대출 검색"
            value={query}
            onChange={(e) => {
              const v = e.target.value;
              setQuery(v);
              setPage(1);
            }}
          />
        </span>
      </div>

      {filtered.length === 0 ? (
        <Empty>
          <Empty.Header>
            <Empty.Media><SearchX size={22} aria-hidden /></Empty.Media>
            <Empty.Title>조건에 맞는 대출이 없어요</Empty.Title>
            <Empty.Description>검색어나 상태 필터를 바꿔 보세요.</Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button size="sm" variant="subtle" onClick={ => { setQuery(""); changeFilter(["전체"]); }}>필터 초기화</Button>
          </Empty.Content>
        </Empty>
      ) : (
        <>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>도서명</Table.Head>
                <Table.Head>대출자</Table.Head>
                <Table.Head>반납 예정일</Table.Head>
                <Table.Head>상태</Table.Head>
                <Table.Head>동작</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {shown.map((l) => (
                <Table.Row key={l.id}>
                  <Table.Cell>{l.book}</Table.Cell>
                  <Table.Cell>{l.borrower}</Table.Cell>
                  <Table.Cell>{l.due}</Table.Cell>
                  <Table.Cell>
                    <Badge tone={l.status === "연체" ? "danger" : "success"}>{l.status}</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <Button variant="plain" tone="brand" size="sm" onClick={ => setExtendingId(l.id)} style={{ padding: 0, height: "auto" }}>
                      <RotateCw size={12} aria-hidden /> 연장
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{filtered.length}건 중 {shown.length}건 표시</span>
            <Pagination page={safePage} total={pageCount} onPage={setPage} />
          </div>
        </>
      )}

      <Dialog
        open={extending !== undefined}
        onClose={ => setExtendingId(null)}
        title="반납일을 연장할까요?"
        actions={
          <>
            <Button variant="subtle" tone="neutral" onClick={ => setExtendingId(null)}>취소</Button>
            <Button variant="solid" tone="brand" onClick={confirmExtend}>7일 연장</Button>
          </>
        }
      >
        {extending && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: "15rem" }}>
            <p>{extending.book} · {extending.borrower}님. 반납 예정일이 {extending.due} → {addDays(extending.due, 7)} (으)로 바뀌어요.</p>
            {/* 제어 불필요한 필드라 Input 그대로 사용. 연장은 위 확인만으로 성립하며 사유는 참고용임 */}
            <Input label="연장 사유 (선택)" placeholder="예: 시험 기간이라 조금 더 필요해요" />
          </div>
        )}
      </Dialog>
    </div>
  );
}
