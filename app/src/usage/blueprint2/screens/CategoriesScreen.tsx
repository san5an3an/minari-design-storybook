import { Card, ProgressBar } from "@blueprintjs/core";
import { EXPENSE_BY_CATEGORY } from "../data";

export function CategoriesScreen {
  const total = EXPENSE_BY_CATEGORY.reduce((sum, c) => sum + c.amount, 0);

  return (
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
  );
}
