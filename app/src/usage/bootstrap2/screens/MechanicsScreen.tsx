import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import { MECHANICS, type Mechanic } from "../data";

const STATUS_BADGE: Record<Mechanic["status"], string> = {
  가능: "success",
  작업중: "warning",
  휴무: "secondary",
};

export function MechanicsScreen {
  return (
    <div className="d-flex flex-column gap-2">
      {MECHANICS.map((m) => (
        <Card key={m.id}>
          <Card.Body className="d-flex justify-content-between align-items-center py-2">
            <div>
              <div>{m.name}</div>
              <div className="text-body-secondary small">{m.specialty}</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="text-body-secondary small">진행 {m.activeOrders}건</span>
              <Badge bg={STATUS_BADGE[m.status]}>{m.status}</Badge>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
