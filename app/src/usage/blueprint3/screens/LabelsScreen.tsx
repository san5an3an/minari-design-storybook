import { Card, Menu, MenuItem, Popover, Tag } from "@blueprintjs/core";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { LABELS } from "../data";

export function LabelsScreen {
  const totalIssues = LABELS.reduce((sum, l) => sum + l.count, 0);
  const chartData = LABELS.map((l) => ({ name: l.name, value: l.count }));

  return (
    <div className="flex flex-col gap-4">
      {/* 통계카드로 여백 채우기 */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">전체 라벨</span>
          <span className="text-lg font-semibold">{LABELS.length}개</span>
        </Card>
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">라벨 붙은 이슈</span>
          <span className="text-lg font-semibold">{totalIssues}건</span>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
      {LABELS.map((label) => (
        <Card key={label.name} className="flex items-center gap-3" style={{ display: "flex" }}>
          <Tag intent={label.intent} minimal>{label.name}</Tag>
          <span style={{ flex: 1, fontSize: "0.8125rem", opacity: 0.7 }}>{label.description}</span>
          <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{label.count}개</span>
          {/* Popover, Menu, MenuItem으로 라벨 관리 메뉴 표시 */}
          <Popover
            content={
              <Menu>
                <MenuItem icon="edit" text="이름 편집" />
                <MenuItem icon="trash" text="삭제" intent="danger" />
              </Menu>
            }
            placement="bottom-end"
          >
            <span aria-label="라벨 메뉴" style={{ cursor: "pointer", opacity: 0.6 }}>⋯</span>
          </Popover>
        </Card>
      ))}
      </div>

      {/* 라벨별 이슈 수 비교. 여백 채우기 */}
      <Card>
        <span className="text-sm font-medium">라벨별 이슈 수</span>
        <div style={{ inlineSize: "100%", blockSize: 120, marginBlockStart: 8 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 8 }}>
              <XAxis type="number" hide allowDecimals={false} />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={64} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="var(--component-chart-series-2)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
