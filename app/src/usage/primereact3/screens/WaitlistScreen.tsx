import * as React from "react";
import { Panel } from "primereact/panel";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";

const INITIAL_WAITLIST = [
  { name: "윤도경", reason: "정기 검진", requested: "09-15" },
  { name: "서지안", reason: "예방접종", requested: "09-16" },
  { name: "장하람", reason: "피부 알레르기", requested: "09-16" },
  { name: "오세준", reason: "감기 재진", requested: "09-17" },
  { name: "황예린", reason: "건강검진 결과 상담", requested: "09-17" },
  { name: "송민재", reason: "물리치료", requested: "09-18" },
];

export function WaitlistScreen {
  const [waitlist, setWaitlist] = React.useState(INITIAL_WAITLIST);
  const [sms, setSms] = React.useState<Record<string, boolean>>(
    Object.fromEntries(INITIAL_WAITLIST.map((w) => [w.name, true])),
  );

  const call = (name: string) => {
    setWaitlist((prev) => prev.filter((w) => w.name !== name));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div style={{ fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>
        총 {waitlist.length}명 대기 중 · 평균 대기 시간 약 18분
      </div>
      {waitlist.length === 0 ? (
        <p style={{ fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>대기 중인 환자가 없어요.</p>
      ) : null}
      {waitlist.map((w, i) => (
        <Panel
          key={w.name}
          header={
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Avatar label={w.name.slice(0, 1)} shape="circle" size="normal" style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }} />
              {w.name} · {w.reason}
              <Badge value={`대기 ${i + 1}번`} severity="warning" />
            </span>
          }
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>
              9월 {w.requested.split("-")[1]}일 신청
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <InputSwitch
                  checked={sms[w.name]}
                  onChange={(e) => {
                    const value = e.value;
                    setSms((prev) => ({ ...prev, [w.name]: value }));
                  }}
                />
                <span style={{ fontSize: "0.8rem" }}>SMS 알림</span>
              </label>
              <Button label="호출" size="small" onClick={ => call(w.name)} />
            </div>
          </div>
        </Panel>
      ))}
    </div>
  );
}
