import * as React from "react";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-bootstrap/Fade";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";

const REPAIR_PHOTOS = [
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=640&q=60", caption: "입고 시 상태" },
  { src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=640&q=60", caption: "작업 중" },
];
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

  const mechanicStats = order && order.mechanic !== "미배정"
    ? ( => {
        const all = WORK_ORDERS.filter((w) => w.mechanic === order.mechanic);
        const done = all.filter((w) => w.status === "완료").length;
        return { total: all.length, done, inProgress: all.filter((w) => w.status === "작업중").length };
      })
    : null;

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

      {/* Alert 계열과 Fade로 담당 미배정 상태 강조 표시 */}
      <Fade in={order.mechanic === "미배정"} unmountOnExit>
        <Alert variant="warning" className="mb-0">
          <Alert.Heading style={{ fontSize: "0.9375rem" }}>담당 정비사 미배정</Alert.Heading>
          아직 담당 정비사가 배정되지 않았어요. 아래 <Alert.Link href="#작업-관리">"작업 관리"</Alert.Link>에서 지금 배정해 주세요.
        </Alert>
      </Fade>

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

      {/* Carousel로 정비 사진 기록 추가 */}
      <div>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>정비 사진</h3>
        <Carousel indicators={REPAIR_PHOTOS.length > 1} controls={REPAIR_PHOTOS.length > 1} interval={null}>
          {REPAIR_PHOTOS.map((p) => (
            <Carousel.Item key={p.caption}>
              <img
                src={p.src}
                alt={p.caption}
                style={{ inlineSize: "100%", blockSize: "10rem", objectFit: "cover", borderRadius: "var(--semantic-radius-control)" }}
              />
              <Carousel.Caption>
                <p style={{ fontSize: "0.75rem" }}>{p.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
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
              {/* Form.Text로 도움말 텍스트 표시 */}
              <Form.Text muted>고객에게 그대로 안내돼요.</Form.Text>
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
        {/* Card.Footer, Stack으로 마지막 수정 정보 가로 배치하기 */}
        <Card.Footer className="text-body-secondary" style={{ fontSize: "0.75rem" }}>
          <Stack direction="horizontal" gap={2}>
            <span>마지막 수정: 방금</span>
            <span className="ms-auto">담당 {mechanic}</span>
          </Stack>
        </Card.Footer>
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
      ) : mechanicStats ? (
        // 작업 0건일 때 폴백값
        <Card>
          <Card.Body>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>{order.mechanic} 정비사 현황</h3>
            <div className="d-flex gap-4 mt-2">
              <div>
                <div className="text-body-secondary small">전체 작업</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{mechanicStats.total}건</div>
              </div>
              <div>
                <div className="text-body-secondary small">작업중</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{mechanicStats.inProgress}건</div>
              </div>
              <div>
                <div className="text-body-secondary small">완료</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{mechanicStats.done}건</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
}
