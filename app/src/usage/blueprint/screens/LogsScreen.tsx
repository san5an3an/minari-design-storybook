"use client";

import * as React from "react";
import { Button, Card, Checkbox, Drawer, HTMLSelect, HTMLTable, InputGroup, NonIdealState, Popover, Tag, Tooltip } from "@blueprintjs/core";
import type { Intent } from "@blueprintjs/core";

interface LogRow {
  time: string;
  level: "info" | "warning" | "danger";
  service: string;
  message: string;
}

const LEVEL_INTENT: Record<LogRow["level"], Intent> = {
  info: "none",
  warning: "warning",
  danger: "danger",
};

const ROWS: LogRow[] = [
  { time: "14:02:11", level: "danger", service: "payments", message: "카드 승인 타임아웃 (3회 재시도 실패)" },
  { time: "14:01:58", level: "warning", service: "inventory-sync", message: "동기화 지연 40s" },
  { time: "14:01:40", level: "info", service: "checkout", message: "주문 #48291 생성" },
  { time: "14:01:22", level: "info", service: "auth", message: "로그인 성공 (user 8821)" },
  { time: "14:00:59", level: "danger", service: "payments", message: "카드 승인 타임아웃 (2회 재시도 실패)" },
  { time: "14:00:31", level: "info", service: "search", message: "질의 완료 82ms" },
  { time: "13:59:47", level: "info", service: "checkout", message: "주문 #48290 생성" },
  { time: "13:59:12", level: "warning", service: "notify", message: "알림 발송 지연 3s" },
  { time: "13:58:40", level: "info", service: "auth", message: "로그인 성공 (user 8804)" },
  { time: "13:57:55", level: "info", service: "search", message: "질의 완료 65ms" },
  { time: "13:57:03", level: "danger", service: "inventory-sync", message: "재고 동기화 실패 (재시도 예약)" },
  { time: "13:55:20", level: "info", service: "checkout", message: "주문 #48289 생성" },
];

const LEVEL_OPTIONS = ["전체", "info", "warning", "danger"];

// 레벨별 건수. ROWS는 고정 배열이라 모듈 스코프에서 한 번만 계산하는 구조임
const LEVEL_COUNTS = {
  전체: ROWS.length,
  위험: ROWS.filter((r) => r.level === "danger").length,
  주의: ROWS.filter((r) => r.level === "warning").length,
  정보: ROWS.filter((r) => r.level === "info").length,
};

// 통계 타일 그리드 열 수 직접 지정
const LAYOUT_CSS = `
.bp1-logs { container-type: inline-size; container-name: bp1logs; }
.bp1-logs-stats { display: grid; gap: 0.75rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
@container bp1logs (min-width: 34rem) {
  .bp1-logs-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

function LogDetailDrawer({ row, onClose }: { row: LogRow | null; onClose:  => void }) {
  return (
    <Drawer isOpen={row != null} onClose={onClose} title={row ? `${row.service} · ${row.time}` : ""} icon="document" size="24rem">
      {row ? (
        <div className="flex flex-col gap-4 p-4">
          <Card>
            <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
              <Tag intent={LEVEL_INTENT[row.level]} minimal>{row.level}</Tag>
              <code style={{ opacity: 0.6, fontSize: "0.8125rem" }}>{row.time}</code>
            </div>
            <p style={{ margin: 0 }}>{row.message}</p>
          </Card>
          <Card className="flex items-center justify-between">
            <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>서비스</span>
            <span style={{ fontSize: "0.8125rem" }}>{row.service}</span>
          </Card>
          <Button
            icon="refresh"
            text={row.level === "danger" ? "즉시 재시도" : "재시도"}
            intent={row.level === "danger" ? "danger" : "none"}
            style={{ alignSelf: "flex-start" }}
          />
        </div>
      ) : null}
    </Drawer>
  );
}

// 필터용 폼 컨트롤
export function LogsScreen {
  const [level, setLevel] = React.useState("전체");
  const [query, setQuery] = React.useState("");
  const [errorsOnly, setErrorsOnly] = React.useState(false);
  const [selected, setSelected] = React.useState<LogRow | null>(null);

  const rows = ROWS.filter((row) => {
    if (level !== "전체" && row.level !== level) return false;
    if (errorsOnly && row.level === "info") return false;
    if (query && !row.message.includes(query) && !row.service.includes(query)) return false;
    return true;
  });

  return (
    <div className="bp1-logs flex flex-col gap-3">
      <style>{LAYOUT_CSS}</style>

      <div className="bp1-logs-stats">
        <Card>
          <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>전체</span>
          <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{LEVEL_COUNTS.전체}건</div>
        </Card>
        <Card>
          <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>위험</span>
          <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--semantic-fg-danger-default)" }}>{LEVEL_COUNTS.위험}건</div>
        </Card>
        <Card>
          <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>주의</span>
          <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--semantic-fg-warning-default)" }}>{LEVEL_COUNTS.주의}건</div>
        </Card>
        <Card>
          <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>정보</span>
          <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{LEVEL_COUNTS.정보}건</div>
        </Card>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <InputGroup
          leftIcon="search"
          placeholder="서비스·메시지 검색"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          style={{ minWidth: "12rem" }}
        />
        <HTMLSelect value={level} onChange={(e) => setLevel(e.currentTarget.value)} options={LEVEL_OPTIONS} />
        <Checkbox
          checked={errorsOnly} label="경고 이상만" style={{ marginBottom: 0 }}
          onChange={(e) => setErrorsOnly(e.currentTarget.checked)}
        />
        <Tag minimal className="ms-auto">{rows.length}건</Tag>
      </div>

      {rows.length === 0 ? (
        <NonIdealState icon="search" title="조건에 맞는 로그가 없습니다" description="검색어나 필터를 바꿔보세요." />
      ) : (
      <HTMLTable bordered compact interactive style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>시각</th>
            <th>레벨</th>
            <th>서비스</th>
            <th>메시지</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={`${row.time}-${i}`} onClick={ => setSelected(row)} style={{ cursor: "pointer" }}>
              <td>
                <code>{row.time}</code>
              </td>
              <td>
                {/* Tooltip으로 레벨 설명 표시 */}
                <Tooltip content={row.level === "danger" ? "즉시 조치 필요" : row.level === "warning" ? "관찰 필요" : "정보성"}>
                  <Tag intent={LEVEL_INTENT[row.level]} minimal>
                    {row.level}
                  </Tag>
                </Tooltip>
              </td>
              <td>{row.service}</td>
              <td className="flex items-center justify-between gap-2">
                <span>{row.message}</span>
                {/* Popover로 행 메뉴 표시, stopPropagation 적용 */}
                <Popover
                  content={
                    // Popover 콘텐츠는 포털이라 DOM 행 밖이지만 tr 자손이라 클릭이 전파되는 구조임
                    <div className="flex flex-col" style={{ minWidth: "8rem" }} onClick={(e) => e.stopPropagation}>
                      <div className="p-2" style={{ cursor: "pointer", fontSize: "0.8125rem" }}>서비스 로그 보기</div>
                      <div className="p-2" style={{ cursor: "pointer", fontSize: "0.8125rem" }}>재시도</div>
                    </div>
                  }
                  placement="left"
                >
                  <span
                    aria-label="더보기"
                    style={{ cursor: "pointer", opacity: 0.6 }}
                    onClick={(e) => e.stopPropagation}
                  >
                    ⋯
                  </span>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </HTMLTable>
      )}

      <LogDetailDrawer row={selected} onClose={ => setSelected(null)} />
    </div>
  );
}
