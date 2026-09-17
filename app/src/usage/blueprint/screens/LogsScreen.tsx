"use client";

import * as React from "react";
import { Checkbox, HTMLSelect, HTMLTable, InputGroup, Popover, Tag, Tooltip } from "@blueprintjs/core";
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

// 필터용 폼 컨트롤
export function LogsScreen {
  const [level, setLevel] = React.useState("전체");
  const [query, setQuery] = React.useState("");
  const [errorsOnly, setErrorsOnly] = React.useState(false);

  const rows = ROWS.filter((row) => {
    if (level !== "전체" && row.level !== level) return false;
    if (errorsOnly && row.level === "info") return false;
    if (query && !row.message.includes(query) && !row.service.includes(query)) return false;
    return true;
  });

  return (
    <div className="flex flex-col gap-3">
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
            <tr key={`${row.time}-${i}`}>
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
                {/* Popover로 행 메뉴 표시 */}
                <Popover
                  content={
                    <div className="flex flex-col" style={{ minWidth: "8rem" }}>
                      <div className="p-2" style={{ cursor: "pointer", fontSize: "0.8125rem" }}>서비스 로그 보기</div>
                      <div className="p-2" style={{ cursor: "pointer", fontSize: "0.8125rem" }}>재시도</div>
                    </div>
                  }
                  placement="left"
                >
                  <span aria-label="더보기" style={{ cursor: "pointer", opacity: 0.6 }}>⋯</span>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </HTMLTable>
    </div>
  );
}
