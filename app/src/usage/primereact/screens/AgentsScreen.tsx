import * as React from "react";
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { MeterGroup } from "primereact/metergroup";
import { ProgressBar } from "primereact/progressbar";

interface Agent { name: string; team: string; open: number; online: boolean }

const AGENTS: Agent[] = [
  { name: "김도현", team: "결제팀", open: 6, online: true },
  { name: "이서아", team: "계정팀", open: 3, online: true },
  { name: "박준서", team: "결제팀", open: 9, online: false },
  { name: "최유나", team: "일반문의", open: 2, online: true },
  { name: "정하은", team: "계정팀", open: 5, online: true },
  { name: "한지우", team: "일반문의", open: 4, online: false },
  { name: "오세준", team: "결제팀", open: 7, online: true },
  { name: "윤새별", team: "일반문의", open: 1, online: true },
];

const TEAMS = Array.from(new Set(AGENTS.map((a) => a.team)));
const TEAM_METER = TEAMS.map((team, i) => ({
  label: team,
  value: AGENTS.filter((a) => a.team === team).reduce((s, a) => s + a.open, 0),
  color: (["var(--semantic-bg-brand-default)", "var(--semantic-bg-success-default)", "var(--semantic-bg-warning-default)"] as const)[i % 3],
}));

export function AgentsScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Card>
        <div style={{ fontWeight: 600, marginBlockEnd: "0.5rem" }}>팀별 처리 중 티켓 비중</div>
        <MeterGroup values={TEAM_METER} />
      </Card>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {AGENTS.map((a) => (
          <Card key={a.name} style={{ width: "16rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBlockEnd: "0.75rem" }}>
              <Avatar
                label={a.name.slice(0, 1)}
                shape="circle"
                style={{ background: "var(--semantic-bg-brand-default)", color: "var(--semantic-fg-on-brand-default)" }}
              />
              <div>
                <div style={{ fontWeight: 600 }}>{a.name}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{a.team}</div>
              </div>
              <span
                aria-hidden
                style={{
                  marginInlineStart: "auto", width: 8, height: 8, borderRadius: "50%",
                  background: a.online ? "var(--semantic-bg-success-default)" : "var(--semantic-bg-neutral-subtle)",
                }}
              />
            </div>
            <div style={{ fontSize: "0.85rem", marginBlockEnd: "0.25rem" }}>
              처리 중 티켓 {a.open}건
            </div>
            <ProgressBar value={Math.min(a.open * 10, 100)} showValue={false} style={{ height: "0.4rem" }} />
          </Card>
        ))}
      </div>
    </div>
  );
}
