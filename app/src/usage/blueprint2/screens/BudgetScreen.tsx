import { Card, ProgressBar, Tag } from "@blueprintjs/core";
import { BUDGETS } from "../data";

export function BudgetScreen {
  return (
    <div className="flex flex-col gap-3">
      {BUDGETS.map((b) => {
        const ratio = b.spent / b.limit;
        const over = ratio > 1;
        return (
          <Card key={b.category}>
            <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
              <span style={{ fontWeight: 600 }}>{b.category}</span>
              {over ? <Tag intent="danger" minimal>한도 초과</Tag> : null}
            </div>
            <ProgressBar value={Math.min(ratio, 1)} intent={over ? "danger" : "primary"} stripes={false} />
            <div style={{ marginTop: 4, fontSize: "0.8125rem", opacity: 0.7 }}>
              {b.spent.toLocaleString}원 / {b.limit.toLocaleString}원
            </div>
          </Card>
        );
      })}
    </div>
  );
}
