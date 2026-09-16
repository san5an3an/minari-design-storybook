import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import { OVERDUE } from "../data";

export function OverdueScreen {
  if (OVERDUE.length === 0) {
    return <p className="text-body-secondary small mb-0">지금은 연체된 도서가 없어요.</p>;
  }

  return (
    <div className="d-flex flex-column gap-2">
      {OVERDUE.map((o) => (
        <Card key={o.bookId}>
          <Card.Body className="d-flex justify-content-between align-items-center py-2">
            <div>
              <div>{o.title}</div>
              <div className="text-body-secondary small">
                {o.borrower} · 반납예정 {o.dueLabel}
              </div>
            </div>
            <Badge bg="danger">{o.daysLate}일 연체</Badge>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
