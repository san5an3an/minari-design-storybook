import * as React from "react";
import { CarFront, ClipboardCheck, UserCog } from "lucide-react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Tooltip from "react-bootstrap/Tooltip";
import { MECHANICS, WORK_ORDERS, type Mechanic } from "../data";

const STATUS_BADGE: Record<Mechanic["status"], string> = {
  가능: "success",
  작업중: "warning",
  휴무: "secondary",
};

const CAPACITY = 3;

function MechanicCard({ m }: { m: Mechanic }) {
  const myOrders = WORK_ORDERS.filter((w) => w.mechanic === m.name);
  const load = Math.min(100, Math.round((m.activeOrders / CAPACITY) * 100));

  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center gap-2">
            {/* OverlayTrigger, Tooltip으로 전문분야 아이콘 설명 표시 */}
            <OverlayTrigger placement="top" overlay={<Tooltip id={`mechanic-tip-${m.id}`}>{m.specialty}</Tooltip>}>
              <span
                aria-hidden
                className="d-inline-flex align-items-center justify-content-center"
                style={{
                  inlineSize: "2.25rem",
                  blockSize: "2.25rem",
                  borderRadius: "50%",
                  background: "var(--semantic-bg-brand-subtle)",
                  color: "var(--semantic-fg-brand-default)",
                  cursor: "help",
                }}
              >
                <UserCog size={16} />
              </span>
            </OverlayTrigger>
            <div>
              <div style={{ fontWeight: 600 }}>{m.name}</div>
              <div className="text-body-secondary small">{m.specialty}</div>
            </div>
          </div>
          {/* 작업중 상태 배지 옆 Spinner로 강조 표시 */}
          <div className="d-flex align-items-center gap-1">
            {m.status === "작업중" ? <Spinner animation="grow" size="sm" variant="warning" /> : null}
            <Badge bg={STATUS_BADGE[m.status]}>{m.status}</Badge>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-between small text-body-secondary mb-1">
            <span>가동률</span>
            <span>{m.activeOrders}/{CAPACITY}건</span>
          </div>
          <ProgressBar now={load} variant={load >= 100 ? "danger" : load > 0 ? "warning" : "secondary"} style={{ blockSize: "0.375rem" }} />
        </div>

        <div className="border-top pt-2">
          <div className="text-body-secondary small mb-1 d-flex align-items-center gap-1">
            <CarFront size={12} /> 담당 작업
          </div>
          {myOrders.length === 0 ? (
            <div className="text-body-secondary small">배정된 작업 없음</div>
          ) : (
            <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
              {myOrders.map((w) => (
                <li key={w.id} className="d-flex justify-content-between small">
                  <span>{w.vehicle}</span>
                  <span className="text-body-secondary">{w.issue}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

const STATUS_FILTER_LABEL: Record<Mechanic["status"] | "all", string> = {
  all: "전체",
  가능: "가능만",
  작업중: "작업중만",
  휴무: "휴무만",
};

export function MechanicsScreen {
  const completedToday = WORK_ORDERS.filter((w) => w.status === "완료").length;
  const [filter, setFilter] = React.useState<Mechanic["status"] | "all">("all");

  const rows = MECHANICS.filter((m) => filter === "all" || m.status === filter);

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-wrap gap-3">
        <Card style={{ flex: "1 1 10rem" }}>
          <Card.Body className="d-flex align-items-center gap-2">
            <ClipboardCheck size={18} style={{ color: "var(--semantic-fg-success-default)" }} />
            <div>
              <div className="text-body-secondary small">이번 주 처리</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{completedToday}건</div>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ flex: "1 1 10rem" }}>
          <Card.Body className="d-flex align-items-center gap-2">
            <UserCog size={18} style={{ color: "var(--semantic-fg-brand-default)" }} />
            <div>
              <div className="text-body-secondary small">가용 정비사</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                {MECHANICS.filter((m) => m.status === "가능").length}/{MECHANICS.length}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Dropdown으로 상태 필터링하기 */}
      <div className="d-flex justify-content-end">
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" size="sm" id="mechanic-status-filter">
            상태 · {STATUS_FILTER_LABEL[filter]}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {(Object.keys(STATUS_FILTER_LABEL) as (Mechanic["status"] | "all")[]).map((key) => (
              <Dropdown.Item key={key} active={filter === key} onClick={ => setFilter(key)}>
                {STATUS_FILTER_LABEL[key]}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row xs={1} md={2} className="g-3">
        {rows.map((m) => (
          <Col key={m.id}>
            <MechanicCard m={m} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
