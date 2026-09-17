import * as React from "react";
import { Card, EditableText, Popover, ProgressBar, Tag } from "@blueprintjs/core";
import { BUDGETS } from "../data";

// 통계카드를 목록과 함께 표시
export function BudgetScreen {
  // EditableText로 예산 메모 인라인 편집
  const [note, setNote] = React.useState("이번 분기 마케팅 예산 재검토 예정");
  const totalSpent = BUDGETS.reduce((sum, b) => sum + b.spent, 0);
  const totalLimit = BUDGETS.reduce((sum, b) => sum + b.limit, 0);
  const overCount = BUDGETS.filter((b) => b.spent > b.limit).length;

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
      <div className="flex flex-col gap-3">
      {BUDGETS.map((b) => {
        const ratio = b.spent / b.limit;
        const over = ratio > 1;
        return (
          <Card key={b.category}>
            <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
              <span style={{ fontWeight: 600 }}>{b.category}</span>
              <div className="flex items-center gap-2">
                {over ? <Tag intent="danger" minimal>한도 초과</Tag> : null}
                {/* Popover로 세부 내역 표시 */}
                <Popover
                  content={
                    <div className="p-2" style={{ fontSize: "0.75rem" }}>
                      한도 대비 {Math.round(ratio * 100)}% 사용 · 남은 한도 {Math.max(b.limit - b.spent, 0).toLocaleString}원
                    </div>
                  }
                >
                  <span style={{ cursor: "pointer", opacity: 0.6, fontSize: "0.75rem" }}>세부내역</span>
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
    </div>
  );
}
