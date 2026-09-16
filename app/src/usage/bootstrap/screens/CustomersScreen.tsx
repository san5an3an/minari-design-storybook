import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

interface Customer {
  name: string;
  email: string;
  tickets: number;
  tier: "일반" | "우수";
}

const CUSTOMERS: Customer[] = [
  { name: "김도윤", email: "doyun.kim@example.com", tickets: 3, tier: "일반" },
  { name: "이서연", email: "seoyeon.lee@example.com", tickets: 1, tier: "우수" },
  { name: "박지훈", email: "jihoon.park@example.com", tickets: 5, tier: "우수" },
  { name: "최민서", email: "minseo.choi@example.com", tickets: 1, tier: "일반" },
];

export function CustomersScreen {
  return (
    <div className="d-flex flex-column gap-2">
      {CUSTOMERS.map((c) => (
        <Card key={c.email}>
          <Card.Body className="d-flex justify-content-between align-items-center py-2">
            <div>
              <div>{c.name}</div>
              <div className="text-body-secondary small">{c.email}</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="text-body-secondary small">티켓 {c.tickets}건</span>
              <Badge bg={c.tier === "우수" ? "primary" : "secondary"}>{c.tier}</Badge>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
