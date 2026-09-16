import { Badge, Button, Card } from "flowbite-react";
import { PLANS } from "../data";

const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;

export function PlansScreen {
  return (
    <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
      {PLANS.map((p) => (
        <Card key={p.id}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontWeight: 700, fontSize: "16px" }}>{p.name}</span>
            {p.current ? <Badge color="success">현재 요금제</Badge> : null}
          </div>
          <span style={{ fontSize: "20px", fontWeight: 700 }}>{won(p.monthlyPrice)}<span style={{ fontSize: "13px", fontWeight: 400, color: "var(--color-gray-500)" }}> /월</span></span>
          <ul style={{ margin: 0, paddingInlineStart: "18px", fontSize: "14px", color: "var(--color-gray-700)" }}>
            {p.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
          {!p.current ? <Button size="sm">이 요금제로 바꾸기</Button> : null}
        </Card>
      ))}
    </div>
  );
}
