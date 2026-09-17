import * as React from "react";
import { Panel } from "primereact/panel";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";

const WAITLIST = [
  { name: "윤도경", reason: "정기 검진", requested: "09-15" },
  { name: "서지안", reason: "예방접종", requested: "09-16" },
  { name: "장하람", reason: "피부 알레르기", requested: "09-16" },
  { name: "오세준", reason: "감기 재진", requested: "09-17" },
];

export function WaitlistScreen {
  const [sms, setSms] = React.useState<Record<string, boolean>>(
    Object.fromEntries(WAITLIST.map((w) => [w.name, true])),
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {WAITLIST.map((w, i) => (
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
                <InputSwitch checked={sms[w.name]} onChange={(e) => setSms((prev) => ({ ...prev, [w.name]: e.value }))} />
                <span style={{ fontSize: "0.8rem" }}>SMS 알림</span>
              </label>
              <Button label="호출" size="small" />
            </div>
          </div>
        </Panel>
      ))}
    </div>
  );
}
