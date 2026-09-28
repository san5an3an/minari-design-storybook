import * as React from "react";
import { Badge, Button, ButtonGroup, Card, Footer, FooterCopyright, FooterLink, FooterLinkGroup, Toast } from "flowbite-react";
import { CheckCircle2 } from "lucide-react";
import { PLANS, type Plan } from "../data";

const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;
const ANNUAL_DISCOUNT = 0.8;

// 요금제별 월 비용을 막대 차트로 비교 표시
function PlanPriceBar({ cycle, plans }: { cycle: "월간" | "연간"; plans: Plan[] }) {
  const max = Math.max(...plans.map((p) => p.monthlyPrice), 1);
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px" }}>
      <span style={{ fontSize: "13px", fontWeight: 600, marginBottom: "10px", display: "block" }}>요금제별 월 비용 비교</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {plans.map((p) => {
          const price = cycle === "연간" ? Math.round(p.monthlyPrice * ANNUAL_DISCOUNT) : p.monthlyPrice;
          return (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "12px", width: "80px", flexShrink: 0, color: "var(--color-gray-600)", fontWeight: p.current ? 700 : 400 }}>{p.name}</span>
              <div style={{ flex: 1, height: "10px", borderRadius: "999px", background: "var(--color-gray-100)" }}>
                <div
                  style={{
                    width: `${Math.max((price / max) * 100, 4)}%`, height: "100%", borderRadius: "999px",
                    background: p.current ? "var(--color-primary-600)" : "var(--color-primary-300)",
                  }}
                />
              </div>
              <span style={{ fontSize: "12px", width: "84px", textAlign: "right", flexShrink: 0, color: "var(--color-gray-500)" }}>{won(price)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PlansScreen {
  const [cycle, setCycle] = React.useState<"월간" | "연간">("월간");
  const [plans, setPlans] = React.useState<Plan[]>(PLANS);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const switchTo = (id: string) => {
    const target = plans.find((p) => p.id === id);
    setPlans((prev) => prev.map((p) => ({ ...p, current: p.id === id })));
    if (target) {
      setToastMessage(`${target.name} 요금제로 바뀌었어요.`);
      window.setTimeout( => setToastMessage(null), 2500);
    }
  };

  return (
    <div className="flex flex-col gap-4" style={{ position: "relative" }}>
      <div className="flex items-center gap-2">
        <span style={{ fontSize: "13px", color: "var(--color-gray-500)" }}>청구 주기</span>
        <ButtonGroup>
          <Button size="xs" color={cycle === "월간" ? "default" : "light"} onClick={ => setCycle("월간")}>월간</Button>
          <Button size="xs" color={cycle === "연간" ? "default" : "light"} onClick={ => setCycle("연간")}>연간 (20% 할인)</Button>
        </ButtonGroup>
      </div>

      <PlanPriceBar cycle={cycle} plans={plans} />

      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
        {plans.map((p) => {
          const price = cycle === "연간" ? Math.round(p.monthlyPrice * ANNUAL_DISCOUNT) : p.monthlyPrice;
          return (
            <Card key={p.id}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontWeight: 700, fontSize: "16px" }}>{p.name}</span>
                {p.current ? <Badge color="success">현재 요금제</Badge> : null}
              </div>
              <span style={{ fontSize: "20px", fontWeight: 700 }}>{won(price)}<span style={{ fontSize: "13px", fontWeight: 400, color: "var(--color-gray-500)" }}> /월{cycle === "연간" ? " · 연 결제" : ""}</span></span>
              <ul style={{ margin: 0, paddingInlineStart: "18px", fontSize: "14px", color: "var(--color-gray-700)" }}>
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              {!p.current ? <Button size="sm" onClick={ => switchTo(p.id)}>이 요금제로 바꾸기</Button> : null}
            </Card>
          );
        })}
      </div>

      {/* Footer로 가격 페이지 하단 법적 안내 표시 */}
      <Footer container>
        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <FooterCopyright href="#" by="Cobalt CRM" year={2026} />
          <FooterLinkGroup>
            <FooterLink href="#">부가세 별도</FooterLink>
            <FooterLink href="#">환불 정책</FooterLink>
            <FooterLink href="#">언제든 변경 가능</FooterLink>
          </FooterLinkGroup>
        </div>
      </Footer>

      {toastMessage && (
        <div style={{ position: "fixed", right: "20px", bottom: "20px", zIndex: 30 }}>
          <Toast>
            <span
              style={{
                display: "inline-flex", height: "32px", width: "32px", flexShrink: 0, alignItems: "center",
                justifyContent: "center", borderRadius: "8px", background: "var(--color-green-100)", color: "var(--color-green-600)",
              }}
            >
              <CheckCircle2 size={16} />
            </span>
            <div className="ml-3 text-sm font-normal">{toastMessage}</div>
          </Toast>
        </div>
      )}
    </div>
  );
}
