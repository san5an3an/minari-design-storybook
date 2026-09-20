import * as React from "react";
import {
  Button, Card, Dialog, DialogBody, DialogFooter, Drawer, EditableText, FormGroup,
  HTMLTable, InputGroup, NonIdealState, NumericInput, Popover, ProgressBar, Tag,
} from "@blueprintjs/core";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BUDGETS, TRANSACTIONS, type Budget } from "../data";

function won(n: number): string {
  return `${n.toLocaleString}원`;
}

function BudgetDetailDrawer({ budget, onClose }: { budget: Budget | null; onClose:  => void }) {
  const rows = budget ? TRANSACTIONS.filter((t) => t.category === budget.category && t.amount < 0) : [];
  const ratio = budget ? budget.spent / budget.limit : 0;
  const over = ratio > 1;

  return (
    <Drawer isOpen={budget != null} onClose={onClose} title={budget ? `${budget.category} 예산` : ""} icon="bank-account" size="26rem">
      {budget ? (
        <div className="flex flex-col gap-4 p-4">
          <div className="grid grid-cols-3 gap-3">
            <Card className="flex flex-col items-center gap-1 p-3 text-center">
              <span className="text-xs opacity-70">사용액</span>
              <span className="text-base font-semibold">{won(budget.spent)}</span>
            </Card>
            <Card className="flex flex-col items-center gap-1 p-3 text-center">
              <span className="text-xs opacity-70">한도</span>
              <span className="text-base font-semibold">{won(budget.limit)}</span>
            </Card>
            <Card className="flex flex-col items-center gap-1 p-3 text-center">
              <span className="text-xs opacity-70">잔여</span>
              <span className="text-base font-semibold" style={{ color: over ? "var(--semantic-fg-danger-default)" : "var(--semantic-fg-success-default)" }}>
                {won(Math.max(budget.limit - budget.spent, 0))}
              </span>
            </Card>
          </div>
          <div>
            <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
              <span style={{ fontSize: "0.8125rem" }}>{Math.round(ratio * 100)}% 사용</span>
              {over ? <Tag intent="danger" minimal>한도 초과</Tag> : null}
            </div>
            <ProgressBar value={Math.min(ratio, 1)} intent={over ? "danger" : "primary"} stripes={false} />
          </div>
          <div className="flex flex-col gap-2">
            <span style={{ fontWeight: 600, fontSize: "0.8125rem" }}>이 카테고리의 거래</span>
            {rows.length === 0 ? (
              <NonIdealState
                icon="search"
                iconSize={32}
                title="연결된 거래가 없어요"
                description="이 카테고리로 기록된 거래내역이 아직 없어요."
                layout="horizontal"
              />
            ) : (
              <HTMLTable bordered compact style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>날짜</th>
                    <th>거래처</th>
                    <th>금액</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((t) => (
                    <tr key={t.id}>
                      <td>{t.dateLabel}</td>
                      <td>{t.merchant}</td>
                      <td style={{ color: "var(--semantic-fg-danger-default)" }}>-{won(Math.abs(t.amount))}</td>
                    </tr>
                  ))}
                </tbody>
              </HTMLTable>
            )}
          </div>
        </div>
      ) : null}
    </Drawer>
  );
}

interface NewBudgetValues {
  category: string;
  limit: number;
}

function NewBudgetDialog({ isOpen, onClose, onSubmit }: { isOpen: boolean; onClose:  => void; onSubmit: (v: NewBudgetValues) => void }) {
  const [category, setCategory] = React.useState("");
  const [limit, setLimit] = React.useState<number | undefined>(undefined);

  React.useEffect( => {
    if (isOpen) { setCategory(""); setLimit(undefined); }
  }, [isOpen]);

  const canSubmit = category.trim.length > 0 && (limit ?? 0) > 0;

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="예산 항목 추가" icon="add">
      <DialogBody>
        <FormGroup label="카테고리" labelInfo="(필수)">
          <InputGroup value={category} onChange={(e) => setCategory(e.currentTarget.value)} placeholder="예: 교육" autoFocus />
        </FormGroup>
        <FormGroup label="월 한도" labelInfo="(필수)">
          <NumericInput
            value={limit}
            onValueChange={(n) => setLimit(Number.isNaN(n) ? undefined : n)}
            placeholder="1000000"
            min={0}
            stepSize={100000}
            majorStepSize={1000000}
            buttonPosition="right"
            fill
          />
        </FormGroup>
      </DialogBody>
      <DialogFooter
        actions={
          <Button
            intent="primary"
            text="추가"
            disabled={!canSubmit}
            onClick={ => onSubmit({ category: category.trim, limit: limit ?? 0 })}
          />
        }
      />
    </Dialog>
  );
}

// 통계카드를 목록과 함께 표시
export function BudgetScreen {
  // EditableText로 예산 메모 인라인 편집
  const [note, setNote] = React.useState("이번 분기 마케팅 예산 재검토 예정");
  const [budgets, setBudgets] = React.useState<Budget[]>( => [...BUDGETS]);
  const [detail, setDetail] = React.useState<Budget | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalLimit = budgets.reduce((sum, b) => sum + b.limit, 0);
  const overCount = budgets.filter((b) => b.spent > b.limit).length;
  const chartData = budgets.map((b) => ({ name: b.category, 사용액: b.spent, 한도: b.limit }));

  const addBudget = (v: NewBudgetValues) => {
    setBudgets((prev) => [...prev, { category: v.category, spent: 0, limit: v.limit }]);
    setDialogOpen(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">총 사용액</span>
          <span className="text-lg font-semibold">{totalSpent.toLocaleString}원</span>
        </Card>
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">총 한도</span>
          <span className="text-lg font-semibold">{totalLimit.toLocaleString}원</span>
        </Card>
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">한도 초과</span>
          <span className="text-lg font-semibold">{overCount}건</span>
        </Card>
      </div>
      <Card className="flex items-center gap-2">
        <span className="text-xs opacity-70">메모</span>
        <div style={{ flex: 1 }}>
          <EditableText value={note} onChange={setNote} placeholder="메모를 입력하세요" />
        </div>
      </Card>

      {/* 사용액과 한도를 비교하는 신규 2계열 그룹 막대그래프 */}
      <Card>
        <span className="text-sm font-medium">카테고리별 사용액 vs 한도</span>
        <div style={{ inlineSize: "100%", blockSize: 180, marginBlockStart: 8 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ left: 0, right: 8 }}>
              <CartesianGrid vertical={false} stroke="var(--semantic-border-neutral-subtle)" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ style: { fontSize: 11 } }} />
              <YAxis hide />
              <Tooltip formatter={(v) => won(Number(v))} />
              <Legend wrapperStyle={{ fontSize: "0.6875rem" }} />
              <Bar dataKey="사용액" fill="var(--component-chart-series-1)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
              <Bar dataKey="한도" fill="var(--component-chart-series-2)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">카테고리별 한도</span>
        <Button icon="add" minimal small text="예산 항목" onClick={ => setDialogOpen(true)} />
      </div>
      <div className="flex flex-col gap-3">
      {budgets.map((b) => {
        const ratio = b.spent / b.limit;
        const over = ratio > 1;
        return (
          <Card key={b.category} interactive onClick={ => setDetail(b)}>
            <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
              <span style={{ fontWeight: 600 }}>{b.category}</span>
              <div className="flex items-center gap-2">
                {over ? <Tag intent="danger" minimal>한도 초과</Tag> : null}
                {/* Popover로 세부 내역 표시, stopPropagation 적용 */}
                <Popover
                  content={
                    // 트리거 및 콘텐츠에 stopPropagation 적용. 포털이라 클릭이 전파되는 구조임
                    <div className="p-2" style={{ fontSize: "0.75rem" }} onClick={(e) => e.stopPropagation}>
                      한도 대비 {Math.round(ratio * 100)}% 사용 · 남은 한도 {Math.max(b.limit - b.spent, 0).toLocaleString}원
                    </div>
                  }
                >
                  <span
                    style={{ cursor: "pointer", opacity: 0.6, fontSize: "0.75rem" }}
                    onClick={(e) => e.stopPropagation}
                  >
                    세부내역
                  </span>
                </Popover>
              </div>
            </div>
            <ProgressBar value={Math.min(ratio, 1)} intent={over ? "danger" : "primary"} stripes={false} />
            <div style={{ marginTop: 4, fontSize: "0.8125rem", opacity: 0.7 }}>
              {b.spent.toLocaleString}원 / {b.limit.toLocaleString}원
            </div>
          </Card>
        );
      })}
      </div>

      <BudgetDetailDrawer budget={detail} onClose={ => setDetail(null)} />
      <NewBudgetDialog isOpen={dialogOpen} onClose={ => setDialogOpen(false)} onSubmit={addBudget} />
    </div>
  );
}
