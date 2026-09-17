import * as React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import type { ScreenProps } from "../screens";
import { BOOKS, OVERDUE, type Book } from "../data";

type Action = "대출" | "반납";

const STATUS_LABEL: Record<Book["status"], { text: string; bg: string }> = {
  대출가능: { text: "대출가능", bg: "success" },
  대출중: { text: "대출중", bg: "secondary" },
  연체: { text: "연체", bg: "danger" },
};

// 연체료는 도서 자신의 연체 상태와 OVERDUE 레코드로만 계산
const LATE_FEE_PER_DAY = 200;

export function BookDetailScreen({ selectedId, onSelect, onNavigate }: ScreenProps) {
  const book = BOOKS.find((b) => b.id === selectedId);
  const [action, setAction] = React.useState<Action>(book?.borrower ? "반납" : "대출");
  const [borrower, setBorrower] = React.useState(book?.borrower ?? "");

  const sameCategoryOnly = book ? BOOKS.filter((b) => b.id !== book.id && b.category === book.category) : [];
  const sameCategory = sameCategoryOnly.length > 0
    ? sameCategoryOnly
    : (book ? BOOKS.filter((b) => b.id !== book.id).slice(0, 3) : []);
  const relatedTitle = sameCategoryOnly.length > 0
    ? `같은 분류(${book?.category})의 다른 책`
    : "다른 소장 도서";
  const overdue = book ? OVERDUE.find((o) => o.bookId === book.id) : undefined;

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
      <div className="d-flex gap-3">
        {/* Figure, Figure.Caption으로 표지 이미지 감싸고 ISBN 캡션 표시 */}
        <Figure className="mb-0" style={{ flexShrink: 0 }}>
          <Figure.Image
            src={book.coverUrl}
            alt=""
            style={{
              inlineSize: "6rem",
              blockSize: "8rem",
              objectFit: "cover",
              borderRadius: "var(--semantic-radius-control)",
              boxShadow: "var(--semantic-shadow-raised)",
            }}
          />
          <Figure.Caption style={{ fontSize: "0.6875rem" }}>ISBN {book.isbn}</Figure.Caption>
        </Figure>
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
      </div>

      {overdue ? (
        <Card border="danger">
          <Card.Body className="d-flex flex-column gap-2">
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: 0 }}>연체료 안내</h3>
            <div className="d-flex justify-content-between">
              <span className="small text-body-secondary">반납예정일</span>
              <span className="small">{overdue.dueLabel}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="small text-body-secondary">연체 일수</span>
              <span className="small">{overdue.daysLate}일</span>
            </div>
            <div className="d-flex justify-content-between fw-semibold">
              <span>연체료 (일 {LATE_FEE_PER_DAY.toLocaleString}원)</span>
              <span>{(overdue.daysLate * LATE_FEE_PER_DAY).toLocaleString}원</span>
            </div>
            <Button size="sm" variant="outline-danger" style={{ alignSelf: "flex-start" }}>
              연체료 납부
            </Button>
          </Card.Body>
        </Card>
      ) : null}

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

      <Card>
        <Card.Body className="d-flex flex-column gap-2">
          <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>대출/반납 처리</h3>
          <div className="d-flex gap-3">
            <Form.Check
              type="radio" id="action-borrow" name="loan-action" label="대출"
              checked={action === "대출"} onChange={ => setAction("대출")}
            />
            <Form.Check
              type="radio" id="action-return" name="loan-action" label="반납"
              checked={action === "반납"} onChange={ => setAction("반납")}
            />
          </div>
          <InputGroup style={{ maxWidth: "320px" }}>
            <InputGroup.Text>대출자</InputGroup.Text>
            <Form.Control
              value={borrower}
              onChange={(e) => setBorrower(e.target.value)}
              placeholder="이름 입력"
              disabled={action === "반납"}
            />
          </InputGroup>
          <Button size="sm" style={{ alignSelf: "flex-start" }}>
            {action} 처리
          </Button>
        </Card.Body>
      </Card>

      {sameCategory.length > 0 ? (
        <div>
          <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>{relatedTitle}</h3>
          <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
            {sameCategory.map((b) => (
              <li key={b.id}>
                <Button
                  variant="link"
                  className="p-0"
                  onClick={ => { onSelect?.(b.id); onNavigate?.("detail"); }}
                >
                  {b.title}
                </Button>
                <span className="text-body-secondary small"> · {b.author} · <Badge bg={STATUS_LABEL[b.status].bg}>{STATUS_LABEL[b.status].text}</Badge></span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
