import { Card, Tag } from "@blueprintjs/core";
import { LABELS } from "../data";

export function LabelsScreen {
  return (
    <div className="flex flex-col gap-2">
      {LABELS.map((label) => (
        <Card key={label.name} className="flex items-center gap-3" style={{ display: "flex" }}>
          <Tag intent={label.intent} minimal>{label.name}</Tag>
          <span style={{ flex: 1, fontSize: "0.8125rem", opacity: 0.7 }}>{label.description}</span>
          <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{label.count}개</span>
        </Card>
      ))}
    </div>
  );
}
