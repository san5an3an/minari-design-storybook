import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import type { ScreenProps } from "../screens";
import { BOOKS, type Book } from "../data";

const STATUS_LABEL: Record<Book["status"], { text: string; bg: string }> = {
  대출가능: { text: "대출가능", bg: "success" },
  대출중: { text: "대출중", bg: "secondary" },
  연체: { text: "연체", bg: "danger" },
};

export function BookDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const book = BOOKS.find((b) => b.id === selectedId);

  if (!book) {
    return (
      <div
        className="text-center text-body-secondary"
        style={{ border: "1px dashed var(--semantic-border-neutral-subtle)", borderRadius: "0.5rem", padding: "2rem" }}
      >
        <p className="mb-2">도서를 먼저 골라 주세요. "도서" 탭에서 행을 눌러 보세요.</p>
        <Button size="sm" variant="outline-secondary" onClick={ => onNavigate?.("books")}>
          도서 목록으로
        </Button>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
      <div>
        <div className="d-flex align-items-center gap-2">
          <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>{book.title}</span>
          <Badge bg={STATUS_LABEL[book.status].bg}>{STATUS_LABEL[book.status].text}</Badge>
        </div>
        <div className="text-body-secondary small">
          {book.author} · {book.category} · ISBN {book.isbn}
        </div>
        {book.borrower ? (
          <div className="text-body-secondary small">
            현재 대출자 {book.borrower} · 반납예정 {book.dueLabel}
          </div>
        ) : null}
      </div>

      <div>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>대출 이력</h3>
        {book.loans.length === 0 ? (
          <p className="text-body-secondary small mb-0">아직 대출 이력이 없어요.</p>
        ) : (
          <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
            {book.loans.map((l, i) => (
              <li key={i} className="d-flex gap-2">
                <span className="text-body-secondary small" style={{ minWidth: "5rem" }}>
                  {l.timeLabel}
                </span>
                <span className="small">
                  {l.borrower} · {l.action}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
