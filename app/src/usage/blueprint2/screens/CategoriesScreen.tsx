import { Card, ProgressBar } from "@blueprintjs/core";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { EXPENSE_BY_CATEGORY } from "../data";

// 통계카드와 미니 막대그래프를 목록과 함께 표시
export function CategoriesScreen {
  const total = EXPENSE_BY_CATEGORY.reduce((sum, c) => sum + c.amount, 0);
  const top = [...EXPENSE_BY_CATEGORY].sort((a, b) => b.amount - a.amount)[0];
  const chartData = EXPENSE_BY_CATEGORY.map((c) => ({ name: c.category, value: c.amount }));

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">이번 달 총 지출</span>
          <span className="text-lg font-semibold">{total.toLocaleString}원</span>
        </Card>
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">최대 카테고리</span>
          <span className="text-lg font-semibold">{top.category}</span>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col gap-4">
          {EXPENSE_BY_CATEGORY.map((c) => {
            const ratio = c.amount / total;
            return (
              <div key={c.category}>
                <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
                  <span>{c.category}</span>
                  <span style={{ opacity: 0.7 }}>{c.amount.toLocaleString}원 · {Math.round(ratio * 100)}%</span>
                </div>
                <ProgressBar value={ratio} intent="primary" stripes={false} />
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <span className="text-sm font-medium">카테고리별 금액 비교</span>
        <div style={{ inlineSize: "100%", blockSize: 140, marginBlockStart: 8 }}>
          <ResponsiveContainer>
            <BarChart data={chartData} layout="vertical" margin={{ left: 8 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={72} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
