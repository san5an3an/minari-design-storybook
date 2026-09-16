import { AlertTriangle, BookOpen, Library } from "lucide-react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
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
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-wrap gap-3">
        {STATS.map((s) => (
          <StatTile key={s.label} stat={s} />
        ))}
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
          {BOOKS.map((b) => (
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
