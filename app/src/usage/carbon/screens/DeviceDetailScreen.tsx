import * as React from "react";
import {
  Breadcrumb, BreadcrumbItem, Button, InlineNotification, Tag, TextArea, Tile,
} from "@carbon/react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { ScreenProps } from "../screens";
import { DEVICES, STATUS_TAG } from "./DevicesScreen";

const BATTERY_HISTORY = [
  { day: "-6일", pct: 96 }, { day: "-5일", pct: 94 }, { day: "-4일", pct: 90 },
  { day: "-3일", pct: 85 }, { day: "-2일", pct: 80 }, { day: "-1일", pct: 74 }, { day: "오늘", pct: 70 },
] as const;

export function DeviceDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  // 고른 디바이스가 없으면 첫 디바이스 표시. 탭으로 바로 들어와도 빈 화면이 안 뜸
  const device = DEVICES.find((d) => d.id === selectedId) ?? DEVICES[0];
  const [note, setNote] = React.useState("");

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb noTrailingSlash>
        <BreadcrumbItem href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); onNavigate?.("devices"); }}>
          디바이스
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>{device.name}</BreadcrumbItem>
      </Breadcrumb>

      {device.status === "오프라인" ? (
        <InlineNotification
          kind="warning"
          title="오프라인"
          subtitle="이 장비가 응답하지 않아요. 현장 점검이 필요할 수 있어요."
          hideCloseButton
          lowContrast
        />
      ) : null}

      <div className="flex items-start justify-between gap-2">
        <div>
          <div style={{ fontWeight: 600, fontSize: "1.0625rem" }}>{device.name}</div>
          <code style={{ fontSize: "0.75rem", opacity: 0.7 }}>{device.id}</code>
        </div>
        <Tag size="sm" type={STATUS_TAG[device.status]}>{device.status}</Tag>
      </div>

      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "2fr 1fr" }}>
        <Tile>
          <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>배터리 추이(7일)</div>
          <div style={{ inlineSize: "100%", blockSize: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={BATTERY_HISTORY as unknown as Record<string, unknown>[]}>
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} width={28} unit="%" />
                <Tooltip />
                {/* 처음 그릴 때 점이 선에서 떨어져 보이는 문제 방지 */}
                <Line type="monotone" dataKey="pct" stroke="var(--component-chart-series-1)" strokeWidth={2} dot isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Tile>
        <Tile>
          <div className="flex flex-col gap-3">
            <div>
              <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>지금 배터리</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{device.battery}</div>
            </div>
            <Button size="sm" kind="tertiary" onClick={() => onNavigate?.("rollout")}>
              펌웨어 배포로 이동
            </Button>
          </div>
        </Tile>
      </div>

      <Tile>
        <div className="flex flex-col gap-2">
          <TextArea
            id="device-note"
            labelText="점검 메모"
            placeholder="현장 점검자가 볼 메모를 남겨요"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
          />
          <Button size="sm" style={{ alignSelf: "flex-start" }} disabled={note.trim() === ""}>
            메모 저장
          </Button>
        </div>
      </Tile>
    </div>
  );
}
