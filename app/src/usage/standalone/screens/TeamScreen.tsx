import * as React from "react";
import { Search, UserRoundSearch, Users } from "lucide-react";
import { Badge } from "../../../bases/standalone/Badge";
import { Meter } from "../../../bases/standalone/Meter";
import { Stepper } from "../../../bases/standalone/Stepper";
import { Stat } from "../../../bases/standalone/Stat";
import { Nativeselect } from "../../../bases/standalone/Nativeselect";
import { Label } from "../../../bases/standalone/Label";
import { Empty } from "../../../bases/standalone/Empty";

interface Member {
  name: string;
  role: string;
  load: number;
}

const INITIAL: Member[] = [
  { name: "김도현", role: "프론트엔드", load: 72 },
  { name: "이서아", role: "디자이너", load: 45 },
  { name: "박준서", role: "백엔드", load: 88 },
  { name: "최유나", role: "QA", load: 30 },
  { name: "정하은", role: "백엔드", load: 55 },
  { name: "한지우", role: "프론트엔드", load: 62 },
];
const ROLES = Array.from(new Set(INITIAL.map((m) => m.role)));

export function TeamScreen {
  const [assigned, setAssigned] = React.useState<Record<string, number>>(
    Object.fromEntries(INITIAL.map((m) => [m.name, Math.round(m.load / 10)])),
  );
  const [query, setQuery] = React.useState("");
  const [role, setRole] = React.useState("전체");

  const filtered = INITIAL
    .filter((m) => role === "전체" || m.role === role)
    .filter((m) => query.trim === "" || m.name.includes(query.trim));

  const avgLoad = Math.round(INITIAL.reduce((s, m) => s + m.load, 0) / INITIAL.length);
  const overloaded = INITIAL.filter((m) => m.load >= 80).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
      <style>{`
        .sa1-tm-stats { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 0.75rem; }
        .sa1-tm-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.75rem; }
        @container sa1 (min-width: 26rem) { .sa1-tm-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @container sa1 (min-width: 34rem) { .sa1-tm-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      `}</style>

      <div className="sa1-tm-stats">
        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <Stat label="전체 팀원" value={`${INITIAL.length}명`} />
        </div>
        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <Stat label="평균 작업 부하" value={`${avgLoad}%`} />
        </div>
        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <Stat label="과부하(80% 이상)" value={`${overloaded}명`} direction={overloaded > 0 ? "down" : "up"} delta={overloaded > 0 ? "주의" : "양호"} />
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "0.625rem" }}>
        <div className="ods-field" style={{ margin: 0 }}>
          <Label htmlFor="tm-search">이름 검색</Label>
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
            <Search size={13} aria-hidden style={{ position: "absolute", left: "0.6rem", color: "var(--semantic-fg-neutral-subtle)", pointerEvents: "none" }} />
            <input
              id="tm-search"
              className="ods-input"
              style={{ paddingInlineStart: "1.9rem", width: "10rem" }}
              placeholder="예: 김도현"
              value={query}
              onChange={(e) => {
                const v = e.target.value;
                setQuery(v);
              }}
            />
          </span>
        </div>
        <div className="ods-field" style={{ margin: 0 }}>
          <Label htmlFor="tm-role">직무</Label>
          <Nativeselect id="tm-role" value={role} onChange={(e) => setRole(e.target.value)}>
            <Nativeselect.Option value="전체">전체</Nativeselect.Option>
            {ROLES.map((r) => (
              <Nativeselect.Option key={r} value={r}>{r}</Nativeselect.Option>
            ))}
          </Nativeselect>
        </div>
      </div>

      {filtered.length === 0 ? (
        <Empty>
          <Empty.Header>
            <Empty.Media><UserRoundSearch size={22} aria-hidden /></Empty.Media>
            <Empty.Title>조건에 맞는 팀원이 없어요</Empty.Title>
            <Empty.Description>검색어나 직무 필터를 바꿔 보세요.</Empty.Description>
          </Empty.Header>
        </Empty>
      ) : (
        <div className="sa1-tm-grid">
          {filtered.map((m) => (
            <div
              key={m.name}
              style={{
                border: "1px solid var(--semantic-border-neutral-subtle)",
                borderRadius: "var(--semantic-radius-container)",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "2.5rem", height: "2.5rem", borderRadius: "50%",
                    background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0,
                  }}
                >
                  {m.name.slice(0, 1)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{m.name}</div>
                  <Badge tone="neutral" variant="subtle">{m.role}</Badge>
                </div>
                {m.load >= 80 && (
                  <span title="과부하">
                    <Users size={14} aria-hidden style={{ color: "var(--semantic-fg-danger-default)" }} />
                  </span>
                )}
              </div>

              <Meter label="작업 부하" value={`${m.load}%`} at={m.load} />

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="text-sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>배정 작업 수</span>
                <Stepper
                  value={assigned[m.name] ?? 0}
                  min={0}
                  max={12}
                  aria-label={`${m.name} 배정 작업 수`}
                  onValueChange={(n) => setAssigned((prev) => ({ ...prev, [m.name]: n }))}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
