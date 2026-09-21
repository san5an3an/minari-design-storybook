import * as React from "react";
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { Chip } from "primereact/chip";
import { Dropdown } from "primereact/dropdown";
import { MeterGroup } from "primereact/metergroup";
import { OverlayPanel } from "primereact/overlaypanel";
import { ProgressBar } from "primereact/progressbar";
import { Rating } from "primereact/rating";
import { Tooltip } from "primereact/tooltip";
import { AGENTS, type Agent } from "../data";

const TEAMS = Array.from(new Set(AGENTS.map((a) => a.team)));
const TEAM_METER = TEAMS.map((team, i) => ({
  label: team,
  value: AGENTS.filter((a) => a.team === team).reduce((s, a) => s + a.open, 0),
  color: (["var(--semantic-bg-brand-default)", "var(--semantic-bg-success-default)", "var(--semantic-bg-warning-default)"] as const)[i % 3],
}));
const TEAM_OPTIONS = ["전체", ...TEAMS];

export function AgentsScreen {
  const [teamFilter, setTeamFilter] = React.useState("전체");
  const [detailAgent, setDetailAgent] = React.useState<Agent | null>(null);
  const overlay = React.useRef<OverlayPanel>(null);

  const shown = teamFilter === "전체" ? AGENTS : AGENTS.filter((a) => a.team === teamFilter);

  const openDetail = (e: React.SyntheticEvent, a: Agent) => {
    setDetailAgent(a);
    overlay.current?.toggle(e);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Tooltip target="[data-pr-tooltip]" />
      <OverlayPanel ref={overlay}>
        {detailAgent ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", minWidth: "12rem" }}>
            <span style={{ fontWeight: 700 }}>{detailAgent.name}</span>
            <span style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{detailAgent.team} · {detailAgent.online ? "온라인" : "오프라인"}</span>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
              <span>오늘 처리 완료</span><span style={{ fontWeight: 600 }}>{detailAgent.resolvedToday}건</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
              <span>처리 중 티켓</span><span style={{ fontWeight: 600 }}>{detailAgent.open}건</span>
            </div>
          </div>
        ) : null}
      </OverlayPanel>

      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBlockEnd: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ fontWeight: 600 }}>팀별 처리 중 티켓 비중</div>
          <Dropdown value={teamFilter} onChange={(e) => setTeamFilter(e.value)} options={TEAM_OPTIONS} style={{ width: "10rem" }} aria-label="팀 필터" />
        </div>
        <MeterGroup values={TEAM_METER} />
      </Card>

      <div className="pr1-agents-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }}>
        {/* 4열 카드 최소폭 11rem 유지, 48rem 이상만 4열 적용 */}
        <style>{"@container pr1 (min-width: 48rem) { .pr1-agents-grid { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; } }"}</style>
        {shown.map((a) => (
          <Card key={a.name}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBlockEnd: "0.6rem" }}>
              <Avatar
                label={a.name.slice(0, 1)}
                shape="circle"
                style={{ background: "var(--semantic-bg-brand-default)", color: "var(--semantic-fg-on-brand-default)", flexShrink: 0 }}
              />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.name}</div>
                <Chip label={a.team} style={{ height: "1.25rem", fontSize: "0.68rem", padding: "0 0.5rem" }} />
              </div>
              <span
                aria-hidden
                data-pr-tooltip={a.online ? "온라인" : "오프라인"}
                style={{
                  flexShrink: 0, width: 8, height: 8, borderRadius: "50%",
                  background: a.online ? "var(--semantic-bg-success-default)" : "var(--semantic-bg-neutral-subtle)",
                }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBlockEnd: "0.35rem" }}>
              <Rating value={Math.round(a.csat)} readOnly cancel={false} stars={5} />
              <span style={{ fontSize: "0.72rem", color: "var(--semantic-fg-neutral-subtle)" }}>{a.csat.toFixed(1)}</span>
            </div>
            <div style={{ fontSize: "0.85rem", marginBlockEnd: "0.25rem" }}>
              처리 중 티켓 {a.open}건 · 오늘 완료 {a.resolvedToday}건
            </div>
            <ProgressBar value={Math.min(a.open * 10, 100)} showValue={false} style={{ height: "0.4rem" }} />
            <button
              type="button"
              onClick={(e) => openDetail(e, a)}
              style={{
                marginTop: "0.5rem", background: "none", border: "none", padding: 0, cursor: "pointer",
                color: "var(--semantic-fg-brand-default)", fontSize: "0.75rem", fontWeight: 600, font: "inherit",
              }}
            >
              더 보기 →
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
