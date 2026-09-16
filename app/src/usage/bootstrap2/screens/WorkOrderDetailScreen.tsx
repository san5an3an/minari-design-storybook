import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import type { ScreenProps } from "../screens";
import { WORK_ORDERS, type WorkOrder } from "../data";

const STATUS_LABEL: Record<WorkOrder["status"], { text: string; bg: string }> = {
  대기: { text: "대기", bg: "secondary" },
  작업중: { text: "작업중", bg: "warning" },
  완료: { text: "완료", bg: "success" },
};

export function WorkOrderDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const order = WORK_ORDERS.find((w) => w.id === selectedId);

  if (!order) {
    return (
      <div
        className="text-center text-body-secondary"
        style={{ border: "1px dashed var(--semantic-border-neutral-subtle)", borderRadius: "0.5rem", padding: "2rem" }}
      >
        <p className="mb-2">정비 요청을 먼저 골라 주세요. "정비 요청" 탭에서 행을 눌러 보세요.</p>
        <Button size="sm" variant="outline-secondary" onClick={ => onNavigate?.("orders")}>
          정비 요청으로
        </Button>
      </div>
    );
  }

  const partsTotal = order.parts.reduce((sum, p) => sum + p.qty * p.price, 0);

  return (
    <div className="d-flex flex-column gap-3">
      <div>
        <div className="d-flex align-items-center gap-2">
          <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>
            {order.vehicle} · {order.plate}
          </span>
          <Badge bg={STATUS_LABEL[order.status].bg}>{STATUS_LABEL[order.status].text}</Badge>
        </div>
        <div className="text-body-secondary small">
          {order.customer} · {order.issue} · 담당 {order.mechanic} · 예상완료 {order.eta}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>부품</h3>
        {order.parts.length === 0 ? (
          <p className="text-body-secondary small mb-0">아직 등록된 부품이 없어요.</p>
        ) : (
          <Table size="sm" responsive>
            <thead>
              <tr>
                <th>부품명</th>
                <th>수량</th>
                <th>단가</th>
              </tr>
            </thead>
            <tbody>
              {order.parts.map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.qty}</td>
                  <td>{p.price.toLocaleString}원</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} className="text-end fw-semibold">
                  합계
                </td>
                <td className="fw-semibold">{partsTotal.toLocaleString}원</td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>

      <div>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>작업 이력</h3>
        <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
          {order.history.map((h, i) => (
            <li key={i} className="d-flex gap-2">
              <span className="text-body-secondary small" style={{ minWidth: "5rem" }}>
                {h.timeLabel}
              </span>
              <span className="small">{h.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
