import * as React from "react";
import { Slider, Tile } from "@carbon/react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PASS_RATE } from "../data";

// Tile 목록에 합격률 기준 Slider, 추이 라인 차트 추가

export function PassRateScreen {
  const [threshold, setThreshold] = React.useState(95);
  const chartData = PASS_RATE.map((w) => ({ week: w.weekLabel, rate: w.passRate }));
  const avgRate = PASS_RATE.reduce((sum, w) => sum + w.passRate, 0) / PASS_RATE.length;
  const worstWeek = [...PASS_RATE].sort((a, b) => a.passRate - b.passRate)[0];

  return (
    <div className="flex flex-col gap-4">
      {/* 통계카드로 여백 채우기 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))" }}>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>평균 합격률</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{avgRate.toFixed(1)}%</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>최저 주차</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{worstWeek.weekLabel} ({worstWeek.passRate}%)</div></Tile>
      </div>

      <Tile>
        <Slider
          id="pass-rate-threshold" labelText={`기준 합격률: ${threshold}%`}
          min={80} max={100} step={1} value={threshold}
          onChange={({ value }: { value: number }) => setThreshold(value)}
        />
      </Tile>

      <Tile>
        <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>합격률 추이</div>
        <div style={{ inlineSize: "100%", blockSize: 160 }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
              <YAxis domain={[80, 100]} tickLine={false} axisLine={false} tick={{ fontSize: 12 }} width={32} />
              <Tooltip />
              <Line type="monotone" dataKey="rate" stroke="var(--component-chart-series-1)" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Tile>

      {PASS_RATE.map((w) => (
        <Tile key={w.weekLabel}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span style={{ fontWeight: 600 }}>{w.weekLabel}</span>
              <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>검사 {w.inspected}건</span>
            </div>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: w.passRate < threshold
                  ? "var(--semantic-fg-danger-default)"
                  : "var(--semantic-fg-success-default)",
              }}
            >
              {w.passRate}%
            </span>
          </div>
        </Tile>
      ))}
    </div>
  );
}
