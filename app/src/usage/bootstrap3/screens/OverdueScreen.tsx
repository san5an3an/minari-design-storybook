import * as React from "react";
import { AlertTriangle, CircleDollarSign, TimerReset } from "lucide-react";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ProgressBar from "react-bootstrap/ProgressBar";
import SplitButton from "react-bootstrap/SplitButton";
import { OVERDUE } from "../data";

const LATE_FEE_PER_DAY = 200;
// 심각도 막대 상한 일수, 장기 연체 기준
const SEVERITY_CAP_DAYS = 14;

type SortKey = "daysLate" | "title";

const SORT_LABEL: Record<SortKey, string> = {
  daysLate: "연체일 많은 순",
  title: "제목순",
};

interface Stat {
  label: string;
  value: string;
  tone: "danger" | "warning" | "brand";
  Icon: typeof AlertTriangle;
}

export function OverdueScreen {
  const [sort, setSort] = React.useState<SortKey>("daysLate");

  if (OVERDUE.length === 0) {
    return <p className="text-body-secondary small mb-0">지금은 연체된 도서가 없어요.</p>;
  }

  const totalFee = OVERDUE.reduce((sum, o) => sum + o.daysLate * LATE_FEE_PER_DAY, 0);
  const maxDaysLate = Math.max(...OVERDUE.map((o) => o.daysLate));

  const stats: Stat[] = [
    { label: "연체 건수", value: `${OVERDUE.length}건`, tone: "danger", Icon: AlertTriangle },
    { label: "연체료 합계", value: `${totalFee.toLocaleString}원`, tone: "warning", Icon: CircleDollarSign },
    { label: "최장 연체", value: `${maxDaysLate}일`, tone: "brand", Icon: TimerReset },
  ];

  const rows = [...OVERDUE].sort((a, b) =>
    sort === "daysLate" ? b.daysLate - a.daysLate : a.title.localeCompare(b.title),
  );

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-wrap gap-3">
        {stats.map((s) => {
          const { Icon } = s;
          return (
            <Card key={s.label} className="position-relative overflow-hidden" style={{ flex: "1 1 10rem", minWidth: "10rem" }}>
              <Card.Body>
                <div className="d-flex align-items-center gap-2">
                  <span
                    aria-hidden
                    className="d-inline-flex align-items-center justify-content-center"
                    style={{
                      inlineSize: "1.75rem",
                      blockSize: "1.75rem",
                      borderRadius: "var(--semantic-radius-control)",
                      background: `var(--semantic-bg-${s.tone}-subtle)`,
                      color: `var(--semantic-fg-${s.tone}-default)`,
                    }}
                  >
                    <Icon size={14} />
                  </span>
                  <span className="text-body-secondary" style={{ fontSize: "0.8125rem" }}>
                    {s.label}
                  </span>
                  {/* OverlayTrigger, Popover로 계산식 설명 표시 */}
                  {s.label === "연체료 합계" ? (
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Popover id="overdue-fee-popover">
                          <Popover.Header as="h3">계산 방식</Popover.Header>
                          <Popover.Body>
                            연체 일수 × 1일 {LATE_FEE_PER_DAY.toLocaleString}원을 책마다 더해요.
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <span
                        role="button"
                        aria-label="연체료 계산 방식 도움말"
                        className="text-body-secondary"
                        style={{ fontSize: "0.6875rem", cursor: "help", textDecoration: "underline dotted" }}
                      >
                        ⓘ
                      </span>
                    </OverlayTrigger>
                  ) : null}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 600, marginBlockStart: "0.5rem" }}>
                  {s.value}
                </div>
              </Card.Body>
              <Icon
                aria-hidden
                size={64}
                style={{
                  position: "absolute",
                  insetInlineEnd: "-0.75rem",
                  insetBlockEnd: "-0.75rem",
                  color: `var(--semantic-fg-${s.tone}-default)`,
                  opacity: 0.08,
                }}
              />
            </Card>
          );
        })}
      </div>

      <Alert variant="warning" className="mb-0">
        연체료는 하루 {LATE_FEE_PER_DAY.toLocaleString}원씩 부과돼요. {SEVERITY_CAP_DAYS}일 이상 연체되면 장기 연체로 분류돼요.
      </Alert>

      {/* 정렬을 DropdownButton 한 줄로 구성하기 */}
      <ButtonToolbar className="justify-content-end gap-2">
        <ButtonGroup size="sm">
          <Button variant="outline-secondary" disabled>
            전체 {OVERDUE.length}건
          </Button>
        </ButtonGroup>
        <DropdownButton
          variant="outline-secondary"
          size="sm"
          id="overdue-sort"
          title={`정렬 · ${SORT_LABEL[sort]}`}
        >
          {(Object.keys(SORT_LABEL) as SortKey[]).map((key) => (
            <DropdownItem key={key} active={sort === key} onClick={ => setSort(key)}>
              {SORT_LABEL[key]}
            </DropdownItem>
          ))}
        </DropdownButton>
      </ButtonToolbar>

      <div className="d-flex flex-column gap-2">
        {rows.map((o) => {
          const severity = Math.min(100, Math.round((o.daysLate / SEVERITY_CAP_DAYS) * 100));
          const long = o.daysLate >= SEVERITY_CAP_DAYS;
          return (
            <Card key={o.bookId}>
              <Card.Body className="d-flex flex-column gap-2 py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div>{o.title}</div>
                    <div className="text-body-secondary small">
                      {o.borrower} · 반납예정 {o.dueLabel}
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-body-secondary small">
                      {(o.daysLate * LATE_FEE_PER_DAY).toLocaleString}원
                    </span>
                    <Badge bg={long ? "danger" : "warning"}>{o.daysLate}일 연체</Badge>
                  </div>
                </div>
                <ProgressBar
                  now={severity}
                  variant={long ? "danger" : "warning"}
                  style={{ blockSize: "0.375rem" }}
                />
                {/* 항목별 주 동작과 부가 동작 SplitButton으로 구현 */}
                <SplitButton
                  size="sm"
                  variant="outline-danger"
                  title="연체료 납부 확인"
                  id={`overdue-action-${o.bookId}`}
                  style={{ alignSelf: "flex-start" }}
                >
                  <DropdownItem>고객에게 알림 보내기</DropdownItem>
                  <DropdownItem>연장 요청 처리</DropdownItem>
                </SplitButton>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
