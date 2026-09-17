import * as React from "react";
import { AlertTriangle, BookOpen, Library } from "lucide-react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
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
          `linear-gradient(180deg, color-mix(in oklch, var(--semantic-bg-brand-default) 18%, transparent) 0%, `
          + `color-mix(in oklch, var(--semantic-bg-brand-default) 90%, black) 78%), url("${HERO_IMAGE}")`,
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

export function BooksScreen({ onNavigate, onSelect }: ScreenProps) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("all");

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const rows = BOOKS.filter(
    (b) =>
      (category === "all" || b.category === category)
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

      <Table hover responsive size="sm">
        <thead>
          <tr>
            <th>제목</th>
            <th>저자</th>
            <th>분류</th>
            <th>대출자</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((b) => (
            <tr key={b.id} onClick={ => open(b.id)} style={{ cursor: "pointer" }}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.category}</td>
              <td>{b.borrower ?? "-"}</td>
              <td>
                <Badge bg={STATUS_LABEL[b.status].bg}>{STATUS_LABEL[b.status].text}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
