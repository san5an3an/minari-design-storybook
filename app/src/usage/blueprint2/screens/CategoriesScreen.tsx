import * as React from "react";
import { Button, Callout, Card, Collapse, ProgressBar, Tag, Tooltip } from "@blueprintjs/core";
import { Bar, BarChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
import { BUDGETS, EXPENSE_BY_CATEGORY } from "../data";

// 통계카드와 미니 막대그래프를 목록과 함께 표시
export function CategoriesScreen {
  // Collapse로 상세 비교 표 접고 펼치기
  const [detailOpen, setDetailOpen] = React.useState(false);
  const total = EXPENSE_BY_CATEGORY.reduce((sum, c) => sum + c.amount, 0);
  const top = [...EXPENSE_BY_CATEGORY].sort((a, b) => b.amount - a.amount)[0];
  const chartData = EXPENSE_BY_CATEGORY.map((c) => ({ name: c.category, value: c.amount }));

  const budgetFor = (category: string) => BUDGETS.find((b) => b.category === category);
  const overBudget = EXPENSE_BY_CATEGORY.filter((c) => {
    const b = budgetFor(c.category);
    return b != null && c.amount > b.limit;
  });

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

      {overBudget.length > 0 ? (
        <Callout intent="warning" title={`${overBudget.length}개 카테고리가 예산을 초과했어요`} icon="warning-sign">
          {overBudget.map((c) => c.category).join(", ")}, 예산 화면에서 한도를 다시 볼 수 있어요.
        </Callout>
      ) : null}

      <Card>
        <div className="flex flex-col gap-4">
          {EXPENSE_BY_CATEGORY.map((c) => {
            const ratio = c.amount / total;
            const budget = budgetFor(c.category);
            const over = budget != null && c.amount > budget.limit;
            return (
              <div key={c.category}>
                <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
                  <div className="flex items-center gap-2">
                    <span>{c.category}</span>
                    {over ? <Tag intent="danger" minimal>예산 초과</Tag> : null}
                  </div>
                  {/* Tooltip으로 비중 계산 설명 표시 */}
                  <Tooltip content={`이번 달 총 지출 ${total.toLocaleString}원 중 이 카테고리가 차지하는 비중`}>
                    <span style={{ opacity: 0.7, cursor: "help" }}>{c.amount.toLocaleString}원 · {Math.round(ratio * 100)}%</span>
                  </Tooltip>
                </div>
                <ProgressBar value={ratio} intent={over ? "danger" : "primary"} stripes={false} />
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">카테고리별 금액 비교</span>
          <Button
            minimal small
            icon={detailOpen ? "chevron-up" : "chevron-down"}
            text={detailOpen ? "표 숨기기" : "표로 보기"}
            onClick={ => setDetailOpen((v) => !v)}
          />
        </div>
        <div style={{ inlineSize: "100%", blockSize: 140, marginBlockStart: 8 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 8 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={72} tick={{ style: { fontSize: 11 } }} />
              <RechartsTooltip />
              <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <Collapse isOpen={detailOpen}>
          <table className="w-full" style={{ marginBlockStart: "0.5rem", fontSize: "0.8125rem" }}>
            <tbody>
              {EXPENSE_BY_CATEGORY.map((c) => (
                <tr key={c.category}>
                  <td>{c.category}</td>
                  <td className="text-end">{c.amount.toLocaleString}원</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Collapse>
      </Card>
    </div>
  );
}
