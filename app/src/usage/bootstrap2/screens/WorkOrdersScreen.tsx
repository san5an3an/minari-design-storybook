import * as React from "react";
import { CarFront, Clock, Wrench } from "lucide-react";
import Badge from "react-bootstrap/Badge";
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

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=60";

// 정비 요청 목록 상단 인사 배너 렌더링. 색상은 화면 semantic 토큰만 사용
function WorkOrdersHero {
  return (
    <div
      className="d-flex flex-column justify-content-end gap-1 p-4"
      style={{
        minHeight: "9rem",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
        backgroundImage:
          `linear-gradient(180deg, color-mix(in oklch, var(--semantic-bg-brand-default) 18%, transparent) 0%, `
          + `color-mix(in oklch, var(--semantic-bg-brand-default) 90%, black) 78%), url("${HERO_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "1.125rem", fontWeight: 600 }}>
        오늘도 안전하게 정비해요 🔧
      </span>
      <span style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.85, fontSize: "0.875rem" }}>
        입고된 차량과 진행 상태를 한눈에 확인해요.
      </span>
    </div>
  );
}

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
  const [status, setStatus] = React.useState<WorkOrder["status"] | "all">("all");
  const [onlyMine, setOnlyMine] = React.useState(false);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const rows = WORK_ORDERS.filter(
    (w) => (status === "all" || w.status === status) && (!onlyMine || w.mechanic === "박정우"),
  );

  return (
    <div className="d-flex flex-column gap-3">
      <WorkOrdersHero />
      <div className="d-flex flex-wrap gap-3">
        {STATS.map((s) => (
          <StatTile key={s.label} stat={s} />
        ))}
      </div>

      <div className="d-flex flex-wrap align-items-center gap-3">
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
          {rows.map((w) => (
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
