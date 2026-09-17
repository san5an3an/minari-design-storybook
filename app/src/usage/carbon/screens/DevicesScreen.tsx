import * as React from "react";
import { Select, SelectItem, Tag, TextInput, Tile } from "@carbon/react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// 통계카드 4개, 라인차트, 배터리 랭킹 추가. 지도 라이브러리 부재로 대체임
const ONLINE_TREND = [
  { t: "월", online: 5 }, { t: "화", online: 6 }, { t: "수", online: 5 },
  { t: "목", online: 6 }, { t: "금", online: 6 }, { t: "토", online: 4 }, { t: "일", online: 5 },
] as const;

interface Device {
  name: string;
  id: string;
  status: "정상" | "경고" | "오프라인";
  battery: string;
}

// type은 하위 태그 유니온이라 못 뽑음. carbon 색 라벨 값을 그대로 쓴 것임
type TagColor =
  | "red" | "magenta" | "purple" | "blue" | "cyan" | "teal" | "green" | "gray"
  | "cool-gray" | "warm-gray" | "high-contrast" | "outline";

const STATUS_TAG: Record<Device["status"], TagColor> = {
  정상: "green",
  경고: "magenta",
  오프라인: "gray",
};

const DEVICES: Device[] = [
  { name: "냉장 창고 센서 A1", id: "DEV-1001", status: "정상", battery: "92%" },
  { name: "냉장 창고 센서 A2", id: "DEV-1002", status: "경고", battery: "18%" },
  { name: "출입 게이트웨이 B1", id: "DEV-2001", status: "정상", battery: "76%" },
  { name: "공조 컨트롤러 C1", id: "DEV-3001", status: "오프라인", battery: "—" },
  { name: "공조 컨트롤러 C2", id: "DEV-3002", status: "정상", battery: "88%" },
  { name: "출입 게이트웨이 B2", id: "DEV-2002", status: "정상", battery: "64%" },
];

export function DevicesScreen {
  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<"전체" | Device["status"]>("전체");
  const counts = {
    전체: DEVICES.length,
    정상: DEVICES.filter((d) => d.status === "정상").length,
    경고: DEVICES.filter((d) => d.status === "경고").length,
    오프라인: DEVICES.filter((d) => d.status === "오프라인").length,
  } as const;
  const lowBattery = [...DEVICES]
    .filter((d) => d.battery !== "—")
    .sort((a, b) => parseInt(a.battery) - parseInt(b.battery));
  const filtered = DEVICES.filter(
    (d) =>
      (statusFilter === "전체" || d.status === statusFilter) &&
      (query === "" || d.name.includes(query) || d.id.includes(query)),
  );

  return (
    <div className="flex flex-col gap-4">
      {/* 검색과 상태 필터로 TextInput, Select 컨트롤 추가 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "2fr 1fr" }}>
        <TextInput
          id="device-search"
          labelText="디바이스 검색"
          placeholder="이름 또는 ID로 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Select
          id="device-status-filter"
          labelText="상태"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
        >
          <SelectItem value="전체" text="전체" />
          <SelectItem value="정상" text="정상" />
          <SelectItem value="경고" text="경고" />
          <SelectItem value="오프라인" text="오프라인" />
        </Select>
      </div>

      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))" }}>
        {(Object.keys(counts) as (keyof typeof counts)[]).map((k) => (
          <Tile key={k}>
            <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>{k}</div>
            <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{counts[k]}대</div>
          </Tile>
        ))}
      </div>

      {/* 대형 라인차트와 랭킹 리스트 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "2fr 1fr" }}>
        <Tile>
          <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>온라인 기기 추이(7일)</div>
          <div style={{ inlineSize: "100%", blockSize: 160 }}>
            <ResponsiveContainer>
              <LineChart data={ONLINE_TREND as unknown as Record<string, unknown>[]}>
                <XAxis dataKey="t" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} width={24} />
                <Tooltip />
                <Line type="monotone" dataKey="online" stroke="var(--component-chart-series-1)" strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Tile>
        <Tile>
          <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>배터리 부족 Top</div>
          <div className="flex flex-col gap-2">
            {lowBattery.slice(0, 4).map((d) => (
              <div key={d.id} className="flex items-center justify-between gap-2">
                <span style={{ fontSize: "0.8125rem" }}>{d.name}</span>
                <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>{d.battery}</span>
              </div>
            ))}
          </div>
        </Tile>
      </div>

    <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))" }}>
      {filtered.map((d) => (
        <Tile key={d.id}>
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-2">
              <span style={{ fontWeight: 600 }}>{d.name}</span>
              <Tag size="sm" type={STATUS_TAG[d.status]}>
                {d.status}
              </Tag>
            </div>
            <code style={{ fontSize: "0.75rem", opacity: 0.7 }}>{d.id}</code>
            <span style={{ fontSize: "0.8125rem" }}>배터리 {d.battery}</span>
          </div>
        </Tile>
      ))}
    </div>
    </div>
  );
}
