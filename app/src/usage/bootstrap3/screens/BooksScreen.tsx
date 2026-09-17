import * as React from "react";
import { AlertTriangle, BookOpen, Library } from "lucide-react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import type { ScreenProps } from "../screens";
import { BOOKS, type Book } from "../data";

const STATUS_LABEL: Record<Book["status"], { text: string; bg: string }> = {
  대출가능: { text: "대출가능", bg: "success" },
  대출중: { text: "대출중", bg: "secondary" },
  연체: { text: "연체", bg: "danger" },
};

interface Stat {
  label: string;
  value: string;
  tone: "brand" | "warning" | "danger";
  Icon: typeof Library;
}

const STATS: Stat[] = [
  { label: "소장 도서", value: String(BOOKS.length), tone: "brand", Icon: Library },
  { label: "대출중", value: String(BOOKS.filter((b) => b.status === "대출중").length), tone: "warning", Icon: BookOpen },
  { label: "연체", value: String(BOOKS.filter((b) => b.status === "연체").length), tone: "danger", Icon: AlertTriangle },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=60";

// 도서 목록 인사 배너. usage1 원칙 따름, 색은 semantic 토큰 사용
function BooksHero {
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
        오늘은 어떤 책을 만나볼까요 📚
      </span>
      <span style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.85, fontSize: "0.875rem" }}>
        소장 도서와 대출 상태를 한눈에 확인해요.
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

function BookCoverCard({ book, onOpen }: { book: Book; onOpen: (id: string) => void }) {
  return (
    <Card
      role="button"
      className="h-100"
      onClick={ => onOpen(book.id)}
      style={{ cursor: "pointer" }}
    >
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={book.coverUrl}
          alt=""
          style={{ aspectRatio: "3 / 4", objectFit: "cover" }}
        />
        <Badge
          bg={STATUS_LABEL[book.status].bg}
          className="position-absolute"
          style={{ insetBlockStart: "0.5rem", insetInlineEnd: "0.5rem" }}
        >
          {STATUS_LABEL[book.status].text}
        </Badge>
      </div>
      <Card.Body className="py-2">
        <div className="text-truncate" style={{ fontWeight: 600, fontSize: "0.875rem" }}>
          {book.title}
        </div>
        <div className="text-body-secondary text-truncate" style={{ fontSize: "0.75rem" }}>
          {book.author} · {book.category}
        </div>
        {book.borrower ? (
          <div className="text-body-secondary text-truncate" style={{ fontSize: "0.75rem" }}>
            대출자 {book.borrower}
          </div>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export function BooksScreen({ onNavigate, onSelect }: ScreenProps) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const [status, setStatus] = React.useState<Book["status"] | "all">("all");

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const rows = BOOKS.filter(
    (b) =>
      (category === "all" || b.category === category)
      && (status === "all" || b.status === status)
      && (query.trim === "" || b.title.includes(query) || b.author.includes(query)),
  );

  return (
    <div className="d-flex flex-column gap-3">
      <BooksHero />
      <div className="d-flex flex-wrap gap-3">
        {STATS.map((s) => (
          <StatTile key={s.label} stat={s} />
        ))}
      </div>

      {/* 상태 필터링 Tabs로 구현. 패널 내용은 카드 그리드가 대신해 각 Tab은 빈 상태임 */}
      <Tabs
        activeKey={status}
        onSelect={(k) => setStatus((k as Book["status"] | "all") ?? "all")}
        className="mb-0"
      >
        <Tab eventKey="all" title={`전체 ${BOOKS.length}`} />
        <Tab eventKey="대출가능" title={`대출가능 ${BOOKS.filter((b) => b.status === "대출가능").length}`} />
        <Tab eventKey="대출중" title={`대출중 ${BOOKS.filter((b) => b.status === "대출중").length}`} />
        <Tab eventKey="연체" title={`연체 ${BOOKS.filter((b) => b.status === "연체").length}`} />
      </Tabs>

      <div className="d-flex flex-wrap gap-2">
        <Form.Control
          type="search"
          placeholder="제목·저자 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ maxWidth: "220px" }}
        />
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ maxWidth: "140px" }}
          aria-label="분류 거르기"
        >
          <option value="all">전체 분류</option>
          <option value="컴퓨터">컴퓨터</option>
          <option value="소설">소설</option>
          <option value="과학">과학</option>
          <option value="인문">인문</option>
        </Form.Select>
      </div>

      {rows.length === 0 ? (
        <p className="text-body-secondary small mb-0">조건에 맞는 책이 없어요.</p>
      ) : (
        <div className="row row-cols-2 row-cols-md-3 g-3">
          {rows.map((b) => (
            <div className="col" key={b.id}>
              <BookCoverCard book={b} onOpen={open} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
