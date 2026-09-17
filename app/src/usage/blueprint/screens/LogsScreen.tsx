import { HTMLTable, Tag } from "@blueprintjs/core";
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

export function LogsScreen {
  return (
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
        {ROWS.map((row, i) => (
          <tr key={`${row.time}-${i}`}>
            <td>
              <code>{row.time}</code>
            </td>
            <td>
              <Tag intent={LEVEL_INTENT[row.level]} minimal>
                {row.level}
              </Tag>
            </td>
            <td>{row.service}</td>
            <td>{row.message}</td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
}
