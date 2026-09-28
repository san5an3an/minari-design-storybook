import * as React from "react";
import { Inbox, MessageSquareWarning, Timer } from "lucide-react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import { SlidersHorizontal } from "lucide-react";

export interface Ticket {
  id: string;
  subject: string;
  customer: string;
  status: "open" | "pending" | "closed";
  updated: string;
}

export const STATUS_LABEL: Record<Ticket["status"], { text: string; bg: string }> = {
  open: { text: "열림", bg: "danger" },
  pending: { text: "대기", bg: "warning" },
  closed: { text: "닫힘", bg: "secondary" },
};

// Offcanvas 고급필터, Pagination, CloseButton 칩, 목록 12건
export const TICKETS: Ticket[] = [
  { id: "#3021", subject: "배송이 8일째 안 와요", customer: "김도윤", status: "open", updated: "12분 전" },
  { id: "#3020", subject: "환불 처리가 안 됐어요", customer: "이서연", status: "pending", updated: "40분 전" },
  { id: "#3018", subject: "쿠폰이 적용이 안 돼요", customer: "박지훈", status: "open", updated: "1시간 전" },
  { id: "#3017", subject: "적립금이 반영이 안 돼요", customer: "박지훈", status: "pending", updated: "3시간 전" },
  { id: "#3016", subject: "배송지를 잘못 입력했어요", customer: "한소율", status: "open", updated: "3시간 전" },
  { id: "#3015", subject: "사이즈 교환 문의", customer: "최민서", status: "closed", updated: "어제" },
  { id: "#3013", subject: "결제가 두 번 됐어요", customer: "오지호", status: "pending", updated: "어제" },
  { id: "#3012", subject: "포장이 파손된 채 왔어요", customer: "정하은", status: "closed", updated: "어제" },
  { id: "#3009", subject: "배송지 변경 요청", customer: "김도윤", status: "closed", updated: "지난주" },
  { id: "#3005", subject: "적립금 사용 문의", customer: "이서연", status: "closed", updated: "지난주" },
];

interface Stat {
  label: string;
  value: string;
  tone: "brand" | "warning" | "danger";
  Icon: typeof Inbox;
}

const STATS: Stat[] = [
  { label: "오늘 접수", value: "14", tone: "brand", Icon: Inbox },
  { label: "평균 응답시간", value: "38분", tone: "warning", Icon: Timer },
  { label: "미해결", value: "6", tone: "danger", Icon: MessageSquareWarning },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=60";

// 인사 배너, 그라디언트 짙은 쪽에 글자 배치. --semantic-bg-brand 사용
function TicketsHero {
  return (
    <div
      className="d-flex flex-column justify-content-end gap-1 p-4"
      style={{
        minHeight: "9rem",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
        backgroundImage:
          `linear-gradient(180deg, transparent 0%, transparent 40%, `
          + `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "1.125rem", fontWeight: 600 }}>
        오늘도 문의를 하나씩 풀어볼까요 👋
      </span>
      <span style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.85, fontSize: "0.875rem" }}>
        지금까지 들어온 문의를 상태별로 확인해요.
      </span>
    </div>
  );
}

function StatTile({ stat }: { stat: Stat }) {
  const { Icon } = stat;
  return (
    <Card className="position-relative overflow-hidden" style={{ flex: "1 1 10rem", minWidth: "10rem" }}>
      <Card.Body>
        <div className="d-flex align-items-center gap-2">
          <span
            aria-hidden
            className="d-inline-flex align-items-center justify-content-center"
            style={{
              inlineSize: "1.75rem",
              blockSize: "1.75rem",
              borderRadius: "var(--semantic-radius-control)",
              background: `var(--semantic-bg-${stat.tone}-subtle)`,
              color: `var(--semantic-fg-${stat.tone}-default)`,
            }}
          >
            <Icon size={14} />
          </span>
          <span className="text-body-secondary" style={{ fontSize: "0.8125rem" }}>
            {stat.label}
          </span>
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: 600, marginBlockStart: "0.5rem" }}>
          {stat.value}
        </div>
      </Card.Body>
      <Icon
        aria-hidden
        size={64}
        style={{
          position: "absolute",
          insetInlineEnd: "-0.75rem",
          insetBlockEnd: "-0.75rem",
          color: `var(--semantic-fg-${stat.tone}-default)`,
          opacity: 0.08,
        }}
      />
    </Card>
  );
}

const PAGE_SIZE = 5;

export function TicketsScreen {
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState<Ticket["status"] | "all">("all");
  const [page, setPage] = React.useState(1);
  const [showFilters, setShowFilters] = React.useState(false);
  const [maxWaitMinutes, setMaxWaitMinutes] = React.useState(120);

  const filtered = TICKETS.filter(
    (t) =>
      (status === "all" || t.status === status)
      && (query.trim === "" || t.subject.includes(query) || t.customer.includes(query)),
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const activePage = Math.min(page, pageCount);
  const rows = filtered.slice((activePage - 1) * PAGE_SIZE, activePage * PAGE_SIZE);

  return (
    <div className="d-flex flex-column gap-3">
      <TicketsHero />
      <div className="d-flex flex-wrap gap-3">
        {STATS.map((s) => (
          <StatTile key={s.label} stat={s} />
        ))}
      </div>

      {/* Form.Control, Form.Select로 필터링 동작 구현하기 */}
      <div className="d-flex flex-wrap gap-2">
        <Form.Control
          type="search"
          placeholder="제목·고객 검색"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          style={{ maxWidth: "220px" }}
        />
        <Form.Select
          value={status}
          onChange={(e) => { setStatus(e.target.value as Ticket["status"] | "all"); setPage(1); }}
          style={{ maxWidth: "140px" }}
          aria-label="상태 거르기"
        >
          <option value="all">전체 상태</option>
          <option value="open">열림</option>
          <option value="pending">대기</option>
          <option value="closed">닫힘</option>
        </Form.Select>
        {/* Offcanvas로 고급 필터 슬라이드 패널 구현 */}
        <Button variant="outline-secondary" size="sm" onClick={ => setShowFilters(true)}>
          <SlidersHorizontal size={14} className="me-1" /> 고급 필터
        </Button>
      </div>

      <Offcanvas show={showFilters} onHide={ => setShowFilters(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontSize: "1rem" }}>고급 필터</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gap-3">
          {/* Form.Range로 응답 대기 시간 상한 필터 추가 */}
          <Form.Group>
            <Form.Label className="small text-body-secondary d-flex justify-content-between">
              <span>응답 대기 시간 상한</span>
              <span>{maxWaitMinutes}분 이내</span>
            </Form.Label>
            <Form.Range
              min={10}
              max={180}
              step={10}
              value={maxWaitMinutes}
              onChange={(e) => setMaxWaitMinutes(Number(e.target.value))}
            />
          </Form.Group>
          <Button size="sm" onClick={ => setShowFilters(false)}>적용</Button>
        </Offcanvas.Body>
      </Offcanvas>

      {/* CloseButton으로 필터 칩 제거 */}
      {status !== "all" ? (
        <div className="d-flex align-items-center gap-1">
          <span
            className="d-inline-flex align-items-center gap-2 px-2 py-1"
            style={{
              fontSize: "0.75rem",
              borderRadius: "var(--semantic-radius-control)",
              background: "var(--semantic-bg-neutral-subtle)",
            }}
          >
            상태: {STATUS_LABEL[status].text}
            <CloseButton
              aria-label="상태 거르개 지우기"
              style={{ fontSize: "0.55rem" }}
              onClick={ => { setStatus("all"); setPage(1); }}
            />
          </span>
        </div>
      ) : null}

      <Table hover responsive size="sm">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>고객</th>
            <th>상태</th>
            <th>수정</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((t) => (
            <tr key={t.id}>
              <td>
                <code>{t.id}</code>
              </td>
              <td>{t.subject}</td>
              <td>{t.customer}</td>
              <td>
                <Badge bg={STATUS_LABEL[t.status].bg}>{STATUS_LABEL[t.status].text}</Badge>
              </td>
              <td className="text-body-secondary">{t.updated}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination으로 표 아래 페이지 넘김 구현 */}
      {pageCount > 1 ? (
        <Pagination className="mb-0 justify-content-end">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <Pagination.Item key={n} active={n === activePage} onClick={ => setPage(n)}>
              {n}
            </Pagination.Item>
          ))}
        </Pagination>
      ) : null}
    </div>
  );
}
