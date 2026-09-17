import * as React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import type { ScreenProps } from "../screens";
import { WORK_ORDERS, type WorkOrder } from "../data";

const STATUS_LABEL: Record<WorkOrder["status"], { text: string; bg: string }> = {
  대기: { text: "대기", bg: "secondary" },
  작업중: { text: "작업중", bg: "warning" },
  완료: { text: "완료", bg: "success" },
};

const MECHANICS = ["미배정", "박정우", "최은성"];
const STATUSES: WorkOrder["status"][] = ["대기", "작업중", "완료"];

export function WorkOrderDetailScreen({ selectedId, onSelect, onNavigate }: ScreenProps) {
  const order = WORK_ORDERS.find((w) => w.id === selectedId);
  const [mechanic, setMechanic] = React.useState(order?.mechanic ?? "미배정");
  const [eta, setEta] = React.useState(order?.eta ?? "");
  const [status, setStatus] = React.useState<WorkOrder["status"]>(order?.status ?? "대기");

  // 파생 리스트. 프레임 고정 높이 유지, 기존 데이터에서 값 추출. 같은 담당자의 다른 작업
  const sameMechanic = order && order.mechanic !== "미배정"
    ? WORK_ORDERS.filter((w) => w.id !== order.id && w.mechanic === order.mechanic)
    : [];

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

      <Card>
        <Card.Body className="d-flex flex-column gap-3">
          <h3 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: 0 }}>작업 관리</h3>
          <div className="d-flex flex-wrap gap-3">
            <Form.Group style={{ minWidth: "10rem" }}>
              <Form.Label className="small text-body-secondary mb-1">담당 정비사</Form.Label>
              <Form.Select size="sm" value={mechanic} onChange={(e) => setMechanic(e.target.value)}>
                {MECHANICS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group style={{ minWidth: "10rem" }}>
              <Form.Label className="small text-body-secondary mb-1">예상완료</Form.Label>
              <Form.Control size="sm" type="text" value={eta} onChange={(e) => setEta(e.target.value)} placeholder="예: 오늘 17:00" />
            </Form.Group>
          </div>
          <Form.Group>
            <Form.Label className="small text-body-secondary mb-1 d-block">상태</Form.Label>
            <div className="d-flex gap-3">
              {STATUSES.map((s) => (
                <Form.Check
                  key={s}
                  type="radio"
                  id={`status-${s}`}
                  name="work-order-status"
                  label={s}
                  checked={status === s}
                  onChange={ => setStatus(s)}
                />
              ))}
            </div>
          </Form.Group>
          <Button size="sm" style={{ alignSelf: "flex-start" }}>저장</Button>
        </Card.Body>
      </Card>

      {sameMechanic.length > 0 ? (
        <div>
          <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>{order.mechanic} 정비사의 다른 작업</h3>
          <Table size="sm" hover responsive>
            <thead>
              <tr>
                <th>번호</th>
                <th>차량</th>
                <th>증상</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {sameMechanic.map((w) => (
                <tr
                  key={w.id}
                  style={{ cursor: "pointer" }}
                  onClick={ => { onSelect?.(w.id); onNavigate?.("detail"); }}
                >
                  <td><code>{w.id}</code></td>
                  <td>{w.vehicle}</td>
                  <td>{w.issue}</td>
                  <td><Badge bg={STATUS_LABEL[w.status].bg}>{STATUS_LABEL[w.status].text}</Badge></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : null}
    </div>
  );
}
