import * as React from "react";
import {
  RadioButton, RadioButtonGroup, StructuredListBody, StructuredListCell, StructuredListHead,
  StructuredListRow, StructuredListWrapper, Tile,
} from "@carbon/react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DEFECT_TYPES } from "../data";

// 정렬 기준 RadioButtonGroup과 미니 막대그래프 추가

export function DefectsScreen {
  const [sort, setSort] = React.useState<"count" | "recent">("count");
  const rows = [...DEFECT_TYPES].sort((a, b) =>
    sort === "count" ? b.count - a.count : a.lastSeen.localeCompare(b.lastSeen),
  );
  const chartData = DEFECT_TYPES.map((d) => ({ name: d.name, value: d.count }));
  const totalDefects = DEFECT_TYPES.reduce((sum, d) => sum + d.count, 0);
  const topType = [...DEFECT_TYPES].sort((a, b) => b.count - a.count)[0];

  return (
    <div className="flex flex-col gap-4">
      {/* 통계카드로 여백 채우기 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))" }}>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>전체 불량</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{totalDefects}건</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>최다 유형</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{topType.name}</div></Tile>
      </div>

      {/* 정렬 기준 선택 */}
      <RadioButtonGroup
        legendText="정렬 기준" name="defect-sort" valueSelected={sort}
        onChange={(v) => setSort(v as "count" | "recent")}
      >
        <RadioButton labelText="건수순" value="count" id="sort-count" />
        <RadioButton labelText="최근 발생순" value="recent" id="sort-recent" />
      </RadioButtonGroup>

      {/* 유형별 건수 미니 막대그래프 표시 */}
      <Tile>
        <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>유형별 건수</div>
        <div style={{ inlineSize: "100%", blockSize: 120 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 8 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={72} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Tile>

      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            <StructuredListCell head>유형</StructuredListCell>
            <StructuredListCell head>건수</StructuredListCell>
            <StructuredListCell head>최근 발생</StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          {rows.map((d) => (
            <StructuredListRow key={d.name}>
              <StructuredListCell noWrap>{d.name}</StructuredListCell>
              <StructuredListCell>{d.count}건</StructuredListCell>
              <StructuredListCell>{d.lastSeen}</StructuredListCell>
            </StructuredListRow>
          ))}
        </StructuredListBody>
      </StructuredListWrapper>
    </div>
  );
}
