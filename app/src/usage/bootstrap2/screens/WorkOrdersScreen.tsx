import * as React from "react";
import { CarFront, Clock, Wrench } from "lucide-react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";
import { MECHANICS, WORK_ORDERS, type WorkOrder } from "../data";
import type { ScreenProps } from "../screens";

type SortKey = "등록순" | "차량명순";

const STATUS_LABEL: Record<WorkOrder["status"], { text: string; bg: string }> = {
  대기: { text: "대기", bg: "secondary" },
  작업중: { text: "작업중", bg: "warning" },
  완료: { text: "완료", bg: "success" },
};

const STATUS_PROGRESS: Record<WorkOrder["status"], number> = { 대기: 5, 작업중: 55, 완료: 100 };
const STATUS_VARIANT: Record<WorkOrder["status"], string> = { 대기: "secondary", 작업중: "warning", 완료: "success" };

const MECHANIC_STATUS_LABEL: Record<(typeof MECHANICS)[number]["status"], { text: string; bg: string }> = {
  가능: { text: "가능", bg: "success" },
  작업중: { text: "작업중", bg: "warning" },
  휴무: { text: "휴무", bg: "secondary" },
};

function WorkOrderCard({ order, onOpen }: { order: WorkOrder; onOpen:  => void }) {
  return (
    <Card
      role="button"
      onClick={onOpen}
      className="h-100"
      style={{ cursor: "pointer", borderInlineStart: `0.25rem solid var(--semantic-fg-${STATUS_VARIANT[order.status] === "secondary" ? "neutral" : STATUS_VARIANT[order.status] === "warning" ? "warning" : "success"}-default)` }}
    >
      <Card.Body className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center gap-2">
            <span
              aria-hidden
              className="d-inline-flex align-items-center justify-content-center"
              style={{
                inlineSize: "2rem",
                blockSize: "2rem",
                borderRadius: "var(--semantic-radius-control)",
                background: "var(--semantic-bg-brand-subtle)",
                color: "var(--semantic-fg-brand-default)",
                flexShrink: 0,
              }}
            >
              <CarFront size={16} />
            </span>
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.9375rem" }}>{order.vehicle}</div>
              <div className="text-body-secondary small">{order.plate}</div>
            </div>
          </div>
          <Badge bg={STATUS_LABEL[order.status].bg}>{STATUS_LABEL[order.status].text}</Badge>
        </div>
        <div className="text-body-secondary small">{order.issue}</div>
        <ProgressBar now={STATUS_PROGRESS[order.status]} variant={STATUS_VARIANT[order.status]} style={{ blockSize: "0.375rem" }} />
        <div className="d-flex justify-content-between small text-body-secondary">
          <span>담당 {order.mechanic}</span>
          <span>예상완료 {order.eta}</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export function WorkOrdersScreen({ onNavigate, onSelect }: ScreenProps) {
  const [status, setStatus] = React.useState<WorkOrder["status"] | "all">("all");
  const [onlyMine, setOnlyMine] = React.useState(false);
  const [sort, setSort] = React.useState<SortKey>("등록순");

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const rows = WORK_ORDERS.filter(
    (w) => (status === "all" || w.status === status) && (!onlyMine || w.mechanic === "박정우"),
  );
  if (sort === "차량명순") rows.sort((a, b) => a.vehicle.localeCompare(b.vehicle));
  const COMPLETED = WORK_ORDERS.filter((w) => w.status === "완료");

  return (
    <div className="d-flex gap-3" style={{ alignItems: "flex-start" }}>
      <div className="d-flex flex-column gap-3" style={{ flex: "1 1 auto", minWidth: 0 }}>
        <div className="d-flex flex-wrap align-items-center gap-3">
          <span className="d-inline-flex align-items-center gap-2" style={{ fontWeight: 600 }}>
            <Wrench size={16} style={{ color: "var(--semantic-fg-brand-default)" }} />
            입고 현황 {WORK_ORDERS.length}건
          </span>
          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value as WorkOrder["status"] | "all")}
            style={{ maxWidth: "140px" }}
            aria-label="상태 거르기"
          >
            <option value="all">전체 상태</option>
            <option value="대기">대기</option>
            <option value="작업중">작업중</option>
            <option value="완료">완료</option>
          </Form.Select>
          <Form.Check
            type="switch"
            id="only-mine"
            label="내 담당만 보기"
            checked={onlyMine}
            onChange={(e) => setOnlyMine(e.target.checked)}
          />
          {/* ButtonGroup으로 정렬 방식 전환하기 */}
          <ButtonGroup size="sm">
            {(["등록순", "차량명순"] as SortKey[]).map((s) => (
              <Button
                key={s}
                variant={sort === s ? "secondary" : "outline-secondary"}
                onClick={ => setSort(s)}
              >
                {s}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        <div className="d-flex flex-wrap gap-3">
          {rows.map((w) => (
            <div key={w.id} style={{ flex: "1 1 16rem", minWidth: "16rem" }}>
              <WorkOrderCard order={w} onOpen={ => open(w.id)} />
            </div>
          ))}
        </div>

        {/* 완료 정비 요약 표 렌더링, 기존 데이터에서 값 계산 */}
        {COMPLETED.length > 0 ? (
          <div>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>이번 주 완료 정비</h3>
            <Table size="sm" hover responsive>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>차량</th>
                  <th>작업 내용</th>
                  <th>담당</th>
                </tr>
              </thead>
              <tbody>
                {COMPLETED.map((w) => (
                  <tr key={w.id} onClick={ => open(w.id)} style={{ cursor: "pointer" }}>
                    <td><code>{w.id}</code></td>
                    <td>{w.vehicle}</td>
                    <td>{w.issue}</td>
                    <td>{w.mechanic}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : null}
      </div>

      <Card style={{ flex: "0 0 15rem" }}>
        <Card.Header className="d-flex align-items-center gap-2">
          <Clock size={14} />
          <span style={{ fontSize: "0.8125rem", fontWeight: 600 }}>정비사 현황</span>
        </Card.Header>
        <Card.Body className="d-flex flex-column gap-2 p-2">
          {MECHANICS.map((m) => (
            <div key={m.id} className="d-flex justify-content-between align-items-center px-1 py-1">
              <div>
                <div className="small" style={{ fontWeight: 600 }}>{m.name}</div>
                <div className="text-body-secondary" style={{ fontSize: "0.6875rem" }}>{m.specialty}</div>
              </div>
              <Badge bg={MECHANIC_STATUS_LABEL[m.status].bg} style={{ fontSize: "0.625rem" }}>
                {MECHANIC_STATUS_LABEL[m.status].text}
              </Badge>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}
