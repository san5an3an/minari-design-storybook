import * as React from "react";
import {
  Dropdown, InlineNotification, StructuredListBody, StructuredListCell, StructuredListHead,
  StructuredListRow, StructuredListWrapper, Tag, Tile, Toggle,
} from "@carbon/react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// 통계카드, 심각도 필터, 담당자 지정 드롭다운, 자동 알림 토글, 추이차트로 구성
const ASSIGNEES = ["미지정", "정민아", "오태윤", "한소율"];
const ALERT_TREND = [
  { day: "월", count: 1 }, { day: "화", count: 0 }, { day: "수", count: 2 },
  { day: "목", count: 1 }, { day: "금", count: 3 }, { day: "토", count: 1 }, { day: "일", count: 2 },
] as const;

interface Alert {
  device: string;
  issue: string;
  severity: "높음" | "보통";
  time: string;
}

// Tag의 type은 하위 태그 유니온이라 프롭에서 바로 못 뽑음
type TagColor =
  | "red" | "magenta" | "purple" | "blue" | "cyan" | "teal" | "green" | "gray"
  | "cool-gray" | "warm-gray" | "high-contrast" | "outline";

const SEVERITY_TAG: Record<Alert["severity"], TagColor> = {
  높음: "red",
  보통: "magenta",
};

const ALERTS: Alert[] = [
  { device: "냉장 창고 센서 A2", issue: "배터리 20% 미만", severity: "보통", time: "5분 전" },
  { device: "공조 컨트롤러 C1", issue: "응답 없음 (오프라인 전환)", severity: "높음", time: "22분 전" },
  { device: "출입 게이트웨이 B1", issue: "펌웨어 버전 불일치", severity: "보통", time: "1시간 전" },
];

export function AlertsScreen {
  const [severity, setSeverity] = React.useState("전체");
  const [autoNotify, setAutoNotify] = React.useState(true);
  const [assignees, setAssignees] = React.useState<Record<string, string>>({});

  const highCount = ALERTS.filter((a) => a.severity === "높음").length;
  const rows = severity === "전체" ? ALERTS : ALERTS.filter((a) => a.severity === severity);

  return (
    <div className="flex flex-col gap-4">
      {/* 높음 심각도 항목 있을 때만 배너 표시 */}
      {highCount > 0 ? (
        <InlineNotification
          kind="error"
          title="긴급 경보"
          subtitle={`심각도 "높음" 경보 ${highCount}건이 대기 중이에요.`}
          hideCloseButton
          lowContrast
        />
      ) : null}

      {/* 통계카드로 빈 여백 채우기 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))" }}>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>전체 경보</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{ALERTS.length}건</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>높음</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{highCount}건</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>보통</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{ALERTS.length - highCount}건</div></Tile>
      </div>

      {/* 심각도 필터와 자동 알림, Dropdown과 Toggle로 구성 */}
      <div className="flex items-end gap-4" style={{ flexWrap: "wrap" }}>
        <Dropdown
          id="severity-filter" titleText="심각도" label="전체"
          items={["전체", "높음", "보통"]}
          selectedItem={severity}
          onChange={(e: { selectedItem: string }) => setSeverity(e.selectedItem)}
        />
        <Toggle
          id="auto-notify" labelText="자동 알림" labelA="꺼짐" labelB="켜짐"
          toggled={autoNotify} onToggle={setAutoNotify}
        />
      </div>

      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            <StructuredListCell head>장비</StructuredListCell>
            <StructuredListCell head>내용</StructuredListCell>
            <StructuredListCell head>심각도</StructuredListCell>
            <StructuredListCell head>시각</StructuredListCell>
            <StructuredListCell head>담당자</StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          {rows.map((a) => (
            <StructuredListRow key={a.device + a.issue}>
              <StructuredListCell noWrap>{a.device}</StructuredListCell>
              <StructuredListCell>{a.issue}</StructuredListCell>
              <StructuredListCell>
                <Tag size="sm" type={SEVERITY_TAG[a.severity]}>
                  {a.severity}
                </Tag>
              </StructuredListCell>
              <StructuredListCell>{a.time}</StructuredListCell>
              <StructuredListCell>
                <Dropdown
                  id={`assignee-${a.device}-${a.issue}`} titleText="" hideLabel size="sm"
                  label="지정" items={ASSIGNEES}
                  selectedItem={assignees[a.device + a.issue] ?? null}
                  onChange={(e: { selectedItem: string }) =>
                    setAssignees((prev) => ({ ...prev, [a.device + a.issue]: e.selectedItem }))}
                />
              </StructuredListCell>
            </StructuredListRow>
          ))}
        </StructuredListBody>
      </StructuredListWrapper>

      {/* 경보 추이, 여백 채우기용 */}
      <Tile>
        <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>최근 7일 경보 추이</div>
        <div style={{ inlineSize: "100%", blockSize: 140 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ALERT_TREND as unknown as Record<string, unknown>[]}>
              <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              {/* y축 눈금 잘림 방지 */}
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} width={28} allowDecimals={false} />
              <Tooltip />
              {/* 금토일 점이 선에서 떨어져 보이는 문제 방지. 이전 path 길이 기반 계산 때문임 */}
              <Line type="monotone" dataKey="count" stroke="var(--semantic-fg-danger-default)" strokeWidth={2} dot isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Tile>
    </div>
  );
}
