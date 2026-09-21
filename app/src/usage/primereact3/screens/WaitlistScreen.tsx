import * as React from "react";
import { Panel } from "primereact/panel";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";
import { Users, Timer, Hourglass, PhoneCall } from "lucide-react";

const INITIAL_WAITLIST = [
  { name: "윤도경", reason: "정기 검진", requested: "09-15", waitMin: 22 },
  { name: "서지안", reason: "예방접종", requested: "09-16", waitMin: 15 },
  { name: "장하람", reason: "피부 알레르기", requested: "09-16", waitMin: 28 },
  { name: "오세준", reason: "감기 재진", requested: "09-17", waitMin: 9 },
  { name: "황예린", reason: "건강검진 결과 상담", requested: "09-17", waitMin: 33 },
  { name: "송민재", reason: "물리치료", requested: "09-18", waitMin: 12 },
];

export function WaitlistScreen {
  const [waitlist, setWaitlist] = React.useState(INITIAL_WAITLIST);
  const [calledToday, setCalledToday] = React.useState(0);
  const [sms, setSms] = React.useState<Record<string, boolean>>(
    Object.fromEntries(INITIAL_WAITLIST.map((w) => [w.name, true])),
  );
  const toast = React.useRef<Toast>(null);

  const call = (name: string) => {
    setWaitlist((prev) => prev.filter((w) => w.name !== name));
    setCalledToday((n) => n + 1);
    toast.current?.show({ severity: "success", summary: "호출했어요", detail: `${name}님을 진료실로 호출했어요.`, life: 2200 });
  };

  const confirmCall = (e: React.SyntheticEvent, name: string) => {
    confirmPopup({
      target: e.currentTarget as HTMLElement,
      message: `${name}님을 호출할까요? 대기 명단에서 빠져요.`,
      icon: "pi pi-phone",
      acceptLabel: "호출",
      rejectLabel: "취소",
      accept:  => call(name),
    });
  };

  const avgWait = waitlist.length > 0 ? Math.round(waitlist.reduce((s, w) => s + w.waitMin, 0) / waitlist.length) : 0;
  const longest = waitlist.length > 0 ? [...waitlist].sort((a, b) => b.waitMin - a.waitMin)[0] : null;

  const stats = [
    { label: "총 대기", value: `${waitlist.length}명`, icon: Users, tone: "brand" },
    { label: "평균 대기", value: `${avgWait}분`, icon: Timer, tone: "warning" },
    { label: "최장 대기", value: longest ? `${longest.waitMin}분` : "—", icon: Hourglass, tone: "danger" },
    { label: "오늘 호출 완료", value: `${calledToday}명`, icon: PhoneCall, tone: "success" },
  ] as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Toast ref={toast} />
      <ConfirmPopup />

      <div className="pr3-waitlist-stats" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.75rem" }}>
        {/* 4열 카드 최소폭 11rem 유지, 48rem 이상만 4열 적용 */}
        <style>{"@container pr3 (min-width: 48rem) { .pr3-waitlist-stats { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; } }"}</style>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Panel key={s.label} header={s.label}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div aria-hidden style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "2rem", height: "2rem", borderRadius: "var(--semantic-radius-control)", background: `var(--semantic-bg-${s.tone}-subtle)`, color: `var(--semantic-fg-${s.tone}-default)`, flexShrink: 0 }}>
                  <Icon size={16} />
                </div>
                <div style={{ fontSize: "1.3rem", fontWeight: 700 }}>{s.value}</div>
              </div>
            </Panel>
          );
        })}
      </div>

      {waitlist.length === 0 ? (
        <p style={{ fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>대기 중인 환자가 없어요.</p>
      ) : null}
      {waitlist.map((w, i) => (
        <Panel
          key={w.name}
          header={
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Avatar label={w.name.slice(0, 1)} shape="circle" style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }} />
              {w.name} · {w.reason}
              <Badge value={`대기 ${i + 1}번`} severity="warning" />
            </span>
          }
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>
              9월 {w.requested.split("-")[1]}일 신청 · 대기 {w.waitMin}분째 · 예상 호출까지 약 {Math.max(1, (i + 1) * 5 - w.waitMin) }분
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
              <Button label="호출" size="small" onClick={(e) => confirmCall(e, w.name)} />
            </div>
          </div>
        </Panel>
      ))}
    </div>
  );
}
