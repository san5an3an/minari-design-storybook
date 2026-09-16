import { CarFront, Clock, Wrench } from "lucide-react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import type { ScreenProps } from "../screens";
import { WORK_ORDERS, type WorkOrder } from "../data";

const STATUS_LABEL: Record<WorkOrder["status"], { text: string; bg: string }> = {
  대기: { text: "대기", bg: "secondary" },
  작업중: { text: "작업중", bg: "warning" },
  완료: { text: "완료", bg: "success" },
};

interface Stat {
  label: string;
  value: string;
  tone: "brand" | "warning" | "success";
  Icon: typeof CarFront;
}

const STATS: Stat[] = [
  { label: "입고 중", value: String(WORK_ORDERS.filter((w) => w.status !== "완료").length), tone: "brand", Icon: CarFront },
  { label: "작업중", value: String(WORK_ORDERS.filter((w) => w.status === "작업중").length), tone: "warning", Icon: Wrench },
  { label: "오늘 완료", value: String(WORK_ORDERS.filter((w) => w.status === "완료").length), tone: "success", Icon: Clock },
];

function StatTile({ stat }: { stat: Stat }) {
  const { Icon } = stat;
  return (
    <Card className="position-relative overflow-hidden" style={{ flex: "1 1 10rem", minWidth: "10rem" }}>
      <Card.Body>
        <div className="d-flex align-items-center gap-2">
          <span
            aria-hidden
            className="d-inline-flex align-items-center justify-content-center"
            style={{
              inlineSize: "1.75rem",
              blockSize: "1.75rem",
              borderRadius: "var(--semantic-radius-control)",
              background: `var(--semantic-bg-${stat.tone}-subtle)`,
              color: `var(--semantic-fg-${stat.tone}-default)`,
            }}
          >
            <Icon size={14} />
          </span>
          <span className="text-body-secondary" style={{ fontSize: "0.8125rem" }}>
            {stat.label}
          </span>
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: 600, marginBlockStart: "0.5rem" }}>
          {stat.value}
        </div>
      </Card.Body>
      <Icon
        aria-hidden
        size={64}
        style={{
          position: "absolute",
          insetInlineEnd: "-0.75rem",
          insetBlockEnd: "-0.75rem",
          color: `var(--semantic-fg-${stat.tone}-default)`,
          opacity: 0.08,
        }}
      />
    </Card>
  );
}

export function WorkOrdersScreen({ onNavigate, onSelect }: ScreenProps) {
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-wrap gap-3">
        {STATS.map((s) => (
          <StatTile key={s.label} stat={s} />
        ))}
      </div>

      <Table hover responsive size="sm">
        <thead>
          <tr>
            <th>번호</th>
            <th>차량</th>
            <th>고객</th>
            <th>증상</th>
            <th>담당</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {WORK_ORDERS.map((w) => (
            <tr key={w.id} onClick={ => open(w.id)} style={{ cursor: "pointer" }}>
              <td>
                <code>{w.id}</code>
              </td>
              <td>
                {w.vehicle}
                <div className="text-body-secondary small">{w.plate}</div>
              </td>
              <td>{w.customer}</td>
              <td>{w.issue}</td>
              <td>{w.mechanic}</td>
              <td>
                <Badge bg={STATUS_LABEL[w.status].bg}>{STATUS_LABEL[w.status].text}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
